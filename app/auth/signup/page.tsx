import { SignupForm } from "@/components/signup-form"
import { redirect } from "next/navigation"


export default async function SignupPage() {
  // const session = await getSession()
  // if (session?.user) {
  //   redirect('/')
  // }
  return (

    <div className="w-full max-w-sm md:max-w-4xl">
      <SignupForm />
    </div>

  )
}
