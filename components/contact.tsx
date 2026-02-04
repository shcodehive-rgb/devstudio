"use client"

import { useState, useRef, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from "lucide-react"
import emailjs from '@emailjs/browser';

export function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Placeholders - User to replace later
        const SERVICE_ID = "service_352qmmo";
        const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
        const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

        if (form.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then((result) => {
                    setLoading(false);
                    setStatus('success');
                    if (form.current) form.current.reset();
                    setTimeout(() => setStatus(''), 5000);
                }, (error) => {
                    setLoading(false);
                    setStatus('error');
                    console.log(error.text);
                });
        }
    };

    return (
        <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* LEFT: Team Profiles */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 space-y-12"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                Meet the <span className="text-cyan-400">Partners</span>.
                            </h2>
                            <p className="text-gray-400 text-lg">
                                We are a freelance power-duo dedicated to building your digital success.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* Partner 1: Salah (Sal) */}
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">S</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Salah (Sal)</h3>
                                        <p className="text-cyan-400 text-sm font-medium">Lead IT Entrepreneur & Senior Developer</p>
                                    </div>
                                    <span className="hidden md:inline-flex ml-auto px-3 py-1 text-[10px] font-bold text-black bg-cyan-400 rounded-full">5+ Years Mastery</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    The architect behind the code. Specializing in high-performance SaaS, complex algorithms, and scalable web infrastructure.
                                </p>
                            </div>

                            {/* Partner 2: Amina */}
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-xl">A</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Amina</h3>
                                        <p className="text-purple-400 text-sm font-medium">Co-Founder & Business Manager</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-2">
                                    <span className="text-gray-300 font-semibold">Focus:</span> Client Success & Strategy
                                </p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    The bridge between your vision and reality. Ensuring smooth communication, project management, and timely delivery.
                                </p>
                            </div>
                        </div>

                        {/* Direct Contact Info */}
                        <div className="flex flex-col gap-4 pt-8 border-t border-white/10">
                            <a href="tel:+212635278125" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all">
                                    <Phone size={18} />
                                </div>
                                <span className="font-mono text-sm">+212 635-278125</span>
                            </a>
                            <a href="https://wa.me/212635278125" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-500 group-hover:text-black transition-all">
                                    <MessageCircle size={18} />
                                </div>
                                <span className="font-mono text-sm">WhatsApp Chat</span>
                            </a>
                            <a href="mailto:devstudio130@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-black transition-all">
                                    <Mail size={18} />
                                </div>
                                <span className="font-mono text-sm">devstudio130@gmail.com</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT: Contact Form (EmailJS) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="p-8 md:p-10 rounded-3xl bg-[#111] border border-white/10 shadow-2xl relative overflow-hidden">
                            {/* Decorative Gradient */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -z-10" />

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Ready to Scale Your Business?</h3>
                                <div className="flex items-center gap-2 text-green-400 text-sm font-medium bg-green-900/20 px-3 py-1 rounded-full w-fit">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Available for new projects
                                </div>
                            </div>

                            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Project Details</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition duration-300 flex justify-center items-center gap-2"
                                >
                                    {loading ? 'Sending...' : (
                                        <>
                                            Send Message <Send size={20} />
                                        </>
                                    )}
                                </button>

                                {/* Success/Error Messages */}
                                {status === 'success' && (
                                    <p className="text-green-500 text-center mt-4">✅ Message sent successfully! We'll get back to you soon.</p>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-500 text-center mt-4">❌ Something went wrong. Please try again.</p>
                                )}
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
