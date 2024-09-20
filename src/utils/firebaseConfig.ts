import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

// const firebaseConfig = {
//     apiKey: "AIzaSyD23E6djYvzjNPu3Oqgn_6OttrusrgabzM",
//     authDomain: "projeto-feteps.firebaseapp.com",
//     databaseURL: "https://projeto-feteps-default-rtdb.firebaseio.com",
//     projectId: "projeto-feteps",
//     storageBucket: "projeto-feteps.appspot.com",
//     messagingSenderId: "754643098343",
//     appId: "1:754643098343:web:0d76d9a532ddc6f4c42042",
//     measurementId: "G-CPSQWN63SR"
//   };

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASEURL,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID
}

export const app = initializeApp(firebaseConfig);
  
export const database = getDatabase(app);

export const dataRef = ref(database, "/");
export const tampinhasRef = ref(database, "/tampinhas");
export const totalRef = ref(database, '/total')