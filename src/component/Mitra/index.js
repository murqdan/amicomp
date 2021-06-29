import React from "react";
import "../../style.css";

function Mitra() {
    return (
        <div>
            <section>
                <div className="container mt-3">
                    <div className="container">
                        <div className="row row-cols-auto  justify-content-md-center">
                            <div className="me-5 mt-2"><img src={require("../../assets/company/rexus.png").default} alt="logo gojek" className="mx-auto d-block float" /></div>
                            <div className="me-5"><img src={require("../../assets/company/jne.png").default} alt="logo gojek" className="mx-auto d-block float" /></div>
                            <div className="me-5 mt-2"><img src={require("../../assets/company/amikom.png").default} alt="logo gojek" className="mx-auto d-block float" /></div>
                            <div className="me-5"><img src={require("../../assets/company/grab.png").default} alt="logo gojek" className="mx-auto d-block float" /></div>
                            <div className="me-5 mt-3"><img src={require("../../assets/company/logitech.png").default} alt="logo gojek" className="mx-auto d-block float" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Mitra;