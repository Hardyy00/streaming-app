import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({ subsets: ["latin"], weight: ["200"] });

const Logo: React.FC = () => {
  return <Image />;
};

export default Logo;
