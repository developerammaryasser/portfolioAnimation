const Typography = ({ variant = "p", children = "", className = "" }) => {
  let element;
  switch (variant) {
    case "h1":
      element = (
        <h1 className={`text-6xl font-extralight ${className}`}>{children}</h1>
      );
      break;
    case "h2":
      element = (
        <h2 className={`text-4xl font-light ${className}`}>{children}</h2>
      );
      break;
    case "h3":
      element = (
        <h3
          className={`text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-200 via-neutral-300 to-fuchsia-400 ${className}`}
        >
          {children}
        </h3>
      );
      break;
    case "p":
      element = <p className={`text-base ${className}`}>{children}</p>;
      break;
    case "lead":
      element = (
        <p
          className={` text-lg font-normal leading-relaxed antialiased opacity-70 ${className}`}
        >
          {children}
        </p>
      );
      break;
  }
  return element;
};
export default Typography;
