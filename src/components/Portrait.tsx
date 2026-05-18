export function Portrait() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[320px]"
      aria-hidden
    >
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sf-blue-light via-white to-sf-cloud shadow-[0_24px_48px_-12px_rgba(1,118,211,0.18)]" />
      <svg
        viewBox="0 0 320 320"
        className="relative h-full w-full rounded-[2rem] p-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="160" cy="118" r="52" fill="#0176D3" fillOpacity="0.12" />
        <circle cx="160" cy="108" r="38" stroke="#0176D3" strokeWidth="2" />
        <path
          d="M88 248c12-44 48-68 72-68s60 24 72 68"
          stroke="#032D60"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M200 72c24-8 48 4 56 28"
          stroke="#06A59A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M64 96c-16 20-12 52 8 68"
          stroke="#1B96FF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <ellipse
          cx="248"
          cy="200"
          rx="36"
          ry="22"
          fill="#E8F4FD"
          stroke="#0176D3"
          strokeWidth="1.5"
        />
        <path
          d="M232 200h32M248 188v24"
          stroke="#0176D3"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-border bg-white px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-sf-blue shadow-sm">
        Trailblazer
      </div>
    </div>
  );
}
