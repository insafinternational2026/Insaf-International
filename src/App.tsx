/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Shield, 
  Globe, 
  Cpu, 
  FileText, 
  TrendingUp, 
  Mail, 
  Phone, 
  MessageCircle,
  MapPin, 
  Map,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Printer,
  Camera,
  Layers,
  Copy,
  ShieldCheck,
  UserPlus,
  UserCog,
  MoveRight,
  Baby,
  Edit3,
  FileBadge
} from "lucide-react";
import { useState, FormEvent } from "react";

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Shield className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-display font-bold text-primary tracking-tight">
            INSAF <span className="text-accent">INTERNATIONAL</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "সেবাসমূহ", id: "services" },
            { name: "আমাদের সম্পর্কে", id: "about" },
            { name: "যোগাযোগ", id: "contact" }
          ].map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className="text-sm font-medium text-primary/70 hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="https://wa.me/8801754492759" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary py-2 px-6 text-sm"
          >
            শুরু করুন
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu - Slide-out with Glassmorphism */}
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-40 md:hidden bg-white/80 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
      >
        {[
          { name: "সেবাসমূহ", id: "services" },
          { name: "আমাদের সম্পর্কে", id: "about" },
          { name: "যোগাযোগ", id: "contact" }
        ].map((item) => (
          <a 
            key={item.id} 
            href={`#${item.id}`} 
            className="text-2xl font-bold text-primary hover:text-accent transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <a 
          href="https://wa.me/8801754492759" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary py-4 px-10 text-lg"
          onClick={() => setIsOpen(false)}
        >
          শুরু করুন
        </a>
      </motion.div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
            <Globe className="w-4 h-4" />
            <span>সততা ও সেবায় অনন্য</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-primary leading-[1.1] mb-6">
            সততা আর আস্থার মেলবন্ধনে, <AnimatedText text="সেরা অনলাইন" className="text-accent block sm:inline" /> সেবার ঠিকানায়।
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
            ইনসাফ ইন্টারন্যাশনাল - যেখানে প্রতিটি অনলাইন আবেদন হয় নির্ভুল এবং দ্রুত। আমরা দিচ্ছি আন্তর্জাতিক মানের নির্ভরযোগ্য ডিজিটাল সমাধান আপনার হাতের নাগালে।
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary flex items-center gap-2">
              যোগাযোগ করুন <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services" className="btn-outline">আমাদের সেবাসমূহ</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="Modern Office" 
              className="w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-2xl -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-primary/20 rounded-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "ফটোকপি",
      description: "উন্নত মানের ফটোকপি এবং ডকুমেন্ট ডুপ্লিকেশন সেবা।",
      icon: <Copy className="w-8 h-8" />,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "কালার প্রিন্ট",
      description: "উচ্চমানের কালার এবং ব্ল্যাক-অ্যান্ড-হোয়াইট প্রিন্টিং।",
      icon: <Printer className="w-8 h-8" />,
      color: "bg-rose-50 text-rose-600"
    },
    {
      title: "ছবি তোলা",
      description: "পাসপোর্ট সাইজ এবং স্টুডিও কোয়ালিটি ডিজিটাল ফটোগ্রাফি।",
      icon: <Camera className="w-8 h-8" />,
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "লেমিনেটিং",
      description: "ডকুমেন্ট দীর্ঘস্থায়ী করতে উন্নত মানের লেমিনেটিং সেবা।",
      icon: <Layers className="w-8 h-8" />,
      color: "bg-violet-50 text-violet-600"
    },
    {
      title: "Whatsapp ও ইমেইল প্রিন্ট",
      description: "সরাসরি হোয়াটসঅ্যাপ এবং ইমেইল থেকে দ্রুত প্রিন্ট করার সুবিধা।",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "পুলিশ ক্লিয়ারেন্স",
      description: "দ্রুত এবং নির্ভুল পুলিশ ক্লিয়ারেন্স সার্টিফিকেট আবেদন সেবা।",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "NID আবেদন",
      description: "নতুন জাতীয় পরিচয়পত্রের জন্য সঠিক নিয়মে অনলাইন আবেদন।",
      icon: <UserPlus className="w-8 h-8" />,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "NID সংশোধন",
      description: "জাতীয় পরিচয়পত্রের তথ্য সংশোধনের জন্য প্রয়োজনীয় সহায়তা।",
      icon: <UserCog className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "NID স্থানান্তর",
      description: "এক এলাকা থেকে অন্য এলাকায় ভোটার স্থানান্তরের আবেদন।",
      icon: <MoveRight className="w-8 h-8" />,
      color: "bg-slate-50 text-slate-900"
    },
    {
      title: "জন্মনিবন্ধন আবেদন",
      description: "নতুন জন্মনিবন্ধন সনদের জন্য নির্ভুল অনলাইন আবেদন।",
      icon: <Baby className="w-8 h-8" />,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "জন্মনিবন্ধন সংশোধন",
      description: "জন্মনিবন্ধন সনদের ভুল তথ্য সংশোধনের আবেদন প্রক্রিয়া।",
      icon: <Edit3 className="w-8 h-8" />,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "সার্টিফিকেট ফ্রেশ কপি",
      description: "সার্টিফিকেট ফ্রেশ কপি এবং ডুপ্লিকেট কপির জন্য আবেদন।",
      icon: <FileBadge className="w-8 h-8" />,
      color: "bg-red-50 text-red-600"
    },
    {
      title: "অনলাইন আবেদন",
      description: "সকল ধরনের সরকারি ও বেসরকারি অনলাইন আবেদন করা হয়।",
      icon: <Globe className="w-8 h-8" />,
      color: "bg-cyan-50 text-cyan-600"
    },
    {
      title: "ডিজিটাল ডিজাইন এবং ফটো এডিটিং",
      description: "প্রফেশনাল গ্রাফিক ডিজাইন এবং উন্নত মানের ফটো এডিটিং সেবা।",
      icon: <Layers className="w-8 h-8" />,
      color: "bg-cyan-50 text-cyan-600"
    },
    {
      title: "প্রশাসনিক আবেদনপত্র ও ডকুমেন্ট ড্রাফটিং",
      description: "AC Land ও UNO অফিস সংক্রান্ত সকল প্রকার প্রশাসনিক আবেদনপত্র তৈরি।",
      icon: <FileText className="w-8 h-8" />,
      color: "bg-slate-50 text-slate-900"
    },
    {
      title: "অনলাইন সার্ভিস ও ডাটা এন্ট্রি",
      description: "নির্ভুল ডাটা এন্ট্রি এবং সকল প্রকার অনলাইন সার্ভিস প্রদান।",
      icon: <Globe className="w-8 h-8" />,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "প্রফেশনাল রাইটিং সার্ভিস",
      description: "ডকুমেন্ট রাইটিং, টাইপিং এবং প্রফেশনাল ড্রাফটিং সেবা।",
      icon: <Edit3 className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-primary mb-4">আমাদের সেবাসমূহ</h2>
          <p className="text-slate-600">
            আপনার প্রয়োজনীয় সকল অনলাইন সেবার বিশ্বস্ত সমাধান। আমরা দিচ্ছি নির্ভুল আবেদন এবং দ্রুততম ডেলিভারির নিশ্চয়তা।
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.05,
                ease: "easeOut"
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-xl flex flex-col items-center text-center"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 ${service.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shrink-0`}>
                {/* Scale icons for mobile */}
                <div className="scale-75 md:scale-100">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-sm md:text-xl font-bold text-primary mb-2 md:mb-4 line-clamp-1">{service.title}</h3>
              <p className="text-[10px] md:text-base text-slate-600 leading-tight md:leading-relaxed line-clamp-2">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
            alt="Team Meeting" 
            className="rounded-3xl shadow-xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-3xl text-white hidden md:block">
            <div className="text-4xl font-bold mb-1">সততা</div>
            <div className="text-sm opacity-80">আমাদের মূল ভিত্তি</div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-4xl font-display font-bold text-primary mb-6">ইনসাফ ইন্টারন্যাশনাল সম্পর্কে</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            সততা এবং স্বচ্ছতার মূলমন্ত্র নিয়ে প্রতিষ্ঠিত ইনসাফ ইন্টারন্যাশনাল এখন একটি বিশ্বস্ত নাম। আমাদের লক্ষ্য হলো আন্তর্জাতিক মান বজায় রেখে গ্রাহকদের নির্ভরযোগ্য এবং উচ্চমানের অনলাইন সেবা প্রদান করা। আমরা প্রতিটি কাজে স্বচ্ছতা এবং গ্রাহক সন্তুষ্টিকে সর্বোচ্চ অগ্রাধিকার দেই।
          </p>
          <div className="space-y-4">
            {[
              "সততার প্রতি আপসহীন অঙ্গীকার",
              "আন্তর্জাতিক মানের সেবা নিশ্চিত করা",
              "প্রতিটি গ্রাহকের জন্য নিবেদিত সহায়তা",
              "নির্ভুল এবং দ্রুত অনলাইন আবেদন প্রক্রিয়া"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-accent w-5 h-5" />
                <span className="font-medium text-primary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "পুলিশ ক্লিয়ারেন্স",
    message: ""
  });

  const handleWhatsAppRedirect = (e: FormEvent) => {
    e.preventDefault();
    const phoneNumber = "8801754492759";
    const text = `নাম: ${formData.name}%0Aমোবাইল: ${formData.phone}%0Aসেবা: ${formData.service}%0Aমেসেজ: ${formData.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">যোগাযোগ করুন</h2>
            <p className="text-slate-300 mb-12 text-lg">
              আপনার যেকোনো অনলাইন কাজের জন্য আজই আমাদের সাথে যোগাযোগ করুন। আমরা আছি আপনার সেবায় সদা প্রস্তুত।
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-slate-400 uppercase tracking-widest mb-1">কল করুন</div>
                  <div className="text-xl font-medium">+8801754492759</div>
                  <a 
                    href="https://wa.me/8801754492759" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mt-2 text-accent hover:text-white transition-colors text-sm font-medium"
                  >
                    <MessageCircle className="w-4 h-4" />
                    হোয়াটসঅ্যাপে চ্যাট করুন
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-slate-400 uppercase tracking-widest mb-1">ইমেইল করুন</div>
                  <a href="mailto:insaf.international2026@gmail.com" className="text-lg md:text-xl font-medium hover:text-accent transition-colors break-all">
                    insaf.international2026@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-slate-400 uppercase tracking-widest mb-1">সরাসরি আসুন</div>
                  <div className="text-lg md:text-xl font-medium break-words">Garden Complex, Sadar South Upazila, Cumilla-3500</div>
                  <a 
                    href="https://www.google.com/maps/@23.4101234,91.1974341,2012m/data=!3m1!1e3?authuser=0&entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mt-2 text-accent hover:text-white transition-colors text-sm font-medium"
                  >
                    <Map className="w-4 h-4" />
                    গুগল ম্যাপে দেখুন
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl">
            <h3 className="text-2xl font-bold text-primary mb-8">মেসেজ পাঠান</h3>
            <form className="space-y-6" onSubmit={handleWhatsAppRedirect}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">আপনার নাম</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-primary focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="আপনার নাম লিখুন"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">মোবাইল নাম্বার</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-primary focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="আপনার মোবাইল নাম্বার লিখুন"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">সেবার ধরন</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-primary focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                >
                  <option>পুলিশ ক্লিয়ারেন্স</option>
                  <option>NID সংক্রান্ত</option>
                  <option>জন্মনিবন্ধন সংক্রান্ত</option>
                  <option>অনলাইন আবেদন</option>
                  <option>অন্যান্য</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">আপনার মেসেজ</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-primary focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  placeholder="আমরা আপনাকে কীভাবে সাহায্য করতে পারি?"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-4 text-lg">মেসেজ পাঠান</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-900 text-slate-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Shield className="text-accent w-6 h-6" />
          <span className="text-white font-display font-bold">INSAF INTERNATIONAL</span>
        </div>
        <div className="flex gap-8 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
        <div className="text-sm">
          © {new Date().getFullYear()} ইনসাফ ইন্টারন্যাশনাল। সর্বস্বত্ব সংরক্ষিত।
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      
      {/* Floating Action Button (FAB) */}
      <motion.a
        href="https://wa.me/8801754492759"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 transition-shadow"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </motion.a>
    </div>
  );
}
