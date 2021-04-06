import React from 'react'


function Navbar() {
    return (
        <div className="navv">
            <nav >
                <ul  className="nav-area">
                <li><a href ="/login" >Login</a></li>
                <li><a href ="/">Home</a></li>
                <li><a href ="/shop-collection">shop collection</a></li>
                 <li><a href ="contact">contact</a></li>
                <li><a href ="/bascket" >bascket</a></li> 
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
