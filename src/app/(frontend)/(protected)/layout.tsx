"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/shared/Loading";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [hydrated, setHydrated] = useState(false);
  const user = typeof window !== "undefined" && localStorage.getItem("user");

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login"); // Redirect to login page if not authenticated
    }
  }, [user, router]);

  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  return !user ? Loading : children;
};

export default ProtectedRoute;
