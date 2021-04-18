import React from "react"

import Products from "./Components/Products"
import menProducts from "./Components/MenProducts"

function CatalogMen() {
    const listProductsM = menProducts.map(shoe => <Products key={shoe.id} image={shoe.image} name={shoe.name} price={shoe.price} sizes={shoe.sizes} />)
    
    return (
        <div className="Men">
        <div className="small-container">
        <div className="categories">
            <div className="row">
            {listProductsM}            
        </div>
        </div>
        </div>
        </div>
    )
}

export default CatalogMen