// setup data layer
// we need this to track the cart

import React, {createContext, useContext,useReducer} from 'react'

// Data layer
export const StateContext = createContext();

//Build the provider 
export const  StateProvider= ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>

)

export const useStateValue =() => useContext(StateContext)