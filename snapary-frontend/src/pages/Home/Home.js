import React from 'react'
import './Home.css'
import {FaFeatherAlt} from 'react-icons/fa';

function Home() {
    return (
        <>
            <div className="home-bg">
                <div className="home-row">
                    <div className="home-col">
                        <div className="home-title">
                            Snapary
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
