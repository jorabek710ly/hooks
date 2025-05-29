import React from 'react'
// Fetch hook
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
// Product Cards Component
import ProductCards from '../../components/ProductCards';

const Products = () => {
  const navigate = useNavigate();
  const { data, error, loading } = useFetch("/products");

  if (error) {
    navigate("*");
    console.error(error);
  }

  return (
    <ProductCards data={data} loading={loading} />
  )
}

export default React.memo(Products);