import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Clock,
  ArrowUpRight
} from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      title: "Call Us Immediately",
      value: "+27 12 345 6789",
      href: "tel:+27123456789",
      icon: <Phone size={32} className="text-performance-red" />
    },
    {
      title: "WhatsApp Message",
      value: "+27 12 345 6789",
      href: "https://wa.me/27123456789",
      icon: <div className="text-whatsapp-green"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.414-8.41" /></svg></div>
    },
    {
      title: "Email Inquiries",
      value: "info@mellowautoworks.co.za",
      href: "mailto:info@mellowautoworks.co.za",
      icon: <Mail size={32} className="text-performance-red" />
    }
  ];

  return (
    <div className="pt-32">
      <section className="section-spacing bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-performance-red font-display font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
              <h1 className="text-5xl md:text-8xl font-display font-black leading-[0.85] tracking-tight uppercase mb-8">LOCATE <br /> <span className="text-performance-red">OUR HUB</span></h1>
              <p className="text-light-grey text-xl font-medium leading-relaxed mb-12 max-w-xl">
                 Whether you have a technical query or need to find our physical workshop, we’re here to help.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="bg-graphite p-8 border-l-4 border-performance-red">
                  <MapPin className="text-performance-red mb-6" size={32} />
                  <h3 className="font-display font-bold text-lg mb-2 uppercase tracking-tighter">OUR ADDRESS</h3>
                  <p className="text-light-grey font-medium">123 Performance Road, <br />Industrial Area, <br />Cape Town, 8001</p>
                </div>
                <div className="bg-graphite p-8 border-l-4 border-performance-red">
                   <Clock className="text-performance-red mb-6" size={32} />
                   <h3 className="font-display font-bold text-lg mb-2 uppercase tracking-tighter">WORKING HOURS</h3>
                   <p className="text-light-grey font-medium">Mon - Fri: 08:00 - 17:30 <br />Sat: 08:30 - 13:00 <br />Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method) => (
                <a 
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith('http') ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="bg-graphite p-8 flex items-center justify-between group hover:bg-off-white hover:text-charcoal transition-all border border-white/5"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-charcoal flex items-center justify-center shrink-0">
                      {method.icon}
                    </div>
                    <div>
                      <span className="block text-xs font-display font-bold uppercase tracking-widest opacity-60 mb-1">{method.title}</span>
                      <span className="block text-xl md:text-2xl font-display font-black tracking-tighter">{method.value}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all -translate-y-2" size={32} />
                </a>
              ))}

              <div className="pt-8">
                <p className="font-display font-bold uppercase tracking-[0.2em] text-sm mb-6 opacity-40">Follow our updates</p>
                <div className="flex gap-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full">
                    <Instagram size={20} /> Instagram
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full">
                    <Facebook size={20} /> Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Visual Placeholder */}
      <section className="h-[500px] w-full bg-graphite relative grayscale opacity-40 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
               <MapPin size={64} className="mx-auto mb-4 text-performance-red" />
               <p className="font-display font-black text-2xl tracking-widest uppercase">Map Data Loading...</p>
            </div>
        </div>
        {/* Real map would go here if API key was provided */}
      </section>
    </div>
  );
}
