import { IIcon } from "../../Icon";
import Svg, { Path } from "react-native-svg";

const FormatSquare: React.FC<IIcon> = ({
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
        d="M20 6.95V17.05C19.84 17.02 19.67 17 19.5 17C18.12 17 17 18.12 17 19.5C17 19.67 17.02 19.84 17.05 20H6.95C6.98 19.84 7 19.67 7 19.5C7 18.12 5.88 17 4.5 17C4.33 17 4.16 17.02 4 17.05V6.95C4.16 6.98 4.33 7 4.5 7C5.88 7 7 5.88 7 4.5C7 4.33 6.98 4.16 6.95 4H17.05C17.02 4.16 17 4.33 17 4.5C17 5.88 18.12 7 19.5 7C19.67 7 19.84 6.98 20 6.95Z"
        stroke={currentColor || "white"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 4.5C7 5.88 5.88 7 4.5 7C4.33 7 4.16 6.98 4 6.95C2.86 6.72 2 5.71 2 4.5C2 3.12 3.12 2 4.5 2C5.71 2 6.72 2.86 6.95 4C6.98 4.16 7 4.33 7 4.5Z"
        stroke={currentColor || "white"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 4.5C22 5.71 21.14 6.72 20 6.95C19.84 6.98 19.67 7 19.5 7C18.12 7 17 5.88 17 4.5C17 4.33 17.02 4.16 17.05 4C17.28 2.86 18.29 2 19.5 2C20.88 2 22 3.12 22 4.5Z"
        stroke={currentColor || "white"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 19.5C7 19.67 6.98 19.84 6.95 20C6.72 21.14 5.71 22 4.5 22C3.12 22 2 20.88 2 19.5C2 18.29 2.86 17.28 4 17.05C4.16 17.02 4.33 17 4.5 17C5.88 17 7 18.12 7 19.5Z"
        stroke={currentColor || "white"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 19.5C22 20.88 20.88 22 19.5 22C18.29 22 17.28 21.14 17.05 20C17.02 19.84 17 19.67 17 19.5C17 18.12 18.12 17 19.5 17C19.67 17 19.84 17.02 20 17.05C21.14 17.28 22 18.29 22 19.5Z"
        stroke={currentColor || "white"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export { FormatSquare };
