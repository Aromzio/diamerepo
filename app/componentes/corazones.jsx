import { useState } from 'react';

const HeartButton = () => {
  const [hearts, setHearts] = useState([]);

  const handleClick = () => {
    const newHeart = {
      id: hearts.length,
      left: Math.random() * 100,
    };
    setHearts([...hearts, newHeart]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
    }, 400);
  };

  return (
    <div className=" p-10 flex items-center justify-center">
      <button
        onClick={handleClick}
        className="bg-pink-300 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
      >
        Feliz Aniversario!!!
      </button>

      <div className="absolute inset-0 pointer-events-none">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute text-pink-500 text-3xl animate-float"
            style={{ left: `${heart.left}%`, top: '90%' }}
          >
            ❤️ Te amo :3
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeartButton;
