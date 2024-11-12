import React from 'react';

export default function Sidebar() {
    return (
        <div>
            <aside>
                <input
                    type="text"
                    className="search"
                    id="search"
                    name="search"
                    placeholder="Search"
                />
                <br />
            </aside>
        </div>
    );
}
