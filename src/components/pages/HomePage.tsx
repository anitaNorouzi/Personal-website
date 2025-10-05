import profileVideo from "../../assets/videos/PixVerse-V5-Image-Text-360P-Ke-unscreen.gif";

function HomePage() {
  return (
    <div className="home-page">
      <div className="grid grid-cols-[1fr_8fr_2fr_1fr] mt-8">
        <div></div>
        <div className="w-full h-32 text-zinc-800 justify-self-center pr-14 pl-4  text-justify">
          <h1 className="font-fredericka text-extrabold text-6xl text-notebookCover mb-10 ">
            Hello! I'm Anita,
          </h1>
          <section className="font-edu text-[1.3rem]">
            <p>
              Frontend developer, passionate about creating innovative
              solutions, with a background in computer science and experience
              collaborating in professional tech teams. I enjoy tackling complex
              problems and turning ideas into reality.
            </p>
            <p className="py-4">
              When I'm not coding, you can find me painting, playing badminton
              or experimenting with new healthy recipes. I enjoy working with
              others to turn ideas into real projects.
            </p>
            <p className="text-notebookCover ">
              Let's connect and build something amazing together!
            </p>
          </section>
        </div>

        <img
          src={profileVideo}
          alt="Animated waving profile"
          className=" drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
          width="300"
        />
        <div></div>
        {/* <img src={profilePic} alt="Profile" className=" w-36 h-auto max-w-full justify-self-center" /> */}
      </div>
    </div>
  );
}

export default HomePage;