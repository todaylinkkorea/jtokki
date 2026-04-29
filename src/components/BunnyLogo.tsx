/* eslint-disable @next/next/no-img-element */
export function BunnyLogo({ size = 40 }: { size?: number }) {
  return (
    <img
      src="/logo.png"
      alt="짭토끼 로고"
      width={size}
      height={size}
      style={{ objectFit: 'contain' }}
    />
  );
}
