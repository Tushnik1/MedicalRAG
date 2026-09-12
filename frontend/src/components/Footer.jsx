import { Mail, Phone, MapPin, Shield, FileText, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = 2025;

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Chikitsah-Mitra</h3>
            <p className="text-gray-400 mb-6">
              Transforming healthcare through AI-powered medical report analysis and personalized consultations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-health-blue transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-health-blue transition-colors">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-health-blue transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-health-blue transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-health-blue transition-colors">How It Works</a></li>
              <li><a href="#ai-accuracy" className="text-gray-400 hover:text-health-blue transition-colors">AI & Privacy</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-health-blue transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-health-blue transition-colors">For Healthcare Providers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-health-blue transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-health-blue" />
                <a href="#" className="text-gray-400 hover:text-health-blue transition-colors">Privacy Policy</a>
              </li>
              <li className="flex items-center">
                <FileText className="h-4 w-4 mr-2 text-health-blue" />
                <a href="#" className="text-gray-400 hover:text-health-blue transition-colors">Terms of Service</a>
              </li>
              <li className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-health-blue" />
                <a href="#" className="text-gray-400 hover:text-health-blue transition-colors">Data Protection</a>
              </li>
              <li className="flex items-center">
                <FileText className="h-4 w-4 mr-2 text-health-blue" />
                <a href="#" className="text-gray-400 hover:text-health-blue transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-health-blue mt-0.5" />
                <span className="text-gray-400">123 Salt lake, Kolkata, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-health-blue" />
                <a href="tel:+14155552671" className="text-gray-400 hover:text-health-blue transition-colors">+91 9876543210</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-health-blue" />
                <a href="mailto:info@medreportai.com" className="text-gray-400 hover:text-health-blue transition-colors">info@h4bproject.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 text-center">
            &copy; {currentYear}Chikitsah Mitra. All rights reserved. The AI platform is designed to assist, not replace, professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
