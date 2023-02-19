import React from 'react';
import './PageOne.scss';
import { Row } from '../components';
import { useGetAllProductsQuery } from '../services/dummyTriggerApi';

function PageOne() {
  const { data: allProductData, isFetching } = useGetAllProductsQuery();

  console.log('Raw data from API - Products:', allProductData);

  if (isFetching) return 'Loading...';

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
