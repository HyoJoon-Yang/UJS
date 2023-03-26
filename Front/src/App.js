import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnimatePresence } from "framer-motion";

import Main from "./pages/Main.js";
import LogIn from "./pages/LogIn.js";
import SignUp from "./pages/SignUp.js";
import Comparison from "./pages/Comparison.js";
import Account from "./pages/Account.js";
import UserList from "./pages/UserList.js";
import UserRank from "./pages/UserRank.js";
import First from "./pages/First.js";
import Commu from "./pages/Commu.js";
import Notice from "./pages/Notice.js";
import Faq from "./pages/Faq.js";
import CommuDetail from "./pages/CommuDetail.js";
import CommuPostForm from "./pages/CommuPostForm.js";
import "./styles/App.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/account" element={<Account />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/user-rank" element={<UserRank />} />
          <Route path="/first" element={<First />} />
          <Route path="/commu" element={<Commu />} />
          <Route path="/post-form" element={<CommuPostForm />} />
          {/* <Route path="/commu/commu-detail/:id" element={<CommuDetail />} /> */}
          <Route path="/commu-detail" element={<CommuDetail />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;