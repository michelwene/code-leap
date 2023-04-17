interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <div className="bg-[#7695EC] py-[27px] px-[37px]">
      <h1 className="font-bold text-[22px] leading-[26px] text-white">
        {title}
      </h1>
    </div>
  );
}
