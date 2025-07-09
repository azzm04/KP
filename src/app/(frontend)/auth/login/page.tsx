import LoginForm from "@/components/LoginForm";
import { authorizeUser } from "@/lib/actions/authorize-user";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const user = await authorizeUser();
  if (user) {
    redirect("/");
  } else {
    return <LoginForm />;
  }
}
