const LogoDisplay = ({
  logoObjects,
}: {
  logoObjects: { name: string; displayName: string }[];
}) => {
  const logos = logoObjects.map((lg) => ({
    component: (
      <img
        className={`h-5 md:h-6`}
        src={`/TechLogo/${lg.name}.svg`}
        alt={lg.displayName}
      />
    ),
    name: lg.displayName,
  }));

  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="flex gap-2  shadow-sm py-4 px-1 rounded-lg items-center border-2 flex-col"
        >
          {logo.component}
          <div className="font-oxygen">{logo.name}</div>
        </div>
      ))}
    </div>
  );
};

export default LogoDisplay;
