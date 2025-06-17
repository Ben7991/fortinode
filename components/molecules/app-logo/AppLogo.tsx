import Image from "next/image";

export default function AppLogo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="Fortinode Technologies"
        width={48}
        height={48}
      />
      <p className="flex flex-col">
        <strong className="text-2xl text-[var(--dark-blue-200)]">
          Fortinode
        </strong>
        <span>Technologies</span>
      </p>
    </div>
  );
}
