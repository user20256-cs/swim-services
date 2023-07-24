import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from './Components/AboutUs';
import Blogs from './Components/Blogs';
import ContactUs from './Components/ContactUs';
import Faqs from './Components/Faqs';
import Home from './Components/Home'
import Lessons from './Components/Lessons';
import Registration from './Components/Registration';
import Footer from './Components/Footer'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/lessons",
      element: <Lessons />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
    {
      path: "/faqs",
      element: <Faqs />,
    },
  ]);


  return (
    <>

      <div className="App">
        <RouterProvider router={router} />
      </div>

      <Footer />
    </>
  );
}

export default App;
