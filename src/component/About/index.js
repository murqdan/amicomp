import React from "react";
import "../../style.css";

function About() {
    return (
        <div>
            <section>
                <div className="container text-center">
                    <div className="row mb-5">
                        <div className="col-6 mt-1">
                            <h1>Kata Mereka</h1>
                            <div className="container foto2 text-center p-2 mt-4">
                                <div id="carouselExampleControls" className="carousel slide mt-4" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="item carousel-item active">
                                            <div className="img-box"><img src={require("../../assets/gledek.jpg").default} alt="" /></div>
                                            <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                                            <p className="overview"><b>Atta Halilintar</b>, Youtuber</p>
                                        </div>
                                        <div className="item carousel-item">
                                            <div className="img-box"><img src={require("../../assets/david.jpg").default} alt="" /></div>
                                            <p className="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
                                            <p className="overview"><b>David Brendi</b>, Youtuber</p>
                                        </div>
                                        <div className="item carousel-item">
                                            <div className="img-box"><img src={require("../../assets/dedy.jpg").default} alt="" /></div>
                                            <p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                            <p className="overview"><b>Dedy Irvan</b>, Youtuber</p>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 mt-1">
                            <h1>Sejarah</h1>
                            <br />
                            <span>AmiComp berdiri sejak tahun 2021, awalnya perusahaan kami hanya melayani penjualan barang
                                elektronik secara onsite. Namun kini kami menawarkan produk tersebut berbasis website.</span>
                            <div className="accordion pt-4" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button " type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Visi
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul className="list-unstyled p-2">
                                                <li>Mengembangkan toko elektronik modern</li>
                                                <li>yang memberikan pelayanan terbaik dan didukung</li>
                                                <li>oleh sumber daya manusia yang kompeten dan mitra bisnis profesional</li>
                                                <li>untuk menambah kepuasan pelanggan.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Misi
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul className="list-unstyled p-2">
                                                <li>Membentuk jaringan toko modern bersekala luas.</li>
                                                <li>Menyediakan barang elektronik (PC) yang berkualitas.</li>
                                                <li>Memberikan pelayanan terbaik kepada setiap pelanggan.</li>
                                                <li>Menjadi perusahaan terkemuka di Indonesia dalam bisnis PC.</li>
                                            </ul>
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

export default About;