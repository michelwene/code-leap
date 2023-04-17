import { memo } from "react";

interface CardContentDescriptionProps {
  content: string;
}

function CardContentDescription({ content }: CardContentDescriptionProps) {
  return (
    <p className="font-normal text-lg leading-[21px] text-black mt-4">
      {content}
    </p>
  );
}

export default memo(CardContentDescription);
