import React from "react";
import { IIcon } from "../../Icon";
import Svg, { Path } from "react-native-svg";

const Compass: React.FC<IIcon> = ({ className, currentColor }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <Path
        d="M21 12H18.5M21 12C21 14.4853 19.9926 16.7353 18.364 18.364C16.7353 19.9926 14.4853 21 12 21M21 12C21 9.51472 19.9926 7.26472 18.364 5.63604C16.7353 4.00736 14.4853 3 12 3M12 21V19M12 21C9.51472 21 7.26472 19.9926 5.63604 18.364C4.00736 16.7353 3 14.4853 3 12M3 12H5.5M3 12C3 9.51472 4.00736 7.26472 5.63604 5.63604C7.26472 4.00736 9.51472 3 12 3M12 3V5.5M9 15L12 9L15 15L12 14L9 15Z"
        stroke={currentColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export { Compass };
