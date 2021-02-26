import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CircleButton from './CircleButton'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
        <CircleButton />
    </BrowserRouter>, 
    div
    );
    ReactDOM.unmountComponentAtNode(div);
});