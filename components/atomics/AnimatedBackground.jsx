const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #0B1121 0%, #0F172A 30%, #1E293B 70%, #0B1121 100%)'
      }} />

      <div className="blob blob-1 opacity-[0.25]" />
      <div className="blob blob-2 opacity-[0.2]" />
      <div className="blob blob-3 opacity-[0.12]" />
      <div className="blob blob-4 opacity-[0.1]" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          background: 'radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)'
        }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-48 w-[800px] h-[500px] bg-gradient-radial from-secondary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-48 w-[600px] h-[400px] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-primary/40 animate-pulse" style={{ animationDuration: '3s' }} />
      <div className="absolute top-[25%] right-[15%] w-1.5 h-1.5 rounded-full bg-secondary/40 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      <div className="absolute bottom-[30%] left-[20%] w-2 h-2 rounded-full bg-accent/30 animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      <div className="absolute bottom-[20%] right-[25%] w-1 h-1 rounded-full bg-pink-400/30 animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
    </div>
  );
};

export default AnimatedBackground;
