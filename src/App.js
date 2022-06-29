import React from "react";
import ComponentC from "./components/useContext/ComponentC";
import DataFetching from "./components/useEffetct/DataFetching";
import IndividualPost from "./components/useEffetct/IndividualPost";
import RandomUser from "./components/useEffetct/RandomUser";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {

  return (
    <div className="container">
      <UserContext.Provider value={"Amal"}>
        <ChannelContext.Provider value={"Shalabi"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      {/* <RandomUser/> */}
      {/* <DataFetching/> */}
      {/* <IndividualPost/> */}
    </div>
  );
}

export default App;
