const Projects = () => {
  const projects = [
    { title: 'Best Bids - Semester Project 2', description: 'BestBids is an auction site built using HTML, SASS, Bootstrap and Javascript. It showcases what I learned about the CSS Framework Bootstrap and Javascript.', image: "./sm2.png", git:"https://github.com/Bjedne/sp2.git", live:"https://bjednesp2.netlify.app/" },
    { title: 'ReactMart - Javascript Frameworks', description: 'React Mart is an e-commerce web application built with React and Tailwind CSS', image: "./jsFramework.png", git:"https://github.com/Bjedne/js-frameworks.git", live:"https://bjednereactmart.netlify.app/" },
    { title: 'Holidaze - Project Exam 2', description: 'Holidaze is a comprehensive web application designed to help users find and book holiday venues. This project was built using React and Tailwind CSS.', image: "./pe2.png", git:"https://github.com/Bjedne/pe-2.git", live:"https://holidazebjedne.netlify.app/" },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-md">
              <img src={project.image} className="w-full h-48 object-cover mb-4 rounded-lg" alt="Preview snaphot of the live site"/>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p>{project.description}</p>
              <div className="mt-5">
                <img src="/github.png" className="h-6 w-6 inline-block mr-2" alt="Github logo"/>
                <a href={project.git} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                <img src="/netlify.png" className="h-6 w-6 inline-block ml-4 mr-2" alt="LinkedIn logo"/>
                <a href={project.live} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">View Live</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;