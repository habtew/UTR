import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Languages } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  language: string;
  toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, language, toggleLanguage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    en: {
      work: 'Work',
      about: 'About',
      contact: 'Contact'
    },
    ar: {
      work: 'أعمالنا',
      about: 'عنا',
      contact: 'اتصل بنا'
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      } ${darkMode ? 'dark' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-gray-900 dark:text-white underline-animation">
              UTR - Design and Develop<span className="text-blue-600 dark:text-blue-400">.</span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#work" className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              {menuItems[language as keyof typeof menuItems].work}
            </a>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              {menuItems[language as keyof typeof menuItems].about}
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              {menuItems[language as keyof typeof menuItems].contact}
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors tooltip"
              aria-label={language === 'en' ? "Switch to Arabic" : "Switch to English"}
            >
              <Languages size={20} />
              <span className="tooltip-text">
                {language === 'en' ? 'Arabic' : 'English'}
              </span>
            </button>
            
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              
            </button>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#work" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {menuItems[language as keyof typeof menuItems].work}
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {menuItems[language as keyof typeof menuItems].about}
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {menuItems[language as keyof typeof menuItems].contact}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

// import React, { useState, useEffect } from 'react';
// import { Menu, X, Moon, Sun, Languages } from 'lucide-react';

// interface HeaderProps {
//   darkMode: boolean;
//   toggleDarkMode: () => void;
//   language: string;
//   toggleLanguage: () => void;
// }

// const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, language, toggleLanguage }) => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const menuItems = {
//     en: {
//       work: 'Work',
//       about: 'About',
//       contact: 'Contact'
//     },
//     ar: {
//       work: 'أعمالنا',
//       about: 'عنا',
//       contact: 'اتصل بنا'
//     }
//   };

//   return (
//     <header 
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
//       } ${darkMode ? 'dark' : ''}`}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 sm:h-20">
//           <div className="flex items-center">
//             <a href="#">
//               {darkMode ? (
//                 <img src="/images/logo-dark.png" alt="Logo Dark Mode" className="h-12 w-auto" />
//               ) : (
//                 <img src="/images/logo-dark.png" alt="Logo Light Mode" className="h-12 w-auto" />
//               )}
//             </a>
//           </div>
          
//           <nav className="hidden md:flex space-x-8">
//             <a href="#work" className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
//               {menuItems[language as keyof typeof menuItems].work}
//             </a>
//             <a href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
//               {menuItems[language as keyof typeof menuItems].about}
//             </a>
//             <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
//               {menuItems[language as keyof typeof menuItems].contact}
//             </a>
//           </nav>
          
//           <div className="flex items-center space-x-4">
//             <button 
//               onClick={toggleLanguage}
//               className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
//               aria-label={language === 'en' ? "Switch to Arabic" : "Switch to English"}
//             >
//               <Languages size={20} />
//             </button>
            
//             <button 
//               onClick={toggleDarkMode}
//               className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
//               aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
//             >
//               {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
            
//             <button 
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="md:hidden p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
//               aria-label="Open menu"
//             >
//               {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <a 
//               href="#work" 
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 transition-colors"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               {menuItems[language as keyof typeof menuItems].work}
//             </a>
//             <a 
//               href="#about" 
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 transition-colors"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               {menuItems[language as keyof typeof menuItems].about}
//             </a>
//             <a 
//               href="#contact" 
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 transition-colors"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               {menuItems[language as keyof typeof menuItems].contact}
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;