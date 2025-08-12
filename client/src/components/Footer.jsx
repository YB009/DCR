export default function Footer(){
    return (
      <footer className="mt-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <p className="text-sm">© <span>{new Date().getFullYear()}</span> DCR Auto Electrics — All rights reserved.</p>
          <p className="text-sm">Website by Your Team</p>
        </div>
      </footer>
    )
  }