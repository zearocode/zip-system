
import './App.css'
import Demo from './Components/Demo'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import postalCodeReducer from "./Services/PostalSlice";

function App() {

  const store = configureStore({
    reducer: {
      postalCode: postalCodeReducer,
    },
  });

  return (
    <Provider store={store}>
    <div>
    
  
    <Demo />
    </div>
    </Provider>
      
  )
}

export default App
