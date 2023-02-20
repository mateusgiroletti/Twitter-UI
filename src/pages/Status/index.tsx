import { FormEvent, useState } from "react";
import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";

import "./index.css";

export function Status() {
    const [newAnswer, setNewAnswer] = useState("");
    const [answer, setAnswer] = useState([
        "Concordo...",
        "Faz sentido",
        "Parabéns pelo progresso."
    ]);

    function createNewAnswer(event: FormEvent) {
        event.preventDefault();

        setAnswer([newAnswer, ...answer]);
        setNewAnswer("");
    }

    return (
        <main className="status">
            <Header title="Tweet" />

            <Tweet content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, alias? Ipsam minus esse nemo sapiente optio perferendis sunt voluptatibus consequuntur! Officiis numquam ipsam blanditiis earum, omnis ad dolores delectus rerum!" />

            <Separator />

            <form onSubmit={createNewAnswer} className="answer-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://github.com/mateusgiroletti.png" alt="Mateus Giroletti" />
                    <textarea
                        id="tweet"
                        placeholder="What's happening?"
                        value={newAnswer}
                        onChange={(event) => {
                            setNewAnswer(event.target.value);
                        }}
                    />
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