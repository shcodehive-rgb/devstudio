"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Menu, X, Linkedin, Facebook, Instagram, Globe, Phone } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { ReferralBanner } from "@/components/referral-banner"

export default function PortfolioPage() {
  const [lang, setLang] = useState<"fr" | "ar">("fr")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // --- HNA FIN KAN L'MOCHKIL: JAM3NA KOLCHI F BLASSA WA7DA ---
  const content = {
    fr: {
      nav: { about: "À propos", portfolio: "Réalisations", services: "Services", contact: "Contact" },
      hero: {
        title: "Transformez votre Business avec un Site Web Premium",
        subtitle: "Pour les restaurants, magasins et entrepreneurs exigeants qui veulent se démarquer.",
        cta1: "Voir nos réalisations",
        cta2: "Contact WhatsApp",
      },
      process: {
        title: "Comment nous travaillons",
        steps: [
          { num: "01", title: "Analyse & Stratégie", desc: "On étudie votre marché et vos objectifs pour créer une solution sur mesure." },
          { num: "02", title: "UI/UX Design", desc: "Création de maquettes modernes qui séduisent vos clients dès le premier regard." },
          { num: "03", title: "Développement", desc: "Codage avec les dernières technologies (Next.js) pour une rapidité extrême." },
          { num: "04", title: "Lancement & Suivi", desc: "Mise en ligne, tests finaux et accompagnement pour votre réussite." },
        ]
      },
      portfolio: {
        title: "Nos Réalisations",
        subtitle: "Swipez pour voir plus de projets 👉",
      },
      services: {
        title: "Services Premium",
        items: [
          { title: "Sites Web Premium", desc: "Design moderne et performance optimale" },
          { title: "E-commerce", desc: "Boutiques en ligne qui convertissent" },
          { title: "Applications Web", desc: "Solutions sur mesure pour votre business" },
          { title: "SEO & Visibilité", desc: "Soyez visible sur Google" },
        ],
      },
      banner: {
        text: "Parrainez un ami et gagnez",
        amount: "500 MAD"
      }
    },
    ar: {
      nav: { about: "من نحن", portfolio: "أعمالنا", services: "خدماتنا", contact: "تواصل معنا" },
      hero: {
        title: "حوّل مشروعك إلى علامة تجارية مميزة",
        subtitle: "نصمم مواقع إلكترونية احترافية للمطاعم والمتاجر ورواد الأعمال الطموحين.",
        cta1: "شاهد أعمالنا",
        cta2: "تواصل عبر واتساب",
      },
      process: {
        title: "كيف نعمل على مشروعك",
        steps: [
          { num: "01", title: "التحليل والاستراتيجية", desc: "ندرس مشروعك وأهدافك لنقدم لك الحل التقني الأنسب." },
          { num: "02", title: "التصيميم الجذاب", desc: "تصميم واجهات عصرية تجذب انتباه عملائك من النظرة الأولى." },
          { num: "03", title: "البرمجة والتطوير", desc: "نستخدم أحدث التقنيات لضمان سرعة وأداء عالي لموقعك." },
          { num: "04", title: "الإطلاق والمتابعة", desc: "نطلق موقعك ونتأكد من عمله بشكل مثالي مع دعم مستمر." },
        ]
      },
      portfolio: {
        title: "أعمال قمنا بتنفيذها",
        subtitle: "سحب لليمين لرؤية المزيد من المشاريع 👉",
      },
      services: {
        title: "خدماتنا المتميزة",
        items: [
          { title: "مواقع احترافية", desc: "تصميم عصري وسرعة فائقة" },
          { title: "متاجر إلكترونية", desc: "متاجر تساعدك على زيادة المبيعات" },
          { title: "تطبيقات الويب", desc: "حلول تقنية مفصلة لعملك" },
          { title: "تحسين محركات البحث", desc: "ظهور قوي على جوجل" },
        ],
      },
      banner: {
        text: "رشح صديقاً واحصل على خصم",
        amount: "500 درهم"
      }
    },
  }

  const t = content[lang]
  const isAr = lang === "ar"

  const projects = [
    { title: "teclecom", category: "Site Web Restaurant", image: "/1.png" },
    { title: "idmisk", category: "E-commerce Fashion", image: "/2.png" },
    { title: "infiniprint", category: "Site Vitrine", image: "/3.png" },
    { title: "30jour", category: "Corporate", image: "/4.png" },
    { title: "morocco.ai", category: "App Web", image: "/5.png" },
  ]

  return (
    <div 
      className={`min-h-screen bg-[#05050a] text-white font-sans ${isAr ? 'font-arabic' : ''}`} 
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* --- NAVBAR --- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#05050a]/80 border-b border-white/10"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer">
              DevStudio.
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#portfolio" className="text-sm font-medium hover:text-blue-400 transition-colors">{t.nav.portfolio}</a>
              <a href="#services" className="text-sm font-medium hover:text-blue-400 transition-colors">{t.nav.services}</a>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all text-xs font-bold border border-white/10"
              >
                <Globe size={14} />
                {lang === "fr" ? "AR" : "FR"}
              </button>

              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-white">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: isAr ? 50 : -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className={`text-center ${isAr ? 'md:text-right' : 'md:text-left'}`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {t.hero.subtitle}
            </p>
            
           <div className="flex flex-col items-center gap-6 mb-10">
                {/* L'Buttons l'Kbar */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    {/* 1. WhatsApp Button */}
                    <a 
                    href="https://wa.me/212631378800?text=Salam,%20bghit%20site%20web" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                    >
                    <Button className="w-full sm:w-auto min-w-[200px] h-14 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:scale-105 hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all duration-300 rounded-full text-lg font-bold border border-white/10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <div className="relative flex items-center justify-center gap-2">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.355-5.033c0-5.42 4.409-9.85 9.85-9.85 2.653 0 5.145 1.053 7.021 2.929 1.875 1.876 2.929 4.37 2.929 7.022 0 5.42-4.41 9.85-9.85 9.85" /></svg>
                        {lang === 'fr' ? "Discuter sur WhatsApp" : "تواصل عبر واتساب"}
                        </div>
                    </Button>
                    </a>

                    {/* 2. Call Button */}
                    <a href="tel:+212635278125" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto min-w-[180px] h-14 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white/90 hover:text-white transition-all flex items-center justify-center gap-2 group">
                        <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                        {lang === 'fr' ? "Nous Appeler" : "اتصل بنا"}
                    </Button>
                    </a>
                </div>

                {/* 3. Link "Voir Réalisations" */}
                <a 
                    href="#portfolio" 
                    className="group flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-400 pb-0.5"
                >
                    {t.hero.cta1}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>

                {/* Icons dial Social Media */}
                <div className="flex gap-5 justify-center text-gray-400 mt-2">
                    <a href="#" className="hover:text-blue-500 hover:scale-110 transition-all"><Linkedin size={24} /></a>
                    <a href="#" className="hover:text-blue-600 hover:scale-110 transition-all"><Facebook size={24} /></a>
                    <a href="#" className="hover:text-pink-500 hover:scale-110 transition-all"><Instagram size={24} /></a>
                </div>
            </div>
          </motion.div>

          {/* Right Column: CSS 3D Sphere */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:flex items-center justify-center h-[500px]"
          >
            {/* 1. Daw L'kbir */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse-glow" />

            {/* 2. L'Koura Rayisiya */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float z-10">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 blur-sm opacity-90" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-transparent opacity-100" />
              {/* Rings */}
              <div className="absolute -inset-4 rounded-full border border-white/20 border-dashed animate-spin-slow" />
              <div className="absolute -inset-12 rounded-full border border-white/10 rotate-45 scale-110" />
              {/* Icons */}
              <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-ping" />
            </div>

            {/* 5. Card +50 Projects */}
            <div className={`absolute bottom-10 ${isAr ? 'right-0 md:right-10' : 'left-0 md:left-10'} bg-[#0a0a0f]/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl flex items-center gap-3 animate-float z-20`} style={{ animationDelay: "1s" }}>
              <div className="w-12 h-12 bg-gradient-to-tr from-green-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-green-900/50">
                ✓
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Projets Livrés</p>
                <p className="text-2xl font-bold text-white" dir="ltr">+50</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PORTFOLIO --- */}
      <section id="portfolio" className="py-20 px-4 bg-[#0a0a0f]/50">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-10 px-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-2">{t.portfolio.title}</h2>
              <p className="text-gray-400">{t.portfolio.subtitle}</p>
            </div>
          </div>

          <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory hide-scrollbar">
            {projects.map((project, index) => (
              <div key={index} className="min-w-[85vw] md:min-w-[400px] snap-center">
                <ProjectCard {...project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION (Correctement Placée) --- */}
      <section className="py-20 px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-900/10 blur-[100px] -z-10" />

        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center"
          >
            {t.process.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-2xl bg-[#1e1e2e]/50 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-4xl font-bold text-white/5 group-hover:text-blue-500/20 transition-colors mb-4 absolute top-4 right-4 font-mono">
                  {step.num}
                </div>
                
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-900/30 group-hover:scale-110 transition-transform">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* --- SERVICES --- */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-16 text-center">{t.services.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.services.items.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/50 transition-all hover:bg-white/10"
              >
                <h3 className="text-xl font-bold mb-3 text-blue-100">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BANNER REFERRAL --- */}
      <ReferralBanner text={t.banner.text} amount={t.banner.amount} />
      
      {/* --- FOOTER --- */}
      <footer className="py-12 px-4 border-t border-white/5 bg-[#020205]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              DevStudio.
            </div>
            
            <div className="flex gap-6 text-gray-400">
                <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-blue-600 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
            </div>

            <p className="text-gray-600 text-sm">© 2025 DevStudio.</p>
        </div>
      </footer>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .font-arabic { fontFamily: 'Tahoma', 'Arial', sans-serif; lineHeight: 1.6; }
      `}</style>
    </div>
  )
}