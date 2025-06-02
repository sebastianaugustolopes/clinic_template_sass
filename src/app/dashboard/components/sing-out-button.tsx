"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/authentication");
  };

  return <Button onClick={handleSignOut}>Sair</Button>;
};
