import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound';
import EditProfile from './pages/EditProfile';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Create from './pages/Create';
import UpdateProfile from './pages/UpdateProfile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/create",
    element: <Create/>,
  },
  {
    path: "/post/:id",
    element: <Post/>,
  },
  {
    path: "/all-posts",
    element: <Posts/>,
  },
  {
    path: "/profile",
    element: <EditProfile/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/update-profile",
    element: <UpdateProfile/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  },
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
