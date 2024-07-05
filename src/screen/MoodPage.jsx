import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { fetchGenres } from "../api/tmdbApi";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import styles from "../styles/MoodPage.module.css";
import { Container } from "react-bootstrap";
import EmojiList from "../components/EmojiList";
import adventurous from "../assets/emojis/gif-adventurous.gif";
import excited from "../assets/emojis/gif-excited.gif";
import happy from "../assets/emojis/gif-happy.gif";
import upbeat from "../assets/emojis/gif-upbeat.gif";
import curious from "../assets/emojis/gif-curious.gif";
import imaginative from "../assets/emojis/gif-imaginative.gif";
import intrigued from "../assets/emojis/gif-intrigued.gif";
import reflective from "../assets/emojis/gif-reflective.gif";
import thoughtful from "../assets/emojis/gif-thoughtful.gif";
import nostalgic from "../assets/emojis/gif-nostalgic.gif";
import romantic from "../assets/emojis/gif-romantic.gif";
import scared from "../assets/emojis/gif-scared.gif";
import sentimental from "../assets/emojis/gif-sentimental.gif";
import warm from "../assets/emojis/gif-warm.gif";
import futuristic from "../assets/emojis/gif-futuristic.gif";
import intense from "../assets/emojis/gif-intense.gif";
import light_hearted from "../assets/emojis/gif-light-hearted.gif";
import serious from "../assets/emojis/gif-serious.gif";
import suspenseful from "../assets/emojis/gif-suspenseful.gif";
import { IdsContext } from "../context/IdsContext";
import { MoodContext } from "../context/MoodContext";
import { MoodSentenceContext } from "../context/MoodSentenceContext";

const MoodPage = () => {
    const { setIds } = useContext(IdsContext);
    const { setMood } = useContext(MoodContext);
    const { setMoodSentence } = useContext(MoodSentenceContext);
    const navigate = useNavigate();

    [
        { id: 28, name: "Action" },
        { id: 12, name: "Adventure" }, //
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 18, name: "Drama" },
        { id: 10751, name: "Family" },
        { id: 14, name: "Fantasy" },
        { id: 36, name: "History" },
        { id: 27, name: "Horror" },
        { id: 10402, name: "Music" },
        { id: 9648, name: "Mystery" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Science Fiction" },
        { id: 10770, name: "TV Movie" },
        { id: 53, name: "Thriller" },
        { id: 10752, name: "War" },
        { id: 37, name: "Western" }, //
    ];

    return (
        <div className="d-flex" style={{ background: "#050505" }}>
            <Sidebar />
            <div className={styles.main_content}>
                <h1>What mood are you in right now?</h1>
                <p>Select a mood to begin receiving movie recommendations on your exact mood.</p>

                <h2>Positive and energetic</h2>
                <div className={styles.moods}>
                    <button
                        onClick={() => {
                            setIds([12, 37]);
                            setMood("Adventurous");
                            setMoodSentence("Would you prefer an action-packed adventure or a classic western?");
                            navigate("/genre");
                        }}
                    >
                        <EmojiList mood={adventurous} name="Adventurous" />
                    </button>

                    <button>
                        <EmojiList mood={excited} name="Excited" />
                    </button>

                    <button>
                        <EmojiList mood={happy} name="Happy" />
                    </button>

                    <button>
                        <EmojiList mood={upbeat} name="Upbeat" />
                    </button>
                </div>

                <hr />

                <h2>Reflective and thoughtful</h2>
                <div className={styles.moods}>
                    <button>
                        <EmojiList mood={curious} name="Curious" />
                    </button>

                    <button>
                        <EmojiList mood={imaginative} name="Imaginative" />
                    </button>

                    <button>
                        <EmojiList mood={intrigued} name="Intrigued" />
                    </button>

                    <button>
                        <EmojiList mood={reflective} name="Reflective" />
                    </button>

                    <button>
                        <EmojiList mood={thoughtful} name="Thoughtful" />
                    </button>
                </div>

                <hr />

                <h2>Sensitive and emotional</h2>
                <div className={styles.moods}>
                    <button>
                        <EmojiList mood={nostalgic} name="Nostalgic" />
                    </button>

                    <button>
                        <EmojiList mood={romantic} name="Romantic" />
                    </button>

                    <button>
                        <EmojiList mood={scared} name="Scared" />
                    </button>

                    <button>
                        <EmojiList mood={sentimental} name="Sentimental" />
                    </button>

                    <button>
                        <EmojiList mood={warm} name="Warm" />
                    </button>
                </div>

                <hr />

                <h2>Intense and serious</h2>
                <div className={styles.moods}>
                    <button>
                        <EmojiList mood={futuristic} name="Futuristic" />
                    </button>

                    <button>
                        <EmojiList mood={intense} name="Intense" />
                    </button>

                    <button>
                        <EmojiList mood={light_hearted} name="Light-hearted" />
                    </button>

                    <button>
                        <EmojiList mood={serious} name="Serious" />
                    </button>

                    <button>
                        <EmojiList mood={suspenseful} name="Suspenseful" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MoodPage;
