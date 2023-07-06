import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTH,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket:process.env.REACT_APP_STORAGEBUCKET ,
    messagingSenderId: process.env.REACT_APP_MESSEAGINGSENDERID,
    appId:process.env.REACT_APP_APPID ,
    measurementId: process.env.REACT_APP_MEASUREMENTID


};


const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app)

export default app
