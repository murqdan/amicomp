import React from "react";
import "../../style.css";

function Product() {
    return (
        <div>
            <section>
                <div className="container justify-content-center align-content-center">
                    <h3 className="text-center font-weight-bold">PRODUK TERBARU</h3>
                    <div className="row mx-auto pt-4">
                        <div className="col-md-3">
                            <div className="card">
                                <img className="card-img-top" src={require("../../assets/keyboard.jpg").default} alt="produk keyboard" />
                                <div className="card-body">
                                    <h5 className="card-title">Keychron K3</h5>
                                    <p className="card-text">K3 the world's first hot-swappable low profile Optical switch keyboard.
                                    </p>
                                    <a className="btn btnbeliskrg me-2" data-bs-target="#produk1"
                                        data-bs-toggle="modal" href="#hah">Detail</a>
                                    <a className="btn btn-primary" href="#hah">Rp. 200.000</a>
                                </div>
                            </div>

                            <div className="modal fade" id="produk1" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Keyboard Keychron K3</h5>
                                        </div>
                                        <div className="modal-body">
                                            <p>Keychron K3 Ultra Slim Low Profile Optical Hot Swap RGB Aluminium</p>
                                            <ul className="list-unstyled p-2">Varian :
                                                <li>1. RGB Backlight Red Switch</li>
                                                <li>2. RGB Backlight Blue Switch</li>
                                                <li>3. RGB Backlight Brown Switch</li>
                                                <li>4. White Backlight Red Switch</li>
                                                <li>5. White Backlight Blue Switch</li>
                                            </ul>
                                            <span>Connects with up to 3 devices
                                                Broadcom Bluetooth 5.1
                                                Type-C connection
                                                Compatible for both macOS and Windows
                                                K3’s 75% layout is a compact version of tenkeyless layout.
                                            </span>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Tutup</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-3">
                            <div className="card">
                                <img className="card-img-top" src={require("../../assets/keyboard.jpg").default} alt="produk keyboard" />
                                <div className="card-body">
                                    <h5 className="card-title">Keychron K3</h5>
                                    <p className="card-text">K3 the world's first hot-swappable low profile Optical switch keyboard.
                                    </p>
                                    <a className="btn btnbeliskrg me-2" data-bs-target="#produk1"
                                        data-bs-toggle="modal" href="#hah">Detail</a>
                                    <a className="btn 
                                btn-primary" href="#hah">Rp. 200.000</a>
                                </div>
                            </div>

                            <div className="modal fade" id="produk1" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Keyboard Keychron K3</h5>
                                        </div>
                                        <div className="modal-body">
                                            <p>Keychron K3 Ultra Slim Low Profile Optical Hot Swap RGB Aluminium</p>
                                            <ul className="list-unstyled p-2">Varian :
                                                <li>1. RGB Backlight Red Switch</li>
                                                <li>2. RGB Backlight Blue Switch</li>
                                                <li>3. RGB Backlight Brown Switch</li>
                                                <li>4. White Backlight Red Switch</li>
                                                <li>5. White Backlight Blue Switch</li>
                                            </ul>
                                            <span>Connects with up to 3 devices
                                                Broadcom Bluetooth 5.1
                                                Type-C connection
                                                Compatible for both macOS and Windows
                                                K3’s 75% layout is a compact version of tenkeyless layout.
                                            </span>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Tutup</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img className="card-img-top" src={require("../../assets/keyboard.jpg").default} alt="produk keyboard" />
                                <div className="card-body">
                                    <h5 className="card-title">Keychron K3</h5>
                                    <p className="card-text">K3 the world's first hot-swappable low profile Optical switch keyboard.
                                    </p>
                                    <a className="btn btnbeliskrg me-2" data-bs-target="#produk1"
                                        data-bs-toggle="modal" href="#hah">Detail</a>
                                    <a className="btn 
                                btn-primary" href="#hah">Rp. 200.000</a>
                                </div>
                            </div>

                            <div className="modal fade" id="produk1" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Keyboard Keychron K3</h5>
                                        </div>
                                        <div className="modal-body">
                                            <p>Keychron K3 Ultra Slim Low Profile Optical Hot Swap RGB Aluminium</p>
                                            <ul className="list-unstyled p-2">Varian :
                                                <li>1. RGB Backlight Red Switch</li>
                                                <li>2. RGB Backlight Blue Switch</li>
                                                <li>3. RGB Backlight Brown Switch</li>
                                                <li>4. White Backlight Red Switch</li>
                                                <li>5. White Backlight Blue Switch</li>
                                            </ul>
                                            <span>Connects with up to 3 devices
                                                Broadcom Bluetooth 5.1
                                                Type-C connection
                                                Compatible for both macOS and Windows
                                                K3’s 75% layout is a compact version of tenkeyless layout.
                                            </span>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Tutup</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card" >
                                <img className="card-img-top" src={require("../../assets/keyboard.jpg").default} alt="produk keyboard" />
                                <div className="card-body">
                                    <h5 className="card-title">Keychron K3</h5>
                                    <p className="card-text">K3 the world's first hot-swappable low profile Optical switch keyboard.
                                    </p>
                                    <a className="btn btnbeliskrg me-2" data-bs-target="#produk1"
                                        data-bs-toggle="modal" href="#hah">Detail</a>
                                    <a className="btn 
                                btn-primary" href="#hah">Rp. 200.000</a>
                                </div>
                            </div>

                            <div className="modal fade" id="produk1" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Keyboard Keychron K3</h5>
                                        </div>
                                        <div className="modal-body">
                                            <p>Keychron K3 Ultra Slim Low Profile Optical Hot Swap RGB Aluminium</p>
                                            <ul className="list-unstyled p-2">Varian :
                                                <li>1. RGB Backlight Red Switch</li>
                                                <li>2. RGB Backlight Blue Switch</li>
                                                <li>3. RGB Backlight Brown Switch</li>
                                                <li>4. White Backlight Red Switch</li>
                                                <li>5. White Backlight Blue Switch</li>
                                            </ul>
                                            <span>Connects with up to 3 devices
                                                Broadcom Bluetooth 5.1
                                                Type-C connection
                                                Compatible for both macOS and Windows
                                                K3’s 75% layout is a compact version of tenkeyless layout.
                                            </span>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Tutup</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mx-auto mt-4">
                        <div className="col-md-3">
                            <div className="card" >
                                <img className="card-img-top" src={require("../../assets/keyboard.jpg").default} alt="produk keyboard" />
                                <div className="card-body">
                                    <h5 className="card-title">Keychron K3</h5>
                                    <p className="card-text">K3 the world's first hot-swappable low profile Optical switch keyboard.
                                    </p>
                                    <a className="btn btnbeliskrg me-2" data-bs-target="#produk1"
                                        data-bs-toggle="modal" href="#hah">Detail</a>
                                    <a className="btn 
                                btn-primary" href="#hah">Rp. 200.000</a>
                                </div>
                            </div>

                            <div className="modal fade" id="produk1" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Keyboard Keychron K3</h5>
                                        </div>
                                        <div className="modal-body">
                                            <p>Keychron K3 Ultra Slim Low Profile Optical Hot Swap RGB Aluminium</p>
                                            <ul className="list-unstyled p-2">Varian :
                                                <li>1. RGB Backlight Red Switch</li>
                                                <li>2. RGB Backlight Blue Switch</li>
                                                <li>3. RGB Backlight Brown Switch</li>
                                                <li>4. White Backlight Red Switch</li>
                                                <li>5. White Backlight Blue Switch</li>
                                            </ul>
                                            <span>Connects with up to 3 devices
                                                Broadcom Bluetooth 5.1
                                                Type-C connection
                                                Compatible for both macOS and Windows
                                                K3’s 75% layout is a compact version of tenkeyless layout.
                                            </span>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Tutup</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card" >
                                <img className="card-img-top" src={require("../../assets/keyboard.jpg").default} alt="produk keyboard" />
                                <div className="card-body">
                                    <h5 className="card-title">Keychron K3</h5>
                                    <p className="card-text">K3 the world's first hot-swappable low profile Optical switch keyboard.
                                    </p>
                                    <a className="btn btnbeliskrg me-2" data-bs-target="#produk1"
                                        data-bs-toggle="modal" href="#hah">Detail</a>
                                    <a className="btn 
                                btn-primary" href="#hah">Rp. 200.000</a>
                                </div>
                            </div>

                            <div className="modal fade" id="produk1" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Keyboard Keychron K3</h5>
                                        </div>
                                        <div className="modal-body">
                                            <p>Keychron K3 Ultra Slim Low Profile Optical Hot Swap RGB Aluminium</p>
                                            <ul className="list-unstyled p-2">Varian :
                                                <li>1. RGB Backlight Red Switch</li>
                                                <li>2. RGB Backlight Blue Switch</li>
                                                <li>3. RGB Backlight Brown Switch</li>
                                                <li>4. White Backlight Red Switch</li>
                                                <li>5. White Backlight Blue Switch</li>
                                            </ul>
                                            <span>Connects with up to 3 devices
                                                Broadcom Bluetooth 5.1
                                                Type-C connection
                                                Compatible for both macOS and Windows
                                                K3’s 75% layout is a compact version of tenkeyless layout.
                                            </span>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Tutup</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card" >
                                <img className="card-img-top" src={require("../../assets/keyboard.jpg").default} alt="produk keyboard" />
                                <div className="card-body">
                                    <h5 className="card-title">Keychron K3</h5>
                                    <p className="card-text">K3 the world's first hot-swappable low profile Optical switch keyboard.
                                    </p>
                                    <a className="btn btnbeliskrg me-2" data-bs-target="#produk1"
                                        data-bs-toggle="modal" href="#hah">Detail</a>
                                    <a className="btn 
                                btn-primary" href="#hah">Rp. 200.000</a>
                                </div>
                            </div>

                            <div className="modal fade" id="produk1" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Keyboard Keychron K3</h5>
                                        </div>
                                        <div className="modal-body">
                                            <p>Keychron K3 Ultra Slim Low Profile Optical Hot Swap RGB Aluminium</p>
                                            <ul className="list-unstyled p-2">Varian :
                                                <li>1. RGB Backlight Red Switch</li>
                                                <li>2. RGB Backlight Blue Switch</li>
                                                <li>3. RGB Backlight Brown Switch</li>
                                                <li>4. White Backlight Red Switch</li>
                                                <li>5. White Backlight Blue Switch</li>
                                            </ul>
                                            <span>Connects with up to 3 devices
                                                Broadcom Bluetooth 5.1
                                                Type-C connection
                                                Compatible for both macOS and Windows
                                                K3’s 75% layout is a compact version of tenkeyless layout.
                                            </span>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Tutup</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card" >
                                <img className="card-img-top" src={require("../../assets/keyboard.jpg").default} alt="produk keyboard" />
                                <div className="card-body">
                                    <h5 className="card-title">Keychron K3</h5>
                                    <p className="card-text">K3 the world's first hot-swappable low profile Optical switch keyboard.
                                    </p>
                                    <a className="btn btnbeliskrg me-2" data-bs-target="#produk1"
                                        data-bs-toggle="modal" href="#hah">Detail</a>
                                    <a className="btn 
                                btn-primary" href="#hah">Rp. 200.000</a>
                                </div>
                            </div>

                            <div className="modal fade" id="produk1" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Keyboard Keychron K3</h5>
                                        </div>
                                        <div className="modal-body">
                                            <p>Keychron K3 Ultra Slim Low Profile Optical Hot Swap RGB Aluminium</p>
                                            <ul className="list-unstyled p-2">Varian :
                                                <li>1. RGB Backlight Red Switch</li>
                                                <li>2. RGB Backlight Blue Switch</li>
                                                <li>3. RGB Backlight Brown Switch</li>
                                                <li>4. White Backlight Red Switch</li>
                                                <li>5. White Backlight Blue Switch</li>
                                            </ul>
                                            <span>Connects with up to 3 devices
                                                Broadcom Bluetooth 5.1
                                                Type-C connection
                                                Compatible for both macOS and Windows
                                                K3’s 75% layout is a compact version of tenkeyless layout.
                                            </span>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Tutup</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Product;