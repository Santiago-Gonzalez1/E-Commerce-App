import React from "react"

import CatalogWomen from "./CatalogWomen"
import CatalogMen from "./CatalogMen"
import CatalogKids from "./CatalogKids"


 function Catalog(){
    return(
        <div>
        <section id="men" >
        <h1 className="title">Men Clothes</h1>
       <CatalogMen/>
       </section>
       <section id="women">
       <h1 className="title">Women Clothes</h1>
       <CatalogWomen/>
       </section>
       <section id="kids">
       <h1 className="title">Clothes for the Kids</h1>
       <CatalogKids/>
       </section>
    </div>
    )
}

export default Catalog
