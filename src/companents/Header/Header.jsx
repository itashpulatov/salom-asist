import React, { useState, useEffect } from 'react';
import './Header.css'
import { 
  Phone, Mail, Clock, CheckCircle, Users, Hospital, Activity, 
  Headphones, Target, TrendingUp, X, ChevronDown, Heart,
  Globe
} from 'lucide-react';

// Til sozlamalari
const translations = {
  ru: {
    header: { title: "Salom Assist" },
    navigation: {
      about: "О компании",
      services: "Услуги",
      infrastructure: "Инфраструктура",
      contact: "Контакты"
    },
    promo: {
      active: "Активно",
      title: "Медицинская помощь 24/7",
      description: "Комплексные медицинские услуги с полной поддержкой и координацией",
      support: "Поддержка",
      services: "Услуг",
      partners: "Партнеров",
      features: {
        specialists: "Квалифицированные специалисты",
        treatment: "Лечение и диагностика",
        quality: "Контроль качества",
        coordination: "Полная координация"
      }
    },
    hero: {
      title: "Ваше здоровье - наш приоритет",
      subtitle: "Профессиональная медицинская помощь",
      description: "Комплексные медицинские услуги с заботой о каждом пациенте",
      cta: "Связаться с нами"
    },
    about: {
      title: "О нашей компании",
      years: "Лет опыта",
      clinics: "Клиник-партнеров",
      support: "Поддержка"
    },
    services: {
      title: "Наши услуги",
      consultation: {
        title: "Консультация",
        description: "Профессиональные медицинские консультации специалистов"
      },
      treatment: {
        title: "Лечение",
        description: "Комплексное лечение и диагностика заболеваний"
      },
      quality: {
        title: "Контроль качества",
        description: "Постоянный мониторинг качества услуг"
      },
      coordination: {
        title: "Координация",
        description: "Полное сопровождение и координация лечения"
      }
    },
    infrastructure: {
      title: "Наша инфраструктура",
      callCenter: {
        title: "Кол-центр 24/7",
        description: "Круглосуточная поддержка пациентов"
      },
      network: {
        title: "Партнерская сеть",
        description: "300+ клиник и медицинских центров"
      },
      approach: {
        title: "Индивидуальный подход",
        description: "Персональный подход к каждому пациенту"
      },
      monitoring: {
        title: "Мониторинг",
        description: "Постоянный контроль качества услуг"
      }
    },
    contact: {
      title: "Контакты",
      phone: "Телефон",
      email: "Email",
      hours: "Часы работы",
      hoursText: "Понедельник - Пятница: 9:00 - 18:00"
    },
    footer: {
      title: "Salom Assist",
      slogan: "Ваше здоровье - наша забота",
      mission: "Предоставляем качественные медицинские услуги с 2019 года",
      copyright: "© 2024 Salom Assist. Все права защищены."
    }
  },
  uz: {
    header: { title: "Salom Assist" },
    navigation: {
      about: "Kompaniya haqida",
      services: "Xizmatlar",
      infrastructure: "Infratuzilma",
      contact: "Aloqa"
    },
    promo: {
      active: "Faol",
      title: "24/7 Tibbiy yordam",
      description: "To'liq qo'llab-quvvatlash va muvofiqlashtirish bilan kompleks tibbiy xizmatlar",
      support: "Qo'llab-quvvatlash",
      services: "Xizmatlar",
      partners: "Hamkorlar",
      features: {
        specialists: "Malakali mutaxassislar",
        treatment: "Davolash va diagnostika",
        quality: "Sifat nazorati",
        coordination: "To'liq muvofiqlashtirish"
      }
    },
    hero: {
      title: "Sizning sog'lig'ingiz - bizning ustuvor vazifamiz",
      subtitle: "Professional tibbiy yordam",
      description: "Har bir bemorga g'amxo'rlik bilan kompleks tibbiy xizmatlar",
      cta: "Biz bilan bog'laning"
    },
    about: {
      title: "Kompaniyamiz haqida",
      years: "Yillik tajriba",
      clinics: "Hamkor klinikalar",
      support: "Qo'llab-quvvatlash"
    },
    services: {
      title: "Bizning xizmatlar",
      consultation: {
        title: "Konsultatsiya",
        description: "Mutaxassislarning professional tibbiy maslahatlari"
      },
      treatment: {
        title: "Davolash",
        description: "Kasalliklarning kompleks davolashi va diagnostikasi"
      },
      quality: {
        title: "Sifat nazorati",
        description: "Xizmatlar sifati doimiy monitoringi"
      },
      coordination: {
        title: "Muvofiqlashtirish",
        description: "Davolashning to'liq hamrohligi va muvofiqlashtirilishi"
      }
    },
    infrastructure: {
      title: "Bizning infratuzilmamiz",
      callCenter: {
        title: "24/7 Qo'ng'iroq markazi",
        description: "Bemurlarga kuniga 24 soat qo'llab-quvvatlash"
      },
      network: {
        title: "Hamkorlik tarmog'i",
        description: "300+ klinika va tibbiy markazlar"
      },
      approach: {
        title: "Individual yondashuv",
        description: "Har bir bemorga shaxsiy yondashuv"
      },
      monitoring: {
        title: "Monitoring",
        description: "Xizmatlar sifati doimiy nazorati"
      }
    },
    contact: {
      title: "Aloqa",
      phone: "Telefon",
      email: "Elektron pochta",
      hours: "Ish vaqtlari",
      hoursText: "Dushanba - Juma: 9:00 - 18:00"
    },
    footer: {
      title: "Salom Assist",
      slogan: "Sizning sog'lig'ingiz - bizning g'amimiz",
      mission: "2019 yildan beri sifatli tibbiy xizmatlarni taqdim etamiz",
      copyright: "© 2024 Salom Assist. Barcha huquqlar himoyalangan."
    }
  },
  en: {
    header: { title: "Salom Assist" },
    navigation: {
      about: "About",
      services: "Services",
      infrastructure: "Infrastructure",
      contact: "Contact"
    },
    promo: {
      active: "Active",
      title: "24/7 Medical Assistance",
      description: "Comprehensive medical services with full support and coordination",
      support: "Support",
      services: "Services",
      partners: "Partners",
      features: {
        specialists: "Qualified specialists",
        treatment: "Treatment and diagnosis",
        quality: "Quality control",
        coordination: "Full coordination"
      }
    },
    hero: {
      title: "Your Health is Our Priority",
      subtitle: "Professional Medical Assistance",
      description: "Comprehensive medical services with care for every patient",
      cta: "Contact Us"
    },
    about: {
      title: "About Our Company",
      years: "Years of experience",
      clinics: "Partner clinics",
      support: "Support"
    },
    services: {
      title: "Our Services",
      consultation: {
        title: "Consultation",
        description: "Professional medical consultations from specialists"
      },
      treatment: {
        title: "Treatment",
        description: "Comprehensive treatment and diagnosis of diseases"
      },
      quality: {
        title: "Quality Control",
        description: "Constant monitoring of service quality"
      },
      coordination: {
        title: "Coordination",
        description: "Full treatment support and coordination"
      }
    },
    infrastructure: {
      title: "Our Infrastructure",
      callCenter: {
        title: "24/7 Call Center",
        description: "Round-the-clock patient support"
      },
      network: {
        title: "Partner Network",
        description: "300+ clinics and medical centers"
      },
      approach: {
        title: "Individual Approach",
        description: "Personal approach to every patient"
      },
      monitoring: {
        title: "Monitoring",
        description: "Constant quality control of services"
      }
    },
    contact: {
      title: "Contact",
      phone: "Phone",
      email: "Email",
      hours: "Working Hours",
      hoursText: "Monday - Friday: 9:00 - 18:00"
    },
    footer: {
      title: "Salom Assist",
      slogan: "Your Health is Our Care",
      mission: "Providing quality medical services since 2019",
      copyright: "© 2024 Salom Assist. All rights reserved."
    }
  }
};

// Til o'zgartirish komponenti
function LanguageSwitcher({ currentLang, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'uz', name: 'O\'zbek', flag: '🇺🇿' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300"
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium">{currentLanguage.flag} {currentLanguage.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                onChange(language.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 hover:bg-teal-50 transition-colors flex items-center gap-3 ${
                currentLang === language.code ? 'bg-teal-50 text-teal-600' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="font-medium">{language.name}</span>
              {currentLang === language.code && (
                <CheckCircle className="w-4 h-4 ml-auto text-teal-500" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Kichik komponentlar
function StatCard({ number, label }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
      <div className="text-5xl font-bold text-teal-500 mb-3">{number}</div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-3 transition-all duration-300 border-t-4 border-teal-500">
      <div className="text-teal-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function InfraCard({ icon, title, description }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
      <div className="mb-3">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="opacity-90 text-white">{description}</p>
    </div>
  );
}

function ContactCard({ icon, title, content }) {
  return (
    <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
      <div className="text-teal-500 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
      <div className="text-xl text-gray-600">{content}</div>
    </div>
  );
}

// Asosiy komponent
export default function SalomAssist() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isCompact, setIsCompact] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('ru');
  
  const t = translations[currentLanguage];

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    localStorage.setItem('selectedLanguage', lang);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
      setCurrentLanguage(savedLang);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg' : 'bg-gradient-to-r from-teal-500 to-cyan-500'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-teal-500" />
              </div>
              <span className="text-2xl font-bold text-white">{t.header.title}</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 items-center">
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-teal-100 transition">{t.navigation.about}</button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-teal-100 transition">{t.navigation.services}</button>
              <button onClick={() => scrollToSection('infrastructure')} className="text-white hover:text-teal-100 transition">{t.navigation.infrastructure}</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-teal-100 transition">{t.navigation.contact}</button>
              
              <LanguageSwitcher currentLang={currentLanguage} onChange={changeLanguage} />
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-teal-600 to-cyan-600 py-4 px-4">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('about')} className="text-white text-left py-2">{t.navigation.about}</button>
              <button onClick={() => scrollToSection('services')} className="text-white text-left py-2">{t.navigation.services}</button>
              <button onClick={() => scrollToSection('infrastructure')} className="text-white text-left py-2">{t.navigation.infrastructure}</button>
              <button onClick={() => scrollToSection('contact')} className="text-white text-left py-2">{t.navigation.contact}</button>
              
              <div className="pt-2 border-t border-white/20">
                <LanguageSwitcher currentLang={currentLanguage} onChange={changeLanguage} />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Promotional Banner */}
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4">
          {isVisible && (
            <>
              <div
                className={`rounded-2xl mt-8 relative overflow-hidden bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-400 shadow-xl transition-all duration-700 ease-in-out ${
                  isCompact ? 'max-h-0 opacity-0 py-0' : 'max-h-[600px] opacity-100'
                }`}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600 rounded-full opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

                <button
                  onClick={() => setIsCompact(true)}
                  className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                <div className="relative z-10 px-6 py-6 lg:px-16 lg:py-10">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
                    <div className="flex-1 text-center lg:text-left">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-2 lg:mb-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm font-medium">{t.promo.active}</span>
                      </div>

                      <h3 className="text-white font-bold text-2xl lg:text-4xl mb-2 lg:mb-3 leading-tight">
                        {t.promo.title}
                      </h3>

                      <p className="text-teal-50 text-sm lg:text-lg mb-3 lg:mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        {t.promo.description}
                      </p>

                      <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-4">
                        <div className="text-white">
                          <div className="text-xl lg:text-2xl font-bold">24/7</div>
                          <div className="text-xs text-teal-100">{t.promo.support}</div>
                        </div>
                        <div className="w-px h-8 lg:h-10 bg-white/30"></div>
                        <div className="text-white">
                          <div className="text-xl lg:text-2xl font-bold">100+</div>
                          <div className="text-xs text-teal-100">{t.promo.services}</div>
                        </div>
                        <div className="w-px h-8 lg:h-10 bg-white/30"></div>
                        <div className="text-white">
                          <div className="text-xl lg:text-2xl font-bold">300+</div>
                          <div className="text-xs text-teal-100">{t.promo.partners}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                          {t.promo.features.specialists}
                        </span>
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                          {t.promo.features.treatment}
                        </span>
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                          {t.promo.features.quality}
                        </span>
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                          {t.promo.features.coordination}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 items-center lg:items-end">
                      <a
                        href="tel:+998712081133"
                        className="bg-white text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        <Phone className="w-5 h-5" />
                        +998 71 208-11-33
                      </a>

                      <a
                        href="mailto:info@salomassist.uz"
                        className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-6 py-2 rounded-full text-sm flex items-center gap-2 transition-all duration-300"
                      >
                        <Mail className="w-4 h-4" />
                        info@salomassist.uz
                      </a>

                      <div className="flex items-center gap-2 text-white text-sm">
                        <Clock className="w-4 h-4" />
                        <span className="text-teal-50">{t.contact.hoursText}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`rounded-2xl mt-4 overflow-hidden transition-all duration-700 ease-in-out ${
                  isCompact ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <button
                  onClick={() => setIsCompact(false)}
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-lg">{t.promo.title}</div>
                      <div className="text-teal-100 text-sm">24/7 {t.promo.services.toLowerCase()} - +998 71 208-11-33</div>
                    </div>
                  </div>
                  <ChevronDown className="w-6 h-6 transform group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-gradient-to-r from-teal-500 to-cyan-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t.hero.title}
          </h1>
          <p className="text-2xl mb-4 opacity-95">{t.hero.subtitle}</p>
          <p className="text-xl mb-8 opacity-90">{t.hero.description}</p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-teal-500 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{t.about.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StatCard number="5+" label={t.about.years} />
            <StatCard number="300+" label={t.about.clinics} />
            <StatCard number="24/7" label={t.about.support} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{t.services.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Users className="w-12 h-12" />}
              title={t.services.consultation.title}
              description={t.services.consultation.description}
            />
            <ServiceCard 
              icon={<Hospital className="w-12 h-12" />}
              title={t.services.treatment.title}
              description={t.services.treatment.description}
            />
            <ServiceCard 
              icon={<Activity className="w-12 h-12" />}
              title={t.services.quality.title}
              description={t.services.quality.description}
            />
            <ServiceCard 
              icon={<Target className="w-12 h-12" />}
              title={t.services.coordination.title}
              description={t.services.coordination.description}
            />
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="py-20 bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t.infrastructure.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <InfraCard 
              icon={<Headphones className="w-10 h-10" />}
              title={t.infrastructure.callCenter.title}
              description={t.infrastructure.callCenter.description}
            />
            <InfraCard 
              icon={<Users className="w-10 h-10" />}
              title={t.infrastructure.network.title}
              description={t.infrastructure.network.description}
            />
            <InfraCard 
              icon={<Hospital className="w-10 h-10" />}
              title={t.infrastructure.approach.title}
              description={t.infrastructure.approach.description}
            />
            <InfraCard 
              icon={<TrendingUp className="w-10 h-10" />}
              title={t.infrastructure.monitoring.title}
              description={t.infrastructure.monitoring.description}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{t.contact.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ContactCard 
              icon={<Phone className="w-12 h-12" />}
              title={t.contact.phone}
              content={<a href="tel:+998712081133" className="text-teal-500 font-bold hover:text-teal-600">+998 71 208-11-33</a>}
            />
            <ContactCard 
              icon={<Mail className="w-12 h-12" />}
              title={t.contact.email}
              content={<a href="mailto:info@salomassist.uz" className="text-teal-500 font-bold hover:text-teal-600">info@salomassist.uz</a>}
            />
            <ContactCard 
              icon={<Clock className="w-12 h-12" />}
              title={t.contact.hours}
              content={<div>{t.contact.hoursText}</div>}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="text-2xl font-bold mb-2">{t.footer.title}</div>
            <p className="text-lg">{t.footer.slogan}</p>
            <p className="mt-4 opacity-70">{t.footer.mission}</p>
          </div>
          <p className="opacity-50 text-sm">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}