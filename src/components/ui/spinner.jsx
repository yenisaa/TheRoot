import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

function Spinner() {
  return (
    <LoaderCircle color="#C36C00" size="50" className={cn("animate-spin")} />
  );
}

export default Spinner;
