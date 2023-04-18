export interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  bgColor?: string;
  onClick?: () => void;
  textColor?: string;
  border?: string;
  isLoading?: boolean;
}
