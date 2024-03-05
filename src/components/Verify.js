import React, { useState } from "react";
import BasicNav from "./BasicNav";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  // Function to handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file); // Set selectedImage to the file object itself
    }
  };

  // Function to handle form submission (simulated upload to database)
  const handleSubmit = () => {
    if (selectedImage) {
      console.log("Selected image:", selectedImage);
      const fileName = selectedImage.name; // Extracting the file name from the image object
      console.log("File name:", fileName);

      // Checking if the file name contains 'kolkata' or 'mumbai'
      if (fileName.includes("kolkata")) {
        navigate("/kolkata");
      } else if (fileName.includes("mumbai")) {
        navigate("/mumbai");
      } else {
        // If neither 'kolkata' nor 'mumbai' is present in the file name, navigate to a default page
        navigate("/defaultPage");
      }
    } else {
      console.log("No image selected.");
    }
  };

  return (
    <>
      <BasicNav />
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Part: Image */}
          <div className="col-md-6">
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : "https://paytmblogcdn.paytm.com/wp-content/uploads/2022/12/paytm_aadhar-card-valid-documents-required.jpg"
              }
              alt="Hero"
              className="img-fluid"
            />
          </div>
          {/* Right Part: Select Photo */}
          <div className="col-md-6">
            <div className="mb-3 ">
              <label htmlFor="fileInput" className="form-label">
                <h3>Insert Gov. Registered Identity Card</h3>
              </label>
              <input
                type="file"
                className="form-control bg-primary-subtle "
                id="fileInput"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Upload
            </button>
            <p className="lead mt-3">
              <span>Upload your identity proof.</span>
              <br></br>
              Pls. Rename your image to your location , then upload <br></br>
              1) kolkata.jpg/png<br></br>
              2) mumbai.jpg/png
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Verify;
