import React from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import styled from 'styled-components';

const logo = require("../assets/images/nav-logo.webp")

const StyledNavbar = styled.div`
    position: relative;
    width: 100%;
    min-height: 82px;
    box-shadow: 0px 5px 20px 10px rgba(0, 0, 0, 0.7);

    #nav-flex-elements {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        margin: 0 auto;
        max-width: 75%;
        min-height: 50px;
        justify-content: center;
        align-items: center;
    }

    #nav-balance-logo {
        visibility: hidden;
    }

    #nav-links {
        display:flex;
    }

    #nav-links > a {
        font-family: 'Lulo-Clean';
        white-space: nowrap;
        width: 180px;
        text-align: center;
    }

    #nav-links a:hover {
        color: #ffd801;
        transition: color 500ms
    }

    #nav-links a:not(:hover) {
        color: #000;
        transition: color 500ms
    }

    #nav-yellow-bar {
        position: absolute;
        background: #ffd801;
        width: 100%;
        height: 6px;
        bottom: 0;
    }

    @media all and (max-width: 1000px) {
        #nav-logo-link{
            margin-left: 0px;
            left: 0px;
        }
        #nav-links > a {
            display: none;
        }
        #nav-balance-logo {
            display:none;
        }
    }
`

export default function Navbar() {

    return(
        <StyledNavbar id = 'main-nav'>
            <div id = 'nav-flex-elements'>
                <a href = '/' id = "nav-logo-link">
                    <img src = { logo } id = 'nav-logo' alt="Alex's Logo, two sideways A's formatted similar to HTML tags"></img>
                </a>
                <div id = 'nav-links'>
                    <Link activeClass = "active" to = '/' spy={ true } smooth = { true }>Home</Link>
                    <Link to = 'resumePanel' spy={ true } smooth = { true }>Resume</Link>
                    <Link to = 'portfolioPanel' spy={ true } smooth = { true }>Portfolio</Link>
                    <Link to = 'contactPanel' spy={ true } smooth = { true }>Contact</Link>
                    <Link to = 'stay-updated' spy={ true } smooth = { true }>Stay Updated</Link>
                </div>
                <img src = { logo } id = 'nav-balance-logo' alt="Alex's Logo, two sideways A's formatted similar to HTML tags"></img>
            </div>
            <div id = 'nav-yellow-bar'></div>
        </StyledNavbar>
    )
}