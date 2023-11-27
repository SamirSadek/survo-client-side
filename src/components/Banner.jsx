const Banner = () => {
  return (
    <section className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Welcome to SURVO <br /> Navigate <span className="text-green">Insightfully</span>
          </h2>
          <p className="text-xl text-[#4A4A4A]"> Empowering Perspectives Through Surveys.Discover Voices and Navigate Insightfully</p>
          <button className="btn bg-green px-8 rounded-full text-white">Explore</button>
        </div>

        <div className="md:w-1/2">
            <img src="/Banner.png" className="w-96 h-80 px-10 mx-auto" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
