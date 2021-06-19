import React from 'react';
import ProductListing from './productListing';

function Header() {
  return (
    <div>
      <div className="ui fixed menu">
        <div className="ui container center">
          <ProductListing />

        </div>
      </div>
    </div>
  );
}

export default Header;
