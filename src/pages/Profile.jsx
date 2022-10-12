import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { FlutterWaveButton } from 'flutterwave-react-v3';
import { v4 as uuidv4 } from 'uuid';

import profileIcon from '../assets/icons/Profile.svg';
import emailIcon from '../assets/icons/Email.svg';
import locationIcon from '../assets/icons/Location.svg';
import walletIcon from '../assets/icons/Wallet.svg';
import { SectionWrapper } from '../components/layout';

import { AuthContext } from '../context/auth';
import { createTopup, getCustomerDetails, getSinglesData, getUsersOrders } from '../queries';
import { closePaymentModal } from '../util/helpers';
import { LoadingScreen, LongCardSlider } from '../components/common';
import { useQuery } from 'react-query';
import { LocationContext } from '../context/location';

function Profile() {
  const { country } = useContext(LocationContext);
  const { authState, dispatch } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const { isLoading: fetchingOrders, data, isError, error } = useQuery(
    ['myOrders', authState.jwt, authState.user.id],
    getUsersOrders,
    // { refetchOnWindowFocus: 'false' }
  );

  const { data:movies } = useQuery('singles', getSinglesData)
  // const { data:userData } = useQuery('userData', getCustomerDetails)

  if (fetchingOrders) {
    return <LoadingScreen />;
  }

  if (isError) {
    console.log({ error });
  }

  async function saveTransaction(txId) {
    try {
      setIsLoading(true);
      const res = await createTopup(authState.jwt, authState.user.id, txId);

      dispatch({ type: 'UPDATE', payload: res.user });
      setIsLoading(false);
    } catch (error) {
      console.log({ error });
    }
  }

  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_PUB_KEY,
    tx_ref: uuidv4(),
    amount: 0,
    currency: country === 'Nigeria' ? 'NGN' : 'USD',
    country: 'NG',
    payment_options: 'card',
    customer: {
      email: authState.user.email,
      phonenumber: authState.user.phone || '',
      firstname: authState.user.name,
    },
    customizations: {
      title: 'Wallet Topup',
      description: 'Payment for items in cart',
      logo:
        'https://res.cloudinary.com/new-label/image/upload/v1609092832/newlabel_brand_icon_mark_qay8i6.png',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Topup',
    callback: (response) => {
      console.log('PAYMENT COMPLETE........');
      saveTransaction(response.transaction_id);
      closePaymentModal();
    },
    onClose: () => {},
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <PageWrapper>
      <ProfileInfo
        w={['250px', 'auto']}
        mt="1rem"
        mx="2rem"
        mb="5rem"
        mr="10rem"
      >
        <Flex
          justify="center"
          align="center"
          h="235px"
          w="235px"
          bg="#f00"
          opacity=".6"
          borderRadius="5px"
        >
          <Text fontSize="10rem" color="#fff" fontWeight="300">
            {authState.user?.firstname[0] + authState.user?.lastname[0]}
          </Text>
        </Flex>
        <DetailsBox mx="auto">
          <HStack mt="2.5rem" minW="130px" spacing="1.1rem">
            <Image src={profileIcon} />
            <Text>{authState.user?.firstname +' ' + authState.user?.lastname}</Text>
          </HStack>
          <HStack mt="2.5rem" minW="130px" spacing="1.1rem">
            <Image maxW="2rem" src={emailIcon} />
            <Text>{authState.user?.email}</Text>
          </HStack>
          <HStack mt="2.5rem" minW="130px" spacing="1.1rem">
            <Image src={locationIcon} />
            <Text>{authState.user?.location || 'No location'}</Text>
          </HStack>
          <HStack spacing="5rem" mt="4.5rem" align="flex-start">
            <HStack minW="130px" spacing="1.1rem">
              <Image src={walletIcon} />
              <Text>Wallet Balance</Text>
            </HStack>
            <Box>
              <Text>${authState.user?.walletBalance}</Text>
              <Text
                cursor="pointer"
                color="brand.gray300"
                fontWeight="bold"
                _hover={{ color: '#f00' }}
              >
                <FlutterWaveButton {...fwConfig} />
              </Text>
            </Box>
          </HStack>
        </DetailsBox>
      </ProfileInfo>
      <Box>
        <SectionWrapper title="Your Feed" mt="0" w="100%">
          {data && data.length > 0 ? <LongCardSlider items={data} /> : null}
        </SectionWrapper>
         <SectionWrapper title="Items you might Like" mt="30" w="100%">
          {movies &&  <LongCardSlider items={movies.banner} /> }
        </SectionWrapper>
      </Box>

    </PageWrapper>
  );
}

export { Profile };

const ProfileInfo = styled(Flex)`
  @media (max-width: 550px) {
    align-items: center;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 900px) {
    flex-direction: column;
  }
`;

const DetailsBox = styled(Box)`
  @media (min-width: 900px) {
    margin: 0;
  }
`;

const PageWrapper = styled(Flex)`
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;
