import React, { Component } from "react"
import ShoppingCart from "./components/ShoppingCart.js"
import GroceryList from "./components/GroceryList.js"

class Container extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: '',
            groceryItems: [
                { id: 1, title: "Appels" },
                { id: 2, title: "Carton of milk" },
                { id: 3, title: "Vegetables" },
                { id: 4, title: "Cleaning" },
                { id: 5, title: "Paper" },
                { id: 6, title: "Chococlate" }
            ],
            shoppingListItems: [
                { id: 1, title: "Bread", amount: 1 },
                { id: 2, title: "Beer", amount: 1 },
                { id: 3, title: "Butter", amount: 1 }
            ]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleClickGroceryItem = (event) => {
        let newItem = event.currentTarget.getAttribute("value")
        let newId = event.target.getAttribute("key")
        let newArray = []
        if (this.state.shoppingListItems.find(({ title }) => title === newItem)) {
            this.addAmountToItem(newItem)
        } else {
            newId = this.state.shoppingListItems.length + 1
            newArray = { id: newId, title: newItem, amount: 1 }
            this.setState({
                shoppingListItems: [...this.state.shoppingListItems].concat(newArray)
            })
        }
    }

    //Deze functie om de hoeveelheid te verhogen werkt maar ik snap eigelijk niet hoe
    addAmountToItem = (newItem) => {
        const result = this.state.shoppingListItems.find(({ title }) => title === newItem)
        result.amount++
        this.setState({})
    }

    emptyCart = () => {
        this.setState({
            shoppingListItems: []
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const value = this.state.inputValue
        if (!this.state.groceryItems.find(({ title }) => title === value) && value !== '') {
            let newId = this.state.groceryItems.length + 1
            let newArray = { id: newId, title: value, amount: 0 }
            this.setState({
                groceryItems: [...this.state.groceryItems].concat(newArray),
                inputValue: ''
            })
        }
    }

    handleChange(event) {
        const value = event.target.value
        this.setState({
            inputValue: value
        })
    }

    render() {
        return (
            <div className="container">
                <div className="subcontainer">
                    <h2>Boodschappenlijst</h2>
                    <GroceryList
                        items={this.state.groceryItems}
                        handleClickGroceryItem={this.handleClickGroceryItem}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        inputValue={this.state.inputValue}
                    />
                </div>
                <div className="subcontainer">
                    <h2>Winkelmand</h2>
                    <ShoppingCart
                        items={this.state.shoppingListItems}
                        emptyCart={this.emptyCart}
                    />
                </div>
            </div>
        )
    }
}

export default Container