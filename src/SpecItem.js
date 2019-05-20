import React, { Component } from 'react'

export default class SpecItem extends Component {
  render() {
    const { name, cost, featureClass, item, category } = this.props;
    console.log(category)

    return (
      <li className="feature__item">
        <div
          className={featureClass}
          onClick={e => this.props.handleUpdateFeature(category, item)}
        >
          {name}
          ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(cost)})
        </div>
      </li>
    )
  }
}
