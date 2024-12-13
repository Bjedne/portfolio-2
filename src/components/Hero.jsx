import { scrollToSection } from '../utils/scrollToSection.jsx';

const Hero = () => {
  return (
    <section id="hero" className="bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <img src="/hero.jpg" className="w-24 h-24 md:w-48 md:h-48 rounded-full object-cover mx-auto" alt="Image of me"></img>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Bjørnar</h1>
        <p className="text-lg md:text-2xl mb-8">I'm a Front-End developer student at Noroff.</p>
        <p className="text-lg md:text-2xl mb-8">Below are the projects I've been working on throughout my second year.</p>
        <button href="#projects" onClick={() => scrollToSection('projects')} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">View Projects</button>
      </div>
    </section>
  );
};

export default Hero;