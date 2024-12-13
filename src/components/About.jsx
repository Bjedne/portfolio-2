const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          I'm a passionate developer with a love for creating engaging web pages! 
          I specialize in: 
        </p>
        <div className="flex gap-4 justify-center font-bold">
          <div className="flex space-x-4 mt-8 items-center">
            <img src="./html.png" className="h-12 w-12" alt="HTML icon"/>
            <span>HTML</span>
          </div>
          <div className="flex space-x-4 mt-8 items-center">
            <img src="./css.png" className="h-12 w-12" alt="CSS icon"/>
            <span>CSS</span>
          </div>
          <div className="flex space-x-4 mt-8 items-center">
            <img src="./js.png" className="h-12 w-12" alt="JS icon"/>
            <span>JavaScript</span>
          </div>
          <div className="flex space-x-4 mt-8 items-center">
            <img src="./react.png" className="h-12 w-12" alt="react icon"/>
          <span>React</span>
          </div>
          <div className="flex space-x-4 mt-8 items-center">
            <img src="./tailwind.png" className="h-12 w-12" alt="tailwind icon"/>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
