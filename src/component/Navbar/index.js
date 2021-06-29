import React from "react";
import "../../style.css";

function Navbar() {
    return (
        <div>
            <nav>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top mb-xxl-5">
                    <div className="container ">
                        <a className=" text-white navbar-brand fw-bold" href="#home">AmiComp</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link text-white active" aria-current="page" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#about">Tentang Kami</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#team">Tim</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#product">Produk</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#kontak" tabindex="-1" aria-disabled="true">Kontak</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </nav>
        </div>
    )
}

export default Navbar;