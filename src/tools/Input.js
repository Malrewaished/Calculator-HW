import React from 'react'

const Input = ({opSymbol, onClick}) => {
  return (
    <div>
        <button type='button' className='btn btn-secondary' onClick={onClick}> {opSymbol} </button>
    </div>
  );
};

export default Input