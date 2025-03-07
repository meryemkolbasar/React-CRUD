import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react"; // PersistGate import et
import { store, persistor } from "./store"; // store ve persistor'ı import et
import HomePage from "./pages/HomePage";
import AddUserForm from "./components/AddUserForm.jsx";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {" "}
      {/* PersistGate ile sar */}
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user/:id" element={<UserDetail />} />
            <Route path="/adduserform" element={<AddUserForm />} />
          </Routes>
        </div>
      </Router>
    </PersistGate>
  );
}

export default App;
