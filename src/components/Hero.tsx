export default function Hero() {
  return (
    <div className="w-full mb-12">
      <div className="relative w-full rounded-3xl md:rounded-[40px] overflow-hidden shadow-xl md:shadow-2xl min-h-[250px] sm:min-h-[350px] md:min-h-[500px] flex items-center group cursor-pointer border border-white/10 glass-panel">
        
        {/* Abstract Gradient Background for Hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-transparent blur-3xl opacity-50 z-0 mix-blend-screen"></div>

        {/* Content */}
        <div className="relative z-10 p-5 sm:p-8 md:p-16 md:w-2/3 flex flex-col justify-center space-y-3 sm:space-y-6">
          <div className="inline-flex px-3 py-1 sm:px-4 sm:py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest w-fit">
            Exclusive Indian Tour Edition
          </div>
          <h1 className="text-[2.5rem] leading-[0.9] sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase">
            THE KING <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-200 to-orange-400">OF POP</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-md font-medium">
            Celebrate the MJ legacy with the "Moonwalker" collection. Reimagined for the Indian vibe with premium gold-foil embroidery and heavy-duty 450 GSM hoodies.
          </p>
          
          {/* Buttons removed */}
        </div>
        
        {/* Playful Floating Elements for Glass Effect */}
        <div className="absolute right-10 bottom-10 hidden lg:block w-1/3 h-full">
          {/* We can use an abstract circular glow here representing an item */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-400 rounded-full blur-[80px] opacity-20"></div>
          <img 
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 object-cover rounded-3xl opacity-80 border border-white/20 shadow-2xl rotate-6 group-hover:rotate-0 transition-transform duration-500"
            alt="Feature item"
          />
        </div>
      </div>
    </div>
  );
}
