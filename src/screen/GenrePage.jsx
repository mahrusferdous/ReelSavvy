import React from "react";
import { useEffect, useState } from "react";
import { fetchGenres } from "../api/tmdbApi";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import styles from "../styles/GenrePage.module.css";
import { Container } from "react-bootstrap";

const GenrePage = () => {
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        fetchGenres()
            .then((data) => {
                setGenre(data);
            })
            .catch((error) => {
                console.error("Error fetching genres:", error);
            });
    }, [fetchGenres]);

    return (
        <Container className="d-flex">
            <Sidebar />
            <div className={styles.main_content}>
                <h1>Genres</h1>
                {genre.map((genre) => (
                    <div key={genre.id}>
                        <Link to={`/movie/${genre.id}`}>
                            <h2>{genre.name}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default GenrePage;
