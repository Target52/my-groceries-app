import React from "react"

function InputField(props) {

    return (
        <form className="input-field" onSubmit={props.handleSubmit} >

            <input
                type="text"
                name="inputValue"
                value={props.inputValue}
                onChange={props.handleChange}
            />
            <button>Voeg toe</button>
        </form>
    )
}

export default InputField