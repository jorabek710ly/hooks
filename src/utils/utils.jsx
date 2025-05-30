// components/SuspenseCustom.jsx
import { Suspense } from "react";
import "../styles/loader.css"; // Stilini import qilamiz

const LoadingSuspense = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white z-50">
      <div className="loader"></div>
    </div>
  );
};

export const SuspenseCustom = ({ children }) => {
  return <Suspense fallback={<LoadingSuspense />}>{children}</Suspense>;
};
