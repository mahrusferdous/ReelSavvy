import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import styles from "../styles/MoodPage.module.css";
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
import Footer from "./Footer";

const MoodPage = () => {
	const { setIds } = useContext(IdsContext);
	const { setMood } = useContext(MoodContext);
	const { setMoodSentence } = useContext(MoodSentenceContext);
	const navigate = useNavigate();

	[
		{ id: 28, name: "Action" },
		{ id: 12, name: "Adventure" },
		{ id: 16, name: "Animation" },
		{ id: 35, name: "Comedy" },
		{ id: 80, name: "Crime" },
		{ id: 99, name: "Documentary" }, //
		{ id: 18, name: "Drama" },
		{ id: 10751, name: "Family" },
		{ id: 14, name: "Fantasy" },
		{ id: 36, name: "History" },
		{ id: 27, name: "Horror" },
		{ id: 10402, name: "Music" },
		{ id: 9648, name: "Mystery" },
		{ id: 10749, name: "Romance" },
		{ id: 878, name: "Science Fiction" }, //
		{ id: 10770, name: "TV Movie" },
		{ id: 53, name: "Thriller" }, //
		{ id: 10752, name: "War" },
		{ id: 37, name: "Western" },
	];

	return (
		<div className="d-flex" style={{ background: "#050505" }}>
			<Sidebar />
			<div className={styles.mood_left}>
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

						<button
							onClick={() => {
								setIds([28, 12, 53]);
								setMood("Excited");
								setMoodSentence(
									"Are you in the mood for an adrenaline-fueled action, a trilling adventure, or an intense triller?"
								);
								navigate("/genre");
							}}
						>
							<EmojiList mood={excited} name="Excited" />
						</button>

						<button
							onClick={() => {
								setIds([35, 10751, 18]);
								setMood("Happy");
								setMoodSentence(
									"Would you like to watch an animated comedy, a feel-good family film, or a heartwarming drama?"
								);
								navigate("/genre");
							}}
						>
							<EmojiList mood={happy} name="Happy" />
						</button>

						<button
							onClick={() => {
								setIds([35, 10749, 10402]);
								setMood("Upbeat");
								setMoodSentence(
									"Are you in the mood for an animated comedy, a light-hearted romance, or an upbeat music-themed movie?"
								);
								navigate("/genre");
							}}
						>
							<EmojiList mood={upbeat} name="Upbeat" />
						</button>
					</div>

					<hr />

					<h2>Reflective and thoughtful</h2>
					<div className={styles.moods}>
						<button
							onClick={() => {
								setIds([53, 99, 878]);
								setMood("Curious");
								setMoodSentence(
									"Are you interested in a mysterious thriller, a thought-provoking  documentary, or an imaginative science fiction?"
								);
								navigate("/genre");
							}}
						>
							<EmojiList mood={curious} name="Curious" />
						</button>

						<button
							onClick={() => {
								setIds([14, 878, 12]);
								setMood("Imaginative");
								setMoodSentence(
									"Do you prefer an animated fantasy, a captivating science fiction, or an adventurous fantasy?"
								);
								navigate("/genre");
							}}
						>
							<EmojiList mood={imaginative} name="Imaginative" />
						</button>

						<button
							onClick={() => {
								setIds([53, 878, 99]);
								setMood("Intrigued");
								setMoodSentence(
									"Do you prefer an animated fantasy, a captivating science fiction, or an adventurous fantasy?"
								);
								navigate("/genre");
							}}
						>
							<EmojiList mood={intrigued} name="Intrigued" />
						</button>

						<button
							onClick={() => {
								setIds([36, 99, 10752]);
								setMood("Reflective");
								setMoodSentence(
									"Would you like to watch a historical drama, a thought-provoking documentary, or a war movie?"
								);
								navigate("/genre");
							}}
						>
							<EmojiList mood={reflective} name="Reflective" />
						</button>

						<button
							onClick={() => {
								setIds([99, 18, 36]);
								setMood("Thoughtful");
								setMoodSentence(
									"Do you prefer a thought-provoking documentary, a captivating drama, or a historical history?"
								);
								navigate("/genre");
							}}
						>
							<EmojiList mood={thoughtful} name="Thoughtful" />
						</button>
					</div>

					<hr />

					<h2>Sensitive and emotional</h2>
					<div className={styles.moods}>
						<button
							onClick={() => {
								setIds([16, 10402, 37]);
								setMood("Nostalgic");
								setMoodSentence(
									"Do you prefer an animated movie, a music-themed movie, or a classic Western?"
								);
								navigate("/genre");
							}}
						>
							<EmojiList mood={nostalgic} name="Nostalgic" />
						</button>

						<button
							onClick={() => {
								setIds([10749, 35, 10751]);
								setMood("Romantic");
								setMoodSentence(
									"Are you looking for a romantic drama, a romantic comedy, or a heartwarming family film?"
								);
								navigate("/genre");
							}}
						>
							<EmojiList mood={romantic} name="Romantic" />
						</button>

						<button
							onClick={() => {
								setIds([27, 53, 9648]);
								setMood("Scared");
								setMoodSentence(
									"Do you prefer a horror movie, a thrilling thriller, or a mysterious mystery?"
								);
								navigate("/genre");
							}}
						>
							<EmojiList mood={scared} name="Scared" />
						</button>

						<button
							onClick={() => {
								setIds([18, 10751, 10749]);
								setMood("Sentimental");
								setMoodSentence(
									"Would you like a romantic drama, a heartwarming family film, or a sentimental romance?"
								);
								navigate("/genre");
							}}
						>
							<EmojiList mood={sentimental} name="Sentimental" />
						</button>

						<button
							onClick={() => {
								setIds([10751, 10749, 18]);
								setMood("Warm");
								setMoodSentence(
									"Would you like to watch a heartwarming family film, a romantic drama, or a captivating drama?"
								);
								navigate("/genre");
							}}
						>
							<EmojiList mood={warm} name="Warm" />
						</button>
					</div>

					<hr />

					<h2>Intense and serious</h2>
					<div className={styles.moods}>
						<button
							onClick={() => {
								setIds([28, 12, 878]);
								setMood("Futuristic");
								setMoodSentence(
									"Are you looking for a movie set in the future with action, adventure, or science fiction elements?"
								);
								navigate("/genre");
							}}
						>
							<EmojiList mood={futuristic} name="Futuristic" />
						</button>

						<button
							onClick={() => {
								setIds([80, 53, 27]);
								setMood("Intense");
								setMoodSentence(
									"Would you like a gripping crime movie, a suspenseful thriller, or a terrifying horror?"
								);
								navigate("/genre");
							}}
						>
							<EmojiList mood={intense} name="Intense" />
						</button>

						<button
							onClick={() => {
								setIds([35, 10749, 10402]);
								setMood("Light-hearted");
								setMoodSentence(
									"Are you in the  mood for a comedy, a romantic romance, or an upbeat music-themed movie?"
								);
								navigate("/genre");
							}}
						>
							<EmojiList mood={light_hearted} name="Light-hearted" />
						</button>

						<button
							onClick={() => {
								setIds([18, 10752, 80]);
								setMood("Serious");
								setMoodSentence(
									"Are you interested in a drama, a war movie, or a gripping crime movie?"
								);
								navigate("/genre");
							}}
						>
							<EmojiList mood={serious} name="Serious" />
						</button>

						<button
							onClick={() => {
								setIds([80, 53, 9648]);
								setMood("Suspenseful");
								setMoodSentence(
									"Would you like a suspenseful crime movie, a thrilling thriller, or a mysterious mystery?"
								);
								navigate("/genre");
							}}
						>
							<EmojiList mood={suspenseful} name="Suspenseful" />
						</button>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default MoodPage;
