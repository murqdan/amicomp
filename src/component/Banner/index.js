import React from "react";
import "../../style.css";

function Banner() {
    return (
        <div>
            <section id="home" className="home">
                <header className="page-header gradient">
                    <div className="container me-5 mt-5 ">
                        <div className="row justify-content-center align-items-center">
                            <div className="me-5 col-md-5 mt-5">
                                <h1 className=" fw-bold">Nyari<br/> barang ori ?</h1>
                                <br />
                                <p>Dapatkan barang elektronik berkualitas disini.</p>
                                <a className="btn btnbeliskrg fw-bold" href="#product" role="button">Beli Sekarang!</a>
                            </div>
                            <div className="hmctn mt-5 col-md-5">
                                <img src={require("../../assets/homecontent.png").default} alt="Home Content" width="420" />
                            </div>
                        </div>
                    </div>
                    <hr id="about" className="mt-5" />
                </header>

            </section >
        </div>
    )
}

export default Banner;
