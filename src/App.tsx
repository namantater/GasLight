// @ts-nocheck
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { EyeOff, Command, Layers, ShieldAlert, Download, CheckCircle2, Coffee, MonitorPlay, Sparkles, Settings, Palette, BookOpen, ChevronUp, ChevronDown, Trash2, Briefcase, Lock, Focus, Ghost } from 'lucide-react';
import { useEffect, useState } from 'react';

const fadeIn: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } } 
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const SparkleParticle = ({ delay }: { delay: number }) => {
  const [position] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 2,
    color: Math.random() > 0.5 ? '#0088FF' : '#FF0088'
  });

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0, x: `${position.x}vw`, y: `${position.y}vh` }}
      animate={{
        opacity: [0, 0.6, 0],
        scale: [0, 1.2, 0],
        y: [`${position.y}vh`, `${position.y - 5}vh`]
      }}
      transition={{
        duration: Math.random() * 4 + 4,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut" as const
      }}
      className="absolute rounded-full pointer-events-none mix-blend-screen"
      style={{
        width: position.size,
        height: position.size,
        backgroundColor: position.color,
        boxShadow: `0 0 ${position.size * 2}px ${position.color}`,
        willChange: 'transform, opacity' // Performance optimization
       }}
    />
  );
};

const AnimatedSwitcherDemo = () => {
  return (
    <div className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_20px_100px_rgba(0,136,255,0.25)] bg-[#0A0A0F] aspect-video flex items-center justify-center group hover:shadow-[0_20px_80px_rgba(0,136,255,0.3)] transition-shadow duration-500">
       {/* Fake Desktop Background */}
       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
       
       {/* Switcher overlay */}
       <motion.div 
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
         className="relative z-10 p-3 rounded-[2rem] border border-white/20 bg-black/40 backdrop-blur-2xl shadow-2xl"
       >
          <div className="grid grid-cols-2 gap-4 p-4">
             {/* Preview 1 */}
             <div className="w-56 h-40 rounded-2xl bg-gradient-to-br from-[#101015] to-[#1A1A24] border border-white/10 p-3 flex flex-col shadow-inner">
                 <div className="flex-1 rounded-xl bg-white/5 border border-white/5 mb-3 flex items-center justify-center overflow-hidden relative">
                     <div className="absolute inset-0 bg-blue-500/20 blur-xl" />
                     <Command size={32} className="text-blue-400 relative z-10" />
                 </div>
                 <div className="text-sm text-center font-semibold text-slate-200 truncate">Terminal</div>
             </div>
             {/* Preview 2 */}
             <motion.div 
               animate={{ borderColor: ["rgba(255,255,255,0.1)", "rgba(0,136,255,0.8)", "rgba(255,255,255,0.1)"] }}
               transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
               className="w-56 h-40 rounded-2xl bg-gradient-to-br from-[#101015] to-[#1A1A24] border border-white/10 p-3 flex flex-col shadow-inner relative"
             >
                 <motion.div 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                    className="absolute inset-0 rounded-2xl bg-gaslight-cyan/20 blur-md -z-10" 
                 />
                 <div className="flex-1 rounded-xl bg-white/5 border border-white/5 mb-3 flex items-center justify-center overflow-hidden relative">
                     <div className="absolute inset-0 bg-purple-500/20 blur-xl" />
                     <MonitorPlay size={32} className="text-purple-400 relative z-10" />
                 </div>
                 <div className="text-sm text-center font-semibold text-slate-200 truncate">Browser</div>
             </motion.div>
          </div>
       </motion.div>
       
       {/* Instruction popup */}
       <motion.div 
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.5 }}
         className="absolute bottom-8 px-6 py-3 rounded-full bg-black/60 border border-gaslight-cyan/40 backdrop-blur-md shadow-[0_0_20px_rgba(0,136,255,0.3)]"
       >
          <span className="text-gaslight-cyan font-bold text-sm tracking-wider uppercase">Hold [Alt] to reveal hidden windows</span>
       </motion.div>
    </div>
  );
};

const AppReplica = () => {
    const [activeTab, setActiveTab] = useState('guide');
    // REMOVED INTERACTIVE STATE: These are now purely visual/static to reduce lag and simplify the UI.
    const excludeList = ['obs64.exe', 'discord.exe'];
    
    return (
        <div className="w-full max-w-5xl mx-auto rounded-[1.5rem] border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col font-sans text-slate-200 mt-16 relative z-10">
            {/* Background gradient like actual app */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gaslight-cyan/5 to-gaslight-magenta/5 pointer-events-none" />
            
            {/* TitleBar */}
             <div className="h-14 flex items-center px-6 gap-4 bg-transparent relative z-10 border-b border-white/5">
                <img src="logo.png" className="w-6 h-6 drop-shadow-md" alt="Gaslight Logo" />
                <span className="font-bold text-base text-white/90">Gaslight</span>
            </div>
            
            {/* Nav Bar (Top) - INTERACTABLE */}
            <div className="flex px-5 py-3 gap-3 bg-transparent relative z-10"> 
                <button onClick={() => setActiveTab('settings')} className={`flex items-center gap-3 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab==='settings'?'bg-white/10 text-white shadow-md':'hover:bg-white/5 text-slate-400'}`}>
                    <Settings size={18} className="text-[#0088FF]" /> Settings
                </button>
                <button onClick={() => setActiveTab('themes')} className={`flex items-center gap-3 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab==='themes'?'bg-white/10 text-white shadow-md':'hover:bg-white/5 text-slate-400'}`}>
                    <Palette size={18} className="text-[#FF0088]" /> Themes
                </button>
                <button onClick={() => setActiveTab('guide')} className={`flex items-center gap-3 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab==='guide'?'bg-white/10 text-white shadow-md':'hover:bg-white/5 text-slate-400'}`}>
                    <BookOpen size={18} className="text-[#00FF88]" /> User Guide
                </button>
            </div>
            
             {/* Content Frame */}
            <div className="p-10 bg-[#1A1A24]/60 h-[550px] overflow-y-auto rounded-tl-2xl border-t border-l border-white/5 relative z-10">
                <AnimatePresence mode="wait">
                    {activeTab === 'settings' && (
                        <motion.div 
                            key="settings"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Settings</h2>
                                <p className="text-slate-400 text-base">Customize your Gaslight experience and tailor the magic.</p>
                            </div>
                            
                            {/* General Card (Static) */}
                            <div className="bg-[#2A2A35]/40 border border-white/10 rounded-2xl p-8 space-y-8 shadow-lg">
                                <h3 className="text-[#0088FF] font-semibold tracking-wide text-lg">General</h3>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium text-white text-lg">Launch on startup</div>
                                         <div className="text-sm text-slate-400 mt-1">Automatically start Gaslight in the system tray when you log in.</div>
                                    </div>
                                    <div className="w-14 h-7 rounded-full flex items-center p-1 bg-gaslight-cyan justify-end cursor-default opacity-80">
                                        <div className="w-5 h-5 bg-white rounded-full shadow-md" />
                                    </div>
                                 </div>
                                <div className="h-px bg-white/5" />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium text-white text-lg">Alt Long-press delay</div>
                                        <div className="text-sm text-slate-400 mt-1">How long to hold Alt before the Switcher overlay appears.</div>
                                    </div>
                                    <div className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 flex items-center gap-3 text-base text-white font-medium cursor-default opacity-80">
                                        600
                                        <div className="flex flex-col gap-1 ml-2 border-l border-white/10 pl-3">
                                            <ChevronUp size={14} className="text-slate-500" />
                                            <ChevronDown size={14} className="text-slate-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Whitelist Card (Static) */}
                            <div className="bg-[#2A2A35]/40 border border-white/10 rounded-2xl p-8 space-y-8 shadow-lg">
                                <div>
                                    <h3 className="text-[#0088FF] font-semibold tracking-wide mb-2 text-lg">Intelligent Whitelist</h3>
                                    <p className="text-base text-slate-400">Select apps to NEVER hide, even when pressing Ctrl+Alt+C.</p>
                                </div>
                                <div className="flex gap-4 opacity-80">
                                    <div className="flex-1 bg-black/40 border border-white/10 rounded-xl px-5 py-3 flex items-center justify-between text-base text-slate-400 cursor-default">
                                        Select recently hidden app...
                                        <ChevronDown size={18} />
                                    </div> 
                                    <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-base font-semibold text-slate-500 cursor-default">
                                        Whitelist App
                                    </button>
                                </div>
                                <div className="bg-black/20 rounded-2xl p-3 space-y-2">
                                    {excludeList.map(app => (
                                        <div key={app} className="flex items-center justify-between p-4 rounded-xl bg-white/5 cursor-default">
                                            <div className="flex items-center gap-4">
                                                <Layers size={20} className="text-[#0088FF]" />
                                                <span className="font-medium text-base">{app}</span>
                                            </div>
                                            <button className="text-red-400/50 p-2 rounded-lg cursor-default">
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'themes' && (
                        <motion.div 
                            key="themes"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Personalization</h2>
                                <p className="text-slate-400 text-base">Make Gaslight match your system aesthetic.</p>
                            </div> 
                            <div className="bg-[#2A2A35]/40 border border-white/10 rounded-2xl p-8 space-y-8 shadow-lg">
                                <h3 className="text-[#FF0088] font-semibold tracking-wide text-lg">Application Theme</h3>
                                <div className="space-y-5">
                                    {['System Default', 'Light Mode', 'Dark Mode'].map(t => (
                                        <div key={t} className="flex items-center gap-4 group cursor-default opacity-80">
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${t === 'System Default' ? 'border-[#FF0088]' : 'border-slate-500'}`}>
                                                {t === 'System Default' && <div className="w-3 h-3 rounded-full bg-[#FF0088]" />}
                                            </div>
                                            <span className="text-slate-200 font-medium text-lg">{t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'guide' && (
                        <motion.div 
                            key="guide"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">User Guide</h2>
                                <p className="text-slate-400 text-base">Master the stealth workspace with these global hotkeys.</p>
                            </div>
                            <div className="bg-[#2A2A35]/40 border border-white/10 rounded-2xl p-8 space-y-8 shadow-lg">
                                 <h3 className="text-[#00FF88] font-semibold tracking-wide mb-6 text-lg">Keyboard Shortcuts</h3>
                                <div className="space-y-8">
                                    <div className="flex gap-8 items-start">
                                        <div className="bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 min-w-[140px] text-center">
                                            <span className="text-[#00FF88] font-bold text-base">Alt + H</span>
                                         </div>
                                        <div className="pt-2">
                                            <div className="text-slate-200 font-medium text-lg">Vanish the currently active window instantly.</div>
                                        </div>
                                    </div>
                                    <div className="h-px bg-white/5" />
                                    <div className="flex gap-8 items-start">
                                        <div className="bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 min-w-[140px] text-center">
                                             <span className="text-[#00FF88] font-bold text-base">Alt + G</span>
                                        </div>
                                        <div className="pt-2">
                                            <div className="text-slate-200 font-medium text-lg">Toggle Ghost Mode to make a window semi-transparent.</div>
                                        </div>
                                    </div>
                                    <div className="h-px bg-white/5" />
                                    <div className="flex gap-8 items-start">
                                        <div className="bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 min-w-[140px] text-center">
                                             <span className="text-[#00FF88] font-bold text-base">Alt + X</span>
                                        </div>
                                        <div className="pt-2">
                                            <div className="text-slate-200 font-medium text-lg">Restore the last window you hid.</div>
                                        </div>
                                    </div>
                                    <div className="h-px bg-white/5" />
                                    <div className="flex gap-8 items-start">
                                        <div className="bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 min-w-[140px] text-center">
                                            <span className="text-[#00FF88] font-bold text-base">Ctrl + Alt + C</span>
                                        </div>
                                        <div className="pt-2">
                                            <div className="text-slate-200 font-medium text-lg">Panic button. Hides all visible windows on your desktop at once.</div>
                                        </div>
                                    </div>
                                    <div className="h-px bg-white/5" />
                                    <div className="flex gap-8 items-start">
                                        <div className="bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 min-w-[140px] text-center">
                                            <span className="text-[#00FF88] font-bold text-base">Hold Alt</span>
                                        </div>
                                        <div className="pt-2">
                                            <div className="text-slate-200 font-medium text-lg leading-relaxed">Summon the Smart Switcher overlay to view live thumbnails of all hidden windows.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

const VanishAnimation = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-[#0A0A0F]/80">
     <motion.div 
       animate={{ scale: [1, 1, 0, 0, 1], opacity: [1, 1, 0, 0, 1] }}
       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
       className="w-64 h-40 bg-[#1A1A24] rounded-xl border border-white/10 shadow-xl flex flex-col overflow-hidden"
     >
       <div className="h-8 bg-black/40 border-b border-white/5 flex items-center px-3 gap-2">
         <div className="w-3 h-3 rounded-full bg-[#FF5F56]"/>
         <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"/>
         <div className="w-3 h-3 rounded-full bg-[#27C93F]"/>
       </div>
       <div className="flex-1 p-4 flex flex-col gap-3">
         <div className="h-4 bg-white/10 rounded w-3/4" />
         <div className="h-4 bg-white/10 rounded w-1/2" />
         <div className="h-4 bg-white/10 rounded w-full" />
       </div>
     </motion.div>
  </div>
);

const GhostAnimation = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center">
     <div className="absolute inset-0 bg-black/60" />
     <motion.div 
       animate={{ opacity: [1, 1, 0.3, 0.3, 1] }}
       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
       className="w-64 h-40 bg-[#1A1A24] rounded-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden z-10 backdrop-blur-md"
     >
       <div className="h-8 bg-black/40 border-b border-white/5 flex items-center px-3 gap-2">
         <div className="w-3 h-3 rounded-full bg-white/20"/>
         <div className="w-3 h-3 rounded-full bg-white/20"/>
         <div className="w-3 h-3 rounded-full bg-white/20"/>
       </div>
       <div className="flex-1 p-4 flex flex-col gap-3">
         <div className="h-4 bg-gaslight-cyan/50 rounded w-3/4" />
         <div className="h-4 bg-gaslight-magenta/50 rounded w-1/2" />
       </div>
     </motion.div>
  </div>
);

const PanicAnimation = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-[#0A0A0F]/80 overflow-hidden">
     {/* Distracting windows */}
     <motion.div 
       animate={{ y: [0, 0, 200, 200, 0], opacity: [1, 1, 0, 0, 1] }}
       transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
       className="absolute w-48 h-32 bg-red-900/30 border border-red-500/20 rounded-xl -ml-20 -mt-10"
     />
     <motion.div 
       animate={{ y: [0, 0, 200, 200, 0], opacity: [1, 1, 0, 0, 1] }}
       transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
       className="absolute w-56 h-40 bg-purple-900/30 border border-purple-500/20 rounded-xl ml-20 mt-10"
     />
     
     {/* Decoy Window */}
     <motion.div 
       initial={{ scale: 0, opacity: 0 }}
       animate={{ scale: [0, 0, 1, 1, 0], opacity: [0, 0, 1, 1, 0] }}
       transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
       className="absolute w-72 h-48 bg-slate-100 rounded-xl border border-slate-300 shadow-2xl flex flex-col overflow-hidden"
     >
       <div className="h-8 bg-green-700 flex items-center px-3">
         <span className="text-white text-xs font-bold">Excel - Q3_Financials_Decoy.xlsx</span>
       </div>
       <div className="flex-1 p-2 grid grid-cols-4 gap-1 bg-white">
         {Array.from({length: 16}).map((_, i) => (
           <div key={i} className="bg-slate-200 border border-slate-300 rounded-sm" />
         ))}
       </div>
     </motion.div>
  </div>
);

const ThumbnailAnimation = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-[#0A0A0F]/80">
     <motion.div 
       animate={{ scale: [1, 0.45], x: [0, -80], y: [0, 50], borderRadius: ["12px", "16px"] }}
       transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
       className="w-80 h-56 bg-[#1A1A24] border border-white/10 shadow-xl overflow-hidden flex flex-col"
     >
       <div className="h-8 bg-black/40 px-3 flex items-center">
         <span className="text-white/80 text-xs font-semibold">Active Application</span>
       </div>
       <div className="flex-1 p-4 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 flex items-center justify-center">
         <div className="w-16 h-16 rounded-full border-4 border-white/10 border-t-gaslight-cyan animate-spin" />
       </div>
     </motion.div>
     
     {/* Ghost overlay frame to represent the switcher */}
     <motion.div 
       animate={{ opacity: [0, 1] }}
       transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
       className="absolute inset-0 border-[3px] border-gaslight-cyan/40 rounded-[2rem] pointer-events-none"
     />
  </div>
);

const FeatureRow = ({ title, description, icon: Icon, children, reversed }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20 py-24 border-b border-white/5 last:border-0`}
  >
    <div className="flex-1 space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gaslight-cyan/20 to-gaslight-magenta/20 flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(0,136,255,0.2)]">
        <Icon className="text-white" size={32} />
      </div>
      <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">{title}</h3>
      <p className="text-xl text-slate-400 leading-relaxed font-light">{description}</p>
    </div>
    <div className="flex-1 w-full">
       <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl aspect-[4/3] flex items-center justify-center group hover:border-gaslight-cyan/50 hover:shadow-[0_20px_80px_rgba(0,136,255,0.2)] transition-all duration-500">
         <div className="absolute inset-0 bg-gradient-to-br from-gaslight-cyan/5 to-gaslight-magenta/5" />
         {children}
       </div>
    </div>
  </motion.div>
);

function App() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    // Reduced particle count to 10 to eliminate lag
    setParticles(Array.from({ length: 10 }).map(() => Math.random() * 5));
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-gaslight-cyan/30 relative bg-[#050508] overflow-x-hidden text-slate-200">

      {/* Optimized Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />

        <motion.div
          style={{ y: y1 }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-gaslight-cyan/20 blur-[120px] rounded-full mix-blend-screen will-change-transform"
        />
        <motion.div
          style={{ y: y2 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-gaslight-magenta/15 blur-[150px] rounded-full mix-blend-screen will-change-transform"
        />

        {particles.map((delay, i) => (
          <SparkleParticle key={i} delay={delay} />
        ))}
      </div>

      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-[#050508]/60 backdrop-blur-2xl border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-gaslight-cyan to-gaslight-magenta flex items-center justify-center shadow-[0_0_20px_rgba(0,136,255,0.4)] group-hover:shadow-[0_0_30px_rgba(255,0,136,0.6)] transition-all overflow-hidden">
              <img src="logo.png" alt="Gaslight Logo" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gaslight-cyan group-hover:to-gaslight-magenta transition-all">
              Gaslight
            </span>
          </motion.div>
          <div className="flex items-center gap-6">
            <a
              href="#support"
              className="hidden sm:flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold tracking-wide uppercase"
            >
              <Coffee size={18} />
              Support
            </a>
            <a
              href="Gaslight_Setup.exe"
              download
              className="relative px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gaslight-cyan/50 transition-all text-white text-sm font-bold tracking-wide uppercase overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gaslight-cyan/20 to-gaslight-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Download</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6 relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gaslight-cyan/10 border border-gaslight-cyan/30 mb-10 backdrop-blur-md shadow-[0_0_30px_rgba(0,136,255,0.2)] cursor-pointer"
            >
              <Sparkles size={16} className="text-gaslight-cyan animate-pulse" />
              <span className="text-sm font-bold text-gaslight-cyan uppercase tracking-wider">v1.0.2 is Live</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-white leading-[1.1]">
              The Ultimate <br />
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-2 bg-gradient-to-r from-gaslight-cyan to-gaslight-magenta blur-2xl opacity-40 animate-pulse" />
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-white via-gaslight-cyan to-gaslight-magenta">
                  Stealth Workspace.
                </span>
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-slate-400 max-w-3xl mb-14 leading-relaxed font-light">
              Instantly vanish and manage your active applications with global hotkeys and a magical native Windows overlay.
            </motion.p>

            <motion.div variants={fadeIn} className="flex items-center gap-6">
              <a
                href="Gaslight_Setup.exe"
                download
                className="relative px-8 py-3 rounded-full bg-gaslight-cyan border border-gaslight-cyan hover:bg-white/10 hover:border-gaslight-cyan/50 transition-all text-white text-sm font-bold tracking-wide uppercase overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gaslight-magenta/20 to-gaslight-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10">Get Started</span>
              </a>
              <a
                href="#use-cases"
                className="relative px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gaslight-cyan/50 transition-all text-white text-sm font-bold tracking-wide uppercase overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gaslight-cyan/20 to-gaslight-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10">How it Works</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Demos Section */}
      <section className="py-20 px-6 relative z-20">
        <div className="max-w-5xl mx-auto flex flex-col gap-20 items-center justify-center">
            <div className="w-full">
                <AnimatedSwitcherDemo />
            </div>
            <div className="w-full">
                <AppReplica />
            </div>
        </div>
      </section>

      {/* What it Enables / Use Cases */}
      <section id="use-cases" className="py-24 px-6 relative z-10 border-t border-white/5 bg-[#0A0A0F]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-white tracking-tight">Empowering Your Workflow.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
              Gaslight enables you to take absolute, instantaneous control over your digital footprint. It operates beneath the surface using native Windows APIs to securely stash your windows away from prying eyes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                <Briefcase className="text-gaslight-cyan mb-6" size={40} />
                <h3 className="text-2xl font-bold text-white mb-3">Clean Presentations</h3>
                <p className="text-slate-400 leading-relaxed">
                    Instantly clear your screen of distracting or private windows before jumping into a Zoom meeting or sharing your screen. One hotkey clears the clutter.
                </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                <Lock className="text-gaslight-magenta mb-6" size={40} />
                <h3 className="text-2xl font-bold text-white mb-3">Instant Privacy</h3>
                <p className="text-slate-400 leading-relaxed">
                    Hit the panic button (Ctrl+Alt+C) when someone approaches your desk. Everything vanishes from the taskbar instantly, leaving no trace behind.
                </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                <Focus className="text-white mb-6" size={40} />
                <h3 className="text-2xl font-bold text-white mb-3">Deep Focus</h3>
                <p className="text-slate-400 leading-relaxed">
                    Hide everything except your primary work application. Eliminate visual clutter, background noise, and tempting distractions to get into the flow state.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extensive Features Section */}
      <section id="features" className="py-32 px-6 relative z-10 border-t border-white/5 bg-gradient-to-b from-[#050508] to-[#0A0A0F]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-32">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gaslight-cyan/10 text-gaslight-cyan mb-8 border border-gaslight-cyan/20 shadow-[0_0_30px_rgba(0,136,255,0.3)]"
            >
              <Sparkles size={32} />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tighter"
            >
              Every Feature, Visualized.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 max-w-3xl mx-auto text-xl font-light"
            >
              Explore the core mechanics that make Gaslight the ultimate stealth workspace tool.
            </motion.p>
          </div>
          
          <div className="flex flex-col gap-32">
            <FeatureRow 
              title="Instant Vanish"
              description="With a single press of Alt+H, your active window completely vanishes from the screen and taskbar. It’s stored safely in Gaslight's memory, completely invisible to the OS."
              icon={EyeOff}
            >
              <VanishAnimation />
            </FeatureRow>
            
            <FeatureRow 
              title="Ghost Mode"
              description="Press Alt+G to make any window semi-transparent. Perfect for keeping an eye on a video or chat in the background while working. Turn on 'Click-Through' to make it completely intangible!"
              icon={Ghost}
              reversed
            >
              <GhostAnimation />
            </FeatureRow>
            
            <FeatureRow 
              title="Decoys & Panic Button"
              description="When someone approaches, hit Ctrl+Alt+C. All your visible windows will vanish, and Gaslight will instantly launch your pre-configured decoy files (like Excel or a text document) to fill the screen."
              icon={ShieldAlert}
            >
              <PanicAnimation />
            </FeatureRow>
            
            <FeatureRow 
              title="Live Snapshot Thumbnails"
              description="Gaslight doesn't just hide your apps—it takes a native Windows high-fidelity snapshot right before they vanish, so you always know exactly what state you left them in when you open the Switcher."
              icon={MonitorPlay}
              reversed
            >
              <ThumbnailAnimation />
            </FeatureRow>
          </div>
        </div>
      </section>

      {/* Support / Donate Section */}
      <section id="support" className="py-32 px-6 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gaslight-magenta/10 via-[#050508] to-[#050508]" />
        <div className="max-w-5xl mx-auto text-center relative z-10 p-16 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl shadow-[0_0_80px_rgba(255,0,136,0.15)] overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-gaslight-cyan/10 to-gaslight-magenta/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <motion.div
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(245,158,11,0.4)] relative z-10"
          >
            <Coffee size={40} className="text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight relative z-10">Support the Creator</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light relative z-10">
            Gaslight is built with passion and provided entirely free. If it saved your life (or just your screen space), consider leaving a tip!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            onClick={(e) => { e.preventDefault(); alert("Link your GitHub Sponsors, Razorpay link, or Crypto Wallet here!"); }}   
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-black text-xl shadow-[0_0_40px_rgba(245,158,11,0.5)] hover:shadow-[0_0_60px_rgba(245,158,11,0.7)] transition-all relative z-10"
          >
            <Coffee size={24} />
            Support the Creator
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 relative z-10 bg-[#050508] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-slate-400 text-sm">© 2024 Gaslight. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-semibold">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-semibold">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
