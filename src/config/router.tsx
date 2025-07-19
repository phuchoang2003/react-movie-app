import { createBrowserRouter } from "react-router";
import App from "../App";
import SignIn from "../components/pages/SignInPage";

// Import your pages here
// import Home from '../pages/Home';
// import About from '../pages/About';
// import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);
