import React from 'react'
import './footer.scss'
const Footer = () => {
  return (
    <>
    <footer className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <a href="#">Terms of Service</a><br></br>
              <a href="#">Privacy Policy</a>
            </div>
            <div className="social-media-links">
              <a href="#" className="social-link"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social-link"><i className="fab fa-pinterest-p"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-whatsapp"></i></a>
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>              
            </div>
        
        </div>
      </footer>

    </>
  )
}

export default Footer
