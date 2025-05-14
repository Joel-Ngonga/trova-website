/*
  Trova GPS Solutions - Homepage (Next.js + TailwindCSS)
  Static site, Phase 1 ready
*/

import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Trova GPS Solutions</title>
        <meta name="description" content="Smart GPS and fleet solutions across Cameroon." />
      </Head>

      {/* Header */}
      <header className="bg-blue-900 text-white p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Trova GPS Solutions</h1>
          <nav className="space-x-4">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Track Smarter. Manage Better.</h2>
          <p className="text-lg text-gray-700 mb-8">
            Trova GPS Solutions offers real-time GPS tracking, fleet intelligence, and fuel management services across Cameroon.
          </p>
          <div className="w-full h-64 bg-gray-300 rounded-2xl shadow-inner flex items-center justify-center">
            <span className="text-gray-500">[Hero Image Placeholder]</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              'GPS Tracking',
              'Smart Fleet Management',
              'Smart Fuel Management',
              'Vehicle Recovery'
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white shadow rounded-xl border">
                <div className="h-40 bg-gray-200 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-500">[Image Placeholder]</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">{service}</h4>
                <p className="text-gray-600">Learn how Trova helps you optimize your operations with our {service.toLowerCase()} services.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">About Trova</h3>
          <p className="text-gray-700 mb-4">
            Headquartered in Carrefour Tamtam, Yaoundé, Cameroon, Trova GPS Solutions provides innovative tracking and fleet services.
            With agents in all 10 regions of Cameroon, we ensure nationwide coverage and expert support.
          </p>
          <div className="w-full h-64 bg-gray-300 rounded-2xl shadow-inner flex items-center justify-center">
            <span className="text-gray-500">[About Image Placeholder]</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
          <p className="text-gray-700 mb-6">Have questions or need a demo? Reach out via the form below or email us directly at <a href="mailto:contact@techtrova.com" className="text-blue-600">contact@techtrova.com</a>.</p>

          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" required className="w-full border rounded p-3" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full border rounded p-3" />
            <textarea name="message" placeholder="Your Message" rows="5" required className="w-full border rounded p-3"></textarea>
            <button type="submit" className="bg-blue-900 text-white py-3 px-6 rounded font-semibold">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center p-6">
        <p>&copy; {new Date().getFullYear()} Trova GPS Solutions. All rights reserved.</p>
        <p className="text-sm mt-2">www.techtrova.com</p>
      </footer>
    </div>
  );
}
