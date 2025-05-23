import { IIcon } from "@/ui/Icon";
import Svg, { Path } from "react-native-svg";

const PersonalCard: React.FC<IIcon> = ({
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
      d="M17 21H7C3 21 2 20 2 16V8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21Z"
      stroke={currentColor || "white"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 8H19"
      stroke={currentColor || "white"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 12H19"
      stroke={currentColor || "white"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17 16H19"
      stroke={currentColor || "white"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.49994 11.29C9.49958 11.29 10.3099 10.4796 10.3099 9.47998C10.3099 8.48035 9.49958 7.66998 8.49994 7.66998C7.50031 7.66998 6.68994 8.48035 6.68994 9.47998C6.68994 10.4796 7.50031 11.29 8.49994 11.29Z"
      stroke={currentColor || "white"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 16.33C11.86 14.88 10.71 13.74 9.26 13.61C8.76 13.56 8.25 13.56 7.74 13.61C6.29 13.75 5.14 14.88 5 16.33"
      stroke={currentColor || "white"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    </Svg>
  );
};

export { PersonalCard };
