import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: 'normal' | 'bold' | 'lighter' | 'bolder';
  letterSpacing?: number;
}

export const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  fontSize = 32,
  fontFamily = 'Arial, sans-serif',
  fontWeight = 'bold',
  letterSpacing = 0,
}) => {
  const textLength = text.length;
  const charWidth = fontSize * 0.6;
  const totalWidth = textLength * charWidth + (textLength - 1) * letterSpacing + 40;
  const totalHeight = fontSize + 20;

  return (
    <svg
      width={totalWidth}
      height={totalHeight}
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x={20}
        y={fontSize + 5}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
        fill="currentColor"
        dominantBaseline="middle"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
