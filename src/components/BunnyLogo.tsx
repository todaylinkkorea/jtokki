import Image from 'next/image';

export function BunnyLogo({ size = 40 }: { size?: number }) {
  return (
    <Image
      // UI 표시용 경량 로고(88×96) — 원본 logo.png(480×520)는 OG/JSON-LD 전용
      src="/logo-icon.png"
      alt="짭토끼 로고"
      width={size}
      height={size}
      priority
      style={{ objectFit: 'contain' }}
    />
  );
}
