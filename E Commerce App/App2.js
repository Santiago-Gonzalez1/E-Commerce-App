import React from "react"
import Catalog from "./Catalog"
import TrendingProducts from "./Components/TrendingProducts"
import MainCategoriesLinks from "./Components/MainCategoriesLinks"

 function App(){
    return(
        <div className="allbody">
             <MainCategoriesLinks />
             <TrendingProducts />
             <Catalog />
        </div>
    )
}

export default App
