import React, {useState} from 'react'
import './History.css'
import DatePicker from "react-datepicker";
import ListGroup from "react-bootstrap/ListGroup"
import "react-datepicker/dist/react-datepicker.css";

function History() {
    const listitems = (history) => history.map((entry) => 
        <ListGroup.Item action variant="light">
            {entry}
        </ListGroup.Item>);
    
    const [date, setDate] = useState(new Date());
    const [entries, setEntries] = useState(listitems(history1));
    const history1 = ['Example diary here','I am happy', 'Meh ok', 'Died', 'Alive again', 'Doing well, maybe'];
    
    const handleSelect = (date) => {
        console.log(date);
        setDate(date);
        //setEntries(getEntries(date));
    }
    /*
    const getEntries = (date) => {
        var jsonData = JSON.stringify({'username': username, 'password': password});
        console.log(jsonData);

        fetch('https://snapary.roydu.ca/api/user/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            },
            body: JSON.stringify(jsonData)
          }).then(response => {response.json().then(data => {
              console.log(data);
              if (data["success"])
              {
                history.push('/post')
              }
        })});

        event.preventDefault();
    }*/

    return (
        <>
            <div className="history-bg">
                <div className="title-row">
                    <div className="title-col">
                        <div className="title-line">
                            📚 View Your Diaries
                        </div>
                    </div>
                </div>
                <div className="list-group">
                    <ListGroup>
                        {listitems(history1)}
                    </ListGroup>
                </div>
            </div>
        </>
    )
}

export default History
