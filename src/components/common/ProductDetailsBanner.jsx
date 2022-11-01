import {
  Box,
  Text,
  Flex,
  HStack,
  Icon,
  useMediaQuery,
  useColorMode,
  Image,
  Link,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useContext } from 'react'
import commafy from 'commafy'
import { BiCart } from 'react-icons/bi'
import { BsClockHistory, BsDownload } from 'react-icons/bs'
import { RiMovieLine } from 'react-icons/ri'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/auth'
import { LocationContext } from '../../context/location'
import { checkIfUserOwnsItem } from '../../queries'
import { truncate } from '../../util/helpers'
import { Btn } from './Buttons'

function ProductDetailsBanner({ item, onToggle }) {
  const { country } = useContext(LocationContext)
  const { authState } = useContext(AuthContext)
  const history = useHistory()
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)')
  const { colorMode } = useColorMode()

  const handleClick = async () => {
    if (!authState?.jwt) {
      history.push('/login')
      return
    }

    const isOwner = await checkIfUserOwnsItem(
      authState.jwt,
      authState.user.id,
      item.id
    )

    if (isOwner) {
      history.push('/player')
    } else {
      onToggle()
    }
  }

  return (
    <>
      {isLargerThan480 ? (
        <Box w="100%" h={['400px', '500px']} pos="relative">
          <Flex h="100%">
            <Left
              pos="relative"
              bgColor="#000"
              w="35%"
              h="100%"
              alignItems="center"
              borderRadius=".5rem 0 0 .5rem"
            />
            <Box
              w="65%"
              h="100%"
              bg={`url(${item.banner || item.poster})`}
              bgSize="cover"
              borderRadius="0 .5rem .5rem 0"
            ></Box>
          </Flex>
          <Box
            pos="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            pt="7rem"
            pl={['2rem', '5rem']}
            color="#fff"
          >
            <Text
              fontFamily="ReformaGroteskDemiC"
              fontSize={['5rem', '7rem']}
              fontWeight="700"
            >
              {item.name}
            </Text>
            <Text maxW="500px" fontSize={['1.2rem', null]}>
              {truncate(item.description, 250)}
            </Text>
            <Flex align="center" mt="2rem">
            {item.itemType === 'Movie' ? (
              <>
                <HStack>
                  <Icon color="#fff" as={BiCart} />
                  <Text color="#fff" fontSize="1.2rem">
                    ₦ {commafy(item.price)}
                    {/* {country === 'Nigeria' ? '₦' : '$'}
                    {country === 'Nigeria'
                      ? commafy(item.price * 470)
                      : item.price} */}
                  </Text>
                </HStack>
              </>
            ) : (
              <HStack>
                <Icon color="#fff" as={RiMovieLine} />
                <Text color="#fff" fontSize="1.2rem">
                  {item.seasons?.length > 1
                    ? `${item.seasons?.length} Seasons`
                    : `${item.seasons?.length} Season`}
                </Text>
              </HStack>
            )}
              <Box color="#fff" fontWeight="800" fontSize="1.2rem" mx=".5rem">
                .
              </Box>
              {item.runtime ? (
              <HStack>
                <Icon color="#fff" as={BsClockHistory} />
                <Text color="#fff" fontSize="1.2rem">
                  {item.runtime || 'N/A'}
                </Text>
              </HStack>
            ) : null}
            </Flex>
            <Flex align="center" mt="1.5rem">
              {item.categories?.map((genre) => (
                <HStack key={genre.id}>
                  <Text color="#fff">{genre.name}</Text>
                  <Box
                    color="#fff"
                    fontWeight="800"
                    fontSize="1.2rem"
                    mx=".5rem"
                  >
                    .
                  </Box>
                </HStack>
              ))}
            </Flex>
            <HStack spacing="3rem" mt="2rem">
              {item.itemType === 'Movie' && (
                <Btn onClick={handleClick} p="1.6rem">
                  Watch now
                </Btn>
              )}
              {item.attachment && (
                <Btn
                  as={Link}
                  href={item.attachment}
                  leftIcon={<BsDownload />}
                  onClick={handleClick}
                  bg={colorMode === 'light' ? '#000' : '#fff'}
                  color={colorMode === 'light' ? '#fff' : '#000'}
                  border={
                    colorMode === 'light' ? '1px solid #000' : '1px solid #fff'
                  }
                  p="1.6rem"
                  _hover={{
                    color: '#fff',
                    background: 'transparent',
                  }}
                >
                  {' '}
                  Download
                </Btn>
              )}
            </HStack>
          </Box>
        </Box>
      ) : (
        <Box w="100%" pos="relative">
          <Image w="100%" src={item.banner.url}></Image>
          <Box pl="2rem">
            <Text
              fontFamily="ReformaGroteskDemiC"
              fontSize={['5rem', '7rem']}
              fontWeight="700"
            >
              {item.name}
            </Text>
            <Text maxW="500px" fontSize={['1.2rem', null]}>
              {truncate(item.description, 250)}
            </Text>
            <Flex align="center" mt="2rem">
            <HStack>
                    <Icon as={BiCart} />
                    <Text fontSize="1.2rem">
                      {country === 'Nigeria' ? '₦' : '$'}
                      {country === 'Nigeria'
                        ? commafy(item.type[0].buyPrice * 470)
                        : item.type[0].buyPrice}
                    </Text>
                  </HStack>
              {/* {item.type === 'single' ? (
                <>
                  <HStack>
                    <Icon as={BiCart} />
                    <Text fontSize="1.2rem">
                      {country === 'Nigeria' ? '₦' : '$'}
                      {country === 'Nigeria'
                        ? commafy(item.type[0].buyPrice * 470)
                        : item.type[0].buyPrice}
                    </Text>
                  </HStack>
                </>
              ) : (
                <HStack>
                  <Icon as={RiMovieLine} />
                  <Text fontSize="1.2rem">
                    {item.type[0].seasons.length}{' '}
                    {item.type[0].seasons.length > 1 ? 'Seasons' : 'Season'}
                  </Text>
                </HStack>
              )} */}
              <Box fontWeight="800" fontSize="1.2rem" mx=".5rem">
                .
              </Box>
              <HStack>
                <Icon as={BsClockHistory} />
                <Text fontSize="1.2rem">{item.runtime || '45min'}</Text>
              </HStack>
            </Flex>
            <Flex align="center" mt="1.5rem">
              {item.categories.map((genre) => (
                <HStack key={genre.id}>
                  <Text>{genre.name}</Text>
                  <Box fontWeight="800" fontSize="1.2rem" mx=".5rem">
                    .
                  </Box>
                </HStack>
              ))}
            </Flex>
            <HStack spacing="1.5rem" mt="2rem">
              {item.type === 'single' && (
                <Btn onClick={handleClick} p="1.6rem">
                  Watch now
                </Btn>
              )}
              {item.attachment && (
                <Btn
                  as={Link}
                  href={item.attachment}
                  leftIcon={<BsDownload />}
                  onClick={handleClick}
                  bg={colorMode === 'light' ? '#000' : '#fff'}
                  color={colorMode === 'light' ? '#fff' : '#000'}
                  border={
                    colorMode === 'light' ? '1px solid #000' : '1px solid #fff'
                  }
                  p="1.6rem"
                  _hover={{
                    color: '#fff',
                    background: 'transparent',
                  }}
                >
                  {' '}
                  Download
                </Btn>
              )}
            </HStack>
          </Box>
        </Box>
      )}
    </>
  )
}

export { ProductDetailsBanner }

const Left = styled(Flex)`
  &:before {
    content: '';
    position: absolute;
    background-image: linear-gradient(to right, #000, transparent);
    top: 0;
    bottom: 0;
    left: 100%;
    width: 275px;
  }
`
