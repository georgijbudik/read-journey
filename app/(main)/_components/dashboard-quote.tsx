const DashboardQuote = () => {
  return (
    <div className="flex items-center gap-[14px] bg-neutral-800 rounded-xl py-[15px] px-5">
      <p className="text-black text-4xl font-medium leading-10">📚</p>
      <p className="max-w-[197px] text-stone-500 text-sm font-medium leading-none">
        "Books are <span className="text-primary">windows</span> to the world,
        and reading is a journey into the unknown."
      </p>
    </div>
  );
};

export default DashboardQuote;
