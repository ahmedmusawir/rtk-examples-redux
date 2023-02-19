import React, { useState } from 'react';
import { Container, Row, Box } from '../components';
import {
  useLazyGetAllProductsQuery,
  useLazyGetSingleProductQuery,
  useLazyGetProductByCategoryQuery,
} from '../services/dummyTriggerApi';
import { Audio, Dna } from 'react-loader-spinner';
import './Home.scss';

const HomePage = () => {
  const [singlePost, setSinglePost] = useState(null);
  const [postId, setPostId] = useState(1);
  const [postCat, setPostCat] = useState('');

  const [getData, { data: allProducts, isFetching: isFetchingAllProducts }] =
    useLazyGetAllProductsQuery();

  const [
    getSingleData,
    { data: singleProduct, isFetching: isFetchingSingleProduct },
  ] = useLazyGetSingleProductQuery();

  const [
    getDataByCat,
    { data: productsByCat, isFetching: isFetchingProductsByCat },
  ] = useLazyGetProductByCategoryQuery();

  console.log('Prod by Cat:', productsByCat);

  const handleGetData = () => {
    getData();
  };

  const handleSingleData = () => {
    getSingleData(postId);
  };

  const handleDataByCat = () => {
    getDataByCat(postCat);
  };

  // if (isFetching) return 'loading...';

  console.log('Raw data from API - Products:', allProducts);

  return (
    <Container twClasses={''} FULL={false} pageTitle={'RTK Query'}>
      <Row twClasses={'prose'}>
        <h1 className='h1'>Redux Toolkit Query Example</h1>
        <hr />
        <Row twClasses={'grid gap-3 grid-auto-fit p-3'}>
          {/* GET ALL PRODUCTS */}
          <Box twClasses={'p-3'}>
            <button className='btn' onClick={handleGetData}>
              Get Data
            </button>
            <hr />
            {isFetchingAllProducts && (
              <Dna
                visible={true}
                height='80'
                width='80'
                ariaLabel='dna-loading'
                wrapperStyle={{}}
                wrapperClass='dna-wrapper'
              />
            )}

            {allProducts && (
              <ul>
                {allProducts?.products?.map((prod) => (
                  <li key={prod.id}>{prod.title}</li>
                ))}
              </ul>
            )}
          </Box>
          {/* GET SINGLE PRODUCTS */}
          <Box twClasses={'p-3'}>
            <input
              type='text'
              className='w-full input-primary mb-4 p-2 border'
              onChange={(e) => setPostId(e.target.value)}
            />
            <p>
              <small>insert id from 1 to 100</small>
            </p>
            <button className='btn' onClick={handleSingleData}>
              Get Single Data
            </button>
            <hr />
            {isFetchingSingleProduct && (
              <Dna
                visible={true}
                height='80'
                width='80'
                ariaLabel='dna-loading'
                wrapperStyle={{}}
                wrapperClass='dna-wrapper'
              />
            )}

            {singleProduct && (
              <ul>
                <li>
                  <span className='text-red-400'>{singleProduct.id}</span>{' '}
                  <span className='font-bold text-blue-500 pl-3'>
                    {singleProduct.title}
                  </span>
                  <h6 className='font-bold'>
                    <span className='text-red-400'>Brand:</span>{' '}
                    <span className=' text-blue-500 pl-3'>
                      {singleProduct.brand}
                    </span>
                  </h6>
                  <h6 className='font-bold'>
                    <span className='text-red-400'>Category:</span>{' '}
                    <span className=' text-blue-500 pl-3'>
                      {singleProduct.category}
                    </span>
                  </h6>
                </li>
              </ul>
            )}
          </Box>
          {/* GET PRODUCTS BY CATS */}
          <Box twClasses={'p-3'}>
            <input
              type='text'
              className='w-full input-primary mb-4 p-2 border'
              onChange={(e) => setPostCat(e.target.value)}
            />
            <p>
              <small>insert id from 1 to 100</small>
            </p>
            <button className='btn' onClick={handleDataByCat}>
              Get Data By Cat
            </button>
            <hr />
            {isFetchingProductsByCat && (
              <Dna
                visible={true}
                height='80'
                width='80'
                ariaLabel='dna-loading'
                wrapperStyle={{}}
                wrapperClass='dna-wrapper'
              />
            )}

            {productsByCat && (
              <ul>
                {productsByCat?.products?.map((prod) => (
                  <li key={prod.id}>
                    {prod.title}
                    <h6>Category: {prod.category}</h6>
                  </li>
                ))}
              </ul>
              // <ul>
              //   <li>
              //     <span className='text-red-400'>{singleProduct.id}</span>{' '}
              //     <span className='font-bold text-blue-500 pl-3'>
              //       {singleProduct.title}
              //     </span>
              //     <h6 className='font-bold'>
              //       <span className='text-red-400'>Brand:</span>{' '}
              //       <span className=' text-blue-500 pl-3'>
              //         {singleProduct.brand}
              //       </span>
              //     </h6>
              //     <h6 className='font-bold'>
              //       <span className='text-red-400'>Category:</span>{' '}
              //       <span className=' text-blue-500 pl-3'>
              //         {singleProduct.category}
              //       </span>
              //     </h6>
              //   </li>
              // </ul>
            )}
          </Box>
        </Row>
      </Row>
    </Container>
  );
};

export default HomePage;
