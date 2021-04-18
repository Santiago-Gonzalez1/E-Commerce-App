import React from "react"

import Products from "./Components/Products"
import womenProducts from "./Components/WomenProducts"

function CatalogWomen() {
    const listProductsW = womenProducts.map(shoe => <Products key={shoe.id} image={shoe.image} name={shoe.name} price={shoe.price} sizes={shoe.sizes}/>)
    
    return (
        <div className="Women">
          <div className="small-container">
        <div className="categories">
            <div className="row">
            {listProductsW}            
        </div>
        </div>
        </div>
        </div>
    )
}

export default CatalogWomen