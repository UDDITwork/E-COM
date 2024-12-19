import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <div className="hero-banner">
        <h1>About YADUVANSHI BRAND OUTLET</h1>
      </div>

      {/* Our Story Section */}
      <div className="our-story-section">
        <div className="image-container">
          <img 
            src="/images/hero/hero.jpg" 
            alt="Store Front" 
            className="store-image"
          />
        </div>
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Welcome to YADUVANSHI BRAND OUTLET, your premier destination for surplus branded clothing in Narnaul. Since our establishment, we've been committed to providing high-quality branded clothing at affordable prices.
          </p>
          <p>
            Our outlet specializes in offering a wide range of products including T-shirts, Shirts, Trousers, Lowers, and Jackets from renowned brands. We take pride in our collection and ensure that each piece meets our high standards of quality.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="features">
          {[
            {
              title: 'Quality Assurance',
              description: 'All our products are carefully selected from trusted brands to ensure the best quality.',
            },
            {
              title: 'Best Prices',
              description: 'We offer branded clothing at the most competitive prices in the market.',
            },
            {
              title: 'Wide Selection',
              description: 'From casual wear to formal attire, we have something for every style and occasion.',
            }
          ].map((feature, index) => (
            <div key={index} className="feature-box">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Visit Our Store Section */}
      <div className="visit-store">
        <h2>Visit Our Store</h2>
        <p><strong>Location:</strong> SINGHANA ROAD, OPP. SUBHASH PARK, NARNAUL</p>
        <p><strong>Contact:</strong> 8804778800</p>
        <p><strong>Store Hours:</strong> 10:00 AM - 9:00 PM (Open all days)</p>

        {/* Map Section */}
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.7472280558475!2d76.09983577425835!3d28.051372929127215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912b78b75957dc7%3A0x979f84f842fd88d8!2sRam%20Nursing%20Home%20St%2C%20Jamalpur%20Mohalla%2C%20Keshav%20Nagar%2C%20Narnaul%2C%20Haryana%20123001!5e0!3m2!1sen!2sin!4v1734565103550!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }}
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
