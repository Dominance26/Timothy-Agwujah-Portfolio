<nav className="bg-gray-100 py-4 shadow-sm">
  <ul className="flex justify-center space-x-6 text-blue-600 font-medium">
    <li><a href="#about" className="hover:underline">About</a></li>
    <li><a href="#projects" className="hover:underline">Projects</a></li>
    <li><a href="#gallery" className="hover:underline">Gallery</a></li>
    <li><a href="#contact" className="hover:underline">Contact</a></li>
  </ul>
</nav>

const Navbar = () => (
  <nav className="bg-white border-b shadow-sm py-4 px-4 md:px-8 lg:px-16">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Timothy Agwujah</h1>
      <ul className="hidden md:flex space-x-6 text-gray-700 text-sm font-medium">
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#gallery" className="hover:text-blue-600">Gallery</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </div>
  </nav>
);
export default Navbar;
