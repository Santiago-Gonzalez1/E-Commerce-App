import React from "react"

function Products(props) {
    return (
        <div className="col-4">
            <h3 >{props.image}</h3>
            <h3 >{props.name}</h3>
            <p> Sizes: {props.sizes}</p>
            <p >${props.price}</p>
            <button className="button">BUY</button>
        </div>
    )
}

export default Products