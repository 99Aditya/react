import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/Users/UserProfiles";
import AddUser from "./pages/Users/AddUser";
import Partner from "./pages/Partner/UserProfiles";
import AddPartner from "./pages/Partner/Add";
import Date from "./pages/Slot/Date/Index";
import AddDate from "./pages/Slot/Date/Add";
import Time from "./pages/Slot/Time/Index";
import AddTime from "./pages/Slot/Time/Add";
import Category from "./pages/Category/Index";
import AddCategory from "./pages/Category/Add";
import AddCategoryType from "./pages/Category/Type/Add";
import CategoryType from "./pages/Category/Type/Index";

// import FormElements from "./pages/Forms/FormElements";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route path="/" element={<SignIn />} />
          <Route element={<AppLayout />}>
          
            <Route index path="/dashboard" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/add-user" element={<AddUser />} />

            <Route path="/partner" element={<Partner />} />
            <Route path="/add-partner" element={<AddPartner />} />
            
            <Route path="/slot-date" element={<Date />} />
            <Route path="/add-slot-date" element={<AddDate />} />
            <Route path="/slot-time" element={<Time />} />
            <Route path="/add-slot-time" element={<AddTime />} />
      
            <Route path="/category" element={<Category />} />
            <Route path="/add-category" element={<AddCategory />} />

            <Route path="/category-type" element={<CategoryType />} />
            <Route path="/add-category-type" element={<AddCategoryType />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
