import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import { db } from "../db";
import { usersToClinicsTable } from "../db/schema";
import { SignOutButton } from "./components/sing-out-button";
const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/authentication");
  }

  // Catch the user's clinic
  const clinics = await db.query.usersToClinicsTable.findMany({
    where: eq(usersToClinicsTable.userId, session.user.id),
  });

  // If the user doesn't have a clinic, redirect to the clinic form
  if (clinics.length === 0) {
    redirect("/clinic-form");
  }

  return (
    <div>
      <h1>{session.user.name}</h1>
      <h1>{session.user.email}</h1>
      <Image
        src={session.user.image || ''}
        alt={session.user.name || ''}
        width={100}
        height={100}
      />
      <SignOutButton />
    </div>
  );
};

export default DashboardPage;
