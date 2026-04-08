// MainLayout.jsx
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/common/Footer";
import Header from "../components/common/Header/Header";
import WhatsAppButton from "../components/common/WhatsAppButton";

// Minimal inline loading fallback — no extra components needed
const PageLoader = () => (
  <div
    style={{
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        width: 48,
        height: 48,
        border: "4px solid #e5e7eb",
        borderTopColor: "#408ccb",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }}
    />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const MainLayout = () => {
  return (
    <div className="aurora-background overflow-x-hidden relative">
      <Header />
      <main className="overflow-x-hidden">
        {/* Suspense catches lazy-loaded pages while they fetch their JS chunk */}
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MainLayout;