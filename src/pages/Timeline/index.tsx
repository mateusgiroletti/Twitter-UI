import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";

import "./index.css";

export function Timeline() {
    const [newTweet, setNewTweet] = useState("");
    const [tweets, setTweets] = useState([
        "First Tweet",
        "Second Tweet",
        "Third Tweet"
    ]);

    function createNewTweet(event: FormEvent) {
        event.preventDefault();

        setTweets([newTweet, ...tweets]);
        setNewTweet("");
    }

    function handleHotKeySubmit(event: KeyboardEvent) {
        if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
            createNewTweet(event);
        }
    }

    return (
        <main className="timeline">
            <Header title="Home" />

            <form onSubmit={createNewTweet} className="new-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://github.com/mateusgiroletti.png" alt="Mateus Giroletti" />
                    <textarea
                        id="tweet"
                        placeholder="What's happening?"
                        value={newTweet}
                        onKeyDown={handleHotKeySubmit}
                        onChange={(event) => {
                            setNewTweet(event.target.value);
                        }}
                    />
                </label>

                <button type="submit">Tweet</button>
            </form>

            <Separator />
            {
                tweets.map((content, index) => {
                    return <Tweet key={index} content={content} />;
                })
            }
        </main>
    );
}