<section id="projects" className="py-16 px-4 bg-gray-50">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Projects</h2>
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-2">TaskMaster</h3>
      <p className="text-gray-700 mb-3">
        A task management tool built with Node.js and MongoDB. Designed for productivity and team collaboration.
      </p>
      <a
        href="#"
        className="text-blue-600 font-medium hover:underline"
      >
        View Project
      </a>
    </div>
  </div>
</section>

const Projects = () => (
  <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
    <div className="max-w-6xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-semibold mb-8">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 border rounded-lg p-6 shadow hover:shadow-md transition">
          <h4 className="text-xl font-bold mb-2">TaskMaster</h4>
          <p className="text-gray-700 mb-3">
            A task management tool built with Node.js and MongoDB. Designed for productivity and team collaboration.
          </p>
          <a href="#" className="text-blue-600 hover:underline">View Project</a>
        </div>
        <div className="bg-gray-50 border rounded-lg p-6 shadow hover:shadow-md transition">
          <h4 className="text-xl font-bold mb-2">EduCast</h4>
          <p className="text-gray-700 mb-3">
            An offline-first educational platform for underserved communities, built with scalability and efficiency in mind.
          </p>
          <a href="#" className="text-blue-600 hover:underline">View Project</a>
        </div>
      </div>
    </div>
  </section>
);
export default Projects;
