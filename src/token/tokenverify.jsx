import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { tokenvfy } from "../api/token.ck";

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) {
        setIsAuth(false);
        setLoading(false);
        return;
      }

      try {
        const res = await tokenvfy(token);
        if (res.data?.bolien) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (err) {
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Optional: spinner rakhte paro
  }

  return isAuth ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
