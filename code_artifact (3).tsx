import React, { useState, useEffect, useCallback } from 'react';

// ==========================================
// 공통 SVG 그래픽 컴포넌트 모음
// ==========================================

const TomatoGraphic = ({ colorType }) => {
  const isPrimary = colorType === 'primary';
  return (
    <svg viewBox="0 0 100 100" className="w-[12vw] h-[12vw] sm:w-[11vh] sm:h-[11vh] min-w-[25px] min-h-[25px] max-w-[85px] max-h-[85px] drop-shadow-lg overflow-visible pointer-events-none">
      <defs>
        <radialGradient id={`grad-tomato-${colorType}`} cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor={isPrimary ? "#ffb3b3" : "#b3ffb3"} />
          <stop offset="40%" stopColor={isPrimary ? "#ff2222" : "#22cc22"} />
          <stop offset="100%" stopColor={isPrimary ? "#ba0000" : "#008000"} />
        </radialGradient>
        <radialGradient id={`vol-hl-${colorType}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.25)" /><stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <radialGradient id={`vol-sh-${colorType}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.15)" /><stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>
      <ellipse cx="50" cy="90" rx="38" ry="8" fill="rgba(0,0,0,0.15)" />
      <path d="M 50 20 C 75 15, 95 30, 92 55 C 88 80, 70 88, 50 85 C 30 88, 12 80, 8 55 C 5 30, 25 15, 50 20 Z" fill={`url(#grad-tomato-${colorType})`} />
      <ellipse cx="50" cy="55" rx="12" ry="28" fill={`url(#vol-sh-${colorType})`} />
      <ellipse cx="32" cy="48" rx="14" ry="25" fill={`url(#vol-hl-${colorType})`} transform="rotate(-15 32 48)" />
      <ellipse cx="68" cy="48" rx="14" ry="25" fill={`url(#vol-hl-${colorType})`} transform="rotate(15 68 48)" />
      <path d="M 50 15 L 55 25 L 65 22 L 58 30 L 61 40 L 50 33 L 39 40 L 42 30 L 35 22 L 45 25 Z" fill="#0a5c00" />
      <circle cx="50" cy="25" r="3" fill="#053300" />
    </svg>
  );
};

const MelonGraphic = ({ colorType }) => {
  const isPrimary = colorType === 'primary';
  return (
    <svg viewBox="0 0 120 100" className="w-[14vw] h-[11vw] sm:w-[12vh] sm:h-[10vh] min-w-[30px] min-h-[25px] max-w-[95px] max-h-[75px] drop-shadow-lg overflow-visible pointer-events-none">
      <defs>
        <radialGradient id={`grad-melon-${colorType}`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor={isPrimary ? "#ffeb3b" : "#cddc39"} />
          <stop offset="100%" stopColor={isPrimary ? "#fbc02d" : "#9e9d24"} />
        </radialGradient>
      </defs>
      <ellipse cx="60" cy="85" rx="50" ry="10" fill="rgba(0,0,0,0.15)" />
      <ellipse cx="60" cy="50" rx="55" ry="35" fill={`url(#grad-melon-${colorType})`} />
      <path d="M 15 35 Q 60 15 105 35" stroke="rgba(255,255,255,0.8)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 7 50 Q 60 40 113 50" stroke="rgba(255,255,255,0.8)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 15 65 Q 60 85 105 65" stroke="rgba(255,255,255,0.8)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 25 30 Q 60 20 95 30" stroke="rgba(255,255,255,0.5)" strokeWidth="8" fill="none" strokeLinecap="round" />
    </svg>
  );
};

const EggGraphic = ({ colorType }) => {
  const isPrimary = colorType === 'primary';
  return (
    <svg viewBox="0 0 100 100" className="w-[11vw] h-[11vw] sm:w-[10vh] sm:h-[10vh] min-w-[25px] min-h-[25px] max-w-[80px] max-h-[80px] drop-shadow-lg overflow-visible pointer-events-none">
      <defs>
        <radialGradient id={`grad-egg-${colorType}`} cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor={isPrimary ? "#ffffff" : "#e6c3a1"} />
          <stop offset="100%" stopColor={isPrimary ? "#e0e0e0" : "#a87b51"} />
        </radialGradient>
      </defs>
      <ellipse cx="50" cy="88" rx="28" ry="6" fill="rgba(0,0,0,0.15)" />
      <path d="M 50 10 C 75 15, 85 45, 85 65 C 85 85, 70 95, 50 95 C 30 95, 15 85, 15 65 C 15 45, 25 15, 50 10 Z" fill={`url(#grad-egg-${colorType})`} />
      <path d="M 40 25 Q 50 20 60 25" stroke="rgba(255,255,255,0.6)" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
};

const EggplantGraphic = () => (
  <svg viewBox="0 0 100 160" className="h-[6vh] sm:h-[9vh] md:h-[14vh] min-h-[30px] max-h-[160px] w-auto max-w-[9vw] sm:max-w-none drop-shadow-lg overflow-visible pointer-events-none">
    <defs>
      <radialGradient id="grad-eggplant" cx="35%" cy="60%" r="65%">
        <stop offset="0%" stopColor="#ba68c8" /><stop offset="35%" stopColor="#7b1fa2" /><stop offset="100%" stopColor="#4a148c" />
      </radialGradient>
    </defs>
    <ellipse cx="50" cy="155" rx="28" ry="6" fill="rgba(0,0,0,0.15)" />
    <path d="M 50 30 C 80 30, 95 85, 85 130 C 75 160, 25 160, 15 130 C 5 85, 20 30, 50 30 Z" fill="url(#grad-eggplant)" />
    <path d="M 30 45 C 40 45, 25 110, 20 90 C 15 70, 20 45, 30 45 Z" fill="rgba(255,255,255,0.2)" />
    <path d="M 35 50 C 42 50, 28 95, 25 80 C 22 65, 28 50, 35 50 Z" fill="rgba(255,255,255,0.15)" />
    <path d="M 48 15 L 68 28 L 55 58 L 45 42 L 28 55 L 30 30 L 40 20 Z" fill="#2e7d32" />
    <path d="M 45 20 L 42 0 L 52 0 L 50 20 Z" fill="#1b5e20" />
  </svg>
);

const StrawberryGraphic = () => (
  <svg viewBox="0 0 100 120" className="h-[6vh] sm:h-[9vh] md:h-[14vh] min-h-[30px] max-h-[110px] w-auto max-w-[9vw] sm:max-w-none drop-shadow-lg overflow-visible pointer-events-none">
    <defs>
      <radialGradient id="grad-berry" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#ff5252" /><stop offset="60%" stopColor="#e53935" /><stop offset="100%" stopColor="#b71c1c" />
      </radialGradient>
    </defs>
    <ellipse cx="50" cy="110" rx="25" ry="8" fill="rgba(0,0,0,0.15)" />
    <path d="M 50 25 C 90 25, 95 60, 75 90 C 60 110, 55 115, 50 115 C 45 115, 40 110, 25 90 C 5 60, 10 25, 50 25 Z" fill="url(#grad-berry)" />
    <path d="M 35 35 C 45 35, 30 65, 20 60 C 15 50, 20 35, 35 35 Z" fill="rgba(255,255,255,0.25)" />
    <g fill="#ffe082">
      <ellipse cx="50" cy="45" rx="1.5" ry="2.5" /><ellipse cx="35" cy="55" rx="1.5" ry="2.5" transform="rotate(-15 35 55)" />
      <ellipse cx="65" cy="55" rx="1.5" ry="2.5" transform="rotate(15 65 55)" /><ellipse cx="45" cy="65" rx="1.5" ry="2.5" />
      <ellipse cx="25" cy="75" rx="1.5" ry="2.5" transform="rotate(-25 25 75)" /><ellipse cx="75" cy="75" rx="1.5" ry="2.5" transform="rotate(25 75 75)" />
      <ellipse cx="55" cy="85" rx="1.5" ry="2.5" /><ellipse cx="40" cy="95" rx="1.5" ry="2.5" transform="rotate(-10 40 95)" />
      <ellipse cx="60" cy="95" rx="1.5" ry="2.5" transform="rotate(10 60 95)" /><ellipse cx="50" cy="105" rx="1.5" ry="2.5" />
    </g>
    <path d="M 50 15 L 60 25 L 80 20 L 65 30 L 70 45 L 50 35 L 30 45 L 35 30 L 20 20 L 40 25 Z" fill="#2e7d32" />
    <path d="M 50 25 L 52 5 L 48 5 Z" fill="#1b5e20" />
  </svg>
);

const PotatoGraphic = () => (
  <svg viewBox="0 0 100 100" className="h-[6vh] sm:h-[9vh] md:h-[14vh] min-h-[30px] max-h-[100px] w-auto max-w-[9vw] sm:max-w-none drop-shadow-lg overflow-visible pointer-events-none">
    <defs>
      <radialGradient id="grad-potato" cx="40%" cy="30%" r="65%">
        <stop offset="0%" stopColor="#e2c285" /><stop offset="70%" stopColor="#c29b57" /><stop offset="100%" stopColor="#8a662e" />
      </radialGradient>
      <radialGradient id="potato-eye" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#6e4f20" /><stop offset="100%" stopColor="rgba(110,79,32,0)" />
      </radialGradient>
    </defs>
    <ellipse cx="50" cy="90" rx="35" ry="8" fill="rgba(0,0,0,0.15)" />
    <path d="M 45 15 C 75 10, 95 30, 85 65 C 75 95, 35 95, 15 70 C 0 45, 15 20, 45 15 Z" fill="url(#grad-potato)" />
    <ellipse cx="35" cy="40" rx="8" ry="4" fill="url(#potato-eye)" transform="rotate(-15 35 40)" />
    <ellipse cx="65" cy="55" rx="6" ry="3" fill="url(#potato-eye)" transform="rotate(20 65 55)" />
    <ellipse cx="45" cy="75" rx="9" ry="5" fill="url(#potato-eye)" />
    <ellipse cx="75" cy="35" rx="5" ry="3" fill="url(#potato-eye)" />
    <ellipse cx="20" cy="60" rx="4" ry="7" fill="url(#potato-eye)" />
    <g fill="#8a662e" opacity="0.6">
      <circle cx="50" cy="30" r="1" /><circle cx="60" cy="40" r="1.5" /><circle cx="40" cy="60" r="1" />
      <circle cx="70" cy="70" r="1.5" /><circle cx="30" cy="80" r="1" />
    </g>
  </svg>
);

// ==========================================
// 🎵 사운드 매니저 (웹 오디오 API 활용)
// ==========================================
let audioCtx = null;
const playSound = (type) => {
  try {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    const now = audioCtx.currentTime;
    if (type === 'pop') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.1);
      gainNode.gain.setValueAtTime(0.5, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    } else if (type === 'ding') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.05);
      osc.frequency.setValueAtTime(783.99, now + 0.1);
      osc.frequency.setValueAtTime(1046.50, now + 0.15);
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.3, now + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
      osc.start(now);
      osc.stop(now + 0.5);
    } else if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.05);
      gainNode.gain.setValueAtTime(0.2, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    }
  } catch (e) {
    console.error("Audio error:", e);
  }
};

// ==========================================
// 1. 모두 몇 개인지 덧셈나라
// ==========================================
const AddMode = ({ onNext, isMix }) => {
  const [theme, setTheme] = useState('tomato');
  const [leftCount, setLeftCount] = useState(0);
  const [rightCount, setRightCount] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [items, setItems] = useState([]);
  const [animationKey, setAnimationKey] = useState(0);

  const leftSlots = [
    { left: '20%', top: '15%' }, { left: '35%', top: '25%' }, { left: '15%', top: '45%' },
    { left: '42%', top: '55%' }, { left: '25%', top: '65%' }, { left: '10%', top: '30%' },
    { left: '30%', top: '40%' }, { left: '18%', top: '60%' }, { left: '38%', top: '72%' }
  ];

  const rightSlots = [
    { left: '75%', top: '15%' }, { left: '60%', top: '25%' }, { left: '85%', top: '45%' },
    { left: '58%', top: '55%' }, { left: '75%', top: '65%' }, { left: '90%', top: '30%' },
    { left: '70%', top: '40%' }, { left: '82%', top: '60%' }, { left: '62%', top: '72%' }
  ];

  const generateProblem = useCallback(() => {
    const total = Math.floor(Math.random() * 8) + 2; 
    const lCount = Math.floor(Math.random() * (total - 1)) + 1;
    const rCount = total - lCount;

    const shuffledLeft = [...leftSlots].sort(() => 0.5 - Math.random());
    const shuffledRight = [...rightSlots].sort(() => 0.5 - Math.random());
    
    const newItems = [];
    for (let i = 0; i < lCount; i++) newItems.push({ ...shuffledLeft[i], side: 'left', id: `l-${i}` });
    for (let i = 0; i < rCount; i++) newItems.push({ ...shuffledRight[i], side: 'right', id: `r-${i}` });

    newItems.sort((a, b) => parseFloat(a.top) - parseFloat(b.top));

    const themes = ['tomato', 'melon', 'egg'];
    setTheme(themes[Math.floor(Math.random() * themes.length)]);

    setLeftCount(lCount);
    setRightCount(rCount);
    setItems(newItems);
    setShowAnswer(false);
    setAnimationKey(prev => prev + 1);
    playSound('pop');
  }, []);

  useEffect(() => { generateProblem(); }, [generateProblem]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setShowAnswer(prev => { 
          if (prev) { 
            if (onNext) onNext();
            else generateProblem(); 
            return false; 
          } 
          playSound('ding');
          return true; 
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [generateProblem, onNext]);

  const handleAction = () => { 
    if (showAnswer) {
      if (onNext) onNext();
      else generateProblem();
    } else {
      playSound('ding');
      setShowAnswer(true);
    }
  };

  const themeColors = {
    tomato: { left: 'text-red-600', right: 'text-green-600', result: 'text-blue-600', bg: 'bg-[#e0f7fa]' },
    melon: { left: 'text-yellow-500', right: 'text-green-500', result: 'text-blue-600', bg: 'bg-[#e0f7fa]' },
    egg: { left: 'text-gray-500', right: 'text-amber-800', result: 'text-blue-600', bg: 'bg-[#e0f7fa]' }
  };
  const colors = themeColors[theme];

  return (
    <div className={`w-full h-full ${colors.bg} flex flex-col items-center justify-between p-2 md:p-4 overflow-hidden transition-colors duration-500`}>
      <div className="flex flex-col items-center flex-shrink-0 z-50 relative w-full mt-2 md:mt-4 gap-1 md:gap-2">
        <div className="bg-white px-6 md:px-8 py-1.5 md:py-2 rounded-full shadow-md border-[3px] md:border-4 border-yellow-400">
          <h1 className="text-lg sm:text-2xl md:text-4xl font-black text-gray-800 tracking-wider">{isMix ? "섞어나와 짬뽕 나라" : "모두 몇 개인지 덧셈 나라"}</h1>
        </div>
      </div>

      <div className={`relative w-full max-w-5xl flex-1 min-h-[20vh] rounded-2xl md:rounded-3xl shadow-xl my-2 transition-colors duration-500 border-b-[15px] overflow-hidden ${theme === 'egg' ? 'bg-[#f5deb3] border-[#d2b48c]' : 'bg-[#d79760] border-[#8e5222]'} z-10`}>
        {theme !== 'egg' ? (
          <svg className="absolute w-full h-full top-0 left-0 drop-shadow-md pointer-events-none" preserveAspectRatio="none">
            <path d="M 25% 100% Q 25% 50% 20% 20%" stroke="#2e8b22" strokeWidth="20" fill="none" strokeLinecap="round" />
            <path d="M 25% 60% Q 15% 50% 10% 40%" stroke="#2e8b22" strokeWidth="15" fill="none" strokeLinecap="round" />
            <path d="M 25% 75% Q 40% 65% 45% 50%" stroke="#2e8b22" strokeWidth="15" fill="none" strokeLinecap="round" />
            <path d="M 75% 100% Q 75% 50% 80% 20%" stroke="#2e8b22" strokeWidth="20" fill="none" strokeLinecap="round" />
            <path d="M 75% 60% Q 85% 50% 90% 40%" stroke="#2e8b22" strokeWidth="15" fill="none" strokeLinecap="round" />
            <path d="M 75% 75% Q 60% 65% 55% 50%" stroke="#2e8b22" strokeWidth="15" fill="none" strokeLinecap="round" />
          </svg>
        ) : (
          <svg className="absolute w-full h-full top-0 left-0 opacity-40 pointer-events-none" preserveAspectRatio="none">
            <path d="M 10% 80% Q 30% 90% 50% 85% T 90% 80%" stroke="#e6b34a" strokeWidth="10" fill="none" strokeLinecap="round" />
            <path d="M 5% 90% Q 25% 100% 45% 95% T 95% 90%" stroke="#c9952a" strokeWidth="12" fill="none" strokeLinecap="round" />
          </svg>
        )}

        {items.map((item, index) => (
          <div key={`${animationKey}-${item.id}`} className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-bounce-in z-20 pointer-events-none" style={{ left: item.left, top: item.top, animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}>
            {theme === 'tomato' && <TomatoGraphic colorType={item.side === 'left' ? 'primary' : 'secondary'} />}
            {theme === 'melon' && <MelonGraphic colorType={item.side === 'left' ? 'primary' : 'secondary'} />}
            {theme === 'egg' && <EggGraphic colorType={item.side === 'left' ? 'primary' : 'secondary'} />}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center flex-shrink-0 z-30 relative w-full mb-1 sm:mb-2">
        <div onClick={handleAction} className="bg-white px-6 sm:px-10 py-2 md:py-3 rounded-2xl md:rounded-3xl shadow-xl border-4 md:border-8 border-blue-200 mb-2 cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200">
          <div className="text-4xl sm:text-6xl md:text-7xl font-black flex items-center gap-2 md:gap-4 pointer-events-none">
            {showAnswer ? (
              <>
                <span className={`${colors.left} drop-shadow-md animate-pop-in`}>{leftCount}</span>
                <span className="text-gray-800">+</span>
                <span className={`${colors.right} drop-shadow-md animate-pop-in`} style={{ animationDelay: '0.1s' }}>{rightCount}</span>
                <span className="text-gray-800">=</span>
                <span className={`${colors.result} drop-shadow-md animate-pop-in`} style={{ animationDelay: '0.2s' }}>{leftCount + rightCount}</span>
              </>
            ) : (
              <>
                <span className="text-gray-300">?</span><span className="text-gray-800">+</span><span className="text-gray-300">?</span>
                <span className="text-gray-800">=</span><span className="text-gray-300">?</span>
              </>
            )}
          </div>
        </div>
        <button onClick={handleAction} className={`px-8 sm:px-12 py-3 md:py-4 text-xl md:text-3xl font-bold rounded-full text-white shadow-[0_6px_0_0] active:translate-y-2 active:shadow-none transition-all duration-150 z-20 ${showAnswer ? 'bg-blue-500 hover:bg-blue-600 shadow-blue-700' : 'bg-orange-500 hover:bg-orange-600 shadow-orange-700'}`}>
          {showAnswer ? '👉 다음 문제 보기' : '👀 정답 확인하기'}
        </button>
        <p className="mt-1 text-gray-500 font-bold text-xs sm:text-sm md:text-base text-center m-0 hidden sm:block">
          💡 스페이스바를 누르거나 수식 박스를 터치해도 넘어가요!
        </p>
      </div>
    </div>
  );
};

// ==========================================
// 2. 덜어내기 뺄셈나라
// ==========================================
const SubtractMode = ({ onNext, isMix }) => {
  const [theme, setTheme] = useState('eggplant');
  const [total, setTotal] = useState(0);
  const [takeAway, setTakeAway] = useState(0);
  const [takeDirection, setTakeDirection] = useState('right');
  const [showAnswer, setShowAnswer] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const generateProblem = useCallback(() => {
    const newTotal = Math.floor(Math.random() * 8) + 2; 
    const newTakeAway = Math.floor(Math.random() * (newTotal - 1)) + 1;
    const newDirection = Math.random() < 0.5 ? 'left' : 'right';

    const themes = ['eggplant', 'strawberry', 'potato'];
    setTheme(themes[Math.floor(Math.random() * themes.length)]);

    setTotal(newTotal);
    setTakeAway(newTakeAway);
    setTakeDirection(newDirection);
    setShowAnswer(false);
    setAnimationKey(prev => prev + 1);
    playSound('pop');
  }, []);

  useEffect(() => { generateProblem(); }, [generateProblem]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setShowAnswer(prev => { 
          if (prev) { 
            if (onNext) onNext();
            else generateProblem(); 
            return false; 
          } 
          playSound('ding');
          return true; 
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [generateProblem, onNext]);

  const handleAction = () => { 
    if (showAnswer) {
      if (onNext) onNext();
      else generateProblem();
    } else {
      playSound('ding');
      setShowAnswer(true);
    }
  };

  const themeConfig = {
    eggplant: { totalColor: 'text-purple-700', trayBg: 'bg-[#faf5ff]', trayBorder: 'border-[#d8b4fe]', pageBg: 'bg-[#f3e8ff]' },
    strawberry: { totalColor: 'text-red-600', trayBg: 'bg-[#fff0f2]', trayBorder: 'border-[#ffcdd2]', pageBg: 'bg-[#ffebee]' },
    potato: { totalColor: 'text-amber-800', trayBg: 'bg-[#fff8e1]', trayBorder: 'border-[#ffecb3]', pageBg: 'bg-[#fff3e0]' }
  };
  const config = themeConfig[theme];

  const remain = total - takeAway;

  return (
    <div className={`w-full h-full ${config.pageBg} flex flex-col items-center justify-between p-1 sm:p-2 md:p-4 overflow-hidden transition-colors duration-500`}>
      <div className="flex flex-col items-center flex-shrink-0 z-50 relative w-full mt-2 md:mt-4 gap-1 md:gap-2">
        <div className="bg-white px-6 md:px-10 py-1.5 md:py-2 rounded-full shadow-lg border-[3px] md:border-4 border-purple-400">
          <h1 className="text-lg sm:text-2xl md:text-4xl font-black text-gray-800 tracking-wider">{isMix ? "섞어나와 짬뽕 나라" : "덜어내기 뺄셈 나라"}</h1>
        </div>
      </div>

      <div key={animationKey} className="relative w-full max-w-5xl flex-1 min-h-0 flex flex-col items-center justify-center my-1 sm:my-2 md:my-4 z-20">
        <div className={`relative flex flex-row items-center justify-center ${config.trayBg} border-[3px] md:border-8 ${config.trayBorder} rounded-3xl md:rounded-[3rem] px-2 md:px-8 py-3 sm:py-6 md:py-10 shadow-xl w-full max-w-[98%] max-h-full animate-fade-in`}>
          <div 
            className="relative grid gap-1 sm:gap-2 md:gap-4 place-items-center w-fit mx-auto"
            style={{ gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` }}
          >
            {/* 핑크색 덜어내기 박스 */}
            <div 
              className={`row-start-1 border-[3px] md:border-[5px] border-pink-500 rounded-xl md:rounded-2xl z-10 bg-white/40 h-full w-full relative pointer-events-none
                ${takeDirection === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
              style={{ 
                gridColumnStart: takeDirection === 'left' ? 1 : remain + 1,
                gridColumnEnd: takeDirection === 'left' ? takeAway + 1 : total + 1,
              }}
            >
              {takeDirection === 'left' ? (
                <svg viewBox="0 0 100 100" className="absolute bottom-full left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 overflow-visible animate-arrow-fly z-[100] drop-shadow-md pointer-events-none mb-[-2px] md:mb-[-4px]">
                  <defs><marker id="arrowhead-l" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><polygon points="0 0, 5 2.5, 0 5" fill="#ec4899" /></marker></defs>
                  <path d="M 50 100 Q 40 40 10 20" fill="none" stroke="#ec4899" strokeWidth="4" strokeLinecap="round" markerEnd="url(#arrowhead-l)" />
                </svg>
              ) : (
                <svg viewBox="0 0 100 100" className="absolute bottom-full left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 overflow-visible animate-arrow-fly z-[100] drop-shadow-md pointer-events-none mb-[-2px] md:mb-[-4px]">
                  <defs><marker id="arrowhead-r" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><polygon points="0 0, 5 2.5, 0 5" fill="#ec4899" /></marker></defs>
                  <path d="M 50 100 Q 60 40 90 20" fill="none" stroke="#ec4899" strokeWidth="4" strokeLinecap="round" markerEnd="url(#arrowhead-r)" />
                </svg>
              )}
            </div>

            {Array.from({ length: total }).map((_, i) => (
              <div key={`item-${i}`} className="row-start-1 flex justify-center items-center z-20 w-full h-full p-1 sm:p-2 md:p-3 pointer-events-none" style={{ gridColumnStart: i + 1 }}>
                <div className="animate-pop-in flex items-center" style={{ animationDelay: `${i * 0.05}s` }}>
                  {theme === 'eggplant' && <EggplantGraphic />}
                  {theme === 'strawberry' && <StrawberryGraphic />}
                  {theme === 'potato' && <PotatoGraphic />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center flex-shrink-0 z-30 relative w-full mb-1 sm:mb-2">
        <div onClick={handleAction} className="bg-white px-6 sm:px-10 py-2 md:py-3 rounded-2xl md:rounded-3xl shadow-xl border-4 md:border-8 border-blue-200 mb-2 cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200">
          <div className="text-4xl sm:text-6xl md:text-7xl font-black flex items-center gap-2 md:gap-4 pointer-events-none">
            {showAnswer ? (
              <>
                <span className={`${config.totalColor} drop-shadow-md animate-pop-in`}>{total}</span>
                <span className="text-gray-800">-</span>
                <span className="text-pink-500 drop-shadow-md animate-pop-in" style={{ animationDelay: '0.1s' }}>{takeAway}</span>
                <span className="text-gray-800">=</span>
                <span className="text-blue-600 drop-shadow-md animate-pop-in" style={{ animationDelay: '0.2s' }}>{remain}</span>
              </>
            ) : (
              <>
                <span className="text-gray-300">?</span><span className="text-gray-800">-</span><span className="text-gray-300">?</span>
                <span className="text-gray-800">=</span><span className="text-gray-300">?</span>
              </>
            )}
          </div>
        </div>
        <button onClick={handleAction} className={`px-8 sm:px-12 py-3 md:py-4 text-xl md:text-3xl font-bold rounded-full text-white shadow-[0_6px_0_0] active:translate-y-2 active:shadow-none transition-all duration-150 z-20 ${showAnswer ? 'bg-blue-500 hover:bg-blue-600 shadow-blue-700' : 'bg-orange-500 hover:bg-orange-600 shadow-orange-700'}`}>
          {showAnswer ? '👉 다음 문제 보기' : '👀 정답 확인하기'}
        </button>
        <p className="mt-1 text-gray-500 font-bold text-xs sm:text-sm md:text-base text-center m-0 hidden sm:block">
          💡 스페이스바를 누르거나 수식 박스를 터치해도 넘어가요!
        </p>
      </div>
    </div>
  );
};

// ==========================================
// 3. 비교하기 뺄셈나라
// ==========================================
const CompareMode = ({ onNext, isMix }) => {
  const [theme, setTheme] = useState('tomato');
  const [topCount, setTopCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);
  const [topType, setTopType] = useState('primary');
  const [bottomType, setBottomType] = useState('secondary');
  const [showAnswer, setShowAnswer] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const generateProblem = useCallback(() => {
    const num1 = Math.floor(Math.random() * 8) + 2; 
    const num2 = Math.floor(Math.random() * (num1 - 1)) + 1;

    if (Math.random() > 0.5) { setTopCount(num1); setBottomCount(num2); } 
    else { setTopCount(num2); setBottomCount(num1); }

    if (Math.random() > 0.5) { setTopType('primary'); setBottomType('secondary'); } 
    else { setTopType('secondary'); setBottomType('primary'); }

    const themes = ['tomato', 'melon', 'egg'];
    setTheme(themes[Math.floor(Math.random() * themes.length)]);

    setShowAnswer(false);
    setAnimationKey(prev => prev + 1);
    playSound('pop');
  }, []);

  useEffect(() => { generateProblem(); }, [generateProblem]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setShowAnswer(prev => { 
          if (prev) { 
            if (onNext) onNext();
            else generateProblem(); 
            return false; 
          } 
          playSound('ding');
          return true; 
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [generateProblem, onNext]);

  const handleAction = () => { 
    if (showAnswer) {
      if (onNext) onNext();
      else generateProblem();
    } else {
      playSound('ding');
      setShowAnswer(true);
    }
  };

  const themeConfig = {
    tomato: { primaryColor: 'text-red-600', secondaryColor: 'text-green-600', pageBg: 'bg-[#fff5f5]' },
    melon: { primaryColor: 'text-yellow-500', secondaryColor: 'text-green-500', pageBg: 'bg-[#f0fdf4]' },
    egg: { primaryColor: 'text-gray-500', secondaryColor: 'text-amber-800', pageBg: 'bg-[#fffbeb]' }
  };
  const config = themeConfig[theme];

  const isTopGreater = topCount > bottomCount;
  const maxCount = isTopGreater ? topCount : bottomCount;
  const minCount = isTopGreater ? bottomCount : topCount;
  const maxColorClass = isTopGreater ? config[`${topType}Color`] : config[`${bottomType}Color`];
  const minColorClass = isTopGreater ? config[`${bottomType}Color`] : config[`${topType}Color`];
  const diff = maxCount - minCount;

  return (
    <div className={`w-full h-full ${config.pageBg} flex flex-col items-center justify-between p-2 sm:p-4 overflow-hidden transition-colors duration-500`}>
      <div className="flex flex-col items-center flex-shrink-0 z-50 relative w-full mt-2 md:mt-4 gap-1 md:gap-2">
        <div className="bg-white px-6 md:px-8 py-1.5 md:py-2 rounded-full shadow-md border-[3px] md:border-4 border-green-400">
          <h1 className="text-lg sm:text-2xl md:text-4xl font-black text-gray-800 tracking-wider">{isMix ? "섞어나와 짬뽕 나라" : "비교하기 뺄셈 나라"}</h1>
        </div>
      </div>

      <div key={animationKey} className="w-full flex-1 min-h-0 flex flex-col items-center justify-center my-1 sm:my-2 z-20 overflow-hidden pointer-events-none">
        <div className="relative grid gap-x-1 sm:gap-x-2 md:gap-x-4 max-w-full px-2 mx-auto w-fit place-items-center" style={{ gridTemplateRows: 'auto minmax(10px, 6vh) auto', gridTemplateColumns: `repeat(${maxCount}, minmax(0, 1fr))` }}>
          
          <div className="row-start-1 col-start-1 border-[2px] md:border-[4px] border-[#c5e1a5] bg-white rounded-2xl md:rounded-3xl shadow-sm z-0 w-full h-full" style={{ gridColumnEnd: topCount + 1 }} />
          <div className="row-start-3 col-start-1 border-[2px] md:border-[4px] border-[#c5e1a5] bg-white rounded-2xl md:rounded-3xl shadow-sm z-0 w-full h-full" style={{ gridColumnEnd: bottomCount + 1 }} />

          {Array.from({ length: topCount }).map((_, i) => (
            <div key={`top-${i}`} className="row-start-1 flex justify-center items-center p-1 sm:p-2 md:p-3 z-20 w-full h-full" style={{ gridColumnStart: i + 1 }}>
              <div className={`animate-pop-in ${showAnswer && isTopGreater && i >= minCount ? 'animate-bounce-happy' : ''}`} style={{ animationDelay: `${i * 0.05}s` }}>
                {theme === 'tomato' && <TomatoGraphic colorType={topType} />}
                {theme === 'melon' && <MelonGraphic colorType={topType} />}
                {theme === 'egg' && <EggGraphic colorType={topType} />}
              </div>
            </div>
          ))}

          {Array.from({ length: minCount }).map((_, i) => (
            <div key={`line-${i}`} className="flex justify-center items-center z-10 w-full h-full pointer-events-none" style={{ gridRowStart: 1, gridRowEnd: 4, gridColumnStart: i + 1 }}>
              <div className="w-1 sm:w-1.5 md:w-2 h-[65%] bg-pink-500 animate-draw-line origin-top rounded-full" style={{ animationDelay: `${i * 0.1}s` }} />
            </div>
          ))}

          {Array.from({ length: bottomCount }).map((_, i) => (
            <div key={`bottom-${i}`} className="row-start-3 flex justify-center items-center p-1 sm:p-2 md:p-3 z-20 w-full h-full" style={{ gridColumnStart: i + 1 }}>
              <div className={`animate-pop-in ${showAnswer && !isTopGreater && i >= minCount ? 'animate-bounce-happy' : ''}`} style={{ animationDelay: `${i * 0.05}s` }}>
                {theme === 'tomato' && <TomatoGraphic colorType={bottomType} />}
                {theme === 'melon' && <MelonGraphic colorType={bottomType} />}
                {theme === 'egg' && <EggGraphic colorType={bottomType} />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center flex-shrink-0 z-30 relative w-full mb-1 sm:mb-2">
        <div onClick={handleAction} className="bg-white px-6 sm:px-10 py-2 md:py-3 rounded-2xl md:rounded-3xl shadow-lg border-4 md:border-[6px] border-blue-200 mb-2 cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200">
          <div className="text-4xl sm:text-6xl md:text-7xl font-black flex items-center gap-2 sm:gap-4 pointer-events-none">
            {showAnswer ? (
              <>
                <span className={`${maxColorClass} drop-shadow-sm animate-pop-in`}>{maxCount}</span>
                <span className="text-gray-800">-</span>
                <span className={`${minColorClass} drop-shadow-sm animate-pop-in`} style={{ animationDelay: '0.1s' }}>{minCount}</span>
                <span className="text-gray-800">=</span>
                <span className="text-blue-600 drop-shadow-sm animate-pop-in" style={{ animationDelay: '0.2s' }}>{diff}</span>
              </>
            ) : (
              <>
                <span className="text-gray-300">?</span><span className="text-gray-800">-</span><span className="text-gray-300">?</span>
                <span className="text-gray-800">=</span><span className="text-gray-300">?</span>
              </>
            )}
          </div>
        </div>
        <button onClick={handleAction} className={`px-8 sm:px-12 py-3 md:py-4 text-xl md:text-3xl font-bold rounded-full text-white shadow-[0_5px_0_0] md:shadow-[0_8px_0_0] active:translate-y-2 active:shadow-none transition-all duration-150 z-20 ${showAnswer ? 'bg-blue-500 hover:bg-blue-600 shadow-blue-700' : 'bg-orange-500 hover:bg-orange-600 shadow-orange-700'}`}>
          {showAnswer ? '👉 다음 문제' : '👀 정답 확인'}
        </button>
        <p className="mt-1 text-gray-500 font-bold text-[10px] sm:text-xs md:text-sm text-center m-0 hidden sm:block">
          💡 스페이스바나 수식 상자를 눌러도 돼요!
        </p>
      </div>
    </div>
  );
};

// ==========================================
// 4. 섞어나와 짬뽕 나라
// ==========================================
const MixMode = () => {
  const modes = ['add', 'subtract', 'compare'];
  const [currentSubMode, setCurrentSubMode] = useState('');
  const [key, setKey] = useState(0);

  useEffect(() => {
    setCurrentSubMode(modes[Math.floor(Math.random() * modes.length)]);
  }, []);

  const handleNext = () => {
    setCurrentSubMode(prev => {
      let nextMode;
      do {
        nextMode = modes[Math.floor(Math.random() * modes.length)];
      } while (nextMode === prev);
      return nextMode;
    });
    setKey(prev => prev + 1);
  };

  if (!currentSubMode) return null;
  if (currentSubMode === 'add') return <AddMode key={key} onNext={handleNext} isMix={true} />;
  if (currentSubMode === 'subtract') return <SubtractMode key={key} onNext={handleNext} isMix={true} />;
  if (currentSubMode === 'compare') return <CompareMode key={key} onNext={handleNext} isMix={true} />;
  return null;
};

// ==========================================
// 메인 컨트롤러 앱
// ==========================================
export default function App() {
  const [currentMode, setCurrentMode] = useState('add');

  return (
    // touch-manipulation을 적용하여 링크(모바일/패드) 환경에서 터치 먹통 현상 완벽 해결!
    <div className="w-full h-[100dvh] overflow-hidden flex flex-col relative select-none touch-manipulation" onContextMenu={(e) => e.preventDefault()}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pop-in { 0% { transform: scale(0.5); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes bounce-in { 0% { transform: translate(-50%, -50%) scale(0); } 60% { transform: translate(-50%, -50%) scale(1.1); } 100% { transform: translate(-50%, -50%) scale(1); } }
        @keyframes draw-line { 0% { transform: scaleY(0); opacity: 0; } 100% { transform: scaleY(1); opacity: 1; } }
        @keyframes bounce-happy { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-25%); } }
        @keyframes slide-in-right { 0% { transform: translateX(20px); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
        @keyframes slide-in-left { 0% { transform: translateX(-20px); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
        @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes arrow-fly { 0% { stroke-dasharray: 300; stroke-dashoffset: 300; opacity: 0; } 50% { opacity: 1; } 100% { stroke-dasharray: 300; stroke-dashoffset: 0; opacity: 1; } }

        .animate-pop-in { animation: pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; display: inline-block; opacity: 0; }
        .animate-bounce-in { animation: bounce-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .animate-draw-line { animation: draw-line 0.4s ease-out forwards; opacity: 0; }
        .animate-bounce-happy { animation: bounce-happy 0.8s ease-in-out infinite; animation-delay: 0.6s !important; opacity: 1; }
        .animate-slide-in-right { animation: slide-in-right 0.6s cubic-bezier(0.175, 0.885, 0.32, 1) forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.6s cubic-bezier(0.175, 0.885, 0.32, 1) forwards; }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        .animate-arrow-fly { animation: arrow-fly 0.8s ease-out forwards; animation-delay: 0.5s; opacity: 0; }
      `}} />

      {/* 네비게이션 리모컨: 모바일에서는 상단 가로바, PC에서는 우측 하단 */}
      <div className="z-[100] flex flex-row md:flex-col justify-center items-center gap-1 md:gap-2 bg-white/95 md:bg-white/90 md:backdrop-blur-md p-1.5 md:p-3 shadow-sm md:shadow-2xl border-b-2 md:border-4 border-gray-200/80 md:rounded-2xl w-full md:w-auto md:absolute md:bottom-8 md:right-8 shrink-0 overflow-x-auto">
        <button onClick={() => { playSound('click'); setCurrentMode('add'); }} className={`whitespace-nowrap flex-shrink-0 px-2 py-1.5 md:px-4 md:py-3 rounded-lg md:rounded-xl text-[11px] sm:text-xs md:text-sm font-black transition-all flex items-center justify-center gap-1 md:gap-2 ${currentMode === 'add' ? 'bg-blue-500 text-white shadow-md scale-105' : 'text-gray-500 bg-gray-100 hover:bg-gray-200 hover:scale-105'}`}>
          <span className="text-sm md:text-xl pointer-events-none">➕</span> 모두 몇 개
        </button>
        <button onClick={() => { playSound('click'); setCurrentMode('subtract'); }} className={`whitespace-nowrap flex-shrink-0 px-2 py-1.5 md:px-4 md:py-3 rounded-lg md:rounded-xl text-[11px] sm:text-xs md:text-sm font-black transition-all flex items-center justify-center gap-1 md:gap-2 ${currentMode === 'subtract' ? 'bg-pink-500 text-white shadow-md scale-105' : 'text-gray-500 bg-gray-100 hover:bg-gray-200 hover:scale-105'}`}>
          <span className="text-sm md:text-xl pointer-events-none">➖</span> 덜어내기
        </button>
        <button onClick={() => { playSound('click'); setCurrentMode('compare'); }} className={`whitespace-nowrap flex-shrink-0 px-2 py-1.5 md:px-4 md:py-3 rounded-lg md:rounded-xl text-[11px] sm:text-xs md:text-sm font-black transition-all flex items-center justify-center gap-1 md:gap-2 ${currentMode === 'compare' ? 'bg-orange-500 text-white shadow-md scale-105' : 'text-gray-500 bg-gray-100 hover:bg-gray-200 hover:scale-105'}`}>
          <span className="text-sm md:text-xl pointer-events-none">⚖️</span> 비교하기
        </button>
        <button onClick={() => { playSound('click'); setCurrentMode('mix'); }} className={`whitespace-nowrap flex-shrink-0 px-2 py-1.5 md:px-4 md:py-3 rounded-lg md:rounded-xl text-[11px] sm:text-xs md:text-sm font-black transition-all flex items-center justify-center gap-1 md:gap-2 ${currentMode === 'mix' ? 'bg-purple-600 text-white shadow-md scale-105' : 'text-gray-500 bg-gray-100 hover:bg-gray-200 hover:scale-105'}`}>
          <span className="text-sm md:text-xl pointer-events-none">🔀</span> 섞어나와
        </button>
      </div>

      <div className="flex-1 w-full relative min-h-0 overflow-hidden">
        {currentMode === 'add' && <AddMode />}
        {currentMode === 'subtract' && <SubtractMode />}
        {currentMode === 'compare' && <CompareMode />}
        {currentMode === 'mix' && <MixMode />}
      </div>
    </div>
  );
}