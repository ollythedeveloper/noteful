import React from 'react';
import { Link } from 'react-router-dom';
import STORE from '../dummy-store';

export default function FolderSidebar(folders, notes, activeFolder) {
    return (
        <>
            <ul className="FolderSidebar">
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