import React from 'react';

const ProductItem = () => {
  return (
    <div className='col-4'>
      <div className='product__item'>
        <img src='../../assets/product-item1' alt='' />
        <h3 className='products__title'>Dropbox</h3>
        <p className='products__description'>
          Dropbox is a file hosting service that offers cloud storage, file synchronization, a
          personal cloud.
        </p>
        <hr />
        <div className='product__footer row'>
          <div>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <mask
                id='mask0'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='20'
                height='20'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM9 5H10.5V10.25L15 12.92L14.25 14.15L9 11V5Z'
                  fill='white'
                />
              </mask>
              <g mask='url(#mask0)'>
                <rect x='-2' y='-2' width='24' height='24' fill='#66788A' />
              </g>
            </svg>
            <span>Updated 2 hr ago</span>
          </div>
          <div>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <mask
                id='mask0'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='5'
                y='3'
                width='14'
                height='17'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M15 9H19L12 16L5 9H9V3H15V9ZM5 20V18H19V20H5Z'
                  fill='white'
                />
              </mask>
              <g mask='url(#mask0)'>
                <rect width='24' height='24' fill='#66788A' />
              </g>
            </svg>
            <span>594 Downloads</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;