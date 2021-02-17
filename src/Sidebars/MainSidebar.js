import React from 'react';
import { Link } from 'react-router-dom';

export default function MainSidebar(folders, notes) {
    return (
        <>
            <ul className="MainSidebar">
                {folders.folders.map(folder =>
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