"use client";
import { useEffect, useState } from "react";
import { getUserProfile } from "../utils/api/users";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("access");
      if (token) {
        try {
          const userData = await getUserProfile(token);
          setUser(userData);
        } catch (error) {
          console.error("Failed to fetch user profile", error);
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  return { user, loading };
};

export default useAuth;
