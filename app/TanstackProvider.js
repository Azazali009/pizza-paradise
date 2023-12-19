"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
const TanstackProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "8px", fontFamily: "Poppins" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "8px 24px",
            fontWeight: "500",
            background: "white",
            color: "rgb(33, 21, 21)",
          },
        }}
      />
      {children}
    </QueryClientProvider>
  );
};

export default TanstackProvider;
