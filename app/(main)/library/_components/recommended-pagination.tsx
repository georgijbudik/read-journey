const RecommendedPagination = () => {
  return (
    <button className="group" type="button">
      <svg className="stroke-primary h-5 w-5 md:h-6 md:w-6 group-hover:stroke-stone-500 transition-all duration-300">
        <use xlinkHref="/sprite.svg#icon-arrow"></use>
      </svg>
    </button>
  );
};

export default RecommendedPagination;
