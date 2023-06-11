import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.varname,
    authDomain: import.meta.env.varname,
    projectId: import.meta.env.varname,
    storageBucket:import.meta.env.varname ,
    messagingSenderId: import.meta.env.varname,
    appId:import.meta.env.varname ,
    measurementId: import.meta.env.varname


};


const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app)

export default app
