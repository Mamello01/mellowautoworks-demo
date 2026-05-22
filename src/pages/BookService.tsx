import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, AlertCircle, ChevronDown } from "lucide-react";

export default function BookService() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle: "",
    serviceType: "",
    description: "",
    date: "",
    urgency: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Booking Request:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <span className="text-performance-red font-display font-bold uppercase tracking-widest text-sm mb-4 block">Secure Your Slot</span>
          <h1 className="text-5xl font-display font-black mb-6 uppercase tracking-tighter leading-none">BOOK A SERVICE</h1>
          <p className="text-light-grey text-lg font-medium">
            Fill in the details below and our team will contact you within 2 hours to confirm your appointment.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onSubmit={handleSubmit}
              className="bg-graphite p-8 md:p-12 space-y-8 shadow-2xl border border-white/5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-display font-bold uppercase tracking-widest text-off-white/60">Full Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sipho Nkosi"
                    className="input-field"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-display font-bold uppercase tracking-widest text-off-white/60">Phone Number</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+27 00 000 0000"
                    className="input-field"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-display font-bold uppercase tracking-widest text-off-white/60">Vehicle Make & Model</label>
                  <input
                    required
                    type="text"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    placeholder="e.g. Toyota Hilux or VW Polo"
                    className="input-field"
                  />
                </div>
                <div className="space-y-2 relative">
                  <label className="text-xs font-display font-bold uppercase tracking-widest text-off-white/60">Type of Service</label>
                  <select
                    required
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="input-field appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select Service</option>
                    <option value="diagnostics">Engine Diagnostics</option>
                    <option value="brake">Brake Service</option>
                    <option value="general">General Maintenance</option>
                    <option value="suspension">Suspension Repair</option>
                    <option value="body">Panel Beating</option>
                    <option value="other">Other / Repairs</option>
                  </select>
                  <ChevronDown className="absolute right-4 bottom-3 text-light-grey pointer-events-none" size={20} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-display font-bold uppercase tracking-widest text-off-white/60">Describe the Issue</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us what's happening with your vehicle..."
                  className="input-field resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-2">
                  <label className="text-xs font-display font-bold uppercase tracking-widest text-off-white/60">Preferred Date</label>
                  <input
                    required
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="flex items-center gap-4 pt-6">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="urgency"
                      checked={formData.urgency}
                      onChange={(e) => setFormData(prev => ({ ...prev, urgency: e.target.checked }))}
                      className="sr-only peer" 
                    />
                    <div className="w-14 h-7 bg-charcoal rounded-full peer peer-checked:bg-performance-red transition-all after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-full"></div>
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-sm uppercase tracking-wider">Emergency?</span>
                    <AlertCircle size={16} className="text-performance-red" />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full py-5 text-xl tracking-widest mt-8">
                SUBMIT BOOKING REQUEST
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-graphite p-12 text-center flex flex-col items-center border-t-8 border-whatsapp-green shadow-2xl"
            >
              <div className="w-24 h-24 bg-whatsapp-green/20 text-whatsapp-green rounded-full flex items-center justify-center mb-8">
                <CheckCircle size={56} />
              </div>
              <h2 className="text-4xl font-display font-black mb-4 uppercase tracking-tighter">REQUEST RECEIVED!</h2>
              <p className="text-light-grey text-xl font-medium mb-10 max-w-md">
                Thank you, <span className="text-off-white">{formData.name}</span>! Our team has received your booking for the <span className="text-off-white">{formData.vehicle}</span>.
              </p>
              <div className="bg-charcoal p-6 text-left w-full mb-10 border-l-4 border-performance-red">
                <p className="font-display font-bold text-sm uppercase text-performance-red mb-2">Next Step:</p>
                <p className="text-light-grey font-medium">A technician will call you at <span className="text-off-white">{formData.phone}</span> within the next 2 hours to finalize the time.</p>
              </div>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn-secondary w-full"
              >
                BOOK ANOTHER VEHICLE
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
