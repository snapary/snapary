import React, { useState } from 'react'
import './Post.css'
import Emojis from 'react-emoji-component'
import Button from 'react-bootstrap/Button'

function Post() {
    const [emoji, setEmoji] = useState(0);

    const handleSelect = (id) => {
        setEmoji(id);
        console.log(id);
    }
    
    return (
        <>
            <div className="post-bg">
                <div className="post-row">
                    <div className="post-col">
                        <div className="map-window">
                            Test map window
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
                                <Button variant="dark" size="lg">✒️ Write To Diary</Button>{' '}
                            </div>
                            <div className="share-btn-col">
                                <Button variant="light" size="lg">🔮 Write To Diary And Share</Button>{' '}
                            </div>
                        </div>
                    </div>       
                </div>
            </div>
        </>
    )
}

export default Post
