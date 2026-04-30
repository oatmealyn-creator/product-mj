export default function AnnouncementBar() {
  const items = [
    "FREE SHIPPING",
    "NO RESTOCKS",
    "PREMIUM 450GSM HEAVYWEIGHT COTTON",
    "LIMITED EDITION EXCLUSIVE DROPS",
    "AUTHENTIC MOONWALKER MERCH",
  ];

  // We duplicate the items enough times so that scrolling half of the width is seamless
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-orange-500 text-black py-2 overflow-hidden flex whitespace-nowrap relative z-50">
      <div className="animate-marquee w-max flex items-center font-black text-[10px] sm:text-xs uppercase tracking-[0.2em]">
        {duplicatedItems.map((text, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="mx-8">{text}</span>
            <span className="opacity-50 text-[8px]">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
