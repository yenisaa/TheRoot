import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./components/ui/appLayout";
import PageNotFound from "./pages/pageNotFound";
import LandingPage from "./pages/landingPage";

import ExperiencePreparing from "./pages/experiencePreparing";
import CustomisationStep1 from "./pages/customisationStep1";
import CustomisationStep2 from "./pages/customisationStep2";
import ReasonForLearning from "./pages/reasonForLearning";
import Commitment from "./pages/Commitment";
import Welcome from "./pages/Welcome";

import GetStarted1 from "./pages/getStartedpage1";
{
  /* import getStarted2 from "./pages/getStartedpage2"; */
}

import CreateAccount from "./pages/CreateAccount";
import SignIn from "./pages/SignIn";
import VerifyEmail from "./pages/VerifyEmail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>

        {/* Chiebuka */}
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="verify-email" element={<VerifyEmail />} />

        {/* Ope */}
        <Route path="customisation1" element={<CustomisationStep1 />} />
        <Route path="customisation2" element={<CustomisationStep2 />} />

        {/* Ola */}
        <Route path="getStarted1" element={<GetStarted1 />} />
        {/* <Route path="/getStarted2" element={<getStarted2 />} />*/}

        {/* Isaiah Ayomide Yenou */}
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/reason-for-learning" element={<ReasonForLearning />} />
        <Route path="/commitment" element={<Commitment />} />
        <Route path="/experience-prep" element={<ExperiencePreparing />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
