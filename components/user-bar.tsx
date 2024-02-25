import { authOptions } from "@/lib/session";
import { getServerSession } from "next-auth";
import Image from "next/image";

const UserBar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex items-center gap-2">
      {session?.user?.image ? (
        <Image
          src={session?.user?.image as string}
          alt={session?.user?.name as string}
          width={40}
          height={40}
          className="rounded-full w-9 h-9 md:w-10 md:h-10 border border-stone-50 border-opacity-20"
        />
      ) : (
        <div className="w-9 h-9 md:w-10 md:h-10 bg-neutral-800 rounded-full border border-stone-50 border-opacity-20"></div>
      )}

      <p className="hidden lg:block text-center text-primary text-base font-bold leading-none">
        {session?.user?.name}
      </p>
    </div>
  );
};

export default UserBar;
