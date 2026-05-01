export default function Newsletter() {
  return (
    <div className="w-full mt-24 mb-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase mb-4">
            Join the Club.
          </h2>
          <p className="text-gray-400 font-medium mb-8 text-sm md:text-base">
            Subscribe to our newsletter to get exclusive access to upcoming drops, secret discounts, and more. We know you guys hate spam, so do we.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              required
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
            <button 
              type="submit"
              className="bg-orange-500 text-white font-black uppercase tracking-widest text-sm px-8 py-3.5 rounded-xl hover:bg-orange-400 transition-colors shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_25px_rgba(59,130,246,0.4)]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
