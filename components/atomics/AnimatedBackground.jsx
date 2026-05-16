const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-darker via-dark to-surface" />

      {/* Animated blobs */}
      <div className="blob blob-1 opacity-30" />
      <div className="blob blob-2 opacity-30" />
      <div className="blob blob-3 opacity-20" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-gradient-radial from-secondary/20 to-transparent rounded-full blur-3xl" />
    </div>
  );
};

export default AnimatedBackground;