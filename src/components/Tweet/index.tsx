import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";

import "./index.css";

interface TweetProps {
    content: string;
}

export function Tweet(props: TweetProps) {
    return (
        <a className="tweet">
            <img src="https://github.com/mateusgiroletti.png" alt="Mateus Giroletti" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Mateus Giroletti</strong>
                    <span>@user.name</span>
                </div>

                <p>
                    {props.content}
                </p>

                <div className="tweet-content-footer">
                    <button type="button">
                        <ChatCircle />
                        20
                    </button>

                    <button type="button">
                        <ArrowsClockwise />
                        20
                    </button>

                    <button type="button">
                        <Heart />
                        20
                    </button>
                </div>
            </div>
        </a>
    );
}