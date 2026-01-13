import { AlertCircle, CheckCircle, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // TODO: Replace with actual backend API endpoint
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically make a fetch call to your backend:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, email, message })
      // });

      console.log('Contact form submitted:', { name, email, message });
      
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12 rounded-3xl shadow-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">Name *</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                placeholder="Your name" />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">Email *</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                placeholder="your.email@example.com" />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">Message *</label>
              <textarea rows={6} value={message} onChange={(e) => setMessage(e.target.value)} required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none resize-none transition-colors"
                placeholder="Your message..." />
            </div>

            <button onClick={handleSubmit}
              disabled={status === 'sending' || !name || !email || !message}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 flex items-center justify-center gap-2">
              {status === 'sending' ? (
                <>Sending... <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" /></>
              ) : (
                <><Send size={20} /> Send Message</>
              )}
            </button>

            {status === 'success' && (
              <div className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-xl text-center flex items-center justify-center gap-2">
                <CheckCircle size={20} />
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {status === 'error' && (
              <div className="bg-red-50 border-2 border-red-500 text-red-700 px-4 py-3 rounded-xl text-center flex items-center justify-center gap-2">
                <AlertCircle size={20} />
                Failed to send message. Please try again or email directly.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


export default ContactSection;