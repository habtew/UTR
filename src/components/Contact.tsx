import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';

interface ContactProps {
  language: string;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [result, setResult] = React.useState("");
  const notify = (data: any) => toast.success(`Dear ${data.name}, \nThank you for reaching out. We have received your message and will get back to you shortly.\nBest regards,
    \n Team UTR`);
  const err = () => toast.warn(`There is an error in your data.
Please correct it before clicking "Contact."`)


  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fbea5a66-6283-4261-8ed4-540cb3166990");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      notify(data.data)
      console.log(data)
    } else {
      console.log("Error", data);
      setResult(data.message);
      err()
    }
  };
  const content = {
    en: {
      title: "Let's Build Something Amazing",
      subtitle: "Have a project in mind? Let's discuss how we can help bring your vision to life.",
      getInTouch: "Get in Touch",
      email: "Email",
      phone: "Phone",
      location: "Location",
      name: "Name",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell us about your project...",
      sendMessage: "Send Message"
    },
    ar: {
      title: "دعنا نبني شيئاً مميزاً",
      subtitle: "هل لديك مشروع في ذهنك؟ دعنا نناقش كيف يمكننا المساعدة في تحقيق رؤيتك.",
      getInTouch: "تواصل معنا",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الموقع",
      name: "الاسم",
      message: "الرسالة",
      namePlaceholder: "اسمك",
      emailPlaceholder: "بريدك@الإلكتروني.com",
      messagePlaceholder: "أخبرنا عن مشروعك...",
      sendMessage: "إرسال الرسالة"
    }
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {content[language as keyof typeof content].title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {content[language as keyof typeof content].subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 md:p-8 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {content[language as keyof typeof content].getInTouch}
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Mail size={20} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {content[language as keyof typeof content].email}
                  </p>
                  <a href="mailto:hello@example.com" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  utr.tech1@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Phone size={20} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {content[language as keyof typeof content].phone}
                  </p>
                  <a href="tel:+11234567890" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +91 7022872840
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <MapPin size={20} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {content[language as keyof typeof content].location}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Bangelore, KA
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-4" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {content[language as keyof typeof content].name}
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder={content[language as keyof typeof content].namePlaceholder}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {content[language as keyof typeof content].email}
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder={content[language as keyof typeof content].emailPlaceholder}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {content[language as keyof typeof content].message}
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder={content[language as keyof typeof content].messagePlaceholder}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                {content[language as keyof typeof content].sendMessage} <Send size={16} className={language === 'ar' ? 'rotate-180' : ''} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;