import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Currency from './Currency';

const btn = document.querySelector('button')
const tbl = document.getElementById("tf")

btn.addEventListener('click', () => {

    const root2 = ReactDOM.createRoot(document.getElementById('root2'));
    const root = ReactDOM.createRoot(document.getElementById('root'));
    
    root2.render(
        <Currency />
    );
    root.render(
        <App />
    );

    tbl.classList.add('displayTrue')
})
