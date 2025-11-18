import type { PropsWithChildren } from "react";
import { Navigate } from "react-router";
import { useAuthStore } from "./../store/user-store";

export function ProtectedRoute({ children }: PropsWithChildren) {
  const user = useAuthStore((s) => s.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
