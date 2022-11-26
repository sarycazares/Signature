import React,{ createContext, useState } from "react";

const SessionContext = React.createContext([{}, () => {}]);

const initialSession = false;
let accessToken;
sessionStorage.setItem("token", "123");

const SessionProvider = (props) => {
  const [session, setSession] = useState(initialSession);

  accessToken = sessionStorage.getItem ("token");

  if (accessToken == null) {
    setSession(false);
  } else {
    setSession(true);
  }


  return (
    <SessionContext.Provider value={[session, setSession]}>
      {props.children}
    </SessionContext.Provider>
  );
}

export { SessionContext, SessionProvider };