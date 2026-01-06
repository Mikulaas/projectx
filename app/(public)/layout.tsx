import { PropsWithChildren } from "react";

export default function PublicLayout(props: PropsWithChildren) {
  return (
    <main className="h-screen w-screen grid place-content-center">
      {props.children}
    </main>
  );
}
