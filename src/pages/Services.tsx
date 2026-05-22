import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Settings, 
  Shield, 
  Wrench, 
  Cpu, 
  TrendingUp,
  Droplets,
  Disc,
  Activity
} from "lucide-react";

const allServices = [
  {
    title: "Engine Diagnostics",
    description: "Our state-of-the-art diagnostic equipment allows us to identify faults in engine management systems, electronic controls, and emissions.",
    icon: <Cpu size={32} />
  },
  {
    title: "Brake System Repair",
    description: "Complete brake restoration including testing, pad and shoe replacement, rotor resurfacing, and brake fluid flushing.",
    icon: <Disc size={32} />
  },
  {
    title: "Full Maintenance Service",
    description: "Comprehensive multi-point service including oil, filter changes, spark plugs, and a thorough safety inspection of all critical modules.",
    icon: <Settings size={32} />
  },
  {
    title: "Suspension & Steering",
    description: "Expert repair of shocks, struts, ball joints, and power steering systems to ensure a balanced and smooth driving experience.",
    icon: <TrendingUp size={32} />
  },
  {
    title: "Battery & Electrical",
    description: "Auto-electrical services including alternators, starter motors, and advanced battery management for modern stop-start systems.",
    icon: <Zap size={32} />
  },
  {
    title: "Bodywork & Aesthetics",
    description: "Professional panel beating, scratch removal, and paint matching services to return your vehicle to its factory finish.",
    icon: <Wrench size={32} />
  },
  {
    title: "Cooling System Service",
    description: "Radiator flushing, thermostat replacement, and hose inspections to prevent engine overheating and long-term damage.",
    icon: <Droplets size={32} />
  },
  {
    title: "Advanced Safety Systems",
    description: "Diagnostics and repairs for ABS, Airbags, and Traction Control systems to keep you and your passengers protected.",
    icon: <Shield size={32} />
  },
  {
    title: "Performance Tuning",
    description: "Software remapping and performance part fitment for enthusiasts looking to unlock their vehicle's true potential.",
    icon: <Activity size={32} />
  }
];

export default function Services() {
  return (
    <div className="pt-32">
      <section className="section-spacing bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-performance-red font-display font-bold uppercase tracking-widest text-sm mb-4 block">Our Solutions</span>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-8 leading-none uppercase tracking-tighter">OUR SERVICES</h1>
            <p className="text-light-grey text-xl font-medium">
              We provide practical automotive care for everyday drivers, combining local expertise with reliable tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="bg-graphite p-10 border border-transparent hover:border-performance-red/30 hover:shadow-2xl transition-all flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-charcoal flex items-center justify-center text-performance-red mb-8">
                   {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-tighter">{service.title}</h3>
                <p className="text-light-grey font-medium leading-relaxed mb-auto pb-8">
                  {service.description}
                </p>
                <Link 
                  to="/book" 
                  className="btn-primary w-full py-4 uppercase tracking-wider text-sm"
                >
                  Request Service
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-performance-red py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
           <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tighter">
             DON'T SEE WHAT YOU NEED? GIVE US A CALL.
           </h2>
           <a 
             href="tel:+27123456789" 
             className="bg-white text-performance-red px-10 py-4 font-display font-bold uppercase tracking-widest hover:bg-charcoal hover:text-white transition-all whitespace-nowrap"
           >
             +27 12 345 6789
           </a>
        </div>
      </section>
    </div>
  );
}
