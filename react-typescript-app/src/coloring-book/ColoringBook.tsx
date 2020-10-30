import React from 'react';
import { useColoringBook } from '../hooks/coloringBooks';
import Controls from './Controls';
import Display from './Display';

type ColorBookingProps = {};

const ColoringBook: React.FunctionComponent<ColorBookingProps> = () => {
  const {
    svg,
    svgUrl,
    color,
    handleChange,
    handleDraw
  } = useColoringBook()

  return (
    <>
      <Controls svgUrl={svgUrl} color={color} onChange={handleChange} />
      <Display svg={svg} onDraw={handleDraw} />
    </>
  )
}

// const ColoringBook: React.FunctionComponent<ColorBookingProps> = () => {
//   const [svg, setSvg] = useState('');
//   const [svgUrl, setSvgUrl] = useState('');
//   const [color, setColor] = useState('#000000');

//   useEffect(() => {
//     fetch(svgUrl)
//       .then(res => res.text())
//       .then(text => setSvg(text));
//   }, [svgUrl])

//   const handleChange = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
//     if(currentTarget.name === 'svgUrl') setSvgUrl(currentTarget.value);
//     if(currentTarget.name === 'color') setColor(currentTarget.value);
//   };

//   const handleDraw = ({ target }: React.MouseEvent<HTMLOutputElement>) => {
//     (target as SVGPathElement).setAttribute('fill', color);
//   }

//   return (
//     <>
//       <Controls svgUrl={svgUrl} color={color} onChange={handleChange} />
//       <Display svg={svg} onDraw={handleDraw} />
//     </>
//   )
// }

export default ColoringBook;

// type ColoringBookProps = {};

// type ColoringBookState = {
//   svg: string
//   svgUrl: string
//   color: string
// }

// export default class ColoringBook extends Component<ColoringBookProps, ColoringBookState> {
//   state = {
//     svg: '',
//     svgUrl: '',
//     color: ''
//   }

//   handleChange = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
//     if(currentTarget.name === 'svgUrl') this.setState({ svgUrl: currentTarget.value });
//     if(currentTarget.name === 'color') this.setState({ color: currentTarget.value });
//   }

//   handleDraw = ({ target }: React.MouseEvent<HTMLOutputElement>) => {
//     (target as SVGPathElement).setAttribute('fill', this.state.color);
//   }

//   componentDidUpdate(prevProps: ColoringBookProps, prevState: ColoringBookState) {
//     if(prevState.svgUrl !== this.state.svgUrl) {
//       fetch(this.state.svgUrl)
//         .then(res => res.text())
//         .then(text => this.setState({ svg: text }));
//     }
//   }

//   render() {
//     const { svg, svgUrl, color } = this.state;

//     return (
//       <>
//         <Controls svgUrl={svgUrl} color={color} onChange={this.handleChange} />
//         <Display svg={svg} onDraw={this.handleDraw} />
//       </>
//     )
//   }
// }
