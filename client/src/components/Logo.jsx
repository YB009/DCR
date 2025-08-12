export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      <div className="h-9 w-9 rounded-xl bg-brand-500/20 ring-1 ring-brand-500/50 grid place-items-center relative">
        <span className="font-black text-brand-300 relative z-10">D</span>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/20 to-blue-600/20 blur-sm"></div>
      </div>
      <div>
        <p className="font-display text-lg font-extrabold leading-none">DCR Auto Electrics</p>
        <p className="text-xs text-slate-400 leading-none mt-1">Newcastle upon Tyne</p>
      </div>
    </div>
  )
}
