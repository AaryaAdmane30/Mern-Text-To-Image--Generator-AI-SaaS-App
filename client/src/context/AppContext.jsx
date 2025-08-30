
//  Created Store and Context for User so that we can access the User from anywhere in the app without prop drilling 
 import React from "react";
import  { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user,setUser] = useState(null); // initial users arer set to null means no user 
    // useState(true); // we keep the useState true for now to show that the person has logged(and to show the ui of logged person)  in now otherwise (null) means no users


//  the X button to close to signup page 
    const [showLogin , setShowLogin] = useState(false);

    const value = {
        user,
        setUser,
        showLogin,
        setShowLogin,
    }
    return <AppContext.Provider value={value}>
        {props.children}

    </AppContext.Provider>



}
export default AppContextProvider;