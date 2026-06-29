export type patternType = "dots" | "grid" | "lines" | "rings" | "cross" | "wave";
export default function PatternBg({ pattern, color }: { pattern: patternType; color: string }) {
  const o = 0.06;
  if (pattern === "dots") return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id={`d-${color}`} x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill={color} fillOpacity={o} /></pattern></defs>
      <rect width="100%" height="100%" fill={`url(#d-${color})`} />
    </svg>
  );
  if (pattern === "grid") return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id={`g-${color}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke={color} strokeWidth="0.5" strokeOpacity={o * 1.5} /></pattern></defs>
      <rect width="100%" height="100%" fill={`url(#g-${color})`} />
    </svg>
  );
  if (pattern === "lines") return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id={`l-${color}`} x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse"><path d="M 0 12 L 12 0" stroke={color} strokeWidth="0.6" strokeOpacity={o * 1.5} /></pattern></defs>
      <rect width="100%" height="100%" fill={`url(#l-${color})`} />
    </svg>
  );
  if (pattern === "rings") return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id={`r-${color}`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="12" cy="12" r="8" fill="none" stroke={color} strokeWidth="0.6" strokeOpacity={o * 1.5} /><circle cx="12" cy="12" r="3" fill="none" stroke={color} strokeWidth="0.4" strokeOpacity={o} /></pattern></defs>
      <rect width="100%" height="100%" fill={`url(#r-${color})`} />
    </svg>
  );
  if (pattern === "cross") return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id={`c-${color}`} x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M 8 4 L 8 12 M 4 8 L 12 8" stroke={color} strokeWidth="0.8" strokeOpacity={o * 1.5} strokeLinecap="round" /></pattern></defs>
      <rect width="100%" height="100%" fill={`url(#c-${color})`} />
    </svg>
  );
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id={`w-${color}`} x="0" y="0" width="40" height="12" patternUnits="userSpaceOnUse"><path d="M 0 6 Q 10 0 20 6 Q 30 12 40 6" fill="none" stroke={color} strokeWidth="0.7" strokeOpacity={o * 1.5} /></pattern></defs>
      <rect width="100%" height="100%" fill={`url(#w-${color})`} />
    </svg>
  );
}