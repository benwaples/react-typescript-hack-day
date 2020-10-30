import React from 'react';

type ControlsProps = {
  color: string
  svgUrl: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Controls: React.FunctionComponent<ControlsProps> = ({ color, svgUrl, onChange }) => (
  <>
    <input name="color" type="color" value={color} onChange={onChange} />
    <input name="svgUrl" type="text" value={svgUrl} onChange={onChange} />
  </>
);

export default Controls;
