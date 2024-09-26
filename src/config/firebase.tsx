import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = JSON.parse(import.meta.env.FB_CONFIG);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export functions 
export const auth = getAuth(app);
export const analytics = getAnalytics(app);