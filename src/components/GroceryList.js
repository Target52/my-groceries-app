import React from "react"
import List from "./List.js"
import InputField from "./InputField.js"

function GroceryList(props) {

    return (
        <div className="grocerylist">
            <InputField
                handleSubmit={props.handleSubmit}
                handleChange={props.handleChange}
                inputValue={props.inputValue}
            />
            <List items={props.items} handleClick={props.handleClickGroceryItem} />
        </div>
    )
}

export default GroceryList