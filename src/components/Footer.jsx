import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-[#2a2a4a]/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Logo size={24} />
            <span className="text-sm font-semibold text-white">Action Inbox</span>
          </div>
          <span className="text-sm text-slate-500">The Context Layer for Enterprise</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <span>&copy; 2024 Action Inbox</span>
          <span className="text-[#2a2a4a]">|</span>
          <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          <span className="text-[#2a2a4a]">|</span>
          <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
