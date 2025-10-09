import { Toaster } from "react-hot-toast";

export default function CustomToaster() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#1f2937",
          color: "#fff",
          borderRadius: "8px",
          padding: "12px 16px",
          fontWeight: 500,
        },
        success: {
          style: { background: "#1f2937" },
          iconTheme: { primary: "#fff", secondary: "#1f2937", size: 20 },
        },
        error: {
          style: { background: "#dc2626" }, 
        },
      }}
    />
  );
}
