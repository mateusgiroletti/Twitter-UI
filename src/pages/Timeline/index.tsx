import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";

import "./index.css";

const tweets = [
    "First Tweet",
    "Second Tweet",
    "Third Tweet"
];

export function Timeline() {
    return (
        <main className="timeline">
            <Header title="Home" />

            <form action="" className="new-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://github.com/mateusgiroletti.png" alt="Mateus Giroletti" />
                    <textarea id="tweet" placeholder="What's happening?" />
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