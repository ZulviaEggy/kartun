import React from 'react';
import ReactDOM from 'react-dom';
import './custom.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const items = [
    {
        name : 'Larva',
        color :'Merah',
        img : 'Larva.png'
    },
    {
        name : 'Minion',
        color : 'Kuning',
        img : 'Minion.jpg'
    },
    {
        name : 'Green',
        color : 'Hijau',
        img : 'Green.png'
    } ,
    {
        name : 'Doraemon',
        color : 'Biru',
        img : 'Doraemaon.png'
    },
    ];

ReactDOM.render(<App items={items}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
