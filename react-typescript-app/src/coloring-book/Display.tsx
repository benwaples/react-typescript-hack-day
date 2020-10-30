import React from 'react';

type DisplayProps = {
  svg: string
  onDraw: (event: React.MouseEvent<HTMLOutputElement>) => void
}

const Display: React.FunctionComponent<DisplayProps> = ({ svg, onDraw }) => (
  <output
    dangerouslySetInnerHTML={{ __html: svg }}
    onClick={onDraw}
  ></output>
);

export default Display;
