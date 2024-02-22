const UserBar = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-9 h-9 md:w-10 md:h-10 bg-neutral-800 rounded-full border border-stone-50 border-opacity-20"></div>
      <p className="hidden lg:block text-center text-primary text-base font-bold leading-none">
        Ilona Ratushniak
      </p>
    </div>
  );
};

export default UserBar;
