import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function RegisterSuccess() {
  return (
    <div className="flex min-h-screen items-center justify-center">
    <Card className="w-full max-w-sm flex items-center jusx tify-center">
      <img
        src="/logo/logo.png"
        alt="Image"
        className="w-8 flex items-center"
      />
      <CardHeader className="w-full text-center">
        <CardTitle className="text-xl">Pendaftaran Berhasil</CardTitle>
        <CardDescription>
          Silakan cek email Anda dan klik tautan konfirmasi yang telah 
          dikirimkan untuk mengaktifkan akun dan melanjutkan proses pendaftaran
        tes.
        </CardDescription>
      </CardHeader>
      </Card>

    </div>
  )
}