import { IIcon } from "@/ui/Icon";
import Svg, { Path } from "react-native-svg";

const Broom: React.FC<IIcon> = ({
  className,
  currentColor,
  strokeWidth = 1.5,
}) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <Path d="M9.87 5.66998L6.45 7.74999L4.89001 5.19C4.32001 4.25 4.62 3.01 5.56 2.44C6.5 1.87 7.74 2.16998 8.31 3.10998L9.87 5.66998Z" stroke={currentColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M11.82 9.15997L8.66001 11.08C6.82001 12.2 6.26 14.46 7.15 16.26L9.2 20.44C9.86 21.79 11.46 22.26 12.74 21.47L19.17 17.56C20.46 16.78 20.77 15.15 19.88 13.94L17.11 10.2C15.91 8.58001 13.66 8.03997 11.82 9.15997Z" stroke={currentColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M10.7566 5.09797L5.63205 8.21857L7.71245 11.635L12.837 8.51437L10.7566 5.09797Z" stroke={currentColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M14.31 16.81L15.96 19.52" stroke={currentColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M11.75 18.37L13.4 21.08" stroke={currentColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M16.87 15.25L18.52 17.96" stroke={currentColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export { Broom };
