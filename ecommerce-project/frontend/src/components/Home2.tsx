import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HomePage: React.FC = () => {
  const background = {
    backgroundColor: "#ACADAF",
  };
  const text = {
    textAlign: "justify",
  };

  return (
    <div style={background}>
      <Navbar />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img src="../Home.jpg" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>Welcome to our website!</h2>
            <p>
              At Aasguard, we believe in giving a second life to broken
              smartphones. Our mission is to collect damaged phones, refurbish
              them to their original condition, and offer them for sale again.
            </p>
            <p>
              We understand that accidents happen, and sometimes our beloved
              devices end up cracked or damaged. But that doesn't mean they
              should be discarded and forgotten. With our expertise and
              dedication, we take these broken devices and transform them into
              fully functional smartphones that are as good as new.
            </p>
            <p>
              Our team of skilled technicians carefully assesses each device,
              repairing any hardware or software issues and replacing damaged
              components. We use high-quality parts and follow industry-standard
              practices to ensure that the refurbished phones meet the highest
              standards of quality and performance.
            </p>
            <p>
              By choosing a refurbished phone from Aasguard, not only are you
              getting a fantastic device at a fraction of the cost of a
              brand-new phone, but you are also contributing to a more
              sustainable future. Extending the lifespan of smartphones reduces
              electronic waste and helps conserve valuable resources.
            </p>
            <p>
              We take pride in our work and stand behind the quality of our
              refurbished phones. Each device undergoes rigorous testing to
              ensure its functionality, and we provide a warranty to give you
              peace of mind.
            </p>
            <p>
              Explore our wide selection of refurbished smartphones and discover
              the perfect device that suits your needs and budget. Join us in
              embracing sustainability and making a positive impact on the
              environment, one refurbished phone at a time.
              <br /> You need to be register in our website to acess to the
              shop.
            </p>
            <h4>Thank you for choosing Aasguard!</h4>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
