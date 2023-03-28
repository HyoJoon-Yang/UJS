import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AnimatePresence } from "framer-motion";

import React from "react";
import Main from "./pages/Main";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Comparison from "./pages/Comparison";
import Account from "./pages/Account";
import UserList from "./pages/UserList";
import UserRank from "./pages/UserRank";
import First from "./pages/First";
import Commu from "./pages/Commu";
import CommuPostForm from "./pages/CommuPostForm";
import CommuDetail from "./pages/CommuDetail";
import Notice from "./pages/Notice";
import Faq from "./pages/Faq";
import PrivateRoute from "./PrivateRouter";

export default function App() {
  return (
    <Router>
      <AnimatePresence>
        <Routes>
          <Route element={<PrivateRoute authentication={true} />}>
            <Route path="/" element={<Main />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/account" element={<Account />} />
            <Route path="/user-list" element={<UserList />} />
            <Route path="/user-rank" element={<UserRank />} />
            <Route path="/first" element={<First />} />
            <Route path="/commu" element={<Commu />} />
            <Route path="/post-form" element={<CommuPostForm />} />

            <Route path="/commu-detail" element={<CommuDetail />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/faq" element={<Faq />} />
          </Route>
          <Route element={<PrivateRoute authentication={false} />}>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

// {/* <Route path="/commu/commu-detail/:id" element={<CommuDetail />} /> */}
