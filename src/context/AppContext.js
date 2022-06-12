import React, { useState, useEffect } from "react";
import { realTimeDb } from "../firebase";
import { ref, set, onValue } from "firebase/database";
// import PROPERTIES from "../data/properties";

export const Context = React.createContext(null);

const AppContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [homes, setHomes] = useState([]);

  const initAuthUser = () => {
    const authenticatedUser = localStorage.getItem("auth");
    if (authenticatedUser) {
      setUser(JSON.parse(authenticatedUser));
    }
  };

  const initHomes = () => {
    // Write default homes to Firebase realTime db
    // PROPERTIES.map((property, idx) => {
    //   const homeRef = ref(realTimeDb, "homes/" + idx);
    //   set(homeRef, property);
    // });

    // Set default list of homes in state
    const homesRef = ref(realTimeDb, "homes");
    onValue(homesRef, (snapshot) => {
      let homes = [];
      snapshot.forEach((childSnapshot) => {
        let key = childSnapshot.key;
        let data = childSnapshot.val();
        homes.push({ key: key, data: data });
      });
      setHomes(homes);
    });
  };

  useEffect(() => {
    initAuthUser();
    initHomes();
  }, []);

  // TO DO: Define function to update user and home data here, and pass down via context

  return (
    <Context.Provider value={{ user: user, homes: homes }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;
