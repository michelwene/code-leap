import { memo } from "react";
import { CardContentDescriptionProps } from "../types";

function CardContentDescription({ content }: CardContentDescriptionProps) {
  return (
    <p className="font-normal text-lg leading-[21px] text-black mt-4 break-all">
      {content}
    </p>
  );
}

export default memo(CardContentDescription);
