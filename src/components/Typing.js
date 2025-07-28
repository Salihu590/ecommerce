import { useEffect, useState } from 'react';

const Typing = ({ text = 'All', speed = 150 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className="text-green-600">{displayText}</span>;
};

export default Typing;