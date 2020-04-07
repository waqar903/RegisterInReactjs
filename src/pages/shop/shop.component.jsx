import React from 'react';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: "Out of stock"
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        <h1>{collections}</h1>
      </div>
    );
  }
}

export default ShopPage;
