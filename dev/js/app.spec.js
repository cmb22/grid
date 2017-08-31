import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';


import App from './app';

/*
    it('should mount in a full DOM', () => {
        shallow(<App />)
    });
*/



it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});
