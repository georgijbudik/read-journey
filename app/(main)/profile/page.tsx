import HintSection from "../library/_components/hint-section";
import UserForm from "./_components/user-form";
import UserHistory from "./_components/user-history";
import UserAvatar from "./_components/user-avatar";

const ProfilePage = ({
  searchParams,
}: {
  searchParams: {
    page?: string;
  };
}) => {
  const page = Number(searchParams?.page) || 1;

  return (
    <div className="flex-grow flex flex-col lg:flex-row gap-2.5 md:gap-4">
      <section className="bg-foreground rounded-[30px] p-5 md:p-8 flex flex-col md:flex-row lg:flex-col gap-5 md:gap-8">
        <div className="md:flex-grow-[3] lg:min-w-[330px]">
          <UserAvatar />
          <UserForm />
        </div>

        <div className="md:flex-grow-[1] lg:flex-grow-0">
          <HintSection page={page} />
        </div>
      </section>

      <UserHistory />
    </div>
  );
};

export default ProfilePage;
