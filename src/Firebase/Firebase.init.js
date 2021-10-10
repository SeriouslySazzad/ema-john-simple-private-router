import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;




/* 

Steps for Authentication  
--------------------------------
Step 01 : Initial set up 
1. firebase : create project
2. Create web app
3. get configuration
4. initialize firebase
5. Enable auth method
-------------------------------

Step 02 : set up component
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register
-----------------------------------

Step 03 : set auth system
1. Setup login method
2. set up sign out method
3. user state
4. special observer
5. return necessary methods and states from useFirebase
-------------------------------

Step 04 : create auth context (useAuth)
1. create a auth context
2. create context provider
3. set context provider value
4. use auth provider
5. create use auth hook
------------------------------------

Step 05 : create private route
1. Create Private Route
2. Set Private Route

--------------------------------------

Step 06 : Redirect after login
1. after login redirect user to their dersired destination


*/