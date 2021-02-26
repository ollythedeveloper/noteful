import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NotePageMain from './NotePageMain'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
        <NotePageMain />
    </BrowserRouter>, 
    div
    );
    ReactDOM.unmountComponentAtNode(div);
});