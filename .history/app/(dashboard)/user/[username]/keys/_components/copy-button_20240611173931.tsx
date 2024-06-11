import { Button } from "@/components/ui/button";

interface CopyButtonProps {
  value: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ value }) => {
  return <Button variant={"ghost"}>Copy Button</Button>;
};
