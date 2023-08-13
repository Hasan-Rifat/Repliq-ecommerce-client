// components/ProtectedRoute.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/shared/Loading";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = typeof window !== "undefined" && localStorage.getItem("user");

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login"); // Redirect to login page if not authenticated
    }
  }, [user, router]);

  return !user ? Loading : children;
};

export default ProtectedRoute;
