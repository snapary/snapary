import React, { useEffect, useState } from 'react'
import { FaExclamationCircle } from 'react-icons/fa';
import './Alert.css'

function Alert() {
    const [alert, setAlert] = useState(<div className="alert-message">No Alert</div>);
    const processData = (data) => {
        if (data["alert"])
        {
            let list = []
            for (var key in data["infected_areas"])
            {
                let str = key;
                str.concat(": ", data["infected_areas"][key]);
                list.push(str);
            }
            return listitems(list);
        }
        else
        {
            return listitems(["No alert"]);
        }
    }

    const listitems = (history) => history.map((entry) => 
        <div className="alert-message">
            {entry}
        </div>);

    useEffect(() => {
        fetch("https://snapary.roydu.ca/api/user/alert").then(response =>
          response.json().then(data => {
              setAlert(processData(data));
          })
        );
    }, []);

    return (
        <>
            <div className="alert-bg">
                <div className="alert-message">
                    See alert of affected areas below
                </div>
                <div className="alert-img">
                    <FaExclamationCircle size={80} />
                </div>
                {alert}
            </div>
        </>
    )
}

export default Alert
