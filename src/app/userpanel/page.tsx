"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UserPanel() {
  const router = useRouter();

  useEffect(() => {
    router.push("/userpanel/dashboard");
  }, [router]);

  return null;
}
