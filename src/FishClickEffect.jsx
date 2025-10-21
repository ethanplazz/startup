import React from 'react';

export default function FishClickEffect() {
  const [fishes, setFishes] = React.useState([]);
  
  const fishEmojis = ['🐟', '🐠', '🐡', '🦈', '🐋', '🦐'];
  const swimPatterns = ['swimAway', 'swimUp', 'swimCircle', 'swimZigzag'];

  React.useEffect(() => {
    const handleClick = (e) => {
      const fishCount = Math.floor(Math.random() * 3) + 3;
      const newFishes = [];
      for (let i = 0; i < fishCount; i++) {
        newFishes.push({
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          angle: Math.random() * 360,
          emoji: fishEmojis[Math.floor(Math.random() * fishEmojis.length)],
          pattern: swimPatterns[Math.floor(Math.random() * swimPatterns.length)],
          delay: i * 0.1
        });
      }
      
      setFishes(prev => [...prev, ...newFishes]);
      setTimeout(() => {
        setFishes(prev => prev.filter(f => !newFishes.find(nf => nf.id === f.id)));
      }, 1500);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {fishes.map(fish => (
        <div
          key={fish.id}
          style={{
            position: 'fixed',
            left: fish.x,
            top: fish.y,
            pointerEvents: 'none',
            zIndex: 9999,
            animation: `${fish.pattern} 1.5s ease-out forwards`,
            animationDelay: `${fish.delay}s`,
            transform: `rotate(${fish.angle}deg)`,
            fontSize: '24px'
          }}
        >
          {fish.emoji}
        </div>
      ))}
      <style>{`
        @keyframes swimAway {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(120px, -60px) scale(0);
            opacity: 0;
          }
        }
        
        @keyframes swimUp {
          0% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(0, -150px) scale(0) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes swimCircle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(80px, -80px) scale(0.8) rotate(180deg);
          }
          100% {
            transform: translate(0, -150px) scale(0) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes swimZigzag {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          25% {
            transform: translate(40px, -30px) scale(0.9);
          }
          50% {
            transform: translate(-20px, -60px) scale(0.7);
          }
          75% {
            transform: translate(60px, -90px) scale(0.5);
          }
          100% {
            transform: translate(0, -120px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}