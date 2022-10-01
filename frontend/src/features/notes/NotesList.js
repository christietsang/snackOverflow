import Chat from "../../Chat";
import io from "socket.io-client";
import { useState } from "react";
import "./Notes.css";

const NotesList = () => {
    const socket = io.connect("http://localhost:3500");
        const [username, setUsername] = useState("");
        const [room, setRoom] = useState("");
        const [showChat, setShowChat] = useState(false);
    
        const joinRoom = () => {
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            setShowChat(true);
        }
        };
        return (
        <div className="App">
            {!showChat ? (
            <div className="joinChatContainer">
                <h3>Join a chat</h3>
                <input
                type="test"
                placeholder="John..."
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
                />
                <input
                type="test"
                placeholder="Room id"
                onChange={(event) => {
                    setRoom(event.target.value);
                }}
                />
                <button onClick={joinRoom}>Join a room</button>
            </div>
            ) : (
            <div className="chat-window">
                <Chat socket={socket} username={username} room={room} />
            </div>
            )}
        </div>
        );
}
export default NotesList;