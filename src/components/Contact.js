import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import '../style/contact.css';
import ResumePDF from '../components/Saikumar S.pdf';


const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    subject: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataWithTime = { ...formData, time: new Date().toLocaleString() };

    emailjs.send(
      'service_u226o99',
      'template_vkavx5o',
      formDataWithTime,
      'MLkkCdDRqCMIpHVPp'
    ).then(
      () => {
        setStatusMessage('Message sent successfully!');
        setFormData({ fullName: '', emailAddress: '', subject: '', message: '' });
      },
      () => {
        setStatusMessage('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <div className="container mt-5" id="contact">
      <div className="text-center mb-5">
        <h2 className="section-titlee fw-bold mb-4" style={{ fontSize: '2.5rem' }}>Get In Touch</h2>
        <p className="text-muted" style={{ fontSize: '1.1rem' }}>
          Ready to start a conversation? I'd love to hear from you. Let's discuss how we can work together.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 mb-4 d-flex align-items-stretch">
          <div className="contact-card contact-info w-100">
            <h3 className="mb-4">Contact Information</h3>
            <div className="icon-box d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faPhone} className="text-primary me-3" size="lg" />
              <span>8925428378</span>
            </div>
            <div className="icon-box d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-info me-3" size="lg" />
              <span>s.saikumar2780@gmail.com</span>
            </div>
            <div className="icon-box d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-danger me-3" size="lg" />
              <span>Kanyakumari</span>
            </div>
            {/* Resume Download Button */}
            <a
              href={ResumePDF}
              download="Saikumar_Saikumar.pdf"
              className="btn btn-primary mt-4"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="col-md-6 mb-4 d-flex align-items-stretch">
          <div className="contact-cardd contact-cardd w-100">
            <h3 className="mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="emailAddress">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailAddress"
                  placeholder="your.email@example.com"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Project inquiry, collaboration, etc."
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
              {statusMessage && <p className="mt-3">{statusMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
