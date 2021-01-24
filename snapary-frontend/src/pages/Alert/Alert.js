import React, { useEffect, useState } from 'react'
import { FaExclamationCircle } from 'react-icons/fa';
import './Alert.css'

function Alert() {
    const [alert, setAlert] = useState("No alert");

    /*useEffect(() => {
        fetch("/movies").then(response =>
          response.json().then(data => {
            setMovies(data.movies);
          })
        );
    }, []);*/
    useEffect(() => {
       setAlert("HAHAHAAHAH!")
    }, []);

    return (
        <>
            <div className="alert-bg">
                <div className="alert-message">
                    🧼🖐 {alert}
                </div>
                <div className="alert-img">
                    <FaExclamationCircle size={80} />
                </div>
            </div>
        </>
    )
}

export default Alert
