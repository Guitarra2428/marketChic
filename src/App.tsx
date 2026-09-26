import React, { useState } from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  Share2, 
  MessageSquare, 
  Users, 
  Star, 
  Mail, 
  Phone, 
  Instagram, 
  Facebook, 
  ExternalLink, 
  Code, 
  Megaphone, 
  FileText, 
  Layers, 
  Lightbulb, 
  CheckCircle, 
  Target, 
  ShieldCheck, 
  Brain, 
  Compass, 
  ArrowRight, 
  Menu, 
  X, 
  Eye, 
  Download,
  Check,
  Send,
  Flag,
  Quote
} from 'lucide-react';

function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-3 animate-float group">
      <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-purple-600 via-pink-500 to-emerald-400 shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
        <img 
          src="/logo.png" 
          onError={(e) => { e.currentTarget.src = "https://i.ibb.co/JjrJtDC/logo.png"; }}
          alt="MARKETCHIC Logo" 
          className="w-full h-full object-cover rounded-full bg-white"
        />
      </div>
      <span className="text-2xl font-extrabold text-gradient tracking-tight">
        MARKETCHIC
      </span>
    </a>
  );
}

// WhatsApp Floating Button
function WhatsAppFloating() {
  const whatsappUrl = "https://wa.me/18294401628?text=Hola%20MarketChic,%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-5 py-3.5 rounded-full shadow-2xl hover:shadow-emerald-500/40 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 group border-2 border-white/30"
      aria-label="Hablemos por WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
        <MessageSquare className="w-5 h-5 relative fill-white/20" />
      </div>
      <span className="font-extrabold text-sm tracking-wide hidden sm:inline-block">
        Hablemos por WhatsApp
      </span>
    </a>
  );
}

// Legal Modal Component
function LegalModal({ isOpen, onClose, title, content }: { isOpen: boolean; onClose: () => void; title: string; content: React.ReactNode }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-scaleUp">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-purple-50 via-pink-50 to-emerald-50">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white text-gray-600 hover:text-gray-900 flex items-center justify-center transition-colors shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
          {content}
        </div>
        <div className="p-4 border-t border-gray-100 flex justify-end bg-gray-50">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-sm font-bold transition-colors shadow-md"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; category: string; description: string; handle?: string } | null>(null);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; title: string; type: 'terms' | 'privacy' }>({
    isOpen: false,
    title: '',
    type: 'privacy'
  });

  // Form State
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    whatsapp: '',
    correo: '',
    servicio: 'Estrategia y Asesoría de Marketing',
    objetivo: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `*Nueva Solicitud de Evaluación Inicial - MarketChic*%0A%0A` +
      `👤 *Nombre:* ${encodeURIComponent(formData.nombre)}%0A` +
      `🏢 *Marca/Empresa:* ${encodeURIComponent(formData.empresa)}%0A` +
      `📱 *WhatsApp:* ${encodeURIComponent(formData.whatsapp)}%0A` +
      `✉️ *Correo:* ${encodeURIComponent(formData.correo)}%0A` +
      `🎯 *Servicio de Interés:* ${encodeURIComponent(formData.servicio)}%0A` +
      `📝 *Objetivo o Necesidad:* ${encodeURIComponent(formData.objetivo || 'No especificado')}`;

    const whatsappLink = `https://wa.me/18294401628?text=${message}`;
    
    window.open(whatsappLink, '_blank');
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  const handlePackageSelect = (packageName: string) => {
    setFormData(prev => ({ ...prev, servicio: `Paquete: ${packageName}` }));
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Paquetes', href: '#paquetes' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const servicios = [
    {
      num: "01",
      icon: Target,
      title: "Estrategia y Asesoría de Marketing",
      description: "Analizamos tu marca, objetivos, público y situación actual para diseñar estrategias personalizadas y definir acciones claras de crecimiento.",
      color: "purple"
    },
    {
      num: "02",
      icon: Share2,
      title: "Gestión Estratégica de Redes Sociales",
      description: "Planificamos, creamos y gestionamos la presencia de tu marca en redes sociales con contenido alineado a tus objetivos, identidad y audiencia.",
      color: "pink"
    },
    {
      num: "03",
      icon: Code,
      title: "Desarrollo de Páginas Web",
      description: "Diseñamos páginas web profesionales, funcionales y adaptadas a cada negocio para fortalecer su presencia digital, generar confianza y facilitar nuevas oportunidades comerciales.",
      color: "emerald"
    },
    {
      num: "04",
      icon: Megaphone,
      title: "Campañas Publicitarias",
      description: "Diseñamos, configuramos y optimizamos campañas digitales orientadas a alcanzar audiencias relevantes, generar oportunidades y mejorar el rendimiento de tu inversión publicitaria.",
      color: "purple"
    },
    {
      num: "05",
      icon: FileText,
      title: "Creación y Estrategia de Contenido",
      description: "Desarrollamos conceptos, calendarios, copies, piezas gráficas y contenido estratégico para comunicar la esencia de tu marca de manera consistente y atractiva.",
      color: "pink"
    },
    {
      num: "06",
      icon: Brain,
      title: "Inteligencia Artificial Aplicada al Marketing",
      description: "Integramos herramientas de inteligencia artificial para optimizar procesos, generar ideas, analizar información y potenciar estrategias, sin perder la autenticidad ni la esencia de cada marca.",
      color: "emerald"
    }
  ];

  // Portafolio enriquecido con todas las fotos y proyectos del PDF y DOCX
  const portafolio = [
    {
      id: 1,
      title: "Catalonia Hotels & Resorts",
      category: "Voz en off y contenido audiovisual",
      description: "Desarrollo de piezas de contenido orientadas a comunicación digital, experiencia de marca y locución comercial.",
      image: "/portfolio/image1.png",
      handle: "@cataloniahotels",
      tag: "Audiovisual & Branding"
    },
    {
      id: 2,
      title: "Catalonia Hotels",
      category: "Creación de contenido y modelo",
      description: "Conceptualización, producción y desarrollo de contenido audiovisual dinámico y modelaje para redes sociales.",
      image: "/portfolio/image2.png",
      handle: "@5kcataloniahotels",
      tag: "Social Media & Video"
    },
    {
      id: 3,
      title: "Eduard Espíritu Santo",
      category: "Guiones y planificación de contenido",
      description: "Planificación estratégica de piezas audiovisuales y desarrollo de guiones adaptados a objetivos de comunicación y eventos.",
      image: "/portfolio/image3.png",
      handle: "@eduardespiritusanto",
      tag: "Planificación & Guiones"
    },
    {
      id: 4,
      title: "Dra. Ávila Dermaclinic",
      category: "Gestión de redes sociales",
      description: "Creación, diseño y adaptación de contenido estético y dermatológico para fortalecer la presencia digital de la clínica.",
      image: "/portfolio/image4.png",
      handle: "@dra.aviladermaclinic",
      tag: "Salud & Estética"
    },
    {
      id: 5,
      title: "Prestige Services & Car Rentals",
      category: "Contenido para redes sociales",
      description: "Desarrollo de piezas comerciales y contenido visual de alto impacto para servicios de transporte y renta de vehículos.",
      image: "/portfolio/image5.png",
      handle: "@prestigeservices_dr",
      tag: "Transporte & Renta"
    },
    {
      id: 6,
      title: "Glow Too Salon",
      category: "Estrategia visual & Redes sociales",
      description: "Desarrollo de contenido audiovisual fresco y dinámico destacando productos y tratamientos de belleza.",
      image: "/portfolio/glow_too_salon.jpg",
      handle: "@glowtoosalon",
      tag: "Belleza & Estilo"
    },
    {
      id: 7,
      title: "La Pharmacie RD",
      category: "Contenido digital & Publicaciones",
      description: "Diseño y comunicación de productos y servicios mediante publicaciones adaptadas a redes sociales (Altos de Chavón).",
      image: "/portfolio/image6.png",
      handle: "@lapharmacie_rd",
      tag: "Farmacia & Retail"
    },
    {
      id: 8,
      title: "Movimiento MICA",
      category: "Planificación y redes sociales",
      description: "Estrategia de comunicación y contenido comunitario para eventos, dinámicas y presencia digital.",
      image: "/portfolio/movimiento_mica.jpg",
      handle: "@mov_mica",
      tag: "Comunidad & Eventos"
    }
  ];

  const testimonios = [
    {
      empresa: "Embutidos B&M",
      rating: 5,
      comentario: "Me encantaron. Gracias por esos stickers, quedaron genial.",
      servicio: "Diseño & Identidad Gráfica"
    },
    {
      empresa: "Brito Real Estate",
      rating: 5,
      comentario: "Gracias por dedicarle tiempo a la edición del vídeo. Excelente trabajo.",
      servicio: "Producción Audiovisual & Contenido"
    }
  ];

  const paquetes = [
    {
      title: "PRESENCIA DIGITAL",
      price: "Desde RD$12,000",
      description: "Ideal para empezar o retomar tu presencia digital de manera profesional.",
      features: [
        "Gestión de plataformas seleccionadas",
        "Calendario básico de contenido",
        "Creación de piezas gráficas",
        "Copywriting para publicaciones",
        "Optimización básica del perfil",
        "Orientación de comunicación de marca"
      ],
      cta: "Solicitar información",
      popular: false
    },
    {
      title: "CRECIMIENTO DIGITAL",
      price: "Desde RD$18,000",
      description: "Para marcas que buscan constancia, posicionamiento y una comunicación más estratégica.",
      features: [
        "Gestión estratégica de redes sociales",
        "Calendario de contenido personalizado",
        "Creación de contenido gráfico",
        "Copywriting estratégico",
        "Contenido complementario para historias",
        "Seguimiento básico de interacción",
        "Recomendaciones de crecimiento"
      ],
      cta: "Quiero crecer mi marca",
      popular: true
    },
    {
      title: "MARCA CON ESTRATEGIA",
      price: "Desde RD$20,000",
      description: "Para negocios que quieren crecer con mayor intención, estructura y acompañamiento estratégico.",
      features: [
        "Estrategia personalizada de contenido",
        "Gestión de plataformas principales",
        "Diseño y copywriting",
        "Organización visual de la marca",
        "Seguimiento de comunicación e interacción",
        "Recomendaciones de optimización",
        "Reunión de asesoría estratégica"
      ],
      cta: "Solicitar propuesta",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased selection:bg-pink-500 selection:text-white relative">
      <WhatsAppFloating />

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100 transition-all">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-7">
            {navLinks.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="nav-link text-gray-800 hover:text-purple-700 transition-colors text-sm font-semibold tracking-tight"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/18294401628?text=Hola%20MarketChic,%20me%20gustar%C3%ADa%20conversar%20sobre%20mi%20marca."
              target="_blank"
              rel="noopener noreferrer"
              className="button-gradient bg-gradient-to-r from-purple-700 via-pink-600 to-emerald-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Hablemos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-800 hover:text-purple-700 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 px-6 py-6 shadow-xl animate-fadeIn">
            <nav className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-gray-800 hover:text-purple-700 py-1.5"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <a
                  href="https://wa.me/18294401628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center button-gradient bg-gradient-to-r from-purple-700 via-pink-600 to-emerald-600 text-white font-bold py-3.5 rounded-xl shadow-md text-sm"
                >
                  Hablemos por WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 via-purple-700 to-purple-900 py-28 sm:py-36 relative overflow-hidden text-white shadow-inner" id="inicio">
        <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <span className="bg-black/25 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-bold px-5 py-2 rounded-full uppercase tracking-wider inline-block mb-6 shadow-md animate-float">
            Agencia de Marketing & Transformación Digital · Rep. Dom.
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight leading-[1.18] max-w-4xl mx-auto drop-shadow-sm">
            Estrategia, creatividad y tecnología para hacer crecer tu marca.
          </h1>

          <p className="text-lg sm:text-xl text-purple-50 mb-10 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow">
            Creamos soluciones de marketing digital y tradicional, contenido, publicidad, páginas web y estrategias potenciadas con inteligencia artificial sin perder la esencia de tu marca.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a 
              href="https://wa.me/18294401628?text=Hola%20MarketChic,%20quiero%20hablar%20sobre%20mi%20marca%20y%20conocer%20c%C3%B3mo%20pueden%20ayudarme."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-full font-extrabold shadow-2xl inline-flex items-center justify-center gap-2 group transition-all transform hover:-translate-y-0.5 text-base tracking-wide"
            >
              <span>Hablemos de tu marca</span>
              <span className="group-hover:translate-x-1 transition-transform font-bold">→</span>
            </a>

            <a 
              href="#servicios"
              className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white border-2 border-white/90 px-8 py-4 rounded-full font-bold shadow-lg inline-flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 backdrop-blur-md text-base"
            >
              Conoce nuestros servicios
            </a>
          </div>

          {/* Sutil pills under hero */}
          <div className="pt-6 max-w-3xl mx-auto">
            <div className="inline-block bg-black/25 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/15 shadow-sm">
              <p className="text-xs sm:text-sm text-white font-semibold tracking-wide flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-pink-300"></span>Estrategia</span>
                <span className="text-white/50">·</span>
                <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-300"></span>Redes Sociales</span>
                <span className="text-white/50">·</span>
                <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-200"></span>Publicidad</span>
                <span className="text-white/50">·</span>
                <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-300"></span>Desarrollo Web</span>
                <span className="text-white/50">·</span>
                <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-pink-200"></span>Branding</span>
                <span className="text-white/50">·</span>
                <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-300"></span>IA aplicada al Marketing</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Acerca de Nosotros Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-purple-50/30 via-white to-pink-50/30 relative" id="nosotros">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-purple-700 to-pink-600 text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-wider inline-block shadow-sm animate-float">
              ACERCA DE NOSOTROS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-4 mb-4">
              Nuestra Historia
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 via-pink-500 to-emerald-400 mx-auto rounded-full mb-6"></div>
          </div>

          {/* Historia Story Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-purple-100 shadow-xl shadow-purple-500/5 mb-16 card-hover relative overflow-hidden">
            <div className="space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                <strong className="text-gray-950 font-bold">MarketChic</strong> es una agencia de marketing fundada con el propósito de convertirse en aliada estratégica de marcas, emprendedores y negocios que buscan crecer con mayor claridad, creatividad y dirección.
              </p>
              
              <div className="flex items-center gap-3.5 p-4 sm:p-5 bg-purple-50/80 rounded-2xl border border-purple-200 shadow-sm text-base text-gray-900 font-medium">
                <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                <span>
                  Desde el año <strong>2023</strong>, MarketChic se encuentra registrada formalmente en <strong>ONAPI</strong>, fortaleciendo su identidad y proyección como marca dentro de la República Dominicana.
                </span>
              </div>

              <p>
                Como parte de su proceso de evolución, la agencia desarrolló un proyecto de transformación digital basado en una investigación académica realizada como trabajo de tesis de maestría, titulado:
              </p>

              <div className="bg-gradient-to-r from-purple-900 to-pink-900 text-white p-6 sm:p-7 rounded-2xl shadow-lg border-l-4 border-emerald-400">
                <p className="font-semibold italic text-base sm:text-lg leading-relaxed text-purple-50">
                  “Transformación del marketing digital como estrategia de crecimiento en la empresa MarketChic, República Dominicana.”
                </p>
              </div>

              <p>
                Este proyecto permitió analizar la situación actual de la agencia, identificar oportunidades de mejora y diseñar una estrategia orientada a fortalecer la captación de clientes, el posicionamiento digital, la conversión, la retención y la medición de resultados.
              </p>

              <p>
                Hoy, MarketChic integra marketing digital y tradicional, estrategia, creatividad, tecnología e inteligencia artificial aplicada, manteniendo siempre la esencia, autenticidad y objetivos de cada marca.
              </p>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-emerald-500/10 border border-pink-200 text-center">
                <p className="text-purple-950 font-bold text-lg sm:text-xl">
                  ✨ Porque no creemos en soluciones genéricas: creemos en estrategias construidas a partir de la realidad de cada negocio.
                </p>
              </div>
            </div>
          </div>

          {/* Misión y Visión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg shadow-purple-500/5 border border-purple-100 hover:shadow-xl transition-all card-hover group">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-700 group-hover:scale-110 transition-transform">
                <Flag className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-purple-900">Nuestra Misión</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Impulsar el crecimiento de marcas y negocios mediante estrategias de marketing digital y tradicional personalizadas, integrando creatividad, tecnología, análisis e innovación para generar conexiones significativas y resultados medibles.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg shadow-purple-500/5 border border-pink-100 hover:shadow-xl transition-all card-hover group">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 text-pink-700 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-pink-900">Nuestra Visión</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Consolidarnos como una agencia referente en estrategia, marketing y transformación digital en República Dominicana, reconocida por desarrollar soluciones innovadoras, auténticas y orientadas al crecimiento sostenible de nuestros clientes.
              </p>
            </div>
          </div>

          {/* Estrategias, Valores y Objetivos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Diferenciales */}
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-purple-500/5 border border-purple-100 space-y-6 card-hover">
              <h3 className="text-xl font-bold mb-2 text-purple-900 text-center">¿Qué nos diferencia?</h3>
              
              <div className="space-y-4">
                <div className="bg-purple-50/70 p-4 rounded-2xl border border-purple-100">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Share2 className="w-5 h-5 text-purple-700" />
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">Estrategias Personalizadas</h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">Diseñamos soluciones adaptadas a los objetivos, necesidades y realidad de cada marca.</p>
                </div>

                <div className="bg-pink-50/70 p-4 rounded-2xl border border-pink-100">
                  <div className="flex items-center gap-2 mb-1.5">
                    <TrendingUp className="w-5 h-5 text-pink-700" />
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">Resultados Medibles</h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">Analizamos indicadores clave para evaluar el desempeño de las estrategias y tomar mejores decisiones.</p>
                </div>

                <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Users className="w-5 h-5 text-emerald-700" />
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">Acompañamiento Estratégico</h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">Mantenemos una comunicación cercana y damos seguimiento a cada proyecto durante su desarrollo.</p>
                </div>
              </div>
            </div>

            {/* Card 2: Nuestros Valores */}
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-purple-500/5 border border-purple-100 card-hover">
              <h3 className="text-xl font-bold mb-6 text-pink-900 text-center">Nuestros Valores</h3>
              <div className="space-y-3.5 text-sm">
                <div className="bg-purple-50/60 p-3.5 rounded-2xl border border-purple-100/60">
                  <h4 className="font-bold text-purple-900 text-sm mb-1">Innovación</h4>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">Incorporamos nuevas herramientas, tendencias y tecnologías para crear soluciones más eficientes y relevantes.</p>
                </div>
                <div className="bg-pink-50/60 p-3.5 rounded-2xl border border-pink-100/60">
                  <h4 className="font-bold text-pink-900 text-sm mb-1">Transparencia</h4>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">Trabajamos con comunicación clara, expectativas realistas y decisiones fundamentadas.</p>
                </div>
                <div className="bg-emerald-50/60 p-3.5 rounded-2xl border border-emerald-100/60">
                  <h4 className="font-bold text-emerald-900 text-sm mb-1">Compromiso</h4>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">Nos involucramos en cada proyecto con responsabilidad y enfoque en los objetivos del cliente.</p>
                </div>
                <div className="bg-purple-50/60 p-3.5 rounded-2xl border border-purple-100/60">
                  <h4 className="font-bold text-purple-900 text-sm mb-1">Autenticidad</h4>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">Utilizamos la creatividad y la tecnología sin perder la esencia, identidad y personalidad de cada marca.</p>
                </div>
              </div>
            </div>

            {/* Card 3: Nuestros Objetivos */}
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-purple-500/5 border border-purple-100 card-hover">
              <h3 className="text-xl font-bold mb-6 text-emerald-900 text-center">Nuestros Objetivos</h3>
              <div className="space-y-3 text-sm text-gray-800">
                <div className="bg-emerald-50/50 p-3.5 rounded-2xl leading-relaxed flex items-start gap-2.5 border border-emerald-100">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">Fortalecer la presencia y el posicionamiento de nuestros clientes mediante estrategias adaptadas a sus mercados y audiencias.</span>
                </div>
                <div className="bg-purple-50/50 p-3.5 rounded-2xl leading-relaxed flex items-start gap-2.5 border border-purple-100">
                  <CheckCircle className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">Convertir la presencia digital en oportunidades comerciales a través de contenido, publicidad, tecnología y procesos estratégicos.</span>
                </div>
                <div className="bg-pink-50/50 p-3.5 rounded-2xl leading-relaxed flex items-start gap-2.5 border border-pink-100">
                  <CheckCircle className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">Promover decisiones basadas en datos mediante la medición y análisis de resultados.</span>
                </div>
                <div className="bg-emerald-50/50 p-3.5 rounded-2xl leading-relaxed flex items-start gap-2.5 border border-emerald-100">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">Construir relaciones de largo plazo basadas en la confianza, el acompañamiento y el crecimiento mutuo.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Biografía de la Fundadora / Mente Estratégica */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-emerald-600 text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-wider inline-block mb-4 shadow-sm animate-float">
            LIDERAZGO & VISIÓN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-8">
            La mente estratégica detrás de MarketChic
          </h2>

          {/* Avatar circular con efecto flotante original */}
          <div className="relative w-64 h-64 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-emerald-400 p-1.5 shadow-2xl animate-float">
              <img 
                src="/founder_2026.jpg" 
                onError={(e) => { e.currentTarget.src = "/founder.jpg"; }}
                alt="Emily Yokasta Morales Nova - Fundadora MarketChic" 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-inner bg-white"
              />
            </div>
          </div>

          <h3 className="text-2xl font-extrabold text-gray-900 mb-1">
            Emily Yokasta Morales Nova
          </h3>
          <p className="text-sm sm:text-base font-bold text-purple-800 mb-6">
            Fundadora & Estratega de Marketing | Licenciada en Mercadeo | MBA
          </p>

          <div className="space-y-5 text-gray-800 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-left bg-purple-50/50 p-8 sm:p-10 rounded-3xl border border-purple-100 shadow-sm">
            <p>
              <strong className="text-gray-950 font-bold">Emily Yokasta Morales Nova</strong> es Licenciada en Mercadeo, estratega de marketing y fundadora de MarketChic. Su experiencia integra marketing digital, social media, reputación digital, análisis del consumidor, ventas y desarrollo de estrategias para marcas y negocios.
            </p>
            <p>
              Como parte de su formación de maestría/MBA en Administración de Empresas Internacionales, desarrolló el proyecto <em className="text-purple-900 font-medium">“Transformación del marketing digital como estrategia de crecimiento en la empresa MarketChic, República Dominicana”</em>, convirtiendo a la propia agencia en un caso práctico de transformación digital.
            </p>
            <p>
              Actualmente lidera MarketChic bajo una visión que combina <strong>estrategia, creatividad, tecnología e inteligencia artificial</strong>, con el propósito de ayudar a las marcas a crecer sin perder su esencia.
            </p>
            
            <div className="pt-6 border-t border-purple-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-purple-950 font-medium">
              <div>
                <p className="font-extrabold text-base text-gray-900">Emily Yokasta Morales Nova</p>
                <p className="text-purple-800 font-semibold">Licenciada en Mercadeo · MBA / Administración de Empresas Internacionales</p>
                <p className="text-gray-700">Fundadora de MarketChic</p>
              </div>
              <a
                href="https://wa.me/18294401628?text=Hola%20Emily,%20me%20gustar%C3%ADa%20agendar%20una%20reuni%C3%B3n%20estrat%C3%A9gica."
                target="_blank"
                rel="noopener noreferrer"
                className="button-gradient bg-gradient-to-r from-purple-700 to-pink-600 text-white px-6 py-3 rounded-xl font-bold shadow-md text-xs sm:text-sm inline-flex items-center gap-2"
              >
                <span>Conversar</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-50/40 via-pink-50/40 to-emerald-50/40" id="servicios">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-emerald-600 text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-wider inline-block mb-4 shadow-sm animate-float">
              NUESTROS SERVICIOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Soluciones estratégicas para hacer crecer tu marca
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Diseñamos soluciones de marketing digital y tradicional adaptadas a las necesidades de cada negocio, combinando estrategia, creatividad, tecnología y medición de resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {servicios.map((s, index) => {
              const Icon = s.icon;
              return (
                <div 
                  key={index}
                  className="service-card card-hover bg-white rounded-3xl p-8 relative group border border-purple-100 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-14 h-14 rounded-2xl bg-${s.color}-50 flex items-center justify-center mb-6 text-${s.color}-700 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {s.description}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/18294401628?text=Hola%20MarketChic,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(s.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-purple-700 hover:text-pink-600 transition-colors pt-4 border-t border-gray-100"
                  >
                    <span>Solicitar información</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Banner de Orientación Especial (Servicio 7) */}
          <div className="gradient-background text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-black/20 border border-white/20 px-3.5 py-1.5 rounded-full text-white text-xs font-bold mb-4 backdrop-blur-sm">
                  <Compass className="w-4 h-4 text-emerald-300" />
                  <span>Orientación personalizada</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">
                  ¿No sabes qué servicio necesita tu marca?
                </h3>
                <p className="text-purple-50 text-base sm:text-lg leading-relaxed">
                  Cuéntanos sobre tu negocio y te ayudamos a identificar el punto de partida ideal para alcanzar tus objetivos sin perder tiempo ni recursos.
                </p>
              </div>

              <a
                href="https://wa.me/18294401628?text=Hola%20MarketChic,%20no%20estoy%20seguro(a)%20de%20qu%C3%A9%20servicio%20necesita%20mi%20marca.%20%C2%BFMe%20pueden%20orientar?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-950 hover:bg-purple-50 font-extrabold px-8 py-4 rounded-full shadow-2xl transition-all transform hover:scale-105 shrink-0 inline-flex items-center gap-2 text-sm uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Solicitar orientación por WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* NUEVA SECCIÓN: PORTAFOLIO DE PROYECTOS (Con todas las marcas y fotos del PDF) */}
      <section className="py-24 px-4 bg-white relative" id="portafolio">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-purple-700 to-pink-600 text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-wider inline-block shadow-sm animate-float">
              NUESTRO TRABAJO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-4 mb-4">
              Proyectos que hablan por nuestro trabajo
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Conoce algunos proyectos desarrollados para marcas de distintos sectores, desde creación de contenido y redes sociales hasta planificación audiovisual y comunicación digital.
            </p>
          </div>

          {/* Grid de Portafolio con 8 Proyectos y fotos reales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {portafolio.map((p) => (
              <div 
                key={p.id}
                className="card-hover bg-white rounded-3xl overflow-hidden border border-purple-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Hover zoom */}
                  <div 
                    className="relative h-56 overflow-hidden bg-gray-100 cursor-pointer"
                    onClick={() => setSelectedImage({ src: p.image, title: p.title, category: p.category, description: p.description, handle: p.handle })}
                  >
                    <img 
                      src={p.image} 
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 justify-between">
                      <span className="text-white text-xs font-bold flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">
                        <Eye className="w-3.5 h-3.5" /> Ampliar
                      </span>
                    </div>
                    <span className="absolute top-3 left-3 text-[11px] font-extrabold bg-white/95 backdrop-blur-md text-purple-900 px-2.5 py-1 rounded-full shadow-md border border-purple-100">
                      {p.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="text-[11px] font-bold text-pink-700 uppercase tracking-wider block mb-1">
                      {p.category}
                    </span>
                    <h3 className="text-lg font-extrabold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs font-semibold text-purple-700 mb-3">
                      {p.handle}
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-normal line-clamp-3">
                      {p.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => setSelectedImage({ src: p.image, title: p.title, category: p.category, description: p.description, handle: p.handle })}
                    className="w-full py-2 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-purple-100"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver proyecto</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonios y Referencias del PDF */}
          <div className="mb-16">
            <h3 className="text-2xl font-extrabold text-center text-gray-900 mb-8">
              Testimonios y referencias de clientes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonios.map((t, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-50/50 via-white to-pink-50/50 rounded-3xl p-8 border border-purple-100 shadow-md card-hover relative overflow-hidden">
                  <Quote className="w-10 h-10 text-purple-200 absolute top-6 right-6 pointer-events-none" />
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-800 text-base sm:text-lg italic font-medium leading-relaxed mb-4">
                    “{t.comentario}”
                  </p>
                  <div className="border-t border-purple-100 pt-3">
                    <h4 className="font-extrabold text-gray-900 text-base">{t.empresa}</h4>
                    <p className="text-xs text-purple-700 font-semibold">{t.servicio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Banner de Portafolio Completo en Canva & PDF */}
          <div className="bg-gradient-to-r from-purple-100/90 via-pink-100/90 to-emerald-100/90 rounded-3xl p-8 sm:p-10 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-lg card-hover">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-1">
                ¿Quieres explorar más proyectos y casos de éxito?
              </h3>
              <p className="text-sm sm:text-base text-gray-800 font-medium">
                Accede a la presentación completa del portafolio interactivo de Emily Morales (2026).
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://canva.link/gjhea62awv89tmf"
                target="_blank"
                rel="noopener noreferrer"
                className="button-gradient bg-gradient-to-r from-purple-700 to-pink-600 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                <span>Ver Portafolio en Canva</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="/Emily_Morales_Portafolio_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-sm transition-all inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-purple-700" />
                <span>Descargar PDF (2026)</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Plans / Paquetes Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white via-purple-50/30 to-white" id="paquetes">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-purple-700 to-pink-600 text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-wider inline-block mb-4 shadow-sm animate-float">
              NUESTROS PAQUETES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Paquetes para hacer crecer tu presencia digital
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Elige la opción que mejor se adapte a la etapa, objetivos y necesidades de tu marca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {paquetes.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all pricing-card border border-purple-100 flex flex-col justify-between relative ${
                  plan.popular ? 'ring-2 ring-purple-600 shadow-2xl scale-105 z-10' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-700 via-pink-600 to-emerald-600 text-white text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                    Más Recomendado
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-extrabold mb-2 text-gradient">{plan.title}</h3>
                  <div className="mb-4">
                    <span className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base mb-6 pb-6 border-b border-gray-200 leading-relaxed">{plan.description}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-sm sm:text-base">
                        <span className="text-purple-700 mt-1 shrink-0 font-bold">
                          <Check className="w-5 h-5 text-emerald-600" />
                        </span>
                        <span className="text-gray-800 font-medium leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handlePackageSelect(plan.title)}
                  className="w-full button-gradient bg-gradient-to-r from-purple-700 via-pink-600 to-emerald-600 text-white px-6 py-4 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 tracking-wide"
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Propuesta personalizada */}
          <div className="gradient-background text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center max-w-4xl mx-auto card-hover">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">
              ¿Ninguno se adapta exactamente a lo que necesitas?
            </h3>
            <p className="text-purple-50 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
              También desarrollamos propuestas personalizadas según los objetivos y necesidades de tu negocio.
            </p>
            <a
              href="https://wa.me/18294401628?text=Hola%20MarketChic,%20me%20gustar%C3%ADa%20solicitar%20una%20propuesta%20personalizada%20para%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-950 hover:bg-purple-50 font-extrabold px-8 py-4 rounded-full shadow-2xl inline-flex items-center gap-2 text-sm uppercase tracking-wider transition-all transform hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-pink-600" />
              <span>Solicitar una propuesta personalizada</span>
            </a>
          </div>

        </div>
      </section>

      {/* Contact Section & Formulario */}
      <section className="py-24 px-4 bg-gradient-to-b from-white via-pink-50/40 to-purple-50/50 relative" id="contacto">
        <div className="max-w-6xl mx-auto text-center">
          <span className="bg-emerald-600 text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-wider inline-block mb-4 shadow-sm animate-float">
            CONTÁCTANOS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            ¿Listo para llevar tu marca al siguiente nivel?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg mb-12 leading-relaxed font-normal">
            Cuéntanos sobre tu negocio y descubre qué estrategia puede ayudarte a avanzar.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left max-w-5xl mx-auto">
            
            {/* Formulario de Evaluación Inicial */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-purple-500/10 border border-purple-100 hover:shadow-2xl transition-all card-hover">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                Solicita una evaluación inicial
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-6 font-normal">
                Cuéntanos sobre tu negocio, objetivos y principales retos. Revisaremos tu caso y te orientaremos sobre el servicio o solución que mejor se adapte a tu marca.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-center animate-fadeIn space-y-3">
                  <Check className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-lg">¡Solicitud recibida!</h4>
                  <p className="text-sm">
                    Te estamos redirigiendo a WhatsApp para brindarte atención inmediata.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-1.5">
                        Nombre completo *
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none text-sm text-gray-900 bg-white transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-1.5">
                        Marca / Empresa *
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="Nombre de tu negocio"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none text-sm text-gray-900 bg-white transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-1.5">
                        WhatsApp *
                      </label>
                      <input 
                        type="tel" 
                        required
                        placeholder="829-123-4567"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none text-sm text-gray-900 bg-white transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-1.5">
                        Correo electrónico *
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="tu@correo.com"
                        value={formData.correo}
                        onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none text-sm text-gray-900 bg-white transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-1.5">
                      Servicio de interés
                    </label>
                    <select
                      value={formData.servicio}
                      onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none text-sm text-gray-900 bg-white transition-all font-medium"
                    >
                      <option value="Estrategia y Asesoría de Marketing">Estrategia y Asesoría de Marketing</option>
                      <option value="Gestión Estratégica de Redes Sociales">Gestión Estratégica de Redes Sociales</option>
                      <option value="Desarrollo de Páginas Web">Desarrollo de Páginas Web</option>
                      <option value="Campañas Publicitarias">Campañas Publicitarias</option>
                      <option value="Creación y Estrategia de Contenido">Creación y Estrategia de Contenido</option>
                      <option value="Inteligencia Artificial Aplicada al Marketing">Inteligencia Artificial Aplicada al Marketing</option>
                      <option value="Paquete: PRESENCIA DIGITAL">Paquete: Presencia Digital (RD$12,000)</option>
                      <option value="Paquete: CRECIMIENTO DIGITAL">Paquete: Crecimiento Digital (RD$18,000)</option>
                      <option value="Paquete: MARCA CON ESTRATEGIA">Paquete: Marca con Estrategia (RD$20,000)</option>
                      <option value="Propuesta Personalizada">Propuesta Personalizada</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-1.5">
                      ¿Cuál es tu principal objetivo o necesidad?
                    </label>
                    <textarea 
                      rows={3}
                      placeholder="Cuéntanos sobre tus retos, objetivos comerciales o metas..."
                      value={formData.objetivo}
                      onChange={(e) => setFormData({ ...formData, objetivo: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none text-sm text-gray-900 bg-white transition-all font-medium resize-none"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 button-gradient bg-gradient-to-r from-purple-700 via-pink-600 to-rose-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                    >
                      <Send className="w-4 h-4" />
                      <span>Solicitar evaluación inicial</span>
                    </button>

                    <a
                      href="https://wa.me/18294401628?text=Hola%20MarketChic,%20me%20gustar%C3%ADa%20hablar%20por%20WhatsApp%20para%20una%20evaluaci%C3%B3n%20inicial."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Hablar por WhatsApp</span>
                    </a>
                  </div>

                  <div className="pt-2 text-center">
                    <p className="text-xs text-gray-600">
                      ¿Prefieres completar el formulario en Google?{' '}
                      <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfjNjhnHqegmfKT6q6I52OzjNaqeT47Ar6HAk1OO04PTbY41g/viewform?pli=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-700 hover:text-pink-600 font-bold underline inline-flex items-center gap-1"
                      >
                        <span>Abrir formulario de Consulta Gratuita</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Información de Contacto */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              {/* Card de Consulta Gratuita en Google Form */}
              <div className="bg-gradient-to-br from-purple-50 via-pink-50/60 to-white rounded-3xl p-7 border border-purple-200 shadow-md card-hover">
                <div className="flex items-center gap-2 text-xs font-bold text-pink-700 uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Sin Costo</span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                  Agenda una Consulta Gratuita
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-5 font-normal">
                  Evaluaremos tu emprendimiento o marca personal sin costo. Completa nuestro formulario oficial de Google y te contactaremos.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfjNjhnHqegmfKT6q6I52OzjNaqeT47Ar6HAk1OO04PTbY41g/viewform?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full button-gradient bg-gradient-to-r from-purple-700 via-pink-600 to-rose-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider text-center"
                >
                  <span>Solicitar Consulta Gratuita</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-purple-500/10 border border-purple-100 hover:shadow-2xl transition-all card-hover">
                <h3 className="text-xl font-extrabold text-gray-900 mb-6">
                  Información de Contacto
                </h3>
                
                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wider">Correo Electrónico</h4>
                      <a href="mailto:marketchicdr@gmail.com" className="text-sm sm:text-base font-bold text-gray-900 hover:text-purple-700 transition-colors">
                        marketchicdr@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wider">WhatsApp</h4>
                      <a href="https://wa.me/18294401628" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-bold text-gray-900 hover:text-emerald-700 transition-colors">
                        829-440-1628
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-3">Síguenos en Redes Sociales</h4>
                  <div className="flex items-center gap-3">
                    <a href="https://www.instagram.com/_marketchicdr/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md" title="Instagram @_marketchicdr">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="https://m.facebook.com/Marvelouschic" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md" title="Facebook MARKETCHIC">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="https://www.tiktok.com/@marketchic" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md" title="TikTok @marketchic">
                      <span className="font-extrabold text-sm">Tk</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Frase destacada */}
              <div className="bg-gradient-to-r from-purple-900 to-pink-900 text-white p-7 rounded-3xl shadow-xl card-hover border-l-4 border-emerald-400">
                <Sparkles className="w-6 h-6 text-emerald-300 mb-2" />
                <p className="font-bold text-base sm:text-lg leading-snug text-white">
                  “Tu marca no necesita improvisar más. Necesita claridad, estrategia y dirección.”
                </p>
                <p className="text-xs text-purple-200 mt-2 font-medium">
                  — MarketChic
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-50/40 border-t border-emerald-100/60 text-gray-700 py-16 text-xs">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <Logo />
              <p className="mt-4 text-gray-600 leading-relaxed max-w-xs font-normal">
                Estrategia, creatividad y tecnología para hacer crecer tu marca sin perder su esencia.
              </p>
              <div className="flex items-center gap-2.5 mt-5">
                <a href="https://www.instagram.com/_marketchicdr/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a href="https://m.facebook.com/Marvelouschic" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.tiktok.com/@marketchic" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                  <span className="font-bold text-xs">d</span>
                </a>
                <a href="https://wa.me/18294401628" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                  <MessageSquare className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-emerald-700 mb-4 uppercase tracking-wider text-xs">Enlaces Rápidos</h4>
              <ul className="space-y-2.5 text-gray-600 font-medium">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="hover:text-purple-700 transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-emerald-700 mb-4 uppercase tracking-wider text-xs">Servicios</h4>
              <ul className="space-y-2.5 text-gray-600 font-medium">
                <li>Estrategia y Asesoría de Marketing</li>
                <li>Gestión de Redes Sociales</li>
                <li>Desarrollo Web</li>
                <li>Campañas Publicitarias</li>
                <li>Creación de Contenido</li>
                <li>IA aplicada al Marketing</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-emerald-700 mb-4 uppercase tracking-wider text-xs">Contacto</h4>
              <ul className="space-y-2.5 text-gray-600 font-medium">
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <a href="mailto:marketchicdr@gmail.com" className="hover:text-purple-700">marketchicdr@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <a href="tel:8294401628" className="hover:text-purple-700">829-440-1628</a>
                </li>
                <li className="text-gray-500 pt-2 text-[11px]">
                  República Dominicana · Registrada en ONAPI desde 2023.
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200/80 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-xs font-normal">
            <p>&copy; {new Date().getFullYear()} MARKETCHIC. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4 font-medium">
              <button 
                onClick={() => setLegalModal({ 
                  isOpen: true, 
                  title: 'Términos y Condiciones', 
                  type: 'terms' 
                })}
                className="hover:text-purple-700 transition-colors cursor-pointer"
              >
                Términos y Condiciones
              </button>
              <span>·</span>
              <button 
                onClick={() => setLegalModal({ 
                  isOpen: true, 
                  title: 'Política de Privacidad', 
                  type: 'privacy' 
                })}
                className="hover:text-purple-700 transition-colors cursor-pointer"
              >
                Política de Privacidad
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal for Portfolio Projects */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-purple-50 via-pink-50 to-emerald-50">
              <div>
                <span className="text-xs font-bold text-pink-700 uppercase tracking-wider">{selectedImage.category}</span>
                <h3 className="text-lg sm:text-xl font-extrabold text-gray-900">{selectedImage.title}</h3>
                {selectedImage.handle && (
                  <p className="text-xs font-semibold text-purple-700">{selectedImage.handle}</p>
                )}
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                className="w-10 h-10 rounded-full bg-white text-gray-600 hover:text-gray-900 flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto flex flex-col items-center">
              <div className="w-full rounded-2xl overflow-hidden shadow-md bg-gray-100 mb-4">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title} 
                  className="w-full h-auto object-contain max-h-[60vh] mx-auto"
                />
              </div>
              <p className="text-base text-gray-800 text-center max-w-2xl font-medium leading-relaxed">
                {selectedImage.description}
              </p>
            </div>

            <div className="p-4 border-t border-gray-100 bg-gray-50 flex flex-wrap justify-between items-center gap-3">
              <a 
                href="https://canva.link/gjhea62awv89tmf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-bold text-purple-800 hover:text-purple-950 inline-flex items-center gap-1.5"
              >
                <span>Ver presentación en Canva</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => setSelectedImage(null)}
                className="px-6 py-2.5 rounded-xl bg-gray-900 text-white text-xs sm:text-sm font-bold hover:bg-purple-800 transition-colors"
              >
                Cerrar vista
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Legal Modal */}
      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
        title={legalModal.title}
        content={
          legalModal.type === 'privacy' ? (
            <div className="space-y-3.5 text-gray-800 text-sm sm:text-base leading-relaxed">
              <p><strong>1. Responsable del Tratamiento:</strong> MarketChic, con registro formal en ONAPI desde 2023, República Dominicana.</p>
              <p><strong>2. Datos Recopilados:</strong> Recopilamos información de contacto proporcionada voluntariamente a través de nuestros formularios (nombre, correo electrónico, teléfono/WhatsApp, empresa y objetivos de negocio) con el único fin de brindar cotizaciones, asesorías y propuestas personalizadas.</p>
              <p><strong>3. Confidencialidad:</strong> Los datos compartidos nunca serán vendidos, transferidos ni compartidos con terceros sin su consentimiento explícito.</p>
              <p><strong>4. Contacto:</strong> Para cualquier consulta sobre sus datos personales, puede escribirnos a <a href="mailto:marketchicdr@gmail.com" className="text-purple-700 underline font-semibold">marketchicdr@gmail.com</a>.</p>
            </div>
          ) : (
            <div className="space-y-3.5 text-gray-800 text-sm sm:text-base leading-relaxed">
              <p><strong>1. Objeto:</strong> Los presentes términos regulan el uso de este sitio web y los servicios de asesoría y marketing prestados por MarketChic.</p>
              <p><strong>2. Propiedad Intelectual:</strong> Todos los contenidos, logotipos, textos, diseños y materiales gráficos son propiedad de MarketChic y/o sus respectivos autores, protegidos por las leyes de propiedad intelectual de la República Dominicana (ONAPI).</p>
              <p><strong>3. Cotizaciones y Propuestas:</strong> Los precios y alcances indicados en la sección de paquetes son referenciales y pueden variar según los requerimientos específicos de cada cliente tras la evaluación inicial.</p>
            </div>
          )
        }
      />
    </div>
  );
}

export default App;