"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["customer", "vendor", "admin"]),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await signIn("credentials", {
      ...data,
      callbackUrl: `/${data.role}/dashboard`,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-80">
        <h1 className="text-2xl font-bold">Login</h1>
        <div>
          <Label>Email</Label>
          <Input {...register("email")} type="email" />
        </div>
        <div>
          <Label>Password</Label>
          <Input {...register("password")} type="password" />
        </div>
        <div>
          <Label>Role</Label>
          <select {...register("role")} className="w-full p-2 border rounded">
            <option value="customer">Customer</option>
            <option value="vendor">Vendor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </div>
  );
}