import React, { useState, useEffect } from 'react';

type ColoringBook = {
  svg: string
  svgUrl: string
  color: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleDraw: (event: React.MouseEvent<HTMLOutputElement>) => void
}

export const useColoringBook = (): ColoringBook => {
  const [svg, setSvg] = useState('');
  const [svgUrl, setSvgUrl] = useState('');
  const [color, setColor] = useState('#000000');

  useEffect(() => {
    fetch(svgUrl)
      .then(res => res.text())
      .then(text => setSvg(text));
  }, [svgUrl]);

  const handleChange = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
    if(currentTarget.name === 'svgUrl') setSvgUrl(currentTarget.value);
    if(currentTarget.name === 'color') setColor(currentTarget.value);
  };

  const handleDraw = ({ target }: React.MouseEvent<HTMLOutputElement>) => {
    (target as SVGPathElement).setAttribute('fill', color);
  };

  return {
    svg,
    svgUrl,
    color,
    handleChange,
    handleDraw
  };
}
