import { Route, Routes } from "react-router-dom";
import LinkBioPage from "./pages/LinkBioPage.tsx";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<LinkBioPage />} />
  </Routes>
);

export default AppRoutes;
