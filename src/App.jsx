import React from "react";
import AppRouter from "./router/AppRouter";
import { FoodProvider } from "./context/FoodContext";
import './App.css'

function App() {
  return (
    <FoodProvider>
      <AppRouter />
    </FoodProvider>
  )
}

export default App
