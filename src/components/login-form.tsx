'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PasswordInput } from "@/components/password-input"
import { useState } from "react"
import Link from "next/link"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
const [currentPassword, setCurrentPassword] = useState("")
const [password, setPassword] = useState("")
const [passwordConfirmation, setPasswordConfirmation] = useState("")

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Masuk ke Akun Anda</h1>
        <p className="text-muted-foreground text-sm">
          Masukkan email Anda di bawah ini untuk masuk ke akun Anda
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>          
          <Input id="email" type="email" placeholder="emailkamu@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">
              Kata Sandi<span className="text-red-500">*</span>
              </Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          	{/* <div>
				<Label htmlFor="current_password">Current Password</Label>
				<PasswordInput
					id="current_password"
					value={currentPassword}
					onChange={(e) => setCurrentPassword(e.target.value)}
					autoComplete="current-password"
				/>
			</div> */}
            <PasswordInput
                id="current_password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                autoComplete="current-password"
                placeholder="Masukkan Kata Sandi Anda"
            />
          {/* <Input id="password" type="password" required /> */}
        </div>
        <Button variant="bluetpka" type="submit" className="w-full">
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Belum punya akun? Silahkan{" "}
        <a href="/register" className="underline underline-offset-4">
          Daftar
        </a>
      </div>
    </form>
  )
}
