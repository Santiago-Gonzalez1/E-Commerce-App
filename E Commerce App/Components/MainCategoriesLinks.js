import React from "react"

function MainCategoriesLinks(){
    return(
        <div className="categories">
           <section id="target-top">
           <div className="small-container">
                <div className="row">     
                    <div className="col-3">
                        <h2>Men</h2>
                        <a href="#men">
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/j5rinintecfmrfxcf8s7/pro-mens-long-sleeve-top-sDW22X.png" ></img>
                    </a>
                    </div>
                    <div className="col-3">
                         <h2>Women</h2>
                         <a href="#women">
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b675974-a456-4ccd-b60d-02495000c8b8/air-womens-mesh-short-sleeve-top-PzzW9P.jpg"></img></a>
                    </div>
                    <div className="col-3">
                         <h2>Kids</h2>
                         <a href="#kids">
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9d0b175e-9a13-4989-b50d-465068d7cf8c/sportswear-club-fleece-big-kids-pullover-hoodie-XrCvKR.png"></img>
                    </a>
                    </div>
                </div>
                </div>
                </section>
        </div>
    )
}
export default MainCategoriesLinks