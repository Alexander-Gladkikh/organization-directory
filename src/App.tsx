import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import OrganizationPage from "./pages/OrganizationPage";
import EmployeePage from "./pages/EmployeePage";
import { Provider } from "react-redux";
import { store } from "./store";

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/organizations" replace />} />
        <Route path="/organizations/*" element={<OrganizationPage />} />
        <Route
          path="/organizations/:organizationId/employees/*"
          element={<EmployeePage />}
        />
      </Routes>
    </Router>
  </Provider>
);

export default App;
