import React, {useEffect, useState} from 'react'
import './History.css'
import DatePicker from "react-datepicker";
import ListGroup from "react-bootstrap/ListGroup"
import "react-datepicker/dist/react-datepicker.css";
import Emojis from 'react-emoji-component'

function History() {
    const listitems = (history) => history.map((entry) => 
        <ListGroup.Item action variant="light">
            {entry}
        </ListGroup.Item>);
    
    const listy = (events) => {
        let result = [];
        let emos = [];
        let target = [];
        console.log(events);
        for (var i = 0; i < events.length; i++)
        {
            console.log(events[i]);
            let str = "Visited " + events[i]["area"] + " at " + events[i]["time"];
            result.push(str);
            emos.push(getEmo(events[i]["emo"]));
        }
        for (var j = 0; j< result.length; j++)
        {
            target.push(
                <ListGroup.Item action variant="light">
                {result[j]} {emos[j]}
                </ListGroup.Item>
            )
        }
        return target;
    }

    const getEmo = (i) => {
        console.log(i);
        if (i === "1") {
            return (<Emojis size={50}>😎</Emojis>);
        }
        if (i === "2") {
            return (<Emojis size={50}>😭</Emojis>);
        }
        if (i === "3") {
            return (<Emojis size={50}>🤩</Emojis>);
        }
        if (i === "4") {
            return (<Emojis size={50}>😱</Emojis>);
        }
        if (i === "5") {
            return (<Emojis size={50}>🥳</Emojis>);
        }
        if (i === "6") {
            return (<Emojis size={50}>🤢</Emojis>);
        }
        if (i === "7") {
            return (<Emojis size={50}>😴</Emojis>);
        }
        if (i === "8") {
            return (<Emojis size={50}>😡</Emojis>);
        }
        if (i === "9") {
            return (<Emojis size={50}>💩</Emojis>);
        }
        if (i === "10") {
            return (<Emojis size={50}>🤡</Emojis>);
        }
        if (i === "11") {
            return (<Emojis size={50}>❤️</Emojis>);
        }
        if (i === "12") {
            return (<Emojis size={50}>🌈</Emojis>);
        }
        else {
            return ":)";
        }
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
                        {entries}
                    </ListGroup>
                </div>
            </div>
        </>
    )
}

export default History
