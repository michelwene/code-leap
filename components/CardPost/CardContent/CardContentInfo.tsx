interface CardContentInfoProps {
  username: string;
  date: Date;
}

export function CardContentInfo({ username, date }: CardContentInfoProps) {
  return (
    <div className="flex items-center justify-between">
      <p className="font-bold text-lg leading-[21px] text-[#777777]">
        {username}
      </p>
    </div>
  );
}
