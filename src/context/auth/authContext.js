import React, { createContext, useReducer } from 'react';
// import { AES, enc } from 'crypto-js';

export const AuthContext = createContext();

let initialState = localStorage.getItem('auth');
if (initialState) {
  const userData = JSON.parse(initialState);
  initialState = userData;
} else {
  initialState = null;
}

const setToLocalStorage = (data) => {
  const userObj = { user: data.customer, jwt: data.accessToken };
  const ciphertext = JSON.stringify(userObj);
  localStorage.setItem('auth', ciphertext);
};

export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOGIN':
      setToLocalStorage(payload);
      console.log(payload, 'dispatched');
      return {
        ...state,
        user: payload.customer,
        jwt: payload.accessToken,
      };

    case 'LOGOUT':
      return {
        ...state,
        user: null,
        jwt:null
      };

      case 'UPDATE':
      return {
        ...state,
        user: {
          ...state.user,
          ...payload,
        },
      }

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
