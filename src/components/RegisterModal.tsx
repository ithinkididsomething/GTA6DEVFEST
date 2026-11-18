import React, { useState } from 'react';
import { X, CheckCircle2, Send, Sparkles, MapPin, ShieldCheck, ExternalLink, Ticket } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<'student' | 'developer' | 'creator'>('student');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div 
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/15 bg-[#0D1127] p-6 sm:p-8 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-32 bg-gradient-to-r from-[#FF5E36] via-[#E02484] to-[#7928CA] blur-3xl opacity-40 pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF5E36] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
              Official Registration Notice
            </div>

            <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-white mb-2">
              Book DevFest Indore 2026
            </h2>

            <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
              Organized by <strong className="text-white">{EVENT_DATA.organiser.name}</strong>. Passes are available on KonfHub starting at <strong className="text-[#00F0FF]">{EVENT_DATA.registration.startingPrice}</strong>.
            </p>

            <div className="p-3 bg-white/5 border border-white/10 rounded-xl mb-4 flex items-start gap-2.5 text-xs text-white/80">
              <MapPin className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">{EVENT_DATA.venue.name}</span>
                <div className="text-[11px] text-white/60 mt-0.5">
                  Near World Cup Square, Pipliyahana, Indore • {EVENT_DATA.dates.fullDate}
                </div>
              </div>
            </div>

            {/* Direct KonfHub Button */}
            <a
              href={EVENT_DATA.registration.url}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 mb-5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5E36] via-[#FF4B72] to-[#E02484] hover:shadow-[0_0_30px_rgba(224,36,132,0.5)] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Ticket className="w-4 h-4 text-[#FFB800]" />
              <span>Book Directly on KonfHub ({EVENT_DATA.registration.startingPrice})</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink mx-4 text-[10px] font-mono uppercase tracking-widest text-white/40">
                Or Get Early Workshop Notifications
              </span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 mt-3">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Full Name (e.g. Aarav Sharma)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#FF5E36] transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="name@company.com or university email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#E02484] transition-colors"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                {(['student', 'developer', 'creator'] as const).map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setRole(item)}
                    className={`py-1.5 px-2 text-[10px] font-mono uppercase tracking-wider rounded-lg border transition-all ${
                      role === item
                        ? 'bg-[#FF5E36]/20 border-[#FF5E36] text-white font-bold'
                        : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                    }`}
                  >
                    {item === 'student' ? 'Cadet (Student)' : item === 'developer' ? 'Commander (Pro)' : 'Creator'}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold text-white/90 bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                Notify Me on Agenda & Workshop Drops
              </button>

              <div className="flex items-center justify-center gap-1 text-[10px] font-mono text-white/40 text-center">
                <ShieldCheck className="w-3 h-3 text-[#00F0FF]" />
                GDG Indore • No spam • Official updates only
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center animate-fade-in">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-display uppercase tracking-wider text-white mb-2">
              You're On The Priority List
            </h3>

            <p className="text-xs sm:text-sm text-white/80 font-sans max-w-sm mx-auto mb-6">
              Thank you, <span className="text-[#FF5E36] font-semibold">{name || 'Builder'}</span>! You will receive instant notifications when workshop seating opens.
            </p>

            <a
              href={EVENT_DATA.registration.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs uppercase tracking-widest font-bold text-white bg-gradient-to-r from-[#FF5E36] to-[#E02484] shadow-lg mb-4"
            >
              <span>Complete Booking on KonfHub (₹849)</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider text-white/60 hover:text-white transition-colors"
              >
                Back to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
