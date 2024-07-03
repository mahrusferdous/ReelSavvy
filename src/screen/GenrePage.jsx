import React from "react";
import { useEffect, useState } from "react";
import { fetchGenres } from "../api/tmdbApi";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import styles from "../styles/GenrePage.module.css";
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

const GenrePage = () => {
    // const [genre, setGenre] = useState([]);

    // useEffect(() => {
    //     fetchGenres()
    //         .then((data) => {
    //             setGenre(data);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching genres:", error);
    //         });
    // }, [fetchGenres]);

    return (
        <div className="d-flex">
            <Sidebar />
            {/* <div className={styles.main_content}>
                <h1>Genres</h1>
                {genre.map((genre) => (
                    <div key={genre.id}>
                        <Link to={`/movie/${genre.id}`}>
                            <h2>{genre.name}</h2>
                        </Link>
                    </div>
                ))}
            </div> */}
            <div className={styles.main_content}>
                <h1>What mood are you in right now?</h1>
                <p>Select a mood to begin receiving movie recommendations on your exact mood.</p>

                <h2>Positive and energetic</h2>
                <div className={styles.moods}>
                    <EmojiList mood={adventurous} name="Adventurous" />
                    <EmojiList mood={excited} name="Excited" />
                    <EmojiList mood={happy} name="Happy" />
                    <EmojiList mood={upbeat} name="Upbeat" />
                </div>

                <hr />

                <h2>Reflective and thoughtful</h2>
                <div className={styles.moods}>
                    <EmojiList mood={curious} name="Curious" />
                    <EmojiList mood={imaginative} name="Imaginative" />
                    <EmojiList mood={intrigued} name="Intrigued" />
                    <EmojiList mood={reflective} name="Reflective" />
                    <EmojiList mood={thoughtful} name="Thoughtful" />
                </div>

                <h2>Sensitive and emotional</h2>
                <div className={styles.moods}>
                    <EmojiList mood={nostalgic} name="Nostalgic" />
                    <EmojiList mood={romantic} name="Romantic" />
                    <EmojiList mood={scared} name="Scared" />
                    <EmojiList mood={sentimental} name="Sentimental" />
                    <EmojiList mood={warm} name="Warm" />
                </div>

                <h2>Intense and serious</h2>
                <div className={styles.moods}>
                    <EmojiList mood={futuristic} name="Futuristic" />
                    <EmojiList mood={intense} name="Intense" />
                    <EmojiList mood={light_hearted} name="Light-hearted" />
                    <EmojiList mood={serious} name="Serious" />
                    <EmojiList mood={suspenseful} name="Suspenseful" />
                </div>
            </div>
        </div>
    );
};

export default GenrePage;
