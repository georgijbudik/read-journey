const Logo = () => {
  return (
    <div>
      <svg className="h-10 w-10">
        <use xlinkHref="/sprite.svg#icon-logo"></use>
      </svg>
    </div>
  );
};

export default Logo;
