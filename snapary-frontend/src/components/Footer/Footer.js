import React from 'react'
import './Footer.css'

function Footer() {
    function getYear() {
        return new Date().getFullYear();
    }

    return (
        <>
            <div className="footer-container">
                <div className="footer-line policy-link">
                    Privacy Policy
                </div>
                <div className="footer-line company-link">
                    Company
                </div>
                <div className="right-align">
                    <div className="footer-line copyright">
                        Snapary © {getYear()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
