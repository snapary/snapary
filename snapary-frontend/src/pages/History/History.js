import React, {useState} from 'react'
import './History.css'
import DatePicker from "react-datepicker";
import ListGroup from "react-bootstrap/ListGroup"
import "react-datepicker/dist/react-datepicker.css";

function History() {
    const [date, setDate] = useState(new Date());
    const history = ['I am happy', 'Meh ok', 'Died'];
    const listitems = history.map((entry) => 
        <ListGroup.Item action variant="info">
            entry
        </ListGroup.Item>);

    return (
        <>
            <div className="history-bg">
                <div className="title-row">
                    <div className="title-col">
                        <div className="title-line">
                            View Your Diaries
                        </div>
                    </div>
                    <div className="title-col">
                        <div className="select-line">
                            Select Date
                        </div>
                        <DatePicker style={{"paddingTop":"1rem"}} selected={date} onChange={date => setDate(date)} />
                    </div>
                </div>
                <div className="list-group">
                    <ListGroup>
                        {listitems}
                    </ListGroup>
                </div>
            </div>
        </>
    )
}

export default History
