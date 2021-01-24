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
    
    const listy = (events) => {
        let result = [];
        console.log(events);
        for (var i = 0; i < events.length; i++)
        {
            console.log(events[i]);
            let str = "Visited " + events[i]["area"] + " at " + events[i]["time"];
            result.push(str);
        }
        return listitems(result);
    }
    
    const [date, setDate] = useState(new Date());
    const [entries, setEntries] = useState(['ahh']);
    const history1 = ['Example','I am happy', 'Meh ok', 'Died', 'Alive again', 'Doing well, maybe'];
    
    const handleSelect = (date) => {
        console.log(date);
        setEntries(listitems(history1));
    }

    useEffect(() => {
        fetch("https://snapary.roydu.ca/api/user/getHistory").then(response =>
          response.json().then(data => {
              console.log("fetcheeeed!");
            setEntries(listy(data["history"]));
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
