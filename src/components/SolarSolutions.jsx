import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SolarSolutions = () => {
    // Image sets for each solution
    const rooftopImages = [
        require('../assets/rooftop (1).jpeg'),
        require('../assets/rooftop (2).jpeg'),
        require('../assets/rooftop (3).jpeg'),
        require('../assets/roof (4).jpeg')

    ];

    const groundImages = [
        require('../assets/ground (1).jpeg'),
        require('../assets/ground (2).jpeg'),
        require('../assets/ground (3).jpeg'),
        require('../assets/ground (4).jpeg'),
    ];

    const renderImages = (images) => (
        <div className="d-flex flex-wrap gap-2">
            {images.map((img, idx) => (
                <img
                    key={idx}
                    src={img}
                    alt={`Solar ${idx}`}
                    style={{ width: "48%", height: "100px", objectFit: "cover", borderRadius: "5px" }}
                />
            ))}
        </div>
    );

    return (
        <div className="container py-5" id="wedo">
            {/* Header Section */}
            <div className="mb-5">
                <h2 className="fw-bold section-title">What We Do</h2>
                <h4>Our Solar Solutions</h4>
                <p>
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
                        <div className="card-body">
                            {renderImages(rooftopImages)}
                            <h5 className="card-title text-primary fw-bold mt-3">Roof Top</h5>
                            <p className="card-text text-muted">
                                Solar panels mounted on rooftops help utilize unused space effectively and achieve higher returns on energy generation. Suitable for residential, commercial, and industrial buildings.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Ground Mounted Solution */}
                <div className="col-md-6">
                    <div className="card shadow h-100 border-0">
                        <div className="card-body">
                            {renderImages(groundImages)}
                            <h5 className="card-title text-success fw-bold mt-3">Ground</h5>
                            <p className="card-text text-muted">
                                IMPPOWER offers complete turnkey ground-mounted solar solutions, from design and installation to operations & maintenance, ensuring smooth execution throughout the entire project lifecycle.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolarSolutions;
