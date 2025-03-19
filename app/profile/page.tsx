import NavBar from "../_components/navbar";
import { auth, clerkClient } from "@clerk/nextjs/server";
import LatestReadings from "./_components/latest-readings";
import Image from "next/image";
import { notFound } from "next/navigation";

const ProfilePage = async () => {
  const { userId } = await auth();

  if (!userId) {
    return notFound();
  }

  const user = await clerkClient.users.getUser(userId);

  if (!user) {
    <div>Carregando...</div>;
  }

  const registrationDate = user.createdAt;
  const registrationYear = new Date(registrationDate).getFullYear();

  return (
    <div className="grid h-screen grid-cols-[1fr_3fr_2fr]">
      <NavBar />
      <div className="ml-24 mt-16">
        <LatestReadings />
      </div>
      <div className="mx-auto ml-32 mt-36 flex flex-col">
        <div className="text-center">
          <Image
            src={user.imageUrl}
            width={72}
            height={72}
            alt={`Imagem do usuário ${user.firstName}}`}
            className="mx-auto mb-3 rounded-full border border-green-100"
          />
          <h2 className="text-2xl font-semibold">{user.fullName}</h2>
          <p className="text-sm text-gray-400">
            membro desde: {registrationYear}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
