
// MainLayout.js
import { Outlet } from "react-router-dom";

import Footer from "../components/common/Footer";
import Header from "../components/common/Header/Header";



// এই লেআউটে কোনো ধরনের লোডিং লজিক বা setTimeout থাকবে না।
const MainLayout = () => {
  return (
    <div className="aurora-background overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        {/* এখানে HomePage বা অন্যান্য পেজ সরাসরি রেন্ডার হবে */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;