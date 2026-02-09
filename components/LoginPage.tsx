import React, { useState, useEffect } from 'react';

interface LoginPageProps {
  onLogin: (user: { id: string; email: string; name: string; avatar: string }) => void;
}

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: any) => void;
          renderButton: (element: HTMLElement, config: any) => void;
          prompt: () => void;
        };
      };
    };
  }
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [stage, setStage] = useState<'streaks' | 'reveal' | 'ready'>('streaks');
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);

  useEffect(() => {
    const sequence = [
      setTimeout(() => setStage('reveal'), 200),
      setTimeout(() => setStage('ready'), 1200),
    ];
    return () => sequence.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    // Load Google Sign-In Script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setIsGoogleLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isGoogleLoaded && window.google && stage === 'ready') {
      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
      
      if (clientId) {
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: handleGoogleResponse,
        });

        const buttonContainer = document.getElementById('google-signin-button');
        if (buttonContainer) {
          window.google.accounts.id.renderButton(buttonContainer, {
            theme: 'filled_black',
            size: 'large',
            shape: 'pill',
            width: 280,
          });
        }
      }
    }
  }, [isGoogleLoaded, stage]);

  const handleGoogleResponse = (response: any) => {
    // Decode JWT token to get user info
    const payload = JSON.parse(atob(response.credential.split('.')[1]));
    
    const user = {
      id: payload.sub,
      email: payload.email,
      name: payload.name,
      avatar: payload.picture,
    };

    // Store in localStorage for persistence
    localStorage.setItem('eduhub_user', JSON.stringify(user));
    onLogin(user);
  };

  const handleDemoLogin = () => {
    const demoUser = {
      id: 'demo-user-001',
      email: 'demo@eduhub.pro',
      name: 'Demo User',
      avatar: '',
    };
    localStorage.setItem('eduhub_user', JSON.stringify(demoUser));
    onLogin(demoUser);
  };

  return (
    <div className="fixed inset-0 bg-[#000000] z-[9999] flex items-center justify-center overflow-hidden">
      <div className="scanlines" />

      {/* Netflix-style Animated Streaks Background */}
      <div className="absolute inset-0 flex justify-around pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="netflix-streak"
            style={{
              left: `${(i / 25) * 100}%`,
              animation: `streak-flow ${0.6 + Math.random() * 0.8}s ease-out forwards`,
              animationDelay: `${Math.random() * 0.5}s`,
              animationIterationCount: 'infinite',
              opacity: 0.05 + Math.random() * 0.1,
              width: `${1 + Math.random() * 2}px`,
            }}
          />
        ))}
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] animate-pulse" />

      {/* Login Container */}
      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-1000 ${
          stage === 'streaks' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        {/* Animated Logo */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-blue-600/10 blur-[80px] scale-150 animate-pulse" />
          <div
            className="relative text-white font-black italic tracking-tighter"
            style={{
              fontSize: '8rem',
              animation: stage === 'reveal' ? 'logo-reveal 0.8s cubic-bezier(0.1, 0.9, 0.2, 1) forwards' : 'none',
              textShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
            }}
          >
            E
            <div className="absolute bottom-8 left-0 right-0 h-1.5 bg-blue-600 shadow-[0_0_30px_rgba(37,99,235,0.7)] rounded-full" />
          </div>
        </div>

        {/* Brand Name */}
        <div
          className={`mb-16 transition-all duration-700 ${
            stage === 'ready' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 className="text-2xl font-black text-white tracking-[0.5em] uppercase italic">
            EDU<span className="text-blue-500">HUB</span> PRO
          </h1>
          <p className="text-center text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] mt-3">
            Advanced Learning Matrix
          </p>
        </div>

        {/* Glassmorphism Login Card */}
        <div
          className={`glass p-10 rounded-[3rem] border-blue-500/10 holo-glow transition-all duration-700 w-[380px] ${
            stage === 'ready' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-center text-lg font-black text-white italic tracking-tight mb-2">
            Neural Link Access
          </h2>
          <p className="text-center text-[10px] text-slate-500 uppercase tracking-[0.3em] mb-10">
            Authenticate to initialize cognitive matrix
          </p>

          {/* Google Sign-In Button Container */}
          <div className="flex flex-col items-center space-y-6">
            {/* Custom Google Button (fallback if SDK not loaded) */}
            {!import.meta.env.VITE_GOOGLE_CLIENT_ID ? (
              <button
                onClick={handleDemoLogin}
                className="w-full flex items-center justify-center space-x-4 px-8 py-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/40 rounded-2xl transition-all duration-500 group"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                  Continue with Google
                </span>
              </button>
            ) : (
              <div id="google-signin-button" className="flex justify-center" />
            )}

            {/* Divider */}
            <div className="w-full flex items-center space-x-4">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <span className="text-[9px] text-slate-600 uppercase tracking-[0.3em] font-bold">or</span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            {/* Demo Access Button */}
            <button
              onClick={handleDemoLogin}
              className="w-full px-8 py-4 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 hover:border-blue-500/50 rounded-2xl transition-all duration-500 group"
            >
              <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.2em] group-hover:text-blue-300">
                Demo Access
              </span>
            </button>
          </div>
        </div>

        {/* Neural Indicators */}
        <div
          className={`mt-12 flex items-center space-x-8 transition-all duration-700 ${
            stage === 'ready' ? 'opacity-30' : 'opacity-0'
          }`}
        >
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" />
          <div className="flex space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" style={{ animationDelay: '0.2s' }} />
          </div>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" style={{ animationDelay: '0.3s' }} />
        </div>

        {/* Footer Tag */}
        <div
          className={`mt-8 transition-all duration-700 ${
            stage === 'ready' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-[8px] text-slate-700 uppercase tracking-[0.5em] font-bold">
            Secure • Private • Encrypted
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
