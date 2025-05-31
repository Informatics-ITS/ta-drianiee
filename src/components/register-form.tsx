'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PasswordInput } from "@/components/password-input"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation" // Perhatikan perubahan impor ini

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [currentPassword, setCurrentPassword] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const router = useRouter() // Sekarang menggunakan router yang benar

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== passwordConfirmation) {
      setErrorMessage("Kata Sandi dan Konfirmasi Kata Sandi tidak cocok")
      return
    }

    setErrorMessage("")
    router.push("/register/success") // Langsung redirect tanpa render UI apapun
  }

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Daftar Akun Baru</h1>
        <p className="text-muted-foreground text-sm">
          Silakan daftar untuk dapat mendaftar layanan tes TPKA
        </p>
      </div>
      <div className="grid gap-6">
        {/* Nama Lengkap */}
        <div className="grid gap-3">
          <Label htmlFor="name">
            Nama Lengkap<span className="text-red-500">*</span>
          </Label>
          <Input id="nama" type="text" placeholder="Masukkan Nama Lengkap Anda" required />
        </div>

        {/* Email */}
        <div className="grid gap-3">
          <Label htmlFor="email">
            Email<span className="text-red-500">*</span>
          </Label>
          <Input id="email" type="email" placeholder="emailkamu@example.com" required />
        </div>

        {/* Kata Sandi */}
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">
              Buat Kata Sandi<span className="text-red-500">*</span>
            </Label>
          </div>
          <PasswordInput
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            placeholder="Buat Kata Sandi Anda"
            required
          />
        </div>

        {/* Konfirmasi Kata Sandi */}
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="passwordConfirmation">
              Konfirmasi Kata Sandi<span className="text-red-500">*</span>
            </Label>
          </div>
          <PasswordInput
            id="passwordConfirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="new-password"
            placeholder="Konfirmasi Kata Sandi Anda"
            required
          />
        </div>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}

        {/* Button */}
        <Button variant="bluetpka" type="submit" className="w-full">
          Daftar
        </Button>
      </div>

      <div className="text-center text-sm">
        Sudah punya akun? Silahkan{" "}
        <Link href="/login" className="underline underline-offset-4">
          Masuk
        </Link>
      </div>
    </form>
  )
}