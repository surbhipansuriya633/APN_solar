import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SolarSolutions = () => {
    return (
        <div className="container py-5">
            {/* Header Section */}
            <div className=" mb-5">
                <h2 className="fw-bold section-title">What We Do</h2>
                <h4 className="">Our Solar Solutions</h4>
                <p className="">
                    If you are planning to adopt solar energy to save on your cost of
                    electricity or to meet your sustainability goals, we provide tailored
                    solar solutions suitable for your needs.
                </p>
            </div>

            {/* Solutions Section */}
            <div className="row g-4">
                {/* Roof Top Solution */}
                <div className="col-md-6">
                    <div className="card shadow h-100 border-0">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1682148196781-8bbcdfd7f537?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vZnRvcCUyMHNvbGFyfGVufDB8fDB8fHww"
                            className="card-img-top"
                            alt="Rooftop Solar"
                            style={{ height: "200px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                            <h5 className="card-title text-primary fw-bold ">Roof Top</h5>
                            <p className="card-text text-muted">
                                Solar panels mounted on rooftops help utilize unused space
                                effectively and achieve higher returns on energy generation.
                                Suitable for residential, commercial, and industrial buildings.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Ground Mounted Solution */}
                <div className="col-md-6">
                    <div className="card shadow h-100 border-0">
                        <img
                            src="https://www.tatapowersolar.com/wp-content/uploads/2021/11/19074248/30mw-gsecl-web.jpg"
                            className="card-img-top"
                            alt="Ground Solar"
                            style={{ height: "200px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                            <h5 className="card-title text-success fw-bold">Ground</h5>
                            <p className="card-text text-muted">
                                IMPPOWER offers complete turnkey ground-mounted solar solutions,
                                from design and installation to operations & maintenance,
                                ensuring smooth execution throughout the entire project lifecycle.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolarSolutions;
