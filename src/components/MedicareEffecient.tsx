const MedicareEffecient = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Subtle Graphic (Arc/Circle on the right) */}
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-zinc-100 rounded-full z-0 pointer-events-none"></div>
      <div className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] border-[1px] border-zinc-100 rounded-full z-0 pointer-events-none opacity-50"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-2xl  font-normal text-[#1a1a1a] leading-[1.3] tracking-tight">
            MedCare offers <span className="font-semibold">efficient medical billing, health records management</span> and <span className="font-semibold">revenue cycle solutions</span> that drive <span className="font-semibold italic">healthcare success</span>
          </h2>
        </div>
      </div>
      
      {/* Dotted border line at bottom as seen in screenshot */}
      <div className="absolute bottom-0 left-0 w-full border-b border-dotted border-blue-300 opacity-50"></div>
    </section>
  );
};

export default MedicareEffecient;