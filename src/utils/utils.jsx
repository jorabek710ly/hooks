// components/SuspenseCustom.jsx
import { Suspense } from "react";
import "./utils.css";

const LoadingSuspense = () => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center z-50">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export const SuspenseCustom = ({ children }) => {
  return <Suspense fallback={<LoadingSuspense />}>{children}</Suspense>;
};
