import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { GlobalProvider } from "./global-context/GlobalContext";
import MainLayout from "./Layouts/MainLayout";
import CollectionPage from "./pages/CollectionPage";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import NotFoundPage from "./pages/NotFoundPage";
import Container from "./components/product-preview/Container";
import LoginSignUp from "./components/user/LoginSignUp";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/dashboard" element={<Dashboard />}></Route>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<CollectionPage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/container" element={<Container />} />
          <Route path="/login-sign-up" element={<LoginSignUp />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </>
    )
  );
  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
}

export default App;
