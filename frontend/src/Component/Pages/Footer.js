import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div>
          <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Product</span>
          </li>
         
          
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Contact & Support</span>
          </li>
          <li className="nav-item">
            <span className="nav-link"><i className="fas fa-phone"></i>+80 80 80 80 80</span>
          </li>
        
        </ul>
      </div>
    </div>

    <div className="text-center"><i className="fas fa-ellipsis-h"></i></div>
    
    <div className="row text-center">
      <div className="col-md-4 box">
        <span className="copyright quick-links">Copyright &copy; Your Website <script>document.write(new Date().getFullYear())</script>
        </span>
      </div>
      <div className="col-md-4 box">
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="https://twitter.com/?lang=fr">
            <i className="fab fa-twitter"></i>
          </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.facebook.com/">
            <i className="fab fa-facebook-f"></i>
          </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/">
            <i className="fab fa-linkedin-in"></i>
          </a>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
</footer>  
        </div>
    )
}

export default Footer
