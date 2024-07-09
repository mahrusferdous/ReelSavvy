import React, { useContext } from "react";
import { IdsContext } from "../context/IdsContext";
import GenreMovie from "../components/GenreMovie";
import Sidebar from "./Sidebar";
import { MoodContext } from "../context/MoodContext";
import styles from "../styles/GenrePage.module.css";
import { MoodSentenceContext } from "../context/MoodSentenceContext";

const GenrePage = () => {
    const { ids } = useContext(IdsContext);
    const { mood } = useContext(MoodContext);
    const { moodSentence } = useContext(MoodSentenceContext);

    return (
        <div style={{ backgroundColor: "#050505", height: "100vh" }}>
            <Sidebar />
            <div className={styles.content}>
                <h1 className={styles.main_content} style={{ color: "#D6AA6A" }}>
                    Because you selected the {mood} mood...
                </h1>
                <p className={styles.main_content}>{moodSentence}</p>
                <div>
                    {ids.map((id) => (
                        <div key={id}>
                            <GenreMovie genreId={id} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GenrePage;
