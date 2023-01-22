import { ClientHomePage } from "./screens/ClientHomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./screens/LandingPage";
import ScrollToTop from "./components/ScrollToUp/ScrollToUp";
import ForgotPasswordPage from "./screens/ForgotPasswordPage";
import EmailVerificationPage from "./screens/EmailVerificationPage";
import ContactusPage from "./screens/ContactusPage";
import AboutUsPage from "./screens/AboutUsPage";
import { ResetPassword } from "./screens/ResetPassword";
import ClientPreview from "./components/ClientPreview/ClientPreview";
import UploadForm from "./components/UpdateForm/UpdateForm";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {LoginPage} from './screens/LoginPage.js'
import ClientProfilePage from "./screens/ClientProfilePage";
import {CompareCandidatesPage} from './screens/CompareCandidatesPage' 
import CompanyDetails from "./components/company/Infromations/CompanyDetails";
import DashboardCompany from "./components/company/Dashboard/DashboardCompany";

function App() {
  return (
    <div>
      <ScrollToTop />
<Router>
      <Header />
      <Routes>
        <Route exact path="/forgot" element={< ForgotPasswordPage />} />
      </Routes>
      <Routes>
        <Route exact path="/client-profile" element={< ClientProfilePage />} />
      </Routes>
      <Routes>
        <Route exact path="/update-form" element={< UploadForm />} />
      </Routes>
      <Routes>
        <Route exact path="/preview-client" element={< ClientPreview />} />
      </Routes>
      <Routes>
        <Route exact path="/about" element={< AboutUsPage />} />
      </Routes>
      <Routes>
        <Route exact path="/email-varification" element={< EmailVerificationPage />} />
      </Routes>
      <Routes>
        <Route exact path="/contact" element={< ContactusPage />} />
      </Routes>
      <Routes>
        <Route exact path="/client" element={< ClientHomePage />} />
      </Routes>
      <Routes>
        <Route exact path="/resetPassword" element={< ResetPassword />} />
      </Routes>
      <Routes>
          <Route exact path="/CompareCandidates" element={<CompareCandidatesPage />} />
        </Routes>
      <Routes>
          <Route exact path="/clientLogin" element={<LoginPage />} />
        </Routes>
      <Routes>
          <Route exact path="/companyLogin" element={<LoginPage />} />
        </Routes>
        <Routes>
          <Route exact path="/companyDetails" element={<CompanyDetails />} />
        </Routes>
        <Routes>
          <Route exact path="/dashboardCompany" element={<DashboardCompany />} />
        </Routes>
      <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
