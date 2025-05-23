import React from "react";
import { IIcon } from "../../Icon";
import Svg, { Path } from "react-native-svg";

const FilterSearch: React.FC<IIcon> = ({
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
        d="M14.32 19.07C14.32 19.68 13.92 20.48 13.41 20.79L12 21.7C10.69 22.51 8.87 21.6 8.87 19.98V14.63C8.87 13.92 8.47 13.01 8.06 12.51L4.22 8.47C3.71 7.96 3.31 7.06 3.31 6.45V4.13C3.31 2.92 4.22 2.01 5.33 2.01H18.67C19.78 2.01 20.69 2.92 20.69 4.03V6.25C20.69 7.06 20.18 8.07 19.68 8.57"
        stroke={currentColor}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.07 16.52C17.8373 16.52 19.27 15.0873 19.27 13.32C19.27 11.5527 17.8373 10.12 16.07 10.12C14.3027 10.12 12.87 11.5527 12.87 13.32C12.87 15.0873 14.3027 16.52 16.07 16.52Z"
        stroke={currentColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.87 17.12L18.87 16.12"
        stroke={currentColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export { FilterSearch };
