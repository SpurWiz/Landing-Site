import React from 'react'

interface BadgeProp {
    icon: React.ElementType;
    label: string;
}

const Badge = ({ icon: Icon, label }: BadgeProp) => {
  return (
    <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-white/20">
      <Icon size={11} color="yellow" />
      {label}
    </span>
  )
}

export default Badge