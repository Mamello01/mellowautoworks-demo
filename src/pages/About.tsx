import { motion } from "motion/react";
import { ShieldCheck, Target, Coffee } from "lucide-react";
import FAQItem from "../components/FAQItem";

export default function About() {
  const values = [
    {
      title: "Integrity",
      description: "We are honest about what your car needs and what it doesn't. Fair prices for everyone.",
      icon: <ShieldCheck className="text-performance-red" size={40} />,
    },
    {
      title: "Reliability",
      description: "We use dependable parts and proven methods to keep you moving safely.",
      icon: <Target className="text-performance-red" size={40} />,
    },
    {
      title: "Community",
      description: "We are here for local drivers, entrepreneurs, and families. Your success is ours.",
      icon: <Coffee className="text-performance-red" size={40} />,
    },
  ];

  const faqs = [
    { q: "What types of vehicle brands do you service?", a: "We service almost all popular vehicle brands found on South African roads, including Toyota, VW, Ford, Hyundai, Haval, and more. If you're unsure about your specific model, just give us a call." },
    { q: "How long does a typical service take?", a: "A standard service usually takes a few hours. We aim to have your car ready by the end of the day so you can get back to your work and life without major disruption." },
    { q: "Do you offer warranties on your repairs?", a: "Yes, we stand by the quality of our work. All repairs come with a warranty on both parts and labour, ensuring you have peace of mind on the road." },
    { q: "Are your quotes free?", a: "Yes, we provide honest and transparent quotes. If you have questions about costs, we'll explain exactly what you're paying for before any work begins." }
  ];

  return (
    <div className="pt-32">
      {/* Intro Section */}
      <section className="section-spacing bg-charcoal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-performance-red font-display font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-8 leading-[0.9] tracking-tighter">MELLOW <br />AUTOWORKS</h1>
            <div className="space-y-6 text-light-grey text-lg font-medium leading-relaxed">
              <p>
                Mellow AutoWorks is a proud home-grown automotive workshop dedicated to serving the hardworking drivers of our community.
              </p>
              <p>
                As a participant in the Sasol Bridge to Work (BtW) programme, we are committed to providing affordable, high-quality technical service to local entrepreneurs, taxi owners, and families. We understand that in our community, every kilometer counts.
              </p>
              <p>
                Our workshop is built on trust. We don't aim to be a luxury dealership—we aim to be the most reliable mechanic you'll ever know.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-graphite rounded-none overflow-hidden grayscale-[0.1]">
              <img 
                src="/src/assets/images/workshop_action_local_1779102188661.png" 
                alt="Local workshop diagnostics" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-graphite py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-performance-red font-display font-bold uppercase tracking-widest text-sm mb-6 block">Our Mission</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight italic">
            "To provide affordable and reliable automotive care that empowers our community and keeps South Africa moving."
          </h2>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-16 text-center tracking-tight uppercase">OUR CORE VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-graphite p-12 text-center flex flex-col items-center border-b-4 border-performance-red"
              >
                <div className="mb-8">{value.icon}</div>
                <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-tighter">{value.title}</h3>
                <p className="text-light-grey font-medium leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-graphite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-black text-center mb-16 tracking-tighter uppercase">Frequently Asked Questions</h2>
          <div className="bg-charcoal px-8 md:px-12 border border-white/5">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Gallery Section */}
      <section className="section-spacing bg-off-white text-charcoal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px]">
           <div className="h-full bg-charcoal overflow-hidden group">
              <img 
                src="/src/assets/images/local_workshop_hero_1779102168907.png" 
                alt="Main Workshop" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
           </div>
           <div className="grid grid-rows-2 gap-8 h-full">
              <div className="bg-charcoal overflow-hidden group">
                <img 
                  src="/src/assets/images/female_technician_local_1779103991300.png" 
                  alt="Service Station" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="bg-performance-red p-12 flex flex-col justify-center">
                 <h3 className="text-3xl font-display font-black leading-tight mb-4 uppercase text-white">RELIABLE INFRASTRUCTURE</h3>
                 <p className="text-white/80 font-medium font-sans">
                   Our workshop is equipped with reliable tools and modern diagnostics to handle the vehicles our community drives every day—from heavy duty bakkies to fuel-efficient hatchbacks.
                 </p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
