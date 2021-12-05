import React from "react"
import ListItem from "./ListItem.js"

function List(props) {

    const list = props.items.map(item => <ListItem
        key={item.id}
        item={item}
        handleClick={props.handleClick}
    />
    )

    return (
        <ul>
            {list}
        </ul >
    )
}

export default List