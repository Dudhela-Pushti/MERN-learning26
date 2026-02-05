import React from 'react'
import "../assets/css/footer.css";


export const FooterComponent = () => {
  return (
    <div>
         <footer className="footer">
      <div className="footer-content">

        <h3 className="footer-title">Virat Kohli Fan Page</h3>

        <p className="footer-text">
          Dedicated to the legacy, passion, and excellence of one of the
          greatest cricketers of all time.
        </p>


        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Virat Kohli Fan Page. All rights reserved.
          </p>
          <p className="footer-note">
            This website is created for educational purposes only.
          </p>
        </div>

      </div>
    </footer>
    </div>
  )
}
