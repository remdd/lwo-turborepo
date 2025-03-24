import Image from "next/image";

export function Header() {
  return (
    <div className="">
      <Image src="/img/logo.png" alt="Logo" width={500} height={100} priority />
    </div>
  );
}
