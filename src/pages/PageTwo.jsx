import React, { useState, useEffect } from 'react';
// import './PageTwo.scss';
import { Row } from '../components';
import { Audio, Dna } from 'react-loader-spinner';

import {
  useGetAllProductsQuery,
  useGetProductByCategoryQuery,
} from '../services/dummyTriggerApi';

function PageTwo() {
  const [products, setProducts] = useState([]);
  const [isNotOk, setIsNotOk] = useState(true);
  const [cat, setCat] = useState('all');

  const { data, isFetching } = useGetProductByCategoryQuery(cat, {
    skip: isNotOk,
  });

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
    console.log('Products Data:', data);
  }, [data]);

  const handleCatData = () => {
    setIsNotOk(false);
    setCat('skincare');
  };

  return (
    <>
      <div className='prose'>
        <h1>RTK Query w/ Skip token</h1>
        <p>
          This one depends on query parameter Category Name. But the inital one
          has to be 'All' But there is no api endpoint named 'All'. So I had to
          skip the first load with Skip token. Manually feeding the category
          parameter ('skincare') via onClick handler
        </p>
        <hr />
        {isFetching && (
          <Audio
            height='100'
            width='100'
            color='#4fa94d'
            ariaLabel='audio-loading'
            wrapperStyle={{}}
            wrapperClass='wrapper-class'
            visible={true}
          />
        )}
        <ul>
          {products?.products?.map((prod) => (
            <li key={prod.id}>{prod.title}</li>
          ))}
        </ul>
        <button className='btn' onClick={handleCatData}>
          Fetch Data
        </button>
      </div>
    </>
  );
}

export default PageTwo;
