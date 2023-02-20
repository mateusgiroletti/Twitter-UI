import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";

import "./index.css";

const answer = [
    "Concordo...",
    "Faz sentido",
    "Parabéns pelo progresso."
];

export function Status() {
    return (
        <main className="status">
            <Header title="Tweet" />

            <Tweet content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, alias? Ipsam minus esse nemo sapiente optio perferendis sunt voluptatibus consequuntur! Officiis numquam ipsam blanditiis earum, omnis ad dolores delectus rerum!" />

            <Separator />

            <form action="" className="answer-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://github.com/mateusgiroletti.png" alt="Mateus Giroletti" />
                    <textarea id="tweet" placeholder="What's happening?" />
                </label>

                <button type="submit">Answer</button>
            </form>

            {
                answer.map((content, index) => {
                    return <Tweet key={index} content={content} />;
                })
            }
        </main>
    );
}