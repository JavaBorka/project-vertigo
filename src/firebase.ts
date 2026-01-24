import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'test-project-aac6d.firebaseapp.com',
  projectId: 'test-project-aac6d',
  storageBucket: 'test-project-aac6d.firebasestorage.app',
  messagingSenderId: '921750506680',
  appId: '1:921750506680:web:07811cd9f82d263092384d',
};

export const app = initializeApp(firebaseConfig);
