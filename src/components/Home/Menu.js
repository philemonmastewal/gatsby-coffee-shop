import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

//set up a function to handle the filtering
const getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}
export default class Menu extends Component {
  constructor(props) {
    super(props)
    // console.log(props.items)   <<<<test to see if edges array come up in console....they did
    //we want to do filtering of menu items which wwe will handle in state
    this.state = {
      items: props.items.edges, // <<<< this object will stay the constant and have all your items
      menuItems: props.items.edges, // <<<<this object will be the one that is filtering
      categories: getCategories(props.items.edges),
    }
  }
  //we need to create a method that can do some kind of looping through the array we created above, and that willl handle sifting through the items/categories.... we will do this on the line below
  handleItems = category => {
    let tempItems = [...this.state.items]
    if (category === "all") {
      this.setState(() => {
        return { menuItems: tempItems }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { menuItems: items }
      })
    }
  }
  render() {
    //below we will set up a conditional to see if there are any items to display, if there arent any items we will display a message, but if there are the  items will be displayed
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            {/* categories */}
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-red text-capitalize m-3"
                      onClick={() => {
                        this.handleItems(category)
                      }}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
            {/* items */}
            <div className="row">
              {this.state.menuItems.map(({ node }) => {
                //<we need to use the map function to destructure "node" so you can access its information directly, instead of item.node.id, etc
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>
                    {/* item text */}
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">{node.title}</h6>
                        <h6 className="mb-0 text-red">{node.price}</h6>
                      </div>
                      <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu"></Title>
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>there are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
