import React from "react"

import Products from "./Components/Products"
import kidsProducts from "./Components/KidsProducts"

function CatalogKids() {
    const listProductsK = kidsProducts.map(shoe => <Products key={shoe.id} image={shoe.image} name={shoe.name} price={shoe.price} />)
    
    return (
        <div className="Kids">
        <div className="small-container">
        <div className="categories">
            <div className="row">
            {listProductsK}            
        </div>
        </div>
        </div>
        </div>
        
    )
}

export default CatalogKids