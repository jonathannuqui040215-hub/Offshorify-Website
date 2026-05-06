import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, CheckCircle2, Globe2, Users, TrendingUp, 
  Clock, Shield, Zap, ChevronDown, Menu, X, Headset,
  Briefcase, Calculator, Code2, LineChart, MessageSquare
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Globe2 className="h-8 w-8 text-brand-600" />
            <span className="font-display font-bold text-2xl tracking-tight text-brand-900">OFFSHORIFY</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
            <a href="#services" className="text-gray-600 hover:text-brand-600 transition-colors">Services</a>
            <a href="#why-us" className="text-gray-600 hover:text-brand-600 transition-colors">Why Philippines</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-brand-600 transition-colors">How it Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-brand-600 transition-colors">Pricing</a>
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full transition-all shadow-sm font-medium">
              Book Consultation
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-4">
          <a href="#services" className="block text-gray-600 font-medium">Services</a>
          <a href="#why-us" className="block text-gray-600 font-medium">Why Philippines</a>
          <a href="#how-it-works" className="block text-gray-600 font-medium">How it Works</a>
          <a href="#pricing" className="block text-gray-600 font-medium">Pricing</a>
          <button className="w-full bg-brand-600 text-white px-5 py-3 rounded-xl font-medium mt-4">
            Book Consultation
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-brand-50/50 -z-10" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1.5 px-3 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold mb-6">
            Premium Philippine Outsourcing
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
            Scale Your Business Without Increasing Overhead.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
            Get access to skilled Filipino remote talent. Cost-effective operations, fully managed, and deployed fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-brand-500/25">
              Book a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-3.5 rounded-full font-medium transition-all shadow-sm">
              View Services
            </button>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 font-medium">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
              ))}
            </div>
            <p>Trusted by 100+ growing companies globally</p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="relative"
        >
          <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-2xl relative">
            {/* Placeholder for real hero image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-900 to-brand-600 opacity-90 mixing-blend-multiply" />
            <div className="absolute inset-0 flex items-center justify-center p-8 text-white/20">
              <span className="font-display font-black text-6xl tracking-tighter text-center">REMOTE<br/>TEAM</span>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Cost Savings</p>
                <p className="font-display font-bold text-xl text-gray-900">Up to 70%</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">Empowering fast-growing teams across the globe</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Faux Logos */}
          <div className="font-display font-bold text-2xl flex items-center gap-2"><div className="w-6 h-6 bg-current rounded-sm" /> AcmeCorp</div>
          <div className="font-display font-bold text-2xl flex items-center gap-2"><div className="w-6 h-6 rounded-full border-4 border-current" /> GlobalTech</div>
          <div className="font-display font-bold text-2xl flex items-center gap-2"><div className="w-6 h-6 bg-current rotate-45" /> Nexus Solutions</div>
          <div className="font-display font-bold text-2xl flex items-center gap-2"><div className="w-6 h-6 rounded-tr-xl rounded-bl-xl bg-current" /> CloudSync</div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <MessageSquare />, title: "Virtual Assistants", desc: "Executive support, email management, and scheduling for busy founders.", use: "Founders & Executives" },
    { icon: <Headset />, title: "Customer Support", desc: "24/7 omni-channel support to keep your customers happy and loyal.", use: "E-commerce & SaaS" },
    { icon: <TrendingUp />, title: "Sales Development", desc: "Cold calling, lead generation, and appointment setting.", use: "B2B Tech & Agencies" },
    { icon: <Briefcase />, title: "Back Office / Admin", desc: "Data entry, CRM management, and operational workflows.", use: "Scaling Operations" },
    { icon: <Calculator />, title: "Finance & Accounting", desc: "Bookkeeping, payroll processing, and financial reporting.", use: "Growing SMEs" },
    { icon: <Code2 />, title: "IT & Development", desc: "Frontend/Backend developers, QA testing, and technical support.", use: "Software Companies" },
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Dedicated Roles. <br/>Fully Managed.</h2>
          <p className="text-lg text-gray-600">We source, vet, and manage top 1% talent so you can focus on strategy.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-brand-500/30 hover:shadow-xl hover:shadow-brand-500/5 transition-all group"
            >
              <div className="h-12 w-12 rounded-2xl bg-white text-brand-600 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-600 mb-6 text-sm">{s.desc}</p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-400 uppercase">Ideal for</p>
                <p className="text-sm font-medium text-brand-700">{s.use}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyPhilippines = () => {
  return (
    <section id="why-us" className="py-24 bg-brand-900 text-white rounded-[3rem] mx-4 md:mx-8 mb-24 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Outsource to the Philippines?</h2>
          <p className="text-xl text-brand-100 mb-8 font-light leading-relaxed">
            The Philippines is the world's premier destination for outsourcing, combining exceptional talent with massive cost efficiencies.
          </p>
          <ul className="space-y-6">
            {[
              { title: "Native-Level English", desc: "Seamless communication with Western markets." },
              { title: "Cultural Alignment", desc: "Deep understanding of US, AU, and UK business culture." },
              { title: "Incredible Work Ethic", desc: "Dedicated, loyal, and hard-working professionals." },
              { title: "Unbeatable Cost Efficiency", desc: "Save up to 70% compared to local hiring." }
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center mt-1">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-brand-100/70 text-sm mt-1">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-full min-h-[400px] rounded-3xl bg-brand-800 border border-brand-700 p-8 flex flex-col justify-between overflow-hidden">
             {/* Map Graphic abstraction */}
             <Globe2 className="absolute -bottom-20 -right-20 w-96 h-96 text-brand-700/50" />
             <h3 className="text-2xl font-display font-bold">The Offshorify Difference</h3>
             <div className="space-y-4 mt-8 relative z-10">
               <div className="bg-white/10 backdrop-blur pb-4 pt-4 px-6 rounded-2xl border border-white/10">
                  <span className="text-sm font-semibold text-accent-500 mb-1 block">Not Just Recruiting</span>
                  <p className="font-medium">We provide fully managed teams with dedicated account oversight.</p>
               </div>
               <div className="bg-white/10 backdrop-blur pb-4 pt-4 px-6 rounded-2xl border border-white/10">
                  <span className="text-sm font-semibold text-accent-500 mb-1 block">Fast Deployment</span>
                  <p className="font-medium">From discovery to active working talent in as little as 14 days.</p>
               </div>
               <div className="bg-white/10 backdrop-blur pb-4 pt-4 px-6 rounded-2xl border border-white/10">
                  <span className="text-sm font-semibold text-accent-500 mb-1 block">Performance Tracking</span>
                  <p className="font-medium">Daily reporting and KPI monitoring built into our management layer.</p>
               </div>
             </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: "01", title: "Discovery Call", desc: "We align on your specific talent needs, requirements, and workflows." },
    { num: "02", title: "Talent Matching", desc: "We source and rigorously vet candidates from our premium pool." },
    { num: "03", title: "Onboarding", desc: "Seamless IT setup and process handover to integrate with your team." },
    { num: "04", title: "Ongoing Management", desc: "We handle HR, payroll, performance, and infrastructure continuously." },
  ];
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">A frictionless process designed to integrate world-class talent into your operations swiftly.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-12 w-full border-t-2 border-dashed border-gray-300" />
              )}
              <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center font-display font-bold text-2xl text-brand-600 mb-6 relative z-10">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Proven Results</h2>
          <p className="text-lg text-gray-600">See how companies scale efficiently with Offshorify.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-brand-50 rounded-3xl p-8 md:p-10 border border-brand-100">
            <span className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4 block">E-commerce Scaling</span>
            <h3 className="text-2xl font-bold mb-6">Scaled 24/7 Support for a Fast-Growing D2C Brand</h3>
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-sm font-semibold text-gray-500 mb-1">Problem:</p>
                <p className="text-gray-800 text-sm">Overwhelmed by support tickets during product launches.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 mb-1">Solution:</p>
                <p className="text-gray-800 text-sm">Deployed a 5-person omnichannel support team working in shifts.</p>
              </div>
            </div>
            <div className="pt-6 border-t border-brand-200 flex items-center justify-between">
              <div>
                <p className="text-3xl font-display font-bold text-brand-700">98%</p>
                <p className="text-sm text-gray-600 font-medium mt-1">CSAT Score</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-brand-700">60%</p>
                <p className="text-sm text-gray-600 font-medium mt-1">Cost Reduction</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-brand-600 flex justify-center items-center text-white"><ArrowRight className="w-5 h-5"/></div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-200">
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 block">SaaS Lead Generation</span>
            <h3 className="text-2xl font-bold mb-6">Built a High-Velocity Outbound SDR Team</h3>
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-sm font-semibold text-gray-500 mb-1">Problem:</p>
                <p className="text-gray-800 text-sm">AEs spending too much time prospecting, missing quota.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 mb-1">Solution:</p>
                <p className="text-gray-800 text-sm">Hired 3 dedicated SDRs to handle cold calling and emails.</p>
              </div>
            </div>
            <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
               <div>
                <p className="text-3xl font-display font-bold text-gray-900">4x</p>
                <p className="text-sm text-gray-600 font-medium mt-1">Meetings Booked</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-600 font-medium mt-1">Quota Attainment</p>
              </div>
                <div className="h-10 w-10 rounded-full bg-gray-900 flex justify-center items-center text-white"><ArrowRight className="w-5 h-5"/></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Transparent, Flat-Rate Pricing</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">No hidden fees. One predictable monthly invoice covering salary, benefits, tech infrastructure, and HR management.</p>
        
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-12 text-left">
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-bold">The Monthly Model</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-600"/> <span className="font-medium">Direct talent salary</span></li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-600"/> <span className="font-medium">Enterprise-grade IT & security</span></li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-600"/> <span className="font-medium">Dedicated operational manager</span></li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-600"/> <span className="font-medium">Ongoing training & HR support</span></li>
            </ul>
          </div>
          <div className="flex-1 bg-brand-50 p-8 rounded-3xl w-full text-center">
             <p className="text-sm font-bold text-brand-600 uppercase mb-4">Flexible Scaling</p>
             <p className="text-xl font-medium text-gray-900 mb-6">Scale up or down smoothly with our flexible engagement terms. We adapt to your business needs.</p>
             <button className="w-full bg-brand-600 hover:bg-brand-700 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-md">
              Get a Custom Quote
            </button>
            <p className="text-xs text-gray-500 mt-4">*Exact pricing depends on the role and experience level required.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "How fast can we hire and onboard someone?", a: "Typically, from our initial discovery call to your new team member's first day takes between 14 to 21 days." },
    { q: "What time zones do you support?", a: "We support all global time zones. Our talent works your required hours, whether that's US EST, PST, UK, or Australian time." },
    { q: "How do you ensure quality and data security?", a: "We implement strict vetting processes (only hiring top 1-3%), enterprise-grade VPNs, device management, and secure operational hubs." },
    { q: "Do you offer full-time or part-time resources?", a: "We primarily provide full-time, dedicated resources to ensure maximum integration and focus on your business goals." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
             <details key={i} className="group bg-gray-50 rounded-2xl border border-gray-100 open:bg-white open:border-brand-200 open:shadow-sm transition-all">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-lg marker:content-none">
                  {faq.q}
                  <span className="ml-4 flex-shrink-0 transition-transform group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-gray-400 group-open:text-brand-600" />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed font-medium">
                  {faq.a}
                </div>
              </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 bg-brand-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Ready to scale your team without the cost?</h2>
        <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto font-light">Join the ambitious companies streamlining operations and accelerating growth with Offshorify.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-50 text-brand-900 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-brand-900/20">
              Book a Free Consultation
            </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Globe2 className="h-8 w-8 text-brand-500" />
              <span className="font-display font-bold text-2xl tracking-tight">OFFSHORIFY</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              The premium outsourcing partner for scaling businesses. Elite talent from the Philippines, fully managed.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-gray-100">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Virtual Assistants</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sales Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IT & Dev</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-gray-100">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Why Philippines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-gray-100">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>hello@offshorify.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Manila, Philippines</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Offshorify. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <WhyPhilippines />
        <Process />
        <CaseStudies />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

