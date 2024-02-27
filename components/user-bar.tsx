import Link from "next/link";
import Image from "next/image";

import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/session";

const UserBar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex items-center gap-2 mr-2 md:mr-4">
      {session?.user?.image ? (
        <Link href="/profile">
          <Image
            src={session?.user?.image as string}
            alt={session?.user?.name as string}
            width={40}
            height={40}
            className="rounded-full w-9 h-9 md:w-10 md:h-10 border border-stone-50 border-opacity-20"
          />
        </Link>
      ) : (
        <Link href="/profile">
          <div className="w-9 h-9 md:w-10 md:h-10 bg-neutral-800 rounded-full border border-stone-50 border-opacity-20"></div>
        </Link>
      )}

      <p className="hidden lg:block text-center text-primary text-base font-bold leading-none">
        {session?.user?.name}
      </p>
    </div>
  );
};

export default UserBar;
