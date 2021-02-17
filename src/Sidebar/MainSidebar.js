import React from 'react';
import { Link } from 'react-router-dom';
import STORE from '../dummy-store';

export default function MainSidebar() {
    console.log(STORE.folders)
    return (
        <>
            <ul className="MainSidebar">
                {STORE.folders.map(folder =>
                    <li key={folder.id}>
                        <Link to={`/folder/${folder.id}`}>
                            {folder.name}
                        </Link>
                    </li>
                )}
            </ul>
        </>
    )
}