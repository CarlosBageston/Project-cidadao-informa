import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBmLJc1iUNRJ8g0HyJqWrM8cQrqidKwOEU',
    authDomain: 'epdv-185f6.firebaseapp.com',
    projectId: 'epdv-185f6',
    storageBucket: 'epdv-185f6.appspot.com',
    messagingSenderId: '575178624265',
    appId: '1:575178624265:web:949cfedd4db159c7b357d8',
    measurementId: 'G-LCV37H6TXK',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
