import React from 'react'
import './Home.css'
import Logo from  '../../images/YEET1.png'


function Home() {
    return (
        <>
            <div className="home-bg">
                <div className="home-row">
                    <div className="home-col">
                        <div className="home-title">
                            <img alt="logo" src={Logo} width="400px" height="300px" />
                        </div>
                        <div className="home-title-2">
                            Your sticker diary
                        </div>
                        <div className="home-content">
                         ☝️ Record your day with one button press.
                        </div>
                        <div className="home-content">
                            Share, track, and enjoy your life! 🦄 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
