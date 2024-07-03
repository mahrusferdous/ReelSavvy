import React from "react";

const EmojiList = ({ mood, name }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <img style={{ width: "79px", margin: "25px" }} src={mood} alt={name} />
            <p style={{ textAlign: "center" }}>{name}</p>
        </div>
    );
};

export default EmojiList;
