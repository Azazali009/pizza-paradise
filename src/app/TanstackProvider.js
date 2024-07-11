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
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 8000,
          },
          style: {
            fontSize: "14px",
            maxWidth: "500px",
            padding: "12px 24px",
            fontWeight: "500",
            background: "#519D51",
            borderRadius: "50px",
            // color: "rgb(33, 21, 21)",
            color: "#fff",
          },
        }}
      />
      {children}
    </QueryClientProvider>
  );
};

export default TanstackProvider;
