import { memo } from "react";
import { formatDistance } from "date-fns";
import { CardContentInfoProps } from "../types";

function CardContentInfo({ username, date }: CardContentInfoProps) {
  const time = formatDistance(date, new Date(), { addSuffix: true });

  return (
    <div className="flex items-center justify-between">
      <p className="font-bold text-lg leading-[21px] text-[#777777]">
        {username}
      </p>
      <p className="font-normal text-lg leading-[21px] text-[#777777]">
        {time}
      </p>
    </div>
  );
}

export default memo(CardContentInfo);
