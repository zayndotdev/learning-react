import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout, About, Contact, User, Github } from "./components";
import { githubLoader } from "./components/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<Github />} loader={githubLoader} />
      <Route path="user/:userId" element={<User />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
