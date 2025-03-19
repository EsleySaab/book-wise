import { auth, clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import UserInformations from "./user-informations";

const Profile = async () => {
  const { userId } = await auth();
  if (!userId) {
    return notFound();
  }

  const user = await clerkClient.users.getUser(userId);

  const registrationDate = user.createdAt;
  const registrationYear = new Date(registrationDate).getFullYear();

  return (
    <div className="border-l-2 border-white border-opacity-5 pl-8">
      <div className="text-center">
        <Image
          src={user.imageUrl}
          width={72}
          height={72}
          alt={`Imagem do usuário ${user.firstName}}`}
          className="mx-auto mb-3 rounded-full border border-green-100"
        />
        <h2 className="text-2xl font-semibold">{user.fullName}</h2>
        <p className="mb-8 text-sm text-gray-400">
          membro desde: {registrationYear}
        </p>
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <span className="mx-auto mb-8 block w-8 rounded-full border-b-4 border-blue-300"></span>
      </div>

      <div className="space-y-10">
        <UserInformations />
      </div>
    </div>
  );
};

export default Profile;
