import React from 'react'

const Output = ({total}) => {
  return (
    <div>
        <li className='list-group-item d-flex'>
        <input type={number}
        className='from-control mt-3 p-3'
        readOnly value={total}></input>
        </li>
    </div>
  );
};

export default Output