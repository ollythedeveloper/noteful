import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header className='App__header'>
            <h1>
                <Link to='/'>Noteful</Link>
            </h1>
        </header>
    );
}