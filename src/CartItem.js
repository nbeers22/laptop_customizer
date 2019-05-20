import React, { Component } from 'react';

export default class CartItem extends Component {
  render() {
    const { category, selected } = this.props;
    
    return (
      <div className="summary__option">
        <div className="summary__option__label">{category}</div>
        <div className="summary__option__value">{selected[category].name}</div>
        <div className="summary__option__cost">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(selected[category].cost)}
        </div>
      </div>
    )
  }
}
