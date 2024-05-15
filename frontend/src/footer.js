import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <h3>About Us</h3>
          <p>
          We are a passionate team of five individuals with a shared love for coding and a vision to make learning resources more accessible. Our journey began with the realization that finding quality coding materials and resources can be challenging, especially for beginners.

Driven by our collective passion for coding and education, we decided to do something about it. Drawing from our diverse backgrounds in software development, design, and education, we came together to create *Oneiros* , a platform dedicated to providing easy access to coding resources and materials.

Our mission is simple: to make learning to code easier, more enjoyable, and accessible to everyone. Whether you're just starting your coding journey or looking to expand your skills, we're here to help you every step of the way.

Thank you for joining us on this exciting adventure!
          </p>
        </div>
        
        <div className="footer-right">
          <h3>Contact Us</h3>
          <p>
            Address: 123 Coding Street, Memphis, TN <br />
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
        <p>&copy; {new Date().getFullYear()} Oneiros. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
