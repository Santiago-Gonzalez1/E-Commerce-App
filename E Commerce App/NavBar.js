import React from "react"

function NavBar(){
    return(
         <div className="NavBar">
        <nav>
            <section id="top">
        <ul>
        <li><a href="#men">Men </a></li>
        <li><a href="#women"> Women </a></li>
        <li><a href="#kids  "> Kids </a></li>
        <li><a href=""> Accesories </a></li>
        <li><a href="#footer">Contact </a></li>
        </ul>
        <ul className="Cart">
        <li><img src="https://www.creativefabrica.com/wp-content/uploads/2019/04/Shopping-cart-icon-by-marco.livolsi2014-4-580x386.jpg" height="25px"></img> </li>
        </ul>
            </section>
        <ul className="to-top">
            <li><a href="#top">TO TOP</a></li>
        </ul>
        </nav>
        </div>
    )
}
export default NavBar