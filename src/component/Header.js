import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";

function Header() {
    return (
        <header >
            <div className="content-header">
                <div className="content-logo">
                    <img
                        className="img-logo"
                        src={Logo} alt="Logo" />
                </div>
                <p className="titulo-header"><Link to="/">Inicio</Link></p>
                <p className="titulo-header"><Link to="/shopping">Carrito de compras</Link></p>

            </div>
        </header >
    );


}
export default Header;