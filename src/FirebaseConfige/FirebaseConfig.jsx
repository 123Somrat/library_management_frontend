import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


 console.log(import.meta.env.VITE_APIKEY)


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyCA-av8uM1RdYfTV1E-NU45l-ODRen05Hw",
  authDomain: "library-management-aa7c4.firebaseapp.com",
  projectId: "library-management-aa7c4",
  storageBucket: "library-management-aa7c4.appspot.com",
  messagingSenderId: "1030492689882",
  appId: "1:1030492689882:web:f0153d5d58065aebce5ce3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;