import Image from 'next/image';

export function BunnyLogo({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="짭토끼 로고"
      width={size}
      height={size}
      priority
      style={{ objectFit: 'contain' }}
    />
  );
}
