import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AboutUsPage: React.FC = () => {
  const background = {
    backgroundColor: "#ACADAF",
  };

  return (
    <div style={background}>
      <Navbar />
      <h1 className="text-center">About Us</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img src="./aboutUs.jpg" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <p>
              Located in the vibrant city of Los Angeles, we are a leading
              company specializing in the refurbishment and resale of broken
              smartphones. Our dedicated team is committed to providing
              top-notch services and delivering high-quality refurbished devices
              to our customers.
            </p>
            <p>
              Our team consists of four highly skilled engineers and a dedicated
              buyer who sources broken phones from various channels. Together,
              we work tirelessly to restore these damaged devices to their
              former glory, ensuring they are fully functional and ready to be
              used again.
            </p>
            <p>
              With years of experience in the industry, our engineers possess
              extensive knowledge and expertise in repairing a wide range of
              smartphone models. From screen replacements to fixing hardware
              issues and optimizing software performance, we have the technical
              prowess to handle it all.
            </p>
            <p>
              In addition to our technical expertise, our buyer plays a crucial
              role in acquiring broken phones that are suitable for
              refurbishment. Through strategic partnerships and careful
              selection, we ensure a steady supply of devices that can be
              transformed into reliable, refurbished smartphones.
            </p>
            <p>
              At Aasguard, we pride ourselves on our commitment to quality and
              customer satisfaction. Every refurbished phone that leaves our
              facility undergoes rigorous testing to ensure it meets our
              stringent standards. We strive to provide our customers with a
              seamless experience and a device that functions flawlessly.
            </p>
            <p>
              We believe in the importance of sustainability and reducing
              electronic waste. By choosing a refurbished phone from us, you not
              only save money but also contribute to a greener future by
              extending the lifecycle of these devices.
            </p>
            <p>
              Thank you for considering Aasguard. We are excited to serve you
              and provide you with the best refurbished smartphones in Los
              Angeles and beyond.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
