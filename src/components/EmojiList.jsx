import React from "react";

const EmojiList = ({ mood, name }) => {
    return (
        <div>
            <img style={{ width: "79px", margin: "25px" }} src={mood} alt={name} />
            <p style={{ textAlign: "center" }}>{name}</p>
        </div>
    );
};

export default EmojiList;
