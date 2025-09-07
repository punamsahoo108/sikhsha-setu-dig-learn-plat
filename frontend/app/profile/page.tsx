"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  username: string;
  email: string;
};

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:3001/profile", {
          method: "GET",
          credentials: "include", 
        });

        if (!res.ok) {
            router.push("/login");
            return;
          }

        const data = await res.json();
        setUser(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="profileBody">
      <h2>Profile</h2>
      {user ? (
        <div>
          <div>Username: {user.username}</div>
          <div>Email: {user.email}</div>
        </div>
      ) : (
        <p>No user data found</p>
      )}
    </div>
  );
};

export default ProfilePage;
