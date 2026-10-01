import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Play, Pause, Volume2, VolumeX, Cpu, Wifi, Activity, Maximize2, Radio } from 'lucide-react';

interface HeroProps {
  onStartProject?: () => void;
  onViewWork?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [showCenterIcon, setShowCenterIcon] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }

    setShowCenterIcon(true);
    setTimeout(() => setShowCenterIcon(false), 600);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white bg-tech-grid">
      {/* Precision ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow-slow" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#FFC107]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline and Call-To-Action */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Tech Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white/95 shadow-xs backdrop-blur-md mb-6 hover:border-[#2563EB]/40 transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              <span className="text-[11px] font-mono font-semibold tracking-wider text-[#0B1F4D] uppercase">
                STARVONIQ // CONNECTED SYSTEMS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight leading-[1.05] text-[#0B1F4D] mb-6">
              Building Connected{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#F4B400]">
                Technology.
              </span>
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed mb-8">
              StarVoniq synchronizes software architecture, cloud telemetry, artificial intelligence, and embedded IoT hardware to solve real-world industrial and commercial challenges.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              {/* Start a Project Button - Brand CTA */}
              <button
                onClick={onStartProject}
                className="group btn-shimmer inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#FFC107] hover:bg-[#F4B400] text-[#0B1F4D] font-extrabold text-xs tracking-wider uppercase shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Start a Project</span>
                <span className="w-5 h-5 rounded-full bg-[#0B1F4D]/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0B1F4D]" />
                </span>
              </button>

              {/* View Our Work Button */}
              <button
                onClick={onViewWork}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-[#0B1F4D] font-bold text-xs tracking-wide hover:border-[#2563EB]/40 transition-all duration-200 cursor-pointer shadow-xs hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Portfolio</span>
                <span className="w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#2563EB] group-hover:text-[#2563EB] transition-colors">
                  <Play className="w-2.5 h-2.5 fill-current text-[#2563EB] ml-0.5" />
                </span>
              </button>
            </div>

            {/* Trusted By Innovators */}
            <div className="w-full pt-6 border-t border-slate-200/80">
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-slate-400 mb-4">
                ENGINEERED FOR ENTERPRISES & SCALE
              </p>
              
              {/* Company Logo Names */}
              <div className="flex flex-wrap items-center gap-7 sm:gap-9 opacity-85 grayscale hover:grayscale-0 transition-all duration-300">
                {/* Microsoft */}
                <div className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
                  <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                    <div className="bg-[#f25022] w-1.5 h-1.5" />
                    <div className="bg-[#7fba00] w-1.5 h-1.5" />
                    <div className="bg-[#00a4ef] w-1.5 h-1.5" />
                    <div className="bg-[#ffb900] w-1.5 h-1.5" />
                  </div>
                  <span className="text-xs font-semibold tracking-wide">Microsoft</span>
                </div>

                {/* AWS */}
                <div className="text-xs font-black tracking-wider text-slate-700 hover:text-[#2563EB] transition-colors">
                  aws
                </div>

                {/* Google */}
                <div className="text-xs font-semibold tracking-wide text-slate-700 hover:text-slate-900 transition-colors">
                  <span className="text-blue-500">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-yellow-500">o</span>
                  <span className="text-blue-500">g</span>
                  <span className="text-green-500">l</span>
                  <span className="text-red-500">e</span>
                </div>

                {/* Vercel */}
                <div className="flex items-center gap-1.5 text-slate-700 hover:text-slate-900 transition-colors">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 22.525H0l12-21.05 12 21.05z" />
                  </svg>
                  <span className="text-xs font-bold tracking-tight">vercel</span>
                </div>

                {/* Intel */}
                <div className="text-xs font-black tracking-tight text-slate-700 hover:text-[#2563EB] transition-colors">
                  intel.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Video Showcase with Floating Telemetry HUD */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-6">
            {/* Ambient Background Glow Effect aligned with video particles */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#2563EB]/25 via-indigo-600/15 to-[#FFC107]/25 rounded-[36px] blur-3xl transform scale-105 pointer-events-none" />

            {/* Bespoke Telemetry Card 1 - Top Left */}
            <div className="absolute -top-3 -left-3 sm:-left-6 z-30 animate-float-subtle glass-panel-light px-4 py-2.5 rounded-2xl shadow-xl shadow-blue-950/10 flex items-center gap-3 border border-white/80">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center border border-blue-100 font-bold">
                <Wifi className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono text-[#2563EB] font-bold">[01] IOT_TELEMETRY</span>
                <span className="text-xs font-bold text-[#0B1F4D]">Connected Devices</span>
              </div>
            </div>

            {/* Bespoke Telemetry Card 2 - Bottom Right */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 z-30 animate-float-subtle glass-panel-light px-4 py-2.5 rounded-2xl shadow-xl shadow-blue-950/10 flex items-center gap-3 border border-white/80" style={{ animationDelay: '-2s' }}>
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#F4B400] flex items-center justify-center border border-amber-100 font-bold">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono text-amber-600 font-bold">[02] NEURAL_ENGINE</span>
                <span className="text-xs font-bold text-[#0B1F4D]">AI & Model Pipeline</span>
              </div>
            </div>

            {/* Video Player Shell */}
            <div 
              onClick={togglePlay}
              className="relative w-full max-w-xl aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/25 border border-slate-700/20 group bg-[#070e24] cursor-pointer transition-all duration-500 hover:shadow-blue-600/20 hover:border-[#2563EB]/40 select-none"
            >
              {/* Corner Cyber Accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#2563EB]/70 z-20 pointer-events-none rounded-tl-sm" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#FFC107]/70 z-20 pointer-events-none rounded-tr-sm" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#2563EB]/70 z-20 pointer-events-none rounded-bl-sm" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#FFC107]/70 z-20 pointer-events-none rounded-br-sm" />

              {/* Main HTML5 Video Element */}
              <video
                ref={videoRef}
                src="/videos/starvoniq-hero.mp4"
                poster="/images/hero-video-poster.jpg"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="auto"
                onTimeUpdate={handleTimeUpdate}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Cinematic Vignette & Ambient Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070e24]/85 via-transparent to-[#070e24]/40 pointer-events-none" />
              <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/30 pointer-events-none" />

              {/* Top Status Bar HUD */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                {/* Live Node Badge */}
                <div className="bg-[#0B1F4D]/85 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg shadow-black/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-slate-200">
                    REALTIME // ARCHITECTURE
                  </span>
                </div>

                {/* System Activity Badge */}
                <div className="bg-[#0B1F4D]/85 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-black/20">
                  <Activity className="w-3 h-3 text-[#FFC107] animate-pulse" />
                  <span className="text-[10px] font-mono font-bold text-slate-200">
                    NODE_ACTIVE
                  </span>
                </div>
              </div>

              {/* Center Play/Pause Flash Indicator */}
              <div 
                className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ${
                  showCenterIcon || !isPlaying ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-[#0B1F4D]/90 border border-white/20 backdrop-blur-md shadow-2xl flex items-center justify-center text-white">
                  {isPlaying ? (
                    <Pause className="w-7 h-7 text-[#FFC107]" />
                  ) : (
                    <Play className="w-7 h-7 fill-current text-[#FFC107] ml-1" />
                  )}
                </div>
              </div>

              {/* Bottom Interactive HUD Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 pt-8 bg-gradient-to-t from-[#070e24]/95 via-[#070e24]/60 to-transparent z-20 flex flex-col gap-2 transition-opacity duration-300">
                <div className="flex items-center justify-between text-white">
                  
                  {/* Left: Play/Pause button and caption */}
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                      }}
                      className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md flex items-center justify-center transition-colors text-white"
                      title={isPlaying ? 'Pause video' : 'Play video'}
                      aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    >
                      {isPlaying ? (
                        <Pause className="w-3.5 h-3.5 fill-current text-white" />
                      ) : (
                        <Play className="w-3.5 h-3.5 fill-current text-[#FFC107] ml-0.5" />
                      )}
                    </button>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-mono font-semibold tracking-wide text-slate-300 flex items-center gap-1.5">
                        <Radio className="w-3 h-3 text-[#2563EB] animate-pulse" />
                        StarVoniq Neural Synapse
                      </span>
                    </div>
                  </div>

                  {/* Right: Audio Toggle & Fullscreen */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={toggleMute}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold flex items-center gap-1.5 backdrop-blur-md transition-all ${
                        isMuted 
                          ? 'bg-white/15 text-slate-300 hover:bg-white/25 hover:text-white' 
                          : 'bg-[#FFC107] text-[#0B1F4D] hover:bg-[#F4B400] shadow-md shadow-amber-500/20'
                      }`}
                      title={isMuted ? 'Unmute audio' : 'Mute audio'}
                      aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5 text-slate-300" />
                          <span>UNMUTE</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-[#0B1F4D] animate-bounce" />
                          <span>SOUND ON</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleFullscreen}
                      className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md flex items-center justify-center transition-colors text-slate-300 hover:text-white"
                      title="Fullscreen"
                      aria-label="Fullscreen"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Sleek Progress / Telemetry Line */}
                <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden mt-1">
                  <div 
                    className="h-full bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#FFC107] transition-[width] duration-100 ease-linear rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

