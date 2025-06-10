import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import DoctorsPage from "../doctors/page";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/authentication");
  }
  if (!session.user.clinic) {
    redirect("/clinic-form");
  }
  return (
    <div>
      <DoctorsPage />
    </div>
  );
};

export default DashboardPage;
