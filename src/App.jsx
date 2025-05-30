import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Tasks from "./pages/Tasks.jsx";
import Team from "./pages/Team.jsx";
import Profile from "./pages/Profile.jsx";
import About from "./pages/About.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Recharge from "./pages/Recharge.jsx";
import TaskDetail from "./pages/TaskDetail.jsx";
import Home from "./pages/Home.jsx";
import Transaction from "./pages/Transaction.jsx";
import Confirm from "./pages/Confirm.jsx";
import Admin from "./pages/Admin.jsx";
import Maintenance from "./pages/Maintenance.jsx";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Maintenance />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/confirm-payment"
        element={
          <ProtectedRoute>
            <Confirm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tasks"
        element={
          <ProtectedRoute>
            <Tasks />
          </ProtectedRoute>
        }
      />
      <Route
        path="/team"
        element={
          <ProtectedRoute>
            <Team />
          </ProtectedRoute>
        }
      />
      <Route
        path="/me"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/transactions"
        element={
          <ProtectedRoute>
            <Transaction />
          </ProtectedRoute>
        }
      />
      <Route
        path="/power-page"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route
        path="/details/:id"
        element={
          <ProtectedRoute>
            <TaskDetail />
          </ProtectedRoute>
        }
      />
      {/* Wildcard route for handling undefined pages */}
      {/* <Route path="*" element={<Maintenance />} /> */}
      <Route path="*" element={<SignIn />} />
    </Routes>
  );
}

export default App;
