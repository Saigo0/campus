"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src={"/images/logoDarkTheme.png"}
        alt="Logo"
        width={120}
        height={120}
        className="w-auto h-auto dark:block hidden"
      />
      <Image
        src={"/images/logo.png"}
        alt="Logo"
        width={120}
        height={120}
        className="w-auto h-auto block dark:hidden"
      />
    </>
  );
}
