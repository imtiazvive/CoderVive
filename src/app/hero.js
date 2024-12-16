
"use client";


const Hero = () => {

  

  return (
    <section className=" bg-white flex justify-center items-center text-center text-white">
      <div className="max-w-4xl  px-4 pt-[100px] lg:pt-[200px] pb-[20px] lg:pb-[100px]">
        <h1 className="text-4xl md:text-5xl text-black	 font-bold mb-6">Building And Eleveating Digital Experiences To Empower Your Business</h1>
        <p className="text-lg text-black md:text-2xl mb-8">
          Innovative design and software solutions for apps and websites, tialored to elevate your business with seamless digital expericnes.
        </p>
        <a
          href="#services"
          className="inline-block bg-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Lets Talk
        </a>
      </div>
    </section>
  );
};

export default Hero;
