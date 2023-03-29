import {createContext, useContext} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { useEffect , useState} from "react";
import { auth } from '../FirebaseConfig';

const userAuthContext = createContext();

export function UserAuthContextProvider({children}){

    const [user, setUser] = useState("");

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function LogIn(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }
    function LogOut(){
        signOut(auth)
    }

    useEffect(()=> {
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
       })
        
        return () =>{
            unsubscribe();
        }
    },[])
    

   return <userAuthContext.Provider value={{signUp, LogIn, user, LogOut}}>
        {children}
    </userAuthContext.Provider>
}

export function useUserAuth(){
    return useContext(userAuthContext)
}