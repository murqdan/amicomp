import React from "react";
import "../../style.css";

function Footer() {
    return (
        <div>
            <footer id="kontak" className="text-white">
                <div className="row p-5 mt-5 pb-4 border-primary border-top border-5">
                    <div className="col-md-4 text-center">
                        <h5 className="fw-bold">LAYANAN</h5>
                        <br />
                        <p className="pfuter lh-1">Pusat Bantuan</p>
                        <p className="pfuter lh-1">Cara Pengembalian</p>
                        <p className="pfuter lh-1">Cara Pembelian</p>
                        <p className="pfuter lh-1">Pengiriman</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h5 className="fw-bold">KONTAK</h5>
                        <br />
                        <p className="pfuter lh-1">AmiComp@gmail.com</p>
                        <p className="pfuter lh-lg">021-2367-38172</p>

                        <div className="container">
                            <div className="row row-cols-auto justify-content-md-center">
                                <div><img src={require("../../assets/fb.png").default} alt="fb" className="mx-auto d-block float" /></div>
                                <div><img src={require("../../assets/twitter.png").default} alt="twitter" className="mx-auto d-block float" /></div>
                                <div><img src={require("../../assets/instagram.png").default} alt="instagram" className="mx-auto d-block float" /></div>
                                <div><img src={require("../../assets/youtube.png").default} alt="youtube" className="mx-auto d-block float" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <h5 className="fw-bold">ALAMAT</h5>
                        <br />
                        <p className="lh-1">Jl. Padjajaran, Ring Road Utara,</p>
                        <p className="lh-1">Kel. Condongcatur, Kec. Depok,</p>
                        <p className="lh-1">Kab. Sleman, Prop. Daerah</p>
                        <p className="lh-1">Istimewa Yogyakarta</p>
                    </div>
                </div>
            </footer>
        </div >
    )
}

export default Footer;