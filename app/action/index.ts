"use server";
import { LoginSchema } from "@/schema/schema-login";
import * as z from "zod";
export const loginAction = async (val: z.infer<typeof LoginSchema>) => {
  const validationForms = LoginSchema.safeParse(val);

  if (!validationForms) return { error: "Invalid Fields" };

  return { success: "Email Sent" };
};
