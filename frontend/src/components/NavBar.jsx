import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { currentUser } = useAuth();

  const signUserOut = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!")
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <p onClick={() => {
          navigate('/');
        }} className="text-xl font-bold text-[#33C3F0] cursor-pointer">
          Chikitsah<span className="text-[#1EAEDB]">Mitra</span>
        </p>

        {/* Mobile menu toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <a href="#how-it-works" className="text-sm font-medium hover:text-[#33C3F0] transition">
              How It Works
            </a>
          </li>
          <li>
            <a href="#ai-accuracy" className="text-sm font-medium hover:text-[#33C3F0] transition">
              AI & Privacy
            </a>
          </li>
          <li>
            <a href="#testimonials" className="text-sm font-medium hover:text-[#33C3F0] transition">
              Testimonials
            </a>
          </li>
          {!currentUser ?
            <>
              <li>
                <button onClick={() => {
                  navigate('/login')
                }} className="border border-[#33C3F0] px-4 py-2 rounded-md font-medium text-[#33C3F0] hover:bg-[#33C3F0] hover:text-white transition cursor-pointer">
                  Sign In
                </button>
              </li>
              <li>
                <button onClick={() => {
                  navigate('/signup')
                }} className="bg-[#33C3F0] px-4 py-2 rounded-md font-medium text-white hover:bg-[#1EAEDB] cursor-pointer">
                  Get Started
                </button>
              </li> </> :
            <>
              <li>
                <button onClick={() => {
                  navigate('/dashboard')
                }} className="border border-[#33C3F0] px-4 py-2 rounded-md font-medium text-[#33C3F0] hover:bg-[#33C3F0] hover:text-white transition cursor-pointer">
                  Dashboard
                </button>
              </li>
              <li>
                <button onClick={signUserOut} className="border bg-red-400 px-4 py-2 rounded-md font-medium text-white hover:bg-red-600 transition cursor-pointer">
                  Logout
                </button>
              </li>

            </>}
        </ul>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden container mx-auto px-4 pb-4 space-y-3 border-t pt-4 animate-fade-in">
          <li>
            <a href="#how-it-works" className="block text-sm font-medium hover:text-[#33C3F0]" onClick={() => setIsOpen(false)}>
              How It Works
            </a>
          </li>
          <li>
            <a href="#ai-accuracy" className="block text-sm font-medium hover:text-[#33C3F0]" onClick={() => setIsOpen(false)}>
              AI & Privacy
            </a>
          </li>
          <li>
            <a href="#testimonials" className="block text-sm font-medium hover:text-[#33C3F0]" onClick={() => setIsOpen(false)}>
              Testimonials
            </a>
          </li>
          <li>
            <button className="w-full border border-[#33C3F0] px-4 py-2 rounded-md text-[#33C3F0] hover:bg-[#33C3F0] hover:text-white transition">
              Sign In
            </button>
          </li>
          <li>
            <button className="w-full bg-[#33C3F0] px-4 py-2 rounded-md text-white hover:bg-[#1EAEDB] transition">
              Get Started
            </button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default NavBar;
