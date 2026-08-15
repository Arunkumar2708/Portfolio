import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

const cards = [
  {
    title: "Location",
    value: "Sambavarvadakarai, Tenkasi - 627856",
    icon: "mdi:map-marker",
    link: "https://www.google.com/maps/place/Sambavarvadakarai,+Tamil+Nadu+627856/@9.0021986,77.3926113,3450m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b069d3afd762bad:0x3ffa9855713268ab!8m2!3d9.0021219!4d77.3936415!16zL20vMGY2NWtw?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    title: "Contact",
    value: "+91 6379751901",
    icon: "mdi:phone",
    link: "tel:+916379751901",
  },
  {
    title: "Mail",
    value: "arunkumarbsc105@gmail.com",
    icon: "mdi:email",
    link: "mailto:arunkumarbsc105@gmail.com",
  },
  {
    title: "GitHub",
    value: "github.com/Arunkumar2708",
    icon: "mdi:github",
    link: "https://github.com/Arunkumar2708",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/arun-kumar-a-513ba7226",
    icon: "mdi:linkedin",
    link: "https://www.linkedin.com/in/arun-kumar-a-513ba7226/",
  },
];

// To receive contact form messages directly in your email inbox:
// 1. Go to https://web3forms.com and submit your email to get a free Access Key.
// 2. Paste your Access Key string into the variable below:
const WEB3FORMS_ACCESS_KEY: string = "89a0f1aa-a1db-494a-a11f-0ba5ff4ea40e";

const Contact: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 },
    );
    ref.current && observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);

    // If key is not configured, fallback to demo mode
    if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      setTimeout(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitting(false);
        alert("Demo Mode: Your message would be sent here! To receive actual emails, replace 'YOUR_ACCESS_KEY_HERE' in src/sections/Contact.tsx with your free Web3Forms key.");
        setTimeout(() => setSubmitted(false), 5000);
      }, 800);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to connect to the server. Please check your network connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="pt-24 pb-28 relative overflow-hidden bg-[#0a0f1d]"
    >
      {/* Decorative Blur Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[100px] z-0 animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-fuchsia-600/10 rounded-full filter blur-[100px] z-0 animate-pulse-glow" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl font-extrabold text-white mb-3">
              Let’s Connect
            </h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-purple-600 to-fuchsia-600 mx-auto rounded-full shadow-[0_2px_10px_rgba(168,85,247,0.4)]" />
          </div>
        </div>

        {/* Form and Info Columns */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start"
        >
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-2 flex flex-col gap-5 w-full">
            {cards.map((card, index) => {
              const Wrapper = card.link ? "a" : "div";

              return (
                <Wrapper
                  key={index}
                  href={card.link}
                  target={card.link?.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`
                    relative w-full rounded-2xl overflow-hidden glass-panel group cursor-pointer
                    border border-slate-800/80 p-5 flex items-center gap-5
                    transition-all duration-700 hover:border-purple-500/30 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(168,85,247,0.05)]
                    ${visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                    }
                  `}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {/* Glowing scaling backdrop */}
                  <div
                    className="absolute -top-16 -left-16 w-36 h-36 
                               bg-gradient-to-br from-purple-600/10 to-fuchsia-600/10
                               rounded-full
                               scale-100 group-hover:scale-[6]
                               transition-transform duration-700 ease-out"
                  />

                  {/* Icon */}
                  <div
                    className="relative w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 
                                  flex items-center justify-center text-purple-400 group-hover:text-white group-hover:border-purple-500/20 group-hover:bg-purple-950/40
                                  transition-all duration-500"
                  >
                    <Icon
                      icon={card.icon}
                      className="text-2xl relative z-10 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 relative z-10">
                    <span className="text-[10px] text-slate-550 font-bold uppercase tracking-wider block mb-0.5">
                      {card.title}
                    </span>
                    <h3 className="text-base font-extrabold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {card.value}
                    </h3>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* Right Column: Contact Form */}
          <div
            className={`lg:col-span-3 w-full transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl shadow-xl border border-slate-800/80 relative">

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-purple-950/50 border border-purple-500/35 rounded-full flex items-center justify-center text-3xl mb-6 shadow-inner animate-bounce">
                    🎉
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 max-w-sm">
                    Thank you for reaching out. I will get back to you as soon as possible!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm placeholder-slate-655 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all shadow-inner"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="johndoe@example.com"
                        className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm placeholder-slate-655 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Inquiry"
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm placeholder-slate-655 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all shadow-inner"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Hello Arun, let's work together..."
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm placeholder-slate-655 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all shadow-inner resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-purple-900/30 hover:shadow-purple-500/20 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer
                      ${submitting ? "opacity-50 pointer-events-none" : ""}
                    `}
                  >
                    {submitting ? (
                      <>
                        <span>Sending Message...</span>
                        <Icon icon="line-md:loading-twotone-loop" className="text-lg animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Icon icon="mdi:send" className="text-base" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
