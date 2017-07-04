import React, { Component } from 'react'

/*
deep merge libraries
https://github.com/KyleAMathews/deepmerge
https://github.com/kolodny/immutability-helper
https://github.com/rtfeldman/seamless-immutable
 */

function makeChangeHandlers(state) {

}

const underControl = (state, handlers = {}) => (callback) => {
  /* CODE */
  return {}
}

class MyComponent extends Component {
  state = {
    notSaved: false,
    valid: true,
    validationErrors: {},
    product: {
      title: "",
      price: "",
      description: "",
      productProperties: {
        color: "",
        size: "",
        weight: "",
      },
      categories: [],
    },
  }

  change = underControl(this.state.product)((newDataFragment) => this.setState({ product: deepmerge(this.state.product, newDataFragment) }))

  render() {
    const { product } = this.state
    return <div>
      <h1>Product</h1>
      <input type="text" value={product.title} onChange={(e) => this.setState({ product: deepmerge(this.state.product, { title: e.target.value })})}/>
      <input type="text" value={product.price} onChange={this.change.price}/>
      <input type="text" value={product.productProperties.color} onChange={}/>
      <input type="text" value={product.productProperties.size} onChange={}/>
      <input type="text" value={product.productProperties.weight} onChange={(e) => this.setState({ product: deepmerge(this.state.product, { productProperties: { wight: e.target.value } })})}/>
    </div>
  }
}
