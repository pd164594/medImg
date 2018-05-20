import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
     <footer className="page-footer blue lighten-2">
        <div className="footer-copyright">
          <div className="container">
          &copy; {new Date().getFullYear()} Diagnosis Protocol
            <a className="grey-text text-lighten-4 right footer-link" href="#!">About Us</a>
            <span className="right">&bull;</span>
            <a className="grey-text text-lighten-4 right footer-link" href="#!">Contact</a>
            <span className="right">&bull;</span>
            <a className="grey-text text-lighten-4 right footer-link" href="#!">Location</a>
          </div>
        </div>
     </footer>
    )
}

export default Footer;