import React from "react"
import List from "./List.js"

function ShoppingCart(props) {

    return (
        <div className="shoppingcart">
            <button onClick={props.emptyCart}>empty cart</button>
            <List items={props.items} handleClick={props.handleClickGroceryItem} />
        </div>
    )
}

export default ShoppingCart