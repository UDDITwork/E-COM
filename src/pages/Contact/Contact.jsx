import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <div className="hero-banner">
        <h1>Step Into Style</h1>
        <p>Your Destination for Affordable Fashion</p>
      </div>

      {/* Why Choose Us Section */}
      <h1 className="contact-title">Why Choose Yaduvanshi Brand Outlet?</h1>
      <div className="story-animation">
        <p className="story-text">
          "Step into the world of premium fashion at unbeatable prices. Yaduvanshi Brand Outlet is not just a store—it's an experience of trust, quality, and elegance."
        </p>
        <div className="dynamic-graphics">
          <div className="circle-animation">YBO</div>
        </div>
      </div>

      {/* Contact Form and Info Section */}
      <div className="form-section">
        <div className="form-container">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Name" 
              value={formData.name} 
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
              required 
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={formData.email} 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
              required 
            />
            <input 
              type="tel" 
              placeholder="Phone" 
              value={formData.phone} 
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
              required 
            />
            <textarea 
              placeholder="Message" 
              value={formData.message} 
              onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
              required
            ></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> SINGHANA ROAD, OPP. SUBHASH PARK, NARNAUL, Haryana 123001</p>
          <p><strong>Phone:</strong> 8804778800</p>
          <p><strong>Store Hours:</strong> Monday - Sunday: 10:00 AM - 9:00 PM</p>

          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d861524.1037717927!2d75.23305554738684!3d27.453377152218057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d26.863764!2d75.8104541!4m5!1s0x3912b78b75957dc7%3A0x979f84f842fd88d8!2sRam%20Nursing%20Home%20St%2C%20Jamalpur%20Mohalla%2C%20Keshav%20Nagar%2C%20Narnaul%2C%20Haryana%20123001!3m2!1d28.05437!2d76.10328059999999!5e1!3m2!1sen!2sin!4v1734565103550!5m2!1sen!2sin" 
            width="100%" 
            height="300" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;