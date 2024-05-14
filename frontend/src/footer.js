import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vitae elit libero, a pharetra augue. Etiam porta sem malesuada
            magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur.
          </p>
        </div>
        <div className="footer-middle">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Contact Us</h3>
          <p>
            Address: 123 Coding Street, City, Country<br />
            Phone: +123 456 7890<br />
            Email: info@example.com
          </p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Coding Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
