import React, { Component } from 'react';
import CartItem from './CartItem.js';

export default class Cart extends Component {
  render() {

    const { selected } = this.props;

    const summary = Object.keys(selected)
      .map( (key, index) => (
        <CartItem
          key={index}
          category={key}
          selected={selected}
           />
      ))

    const total = Object.keys(selected)
      .reduce((acc, curr) => acc + selected[curr].cost, 0);

    return (
      <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
        {summary}
        <div className="summary__total">
          <div className="summary__total__label">Your Price: </div>
          <div className="summary__total__value">
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
              .format(total)}
          </div>
        </div>
      </section>
    )
  }
}
