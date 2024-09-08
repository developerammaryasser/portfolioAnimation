import Typography from "../elements/Typography";

const Section = ({ id, title, children }) => {
  return (
    <section id={id || ""} className="w-full h-fit py-14 md:py-20 lg:py-24">
      <div className="container flex flex-col items-stretch justify-start gap-y-16 md:gap-y-24">
        {title && (
          <Typography variant="h2" className="text-center">
            {title}
          </Typography>
        )}
        {children}
      </div>
    </section>
  );
};
export default Section;
