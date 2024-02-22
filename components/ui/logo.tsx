const Logo = () => {
  return (
    <div>
      <svg className="h-[17px] w-[42px]">
        <use xlinkHref="/sprite.svg#icon-logo"></use>
      </svg>
    </div>
  );
};

export default Logo;
