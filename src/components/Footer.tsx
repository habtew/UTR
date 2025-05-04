import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const currentYear = new Date().getFullYear();
  
  const content = {
    en: {
      description: 'Creating meaningful digital experiences that combine aesthetics with functionality.',
      navigation: 'Navigation',
      home: 'Home',
      work: 'Work',
      about: 'About',
      contact: 'Contact',
      connect: 'Connect',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    ar: {
      description: 'نصمم تجارب رقمية هادفة تجمع بين الجمال والوظائف.',
      navigation: 'التنقل',
      home: 'الرئيسية',
      work: 'أعمالنا',
      about: 'عنا',
      contact: 'اتصل بنا',
      connect: 'تواصل معنا',
      rights: 'جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة'
    }
  };
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Portfolio<span className="text-blue-400">.</span></h3>
            <p className="text-sm text-gray-400 max-w-xs">
              {content[language as keyof typeof content].description}
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
              {content[language as keyof typeof content].navigation}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {content[language as keyof typeof content].home}
                </a>
              </li>
              <li>
                <a href="#work" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {content[language as keyof typeof content].work}
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {content[language as keyof typeof content].about}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {content[language as keyof typeof content].contact}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
              {content[language as keyof typeof content].connect}
            </h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Portfolio. {content[language as keyof typeof content].rights}
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              {content[language as keyof typeof content].privacy}
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              {content[language as keyof typeof content].terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;