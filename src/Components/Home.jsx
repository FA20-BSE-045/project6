import React from "react";
import './Home.css'
import workerImage from './workerimage.png'

const Home = () => {
    return (
        <>
 <div className="container">
      <div className="content">
        <div className="image-section">
          <img src={workerImage} alt="Worker" />
        </div>
        <div className="text-section">
          <h1>Home Repair <br /> Services</h1>
          <p>
            Find amazing home repair services tailored for you. Handy connects
            you with amazing home repair professionals.
          </p>
          <button>CONTACT US</button>
        </div>
      </div>
    </div>

<div className="home-repairs-container">
      <h1>Why Choose Our Company For <br /> Your Home Repairs?</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="cards-container">
        <div className="card">
          <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/77baec112be55b20a052fc6f/1111.jpg" alt="High Quality" />
          <h3>HIGH-QUALITY</h3>
          <p>
            We use high-quality materials, professional tools and supplies, and
            attention to detail companies.
            From small jobs to large ones, you can rely on the experience.
          </p>
        </div>
        <div className="card">
          <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/612228ed7af6556a85858da8/44.jpg" alt="Professionalism" />
          <h3>PROFESSIONALISM</h3>
          <p>
            Our repair experts are professionals with an average of 10 years of
            trade experience,repair
            pros behave and communicate professionally.
          </p>
        </div>
        <div className="card">
          <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/182779df228e5361b3a4b331/r5.jpg" alt="Flexibility" />
          <h3>FLEXIBILITY</h3>
          <p>
            You don't have to pay the most to get great work. Because each home
            repair project is unique,each
            customers' specific needs and expectations.
          </p>
        </div>
        <div className="card">
          <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/f2d2ad11fd115c4d88a55edd/f.jpg" alt="Courteous" />
          <h3>COURTEOUS</h3>
          <p>
            We see this as an opportunity to save our customers time, energy,
            and frustration.
            communication we provide regarding their questions and concerns.
          </p>
        </div>
      </div>
    </div>

<div className="services-container">
      <div className="image-container">
        <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/b79cd1154dce5a568445645e/eeee-min.jpg" alt="Service Professionals" />
      </div>
      <div className="text-container">
        <h1>Reliable, Trusted, and Professional Services</h1>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
        <ul className="service-list">
          <li>
            <span>✔</span> Office
          </li>
          <li>
            <span>✔</span> Kitchen
          </li>
          <li>
            <span>✔</span> Living Room
          </li>
          <li>
            <span>✔</span> Basement
          </li>
        </ul>
      </div>
    </div>

<section class="repair-services">
        <h1>Home Repair Services</h1>
        <div class="services-wrap">
            <div class="service-it">
                <div class="service-i"></div>
                <h2>Kitchen Repair</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="service-it">
                <div class="service-i"></div>
                <h2>Grout Repair</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="service-it">
                <div class="service-i"></div>
                <h2>Countertop Repair</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </section>

<section className="our-services-container">
      <h2>Our Services</h2>
      <div className="service-cards-wrapper">
        <div className="individual-service-card">
          <div className="service-icon">
            <img src="data:image/png;base64,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" alt="Carpentry" />
          </div>
          <h3>Carpentry</h3>
          <p>
            Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
          </p>
          
        </div>

        <div className="individual-service-card">
          <div className="service-icon">
            <img src="data:image/png;base64,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" alt="Flooring" />
          </div>
          <h3>Flooring</h3>
          <p>
            Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
          </p>
        </div>

        <div className="individual-service-card">
          <div className="service-icon">
            <img src="data:image/png;base64,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" alt="Painting" />
          </div>
          <h3>Painting</h3>
          <p>
            Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
          </p>
        </div>

        <div className="individual-service-card">
          <div className="service-icon">
            <img src="data:image/png;base64,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" alt="Electrical Work" />
          </div>
          <h3>Electrical Work</h3>
          <p>
            Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
          </p>
        </div>
      </div>
    </section>

        </>
    )
}

export default Home;