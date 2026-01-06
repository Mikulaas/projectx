import { signInWithGithub } from "@/app/auth/callback/sign-in-github";

export default function SignIn() {
  return (
    <>
      <button onClick={signInWithGithub} className="cursor-pointer">
        lets try github
      </button>
    </>
  );
}
