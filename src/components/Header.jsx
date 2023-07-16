// Header.js
import React from 'react';
import useSidebarState from './useSidebarState';
import { Justify } from 'react-bootstrap-icons';

function Header() {
    const { xValue, toggleXValue } = useSidebarState();

    return (
        <>
            <header>
                <a onClick={toggleXValue} href="#" className="burger-btn d-block d-xl-none">
                    <Justify />
                </a>
            </header>

            <div className="page-heading">
                <p>HI Oriza Sativa!</p>
                <h3>What Will You Learn Today</h3>
            </div>
        </>
    );
}

export default Header;
