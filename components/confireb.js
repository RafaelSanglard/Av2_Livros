// Import the functions you need from the SDKs you need
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { initializeApp } from "firebase/app";
implementation(platform("com.google.firebase:firebase-bom:32.5.0"))
implementation("com.google.firebase:firebase-firestore")

const db = firestore(); // Get the Firestore instance


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyDYLhxcIz-cy8GjjyWPpRa4k-DodF0CQp4',

  authDomain: 'livrariaav2-d4e42.firebaseapp.com',

  projectId: 'livrariaav2-d4e42',

  storageBucket: 'livrariaav2-d4e42.appspot.com',

  messagingSenderId: '584066534297',

  appId: '1:584066534297:web:40084153162ab89b4d6108',

  measurementId: 'G-49S60D99VK',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
