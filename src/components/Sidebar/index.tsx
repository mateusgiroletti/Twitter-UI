import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle } from "phosphor-react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.svg";
import "./index.css";

export function Sidebar() {
    return (
        <aside className="sidebar">
            <img className="logo" src={logo} alt="Logo" />

            <nav className="main-navigation">
                <NavLink to="/" >
                    <House weight="fill" />
                    Home
                </NavLink>
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
    );
}