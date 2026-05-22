import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, Upload, ArrowRight } from "lucide-react";

export default function Quote() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <span className="text-performance-red font-display font-bold uppercase tracking-widest text-sm mb-4 block">Tailored Pricing</span>
          <h1 className="text-5xl md:text-7xl font-display font-black mb-8 leading-[0.9] tracking-tighter uppercase">GET A <br /><span className="text-performance-red">FREE QUOTE</span></h1>
          <p className="text-light-grey text-xl font-medium leading-relaxed mb-12 max-w-xl">
            Provide us with the details of your vehicle's issues and we'll get back to you with a comprehensive, no-obligation estimate.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6 items-center">
              <div className="w-12 h-12 bg-graphite flex items-center justify-center font-display font-black text-xl text-performance-red">1</div>
              <p className="text-off-white font-medium text-lg">Describe the symptoms or required maintenance.</p>
            </div>
            <div className="flex gap-6 items-center">
              <div className="w-12 h-12 bg-graphite flex items-center justify-center font-display font-black text-xl text-performance-red">2</div>
              <p className="text-off-white font-medium text-lg">Our experts analyze the data and parts required.</p>
            </div>
            <div className="flex gap-6 items-center">
              <div className="w-12 h-12 bg-graphite flex items-center justify-center font-display font-black text-xl text-performance-red">3</div>
              <p className="text-off-white font-medium text-lg">You receive a transparent quote via WhatsApp or Call.</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
                className="bg-graphite p-8 md:p-12 space-y-8 shadow-2xl border border-white/5"
              >
                <div className="space-y-4">
                  <label className="text-xs font-display font-bold uppercase tracking-widest text-off-white/60">Tell us what's wrong</label>
                  <textarea
                    required
                    name="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows={6}
                    className="input-field text-lg"
                    placeholder="e.g. Squeaking noise when braking, Engine light is on, or just need a service quote for my bakkie..."
                  />
                </div>

                <div className="p-8 border-2 border-dashed border-light-grey/20 text-center cursor-pointer hover:border-performance-red/50 transition-all group">
                   <Upload size={32} className="mx-auto text-light-grey group-hover:text-performance-red mb-4 transition-colors" />
                   <p className="font-display font-bold text-sm text-light-grey group-hover:text-off-white uppercase tracking-widest">Attach photos of the damage (Optional)</p>
                   <p className="text-xs text-light-grey/50 mt-2">JPEG, PNG up to 10MB</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-display font-bold uppercase tracking-widest text-off-white/60">Your Name</label>
                    <input
                      required
                      type="text"
                      className="input-field"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-display font-bold uppercase tracking-widest text-off-white/60">Phone Number</label>
                    <input
                      required
                      type="tel"
                      className="input-field"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="e.g. 082 123 4567"
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full py-5 text-xl uppercase tracking-[0.2em] group">
                  GET QUOTE <ArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-performance-red p-12 text-center flex flex-col items-center shadow-2xl"
              >
                <div className="w-24 h-24 bg-white text-performance-red rounded-full flex items-center justify-center mb-8">
                  <CheckCircle size={56} />
                </div>
                <h2 className="text-4xl font-display font-black mb-6 uppercase tracking-tighter text-white">QUOTE REQUESTED</h2>
                <p className="text-white font-medium text-xl leading-relaxed mb-10">
                  Great choice, {formData.name}! One of our service advisors will analyze your request and send a detailed estimate to {formData.phone} shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-white text-charcoal px-10 py-5 font-display font-bold uppercase tracking-widest hover:bg-charcoal hover:text-white transition-all w-full"
                >
                  REQUEST ANOTHER QUOTE
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
