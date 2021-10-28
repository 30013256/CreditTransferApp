import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const app = initializeApp({
    apiKey: "AIzaSyC98K3u8zWnp-Ty9tFh-87gk2WSYuYzkNI",
    authDomain: "credit-app-f851a.firebaseapp.com",
    projectId: "credit-app-f851a",
    storageBucket: "credit-app-f851a.appspot.com",
    messagingSenderId: "883021461933",
    appId: "1:883021461933:web:26e5ec13faf6664a4f4924"
});

export const auth = getAuth(app);