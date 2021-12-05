import React from "react"

function ListItem(props) {

    return (
        < li
            key={props.item.id}
            className="list-item"
            onClick={props.handleClick}
            value={props.item.title}
            amount={props.item.amount}
        >
            <div>{props.item.title}</div>
            <div>{props.item.amount > 0 && "Hoeveelheid: " + props.item.amount}</div>
        </li >
    )
}

export default ListItem