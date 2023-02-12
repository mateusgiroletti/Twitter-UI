import React from "react";
import ReactDOM from "react-dom/client";
import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle, Sparkle } from "phosphor-react";

import "./global.css";

import logo from "./assets/logo.svg";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <div className="layout">
            <aside className="sidebar">
                <img className="logo" src={logo} alt="Logo" />

                <nav className="main-navigation">
                    <a href="" className="active">
                        <House weight="fill" />
                        Home
                    </a>
                    <a href="">
                        <Hash />
                        Explore
                    </a>
                    <a href="">
                        <Bell />
                        Notifications
                    </a>
                    <a href="">
                        <Envelope />
                        Messages
                    </a>
                    <a href="">
                        <BookmarkSimple />
                        Bookmarks
                    </a>
                    <a href="">
                        <FileText />
                        List
                    </a>
                    <a href="">
                        <User />
                        Profile
                    </a>
                    <a href="">
                        <DotsThreeCircle />
                        More
                    </a>
                </nav>

                <button className="new-tweet" type="button">
                    Tweet
                </button>
            </aside>

            <div className="content">
                <main className="timeline">
                    <div className="timeline-header">
                        Home
                        <Sparkle />
                    </div>

                    <form action="" className="new-tweet-form">
                        <label htmlFor="tweet">
                            <img src="https://github.com/mateusgiroletti.png" alt="Mateus Giroletti" />
                            <textarea id="tweet" placeholder="What's happening?" />
                        </label>

                        <button type="submit">Tweet</button>
                    </form>
                </main>
                
                <div className="separator" />
            </div>

        </div>
    </React.StrictMode>,
);
