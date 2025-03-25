import Image from "next/image";

export function Header() {
  return (
    <div className="border-blue flex border-8 p-8">
      <Image src="/img/logo.png" alt="Logo" width={500} height={100} priority />
    </div>
  );
}
