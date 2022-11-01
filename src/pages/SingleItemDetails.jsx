import { Box, Fade, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import {
  Trailer,
  Similar,
  CheckoutModal,
  LoadingScreen,
} from '../components/common';
import { ProductDetailsBanner } from '../components/common/ProductDetailsBanner';
import {  getSingleDetails } from '../queries';

function SingleItemDetails() {
  const { id } = useParams();
  const { isOpen, onToggle } = useDisclosure();

  console.log(id,'slug')

  const { data, isLoading, error } = useQuery(
    [ id,'singleMovieDetails',],
    getSingleDetails
  );

  if (isLoading) {
    return <LoadingScreen />;
  }
  if (error) {
    console.log({error})
  }



  return (
    <Box>
      <ProductDetailsBanner item={data.data} onToggle={onToggle} />
      <Trailer />
      <Similar related={data.related} />
      <Fade in={isOpen} unmountOnExit={true}>
        <CheckoutModal item={data.data} onToggle={onToggle} />
      </Fade>
    </Box>
  );
}

export { SingleItemDetails };
