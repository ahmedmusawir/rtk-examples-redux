import React from 'react';
import './PageOne.scss';
import { Row } from '../components';
import { Audio, Dna } from 'react-loader-spinner';
import { useGetAllProductsQuery } from '../services/dummyTriggerApi';

function PageOne() {
  const { data: allProductData, isFetching } = useGetAllProductsQuery();

  console.log('Raw data from API - Products:', allProductData);

  if (isFetching)
    return (
      <Audio
        height='100'
        width='100'
        color='#4fa94d'
        ariaLabel='audio-loading'
        wrapperStyle={{}}
        wrapperClass='wrapper-class'
        visible={true}
      />
    );

  return (
    <>
      <div className='prose'>
        <h1>RTK Query Standard</h1>
        <hr />
        <ul>
          {allProductData?.products?.map((prod) => (
            <li key={prod.id}>{prod.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PageOne;
