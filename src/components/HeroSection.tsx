import logoDark from "@/assets/logo-backe-dark.png";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 8 }).map((_, i) => (
            <polygon
              key={i}
              points={`${200 + i * 120},${100 + i * 40} ${300 + i * 120},${50 + i * 30} ${400 + i * 100},${150 + i * 50} ${350 + i * 110},${250 + i * 30} ${250 + i * 100},${200 + i * 40}`}
              stroke="hsl(14, 91%, 54%)"
              strokeWidth="1"
              fill="none"
            />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={`l-${i}`}
              x1={i * 100}
              y1={0}
              x2={i * 100 + 200}
              y2={800}
              stroke="hsl(7, 89%, 55%)"
              strokeWidth="0.5"
              opacity="0.5"
            />
          ))}
        </svg>
      </div>

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-16 py-6">
        <img src={logoDark} alt="BACKE Creative" className="h-10 md:h-14" />
      </nav>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 text-center mt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-8">
          <span className="text-gradient">Criatividade</span>
          <br />
          <span className="text-foreground">que chama atenção.</span>
          <br />
          <span className="text-gradient">Estratégia</span>
          <br />
          <span className="text-foreground">que gera resultado.</span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-12 font-body leading-relaxed">
          Nós estudamos seu mercado, entendemos o que realmente move vendas e criamos campanhas
          pensadas para transformar atenção em clientes e marketing em crescimento real.
        </p>

        <button
          onClick={scrollToForm}
          className="bg-gradient-brand text-primary-foreground font-heading font-semibold text-sm md:text-base tracking-widest uppercase px-10 py-4 rounded-full glow-brand hover:glow-brand-hover transition-all duration-300 hover:scale-105"
        >
          Receber Diagnóstico
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
