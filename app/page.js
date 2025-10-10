"use client";
import { dashboardStats } from "../data/dashboardStats";
import Card from "../components/Card";
import { useEffect } from "react";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard");
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="font-extrabold">Loading</h1>
    </div>
  );
}
