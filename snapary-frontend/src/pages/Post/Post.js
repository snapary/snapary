import React, { useEffect, useState } from 'react'
import './Post.css'
import Emojis from 'react-emoji-component'
import Button from 'react-bootstrap/Button'
import MapContainer from '../../components/Maps/MapContainer'
import { useHistory } from 'react-router-dom'

function Post() {
    const [emoji, setEmoji] = useState(0);
    const [long, setlong] = useState(0);
    const [lat, setlat] = useState(0);
    let history = useHistory();

    const handleSelect = (id) => {
        setEmoji(id);
        console.log(id);
    }
    
    const handleLocalPost = (event) => {
        var jsonData = JSON.stringify({'lat': lat, 'long': long, 'emo':emoji});
        console.log(jsonData);
        
        fetch('https://snapary.roydu.ca/api/user/setHistory', {
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
                alert("Successfully Posted to Private Diary!");
                history.push('/post');
              }
        })});

        event.preventDefault();
    }
    
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function(position) {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
                setlat(position.coords.latitude);
                setlong(position.coords.longitude);
            });
        }
    }, []);
    
    return (
        <>
            <div className="post-bg">
                <div className="post-row">
                    <div className="post-col">
                        <div className="map-window">
                            <MapContainer />
                        </div>
                    </div>
                    <div className="post-col">
                        <div className="post-title">
                            How do you feel right now?
                        </div>
                        <div className="emoji-row">
                            <div className={emoji === 1 ? "emoji-col selected" : "emoji-col"}  onClick={() => handleSelect(1)}>
                                <Emojis size={64}>
                                    😎
                                </Emojis>
                            </div>
                            <div className={emoji === 2 ? "emoji-col selected" : "emoji-col"}  onClick={() => handleSelect(2)}>
                                <Emojis size={64}>
                                    😭
                                </Emojis>
                            </div>
                            <div className={emoji === 3 ? "emoji-col selected" : "emoji-col"}  onClick={() => handleSelect(3)}>
                                <Emojis size={64}>
                                    🤩
                                </Emojis>
                            </div>
                            <div className={emoji === 4 ? "emoji-col selected" : "emoji-col"}  onClick={() => handleSelect(4)}>
                                <Emojis size={64}>
                                    😱
                                </Emojis>
                            </div>
                        </div>
                        <div className="emoji-row">
                            <div className={emoji === 5 ? "emoji-col selected" : "emoji-col"}  onClick={() => handleSelect(5)}>
                                <Emojis size={64}>
                                    🥳
                                </Emojis>
                            </div>
                            <div className={emoji === 6 ? "emoji-col selected" : "emoji-col"}  onClick={() => handleSelect(6)}>
                                <Emojis size={64}>
                                    🤢
                                </Emojis>
                            </div>
                            <div className={emoji === 7 ? "emoji-col selected" : "emoji-col"}  onClick={() => handleSelect(7)}>
                                <Emojis size={64}>
                                    😴
                                </Emojis>
                            </div>
                            <div className={emoji === 8 ? "emoji-col selected" : "emoji-col"}  onClick={() => handleSelect(8)}>
                                <Emojis size={64}>
                                    😡
                                </Emojis>
                            </div>
                        </div>
                        <div className="emoji-row">
                            <div className={emoji === 9 ? "emoji-col selected" : "emoji-col"}  onClick={() => handleSelect(9)}>
                                <Emojis size={64}>
                                    💩
                                </Emojis>
                            </div>
                            <div className={emoji === 10 ? "emoji-col selected" : "emoji-col"}  onClick={() => handleSelect(10)}>
                                <Emojis size={64}>
                                    🤡
                                </Emojis>
                            </div>
                            <div className={emoji === 11 ? "emoji-col selected" : "emoji-col"}  onClick={() => handleSelect(11)}>
                                <Emojis size={64}>
                                    ❤️
                                </Emojis>
                            </div>
                            <div className={emoji === 12 ? "emoji-col selected" : "emoji-col"}  onClick={() => handleSelect(12)}>
                                <Emojis size={64}>
                                    🌈
                                </Emojis>
                            </div>
                        </div>
                        <div className="share-btn-row">
                            <div className="share-btn-col">
                                <Button variant="dark" size="lg" onClick={handleLocalPost}>✒️ Write To Diary</Button>{' '}
                            </div>
                            <div className="share-btn-col">
                                <Button variant="light" size="lg">🔮 Share To Twitter</Button>{' '}
                            </div>
                        </div>
                    </div>       
                </div>
            </div>
        </>
    )
}

export default Post
