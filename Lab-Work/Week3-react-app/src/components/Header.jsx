import React from 'react';

export default function Header() {
    return (
        <div>
            <div>
                <img src="/Users/zubayr/Documents/CS2001/CS2001-Resources/Lab-Work/Week3-react-app/src/assets/SharingFood.jpg" alt="Ironhack logo" />
            </div>
            <nav>
                <ul className="navlist">
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/Register">Register</a></li>
                    <li><a href="/Login">Login</a></li>
                    <li><a href="/Help">Help</a></li>
                </ul>
            </nav>
        </div>
    );
}
