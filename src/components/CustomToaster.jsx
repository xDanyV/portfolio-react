import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function CustomToaster() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <Toaster
      position={isMobile ? "top-center" : "top-right"}
      gutter={12}
      containerStyle={{
        top: 20,
        left: 16,
        right: 16,
      }}
      toastOptions={{
        duration: 3000,
        style: {
          background: "#030712",
          color: "#ffffff",
          borderRadius: "18px",
          padding: "14px 18px",
          fontWeight: 600,
          border: "1px solid rgba(255, 255, 255, 0.10)",
          boxShadow: "0 20px 45px rgba(15, 23, 42, 0.25)",
          maxWidth: "420px",
        },
        success: {
          iconTheme: {
            primary: "#2563eb",
            secondary: "#ffffff",
          },
        },
        error: {
          style: {
            background: "#7f1d1d",
            color: "#ffffff",
            border: "1px solid rgba(248, 113, 113, 0.35)",
          },
          iconTheme: {
            primary: "#ffffff",
            secondary: "#7f1d1d",
          },
        },
      }}
    />
  );
}