const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          If you want to get in touch with me, you can reach me here:</p>
          <div className="flex gap-8 justify-center font-bold mt-6">
            <a href="https://www.linkedin.com/in/bj%C3%B8rnar-jakobsen-3176a5261/" className="h-20 w-20" target="_blank" rel="noopener noreferrer"><img src="/linkedin.png" className="h-24 w-24"/></a>
            <a href="https://github.com/Bjedne" target="_blank" rel="noopener noreferrer"><img src="/github.png" className="h-20 w-20"/></a> 
          </div>
      </div>
    </section>
  );
};

export default Contact;