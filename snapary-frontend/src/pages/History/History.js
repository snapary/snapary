import React, {useEffect, useState} from 'react'
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
    const [entries, setEntries] = useState(['ahh']);
    const history1 = ['Example','I am happy', 'Meh ok', 'Died', 'Alive again', 'Doing well, maybe'];
    
    const handleSelect = (date) => {
        console.log(date);
        setEntries(listitems(history1));
    }

    useEffect(() => {
        fetch("/").then(response =>
          response.json().then(data => {
            setEntries(data);
          })
        );
    }, []);

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
                        {listitems(entries)}
                    </ListGroup>
                </div>
            </div>
        </>
    )
}

export default History
