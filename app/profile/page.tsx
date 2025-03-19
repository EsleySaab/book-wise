import NavBar from "../_components/navbar";
import { auth, clerkClient } from "@clerk/nextjs/server";
import LatestReadings from "./_components/latest-readings";
import { notFound } from "next/navigation";
import Profile from "./_components/profile";

const ProfilePage = async () => {
  const { userId } = await auth();

  if (!userId) {
    return notFound();
  }

  const user = await clerkClient.users.getUser(userId);

  if (!user) {
    <div>Carregando...</div>;
  }

  return (
    <div className="grid h-screen grid-cols-[1fr_3fr_2fr]">
      <NavBar />
      <div className="ml-24 mt-16">
        <LatestReadings />
      </div>
      <div className="mx-auto ml-32 mt-36 flex flex-col">
        <Profile />
      </div>
    </div>
  );
};

export default ProfilePage;
