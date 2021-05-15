import React from 'react';
import LoaderSpinner from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <LoaderSpinner type="Bars" color="#333333" height={24} width={100} />
    </div>
  );
};

export default Loader;
