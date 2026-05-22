import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Wrench, 
  Settings, 
  Zap, 
  ShieldCheck, 
  Clock, 
  TrendingUp,
  Search,
  Tool,
  Cpu,
  Shield,
  Phone,
  Star
} from "lucide-react";

const HERO_IMAGE = "/src/assets/images/local_workshop_action_hero_1779103973189.png";

const testimonials = [
  {
    quote: "Finally, a mechanic in the community I can actually trust. Honest advice and fair prices every time.",
    name: "Thomas Dube",
    role: "Local Entrepreneur",
    rating: 5,
  },
  {
    quote: "My car was back on the road in no time. Fast, efficient, and they really understand the daily struggles of a driver.",
    name: "Sarah Mthembu",
    role: "Daily Commuter",
    rating: 5,
  },
  {
    quote: "Great service for my small fleet. They get the job done right and don't try to upsell stuff I don't need.",
    name: "Jaco Smit",
    role: "Small Business Owner",
  },
];

const services = [
  {
    title: "Engine Diagnostics",
    description: "Affordable computer diagnostics to find issues quickly and get you back on the road.",
    icon: <Cpu className="text-performance-red" size={32} />,
  },
  {
    title: "Brake Repairs",
    description: "Reliable brake servicing to keep you and your family safe on every journey.",
    icon: <Shield className="text-performance-red" size={32} />,
  },
  {
    title: "Tyres & Alignment",
    description: "Quality tyres and alignment for everyday cars, bakkies, and fleet vehicles.",
    icon: <Settings className="text-performance-red" size={32} />,
  },
  {
    title: "Suspension",
    description: "Expert shock and suspension repairs to handle our local road conditions.",
    icon: <TrendingUp className="text-performance-red" size={32} />,
  },
  {
    title: "Panel Beating",
    description: "Honest dent and scratch repairs to keep your vehicle looking good without breaking the bank.",
    icon: <Wrench className="text-performance-red" size={32} />,
  },
  {
    title: "General Service",
    description: "Fixed-price servicing to help you maintain your car affordably and reliably.",
    icon: <Zap className="text-performance-red" size={32} />,
  },
];

const features = [
  {
    title: "Trusted Local Service",
    description: "Transparent pricing and honest advice for our local community.",
    icon: <ShieldCheck className="text-performance-red" size={24} />,
  },
  {
    title: "Everyday Reliability",
    description: "We service the cars that keep South Africa moving—from taxis to family cars.",
    icon: <Search className="text-performance-red" size={24} />,
  },
  {
    title: "Fast Turnaround",
    description: "We know you need your car for work and life. We get it done quickly.",
    icon: <Clock className="text-performance-red" size={24} />,
  },
];

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            src={HERO_IMAGE} 
            alt="Mellow AutoWorks Workshop Action" 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ y }}
            className="w-full h-[120%] object-cover grayscale-[0.1]"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold mb-6 leading-[0.9] tracking-tighter text-white">
              TRUSTED LOCAL <br />
              <span className="text-performance-red">AUTO REPAIRS</span>
            </h1>
            <p className="text-xl md:text-2xl text-off-white font-medium mb-10 max-w-2xl">
              Reliable maintenance and affordable diagnostics for everyday drivers and local businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 font-display">
              <Link to="/book" className="btn-primary py-5 px-10 text-lg">
                Book a Service
              </Link>
              <Link to="/quote" className="btn-secondary py-5 px-10 text-lg">
                Request a Quote
              </Link>
              <a 
                href={`https://wa.me/27123456789?text=${encodeURIComponent("Hi Mellow AutoWorks, I’d like to book a service or request a quote for my vehicle.")}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-whatsapp py-5 px-10 text-lg"
              >
                WhatsApp Chat
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-spacing bg-graphite">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-performance-red font-display font-bold uppercase tracking-widest text-sm mb-4 block">Our Local Service</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">BUILT FOR RELIABILITY</h2>
            </div>
            <Link to="/services" className="text-light-grey hover:text-performance-red font-display font-bold flex items-center gap-2 group transition-colors">
              VIEW ALL SERVICES 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:bg-charcoal/50"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform origin-left">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-light-grey leading-relaxed mb-6 font-medium">
                  {service.description}
                </p>
                <Link to="/book" className="text-off-white font-display font-bold text-sm tracking-widest group-hover:text-performance-red transition-colors">
                  BOOK NOW
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-spacing bg-charcoal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="text-performance-red font-display font-bold uppercase tracking-widest text-sm mb-4 block">The Mellow Advantage</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">WHY CHOOSE <br/>AUTOWORKS?</h2>
            
            <div className="space-y-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-graphite flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold mb-2">{feature.title}</h4>
                    <p className="text-light-grey font-medium leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/5] bg-graphite overflow-hidden">
               <img 
                src="/src/assets/images/female_technician_local_1779103991300.png" 
                alt="Trusted local mechanic at work" 
                className="w-full h-full object-cover grayscale-[0.1]"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-performance-red p-12 hidden md:block">
              <div className="text-6xl font-display font-black leading-none mb-1">LOCAL</div>
              <div className="font-display font-bold tracking-widest uppercase text-sm">Community Partner</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing bg-off-white text-charcoal">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-black text-center mb-16 tracking-tighter uppercase">WHAT OUR CUSTOMERS SAY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 border border-light-grey/20 flex flex-col shadow-sm"
              >
                <div className="mb-6 flex gap-1">
                  {[...Array(t.rating || 5)].map((_, i) => <Star key={i} size={16} className="text-performance-red fill-performance-red" />)}
                </div>
                <p className="text-lg leading-relaxed mb-8 flex-grow italic">"{t.quote}"</p>
                <div>
                  <p className="font-display font-bold uppercase tracking-wider">{t.name}</p>
                  <p className="text-sm text-light-grey font-medium">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-performance-red py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight uppercase tracking-tighter">
            Need your vehicle sorted today?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link to="/book" className="bg-charcoal text-off-white py-5 px-12 font-display font-bold text-xl uppercase tracking-widest hover:bg-graphite transition-all">
               Get Started
             </Link>
             <a href="tel:+27123456789" className="border-4 border-charcoal text-charcoal py-5 px-12 font-display font-bold text-xl uppercase tracking-widest hover:bg-charcoal hover:text-off-white transition-all flex items-center justify-center gap-3">
               <Phone size={24} />
               Call Us
             </a>
          </div>
        </div>
      </section>
    </div>
  );
}
