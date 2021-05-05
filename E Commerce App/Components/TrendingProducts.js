import React from "react"

function TrendingProducts(){
    return(
    <div className="small-container">
            <h2 className="titleTrending">Trending Products</h2>
            <div className="categories">
            <div className="row">
                <div className="col-5">
                    <img src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/c6c7b964-f7f7-4754-80c5-3256936a5f9f/sportswear-magic-club-big-kids-boys-tie-dye-crew-V0KvqW.png"></img>
                    <h4>White Sweat-shirt Kids</h4>
                    <p>Size:M</p>
                    <p>$60.00</p>
                </div>
                <div className="col-5">
                    <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/75e27272de814be4b190ab58017f95cc_9366/Campera_adidas_New_Authentic_Negro_GD9033_21_model.jpg"></img>
                    <h4>Black Adidas Hoodie</h4>
                    <p>Size:S</p>
                    <p>$70.00</p>
                </div>
                <div className="col-5">
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1661fe84-8e0d-4347-b55f-791b3161e9fc/sportswear-club-fleece-crew-TWcqLw.png"></img>
                    <h4>Salmon Sweat-shirt</h4>
                    <p>Size:M</p>
                    <p>$70.00</p>
                </div>
                <div className="col-5">
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b675974-a456-4ccd-b60d-02495000c8b8/air-womens-mesh-short-sleeve-top-PzzW9P.jpg"></img>
                    <h4>Pink T-shirt</h4>
                    <p>Size:S</p>
                    <p>$65.00</p>
                    <div id="PopUp-1"></div>
                </div>
            </div>
        </div>
        </div>
        )
}
export default TrendingProducts