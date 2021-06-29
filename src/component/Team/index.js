import React from "react";
import "../../style.css";

function Team() {
    return (
        <div>
            <section id="team" className="team">
                <div className="container bg-light pt-5 justify-content-center align-items-center text-center">
                    <h1>Tim</h1>
                    <div className="row pt-3">
                        <div className="team-profil col-md-3">
                            <img className="rounded-circle" src={require("../../assets/fplucu.jpg").default} alt="profil1" width="150" />
                            <h5 className="name">Bryan Ammara Maha S</h5>
                            <p>19.11.3284</p>
                            <p className="deskripsi">Designer</p>
                        </div>
                        <div className="team-profil col-md-3">
                            <img className="rounded-circle" src={require("../../assets/fplucu.jpg").default} alt="profil1" width="150" />
                            <h5 className="name">Didin Kusuma W</h5>
                            <p>19.11.3287</p>
                            <p className="deskripsi">Designer</p>
                        </div>
                        <div className="team-profil col-md-3">
                            <img className="rounded-circle" src={require("../../assets/fplucu.jpg").default} alt="profil1" width="150" />
                            <h5 className="name">Yusuf Bima Setiawan</h5>
                            <p>19.11.3288</p>
                            <p className="deskripsi">Designer</p>
                        </div>
                        <div className="team-profil col-md-3">
                            <img className="rounded-circle" src={require("../../assets/fplucu.jpg").default} alt="profil1" width="150" />
                            <h5 className="name">Muh Fachry Altarik</h5>
                            <p>19.11.3292</p>
                            <p className="deskripsi">Designer</p>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="team-profil col-md-4">
                            <img className="rounded-circle" src={require("../../assets/fplucu.jpg").default} alt="profil1" width="150" />
                            <h5 className="name">Muhammad Rafiqul Adnan</h5>
                            <p>19.11.3247</p>
                            <p className="deskripsi">Front-End Dev</p>
                        </div>
                        <div className="team-profil col-md-4">
                            <img className="rounded-circle" src={require("../../assets/fplucu.jpg").default} alt="profil1" width="150" />
                            <h5 className="name">Rama Bagus Satria P</h5>
                            <p>19.11.3279</p>
                            <p id="product" className="deskripsi">Front-End Dev</p>
                        </div>
                        <div className="team-profil col-md-4">
                            <img className="rounded-circle" src={require("../../assets/fplucu.jpg").default} alt="profil1" width="150" />
                            <h5 className="name">Fajar Aji Prayoga</h5>
                            <p>19.11.3281</p>
                            <p className="deskripsi">Front-End Dev</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team;