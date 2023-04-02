import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "src/lib/useUser";

interface IProtectedPageProps {
  children: React.ReactNode;
}

export default function ProtectedPage({ children }: IProtectedPageProps) {
  const { isLoggedIn, userLoading } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userLoading) {
      if (!isLoggedIn) {
        navigate("/first");
      }
    }
  }, [userLoading, isLoggedIn, navigate]);
  return <>{children}</>;
}
