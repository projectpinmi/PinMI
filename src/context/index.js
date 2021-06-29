import React, { useState, createContext, useContext } from "react";
import { usePins } from '../hooks/index';

//
export const ActiveStepContext = createContext();
//when you call ASP, it will take the children (nested components in tree), 
//and use the context created to give children access to the current step state. 
export const ActiveStepProvider = ({children}) => {
    //creating state tracking variables to be passed to context provider
    const [curActiveStep, setCurActiveStep] = useState(0);
    
    return  (
        <ActiveStepContext.Provider value = {{curActiveStep, setCurActiveStep}}>
            {children}
        </ActiveStepContext.Provider>
    )
}
export const useActiveStepValue = () => useContext(ActiveStepContext);


export const PinsContext = createContext();
export const PinsProvider = ({ children }) => {
  const { pins, setPins } = usePins();
  return (
    <PinsContext.Provider value={{ pins, setPins }}>
      {children}
    </PinsContext.Provider>
  );
};
export const usePinsValue = () => useContext(PinsContext);
