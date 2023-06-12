import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import ClothingItemsScreen from "./components/ClothingItemsScreen";
import SavedSetsScreen from "./components/SavedSetsScreen";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<HomeScreen />} />
                <Route path="/items/:type" element={<ClothingItemsScreen />} />
                <Route path="/saved-sets" element={<SavedSetsScreen />} />
            </Routes>
        </Router>
    );
}

export default App;
