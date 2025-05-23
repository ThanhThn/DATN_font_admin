import React from "react";
import { IIcon } from "../../Icon";
import Svg, { Path } from "react-native-svg";

const TagLine: React.FC<IIcon> = ({
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
      <Path
        d="M4.40476 15.5264L8.93476 20.0564C10.7948 21.9164 13.8148 21.9164 15.6848 20.0564L20.0748 15.6664C21.9348 13.8064 21.9348 10.7864 20.0748 8.91637L15.5348 4.39637C14.5848 3.44637 13.2748 2.93637 11.9348 3.00637L6.93476 3.24637C4.93476 3.33637 3.34476 4.92637 3.24476 6.91637L3.00476 11.9164C2.94476 13.2664 3.45476 14.5764 4.40476 15.5264Z"
        stroke={currentColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.73486 12.2264C11.1156 12.2264 12.2349 11.1071 12.2349 9.72638C12.2349 8.34567 11.1156 7.22638 9.73486 7.22638C8.35415 7.22638 7.23486 8.34567 7.23486 9.72638C7.23486 11.1071 8.35415 12.2264 9.73486 12.2264Z"
        stroke={currentColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <Path
        d="M13.2349 17.2264L17.2349 13.2264"
        stroke={currentColor}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export { TagLine };
