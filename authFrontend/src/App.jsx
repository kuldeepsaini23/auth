import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";
import Verify from "./Components/Verify";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "//protected-route",
    element: (
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <ProtectedRoute />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div className="w-full h-full flex flex-col gap-y-10">
        <Navbar />
        <Login />
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div className="w-full h-full flex flex-col gap-y-10">
        <Navbar />
        <Signup />
      </div>
    ),
  },

  {
    path: "/verify",
    element: (
      <div className="w-full h-full flex flex-col gap-y-10">
        <Navbar /> 
        <Verify />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
