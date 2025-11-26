import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Routes from './Routes';
import Page from './components/Page';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getRemoteConfig } from "firebase/remote-config";
import { getValue } from "firebase/remote-config";
import { fetchAndActivate } from "firebase/remote-config";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: (import.meta as any).env.VITE_FIREBASE_API_KEY,
  authDomain: "test-project-aac6d.firebaseapp.com",
  projectId: "test-project-aac6d",
  storageBucket: "test-project-aac6d.firebasestorage.app",
  messagingSenderId: "921750506680",
  appId: "1:921750506680:web:07811cd9f82d263092384d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const remoteConfig = getRemoteConfig(app);

const AOSRouteRefresher = (): null => {
  const location = useLocation();
  React.useEffect(() => {
    try {
      AOS.refresh();
    } catch {
      /* noop */
    }
  }, [location.pathname]);
  return null;
};


const App = (): JSX.Element => {
  
  // const books = getValue(remoteConfig, "BOOKS_JSON");
  // console.log(books)

  useEffect(()=> {
    fetchAndActivate(remoteConfig)
  .then(() => {
    const books = getValue(remoteConfig, "BOOKS_JSON").asString();
    const data = JSON.parse(books);
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  });
  },[]
)
console.log('hello')

  return (
    <Page>
      <BrowserRouter>
        <Routes />
        <AOSRouteRefresher />
      </BrowserRouter>
    </Page>
  );
};

export default App;