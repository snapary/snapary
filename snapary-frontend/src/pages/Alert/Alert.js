import React from 'react'
import { FaExclamationCircle } from 'react-icons/fa';
import './Alert.css'

function Alert() {

    return (
        <>
            <div className="alert-bg">
                <div className="alert-message">
                    🧼🖐 No alert, keep washing your hand
                </div>
                <div className="alert-img">
                    <FaExclamationCircle size={80} />
                </div>
            </div>
        </>
    )
}

export default Alert
