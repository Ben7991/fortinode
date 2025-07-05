import Image from 'next/image';

export default function AppLogo() {
  return (
    <div className="flex items-center gap-1">
      <Image
        src="/logo.png"
        alt="Fortinode Technologies"
        width={48}
        height={48}
      />
      <p className="flex flex-col uppercase">
        <strong className="text-2xl text-[var(--dark-blue-100)]">
          Cybersive
        </strong>
        <small className="text-[var(--gray-500)] text-xl">Solutions</small>
      </p>
    </div>
  );
}
