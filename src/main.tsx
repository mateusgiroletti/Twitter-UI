import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";

import { Tweet } from "./components/Tweet";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <div className="layout">
            <Sidebar />

            <div className="content">
                <main className="timeline">
                    <Header title="Home" />

                    <form action="" className="new-tweet-form">
                        <label htmlFor="tweet">
                            <img src="https://github.com/mateusgiroletti.png" alt="Mateus Giroletti" />
                            <textarea id="tweet" placeholder="What's happening?" />
                        </label>

                        <button type="submit">Tweet</button>
                    </form>
                </main>

                <div className="separator" />

                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />

            </div>

        </div>
    </React.StrictMode>,
);
