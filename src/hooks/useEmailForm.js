import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { emailSchema } from "@/lib/schemas/emailSchema";

export function useEmailForm() {
  return useForm({
    resolver: zodResolver(emailSchema),
  });
}
