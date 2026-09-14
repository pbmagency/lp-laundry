import type { ReactNode } from 'react';
import { TrackedCTA } from '@/components/tracking/TrackedCTA';

const heroBgMask =
    'linear-gradient(90deg,transparent 0px,rgba(0,0,0,0.18) clamp(0px,18vw - 108px,190px),rgba(0,0,0,0.62) clamp(0px,34vw - 204px,360px),#000 clamp(0px,50vw - 300px,520px)),linear-gradient(0deg,transparent 0%,rgba(0,0,0,0.5) 10%,#000 26%)';
const portraitMask =
    'linear-gradient(0deg,transparent 0%,rgba(0,0,0,0.65) 5%,#000 14%)';
const iconPlayBox = (
    <>
        <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
        <path d="M15.5 10.5 21.5 7.5v9l-6-3z" />
    </>
);

function Svg({
    size,
    sw = 1.75,
    children,
}: {
    size: number;
    sw?: number;
    children: ReactNode;
}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {children}
        </svg>
    );
}

export function HeroSection({
    ctaClassName,
    webinarSchedule,
}: {
    ctaClassName: string;
    webinarSchedule: string;
}) {
    return (
        <section id="hero" className="relative overflow-hidden bg-[#FDEBEA]">
            <div className="flex flex-wrap items-stretch">
                <div className="relative z-[3] ml-auto w-full max-w-[680px] min-w-0 flex-[1_1_420px] px-[clamp(14px,4.2vw,18px)] pt-[clamp(28px,4vw,44px)] pb-[clamp(56px,7vw,88px)] max-[390px]:px-[14px] md:px-[clamp(18px,3vw,28px)]">
                    <div className="inline-flex items-center gap-[9px] rounded-full border border-[#F3C9C7] bg-white px-[16px] py-[8px]">
                        <span className="block h-[8px] w-[8px] flex-none rounded-full bg-[#C62C36]" />
                        <span className="text-[11px] font-bold tracking-[0.08em] text-[#8A1015]">
                            LIVE WEBINAR VIA ZOOM
                        </span>
                    </div>
                    <h1 className="mt-[18px] text-[clamp(22px,6.75vw,29px)] leading-[1.15] font-extrabold tracking-[-0.02em] text-balance text-[#16181A] max-[390px]:text-[clamp(22px,6.65vw,26px)] md:text-[clamp(29px,4.4vw,44px)]">
                        <span className="max-md:block max-md:whitespace-nowrap">
                            Bangun Usaha Laundry untuk
                        </span>
                        <span className="block text-[#C62C36] max-md:whitespace-nowrap">
                            Penghasilan di Masa Pensiun.
                        </span>
                    </h1>
                    <p className="mt-[16px] max-w-[520px] text-[clamp(14px,1.3vw,15.5px)] leading-[1.65] text-[#4E5357]">
                        Strategi lengkap dari lokasi, mesin, SOP, marketing,
                        keuangan hingga SDM — dibimbing praktisi yang mengelola
                        9 cabang laundry.
                    </p>
                    <p className="mt-[12px] max-w-[520px] text-[13px] font-bold text-[#8A1015]">
                        {webinarSchedule}
                    </p>

                    <div className="mt-[20px] grid grid-cols-2 gap-x-[clamp(12px,5.1vw,22px)] gap-y-[12px] md:flex md:flex-wrap md:gap-x-[22px]">
                        {[
                            {
                                icon: (
                                    <>
                                        <circle cx="12" cy="12" r="9" />
                                        <path d="M8.5 14.3c.9 1.2 2.1 1.8 3.5 1.8s2.6-.6 3.5-1.8" />
                                        <path d="M9 9.5h.01M15 9.5h.01" />
                                    </>
                                ),
                                label: 'Ramah untuk pemula',
                            },
                            {
                                icon: iconPlayBox,
                                label: 'Sesi live via Zoom',
                            },
                            {
                                icon: (
                                    <>
                                        <rect
                                            x="3"
                                            y="9"
                                            width="18"
                                            height="12"
                                            rx="2"
                                        />
                                        <path d="M3 13.5h18M12 9v12" />
                                        <path d="M12 9C10 9 7.6 8.6 7.6 6.4A2.2 2.2 0 0 1 12 6.2a2.2 2.2 0 0 1 4.4.2C16.4 8.6 14 9 12 9Z" />
                                    </>
                                ),
                                label: 'Bonus SOP siap pakai',
                            },
                        ].map((b) => (
                            <div
                                key={b.label}
                                className="flex items-center gap-[10px]"
                            >
                                <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full border border-[#F3C9C7] bg-white text-[#8A1015]">
                                    <Svg size={17}>{b.icon}</Svg>
                                </span>
                                <span className="text-[12.5px] font-semibold text-[#2B3034]">
                                    {b.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    <TrackedCTA
                        href="#daftar"
                        zone="hero"
                        action="form_anchor"
                        label="Amankan Kursi Saya"
                        className={`${ctaClassName} mt-[22px] max-w-[440px] rounded-[14px] px-[26px] py-[18px] text-[clamp(15px,1.5vw,17px)] shadow-[0_14px_30px_rgba(23,66,122,0.24)]`}
                    >
                        Amankan Kursi Saya{' '}
                        <span className="font-medium">→</span>
                    </TrackedCTA>
                    <div className="mt-[12px] flex max-w-[440px] items-center justify-center gap-[8px]">
                        <span className="flex-none leading-[0] text-[#1E9E5A]">
                            <Svg size={15} sw={2}>
                                <path d="M4.5 12.5l4.5 4.5L19.5 6.5" />
                            </Svg>
                        </span>
                        <span className="text-[12px] text-[#7A7F83]">
                            Kursi terbatas · 500+ peserta sudah bergabung
                        </span>
                    </div>
                </div>

                <div className="relative min-h-[clamp(200px,32vw,540px)] min-w-0 flex-[1_1_340px] max-lg:min-h-[clamp(230px,46vw,440px)]">
                    <img
                        src="/assets/img_p0_2.webp"
                        alt="Tumpukan pakaian bersih di laundry"
                        width={960}
                        height={1280}
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
                        style={{
                            WebkitMaskImage: heroBgMask,
                            maskImage: heroBgMask,
                            WebkitMaskComposite: 'source-in',
                            maskComposite: 'intersect',
                        }}
                    />
                    <div
                        className="pointer-events-none absolute right-[clamp(-10px,3.5vw,70px)] bottom-[clamp(-60px,-4vw,-20px)] aspect-square w-[clamp(480px,48vw,520px)] rounded-full max-lg:right-1/2 max-lg:bottom-[-34px] max-lg:w-[clamp(290px,56vw,520px)] max-lg:translate-x-1/2"
                        style={{
                            background:
                                'radial-gradient(closest-side,rgba(255,255,255,0.82),rgba(255,255,255,0))',
                        }}
                    />
                    <div className="pointer-events-none absolute right-[clamp(26px,7vw,130px)] bottom-[clamp(-46px,-3vw,-14px)] aspect-square w-[clamp(230px,31vw,400px)] rounded-full border border-[#C62C3638] max-lg:hidden" />
                    <img
                        src="/assets/img_p0_28.webp"
                        alt="Muhamad Afin, praktisi laundry"
                        width={377}
                        height={488}
                        loading="eager"
                        decoding="async"
                        className="hero-portrait-image absolute right-[clamp(16px,5vw,96px)] bottom-0 h-auto max-h-[96%] w-[clamp(400px,40vw,430px)] object-contain object-bottom drop-shadow-[0_22px_38px_rgba(92,20,22,0.26)] max-lg:right-1/2 max-lg:max-h-full max-lg:w-[clamp(230px,46vw,430px)] max-lg:translate-x-1/2"
                        style={{
                            WebkitMaskImage: portraitMask,
                            maskImage: portraitMask,
                        }}
                    />
                    <div className="absolute bottom-[clamp(10px,2vw,26px)] left-[clamp(8px,2vw,24px)] flex max-w-[calc(100%-32px)] items-center gap-[9px] rounded-full border border-[#F3C9C7] bg-white/[0.94] px-[12px] py-[7px] max-lg:bottom-[6px] max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:whitespace-nowrap">
                        <span className="flex-none text-[19px] leading-none font-extrabold text-[#8A1015]">
                            9
                        </span>
                        <span className="text-[11.5px] leading-[1.3] font-bold text-[#16181A]">
                            Muhamad Afin
                            <br />
                            <span className="font-medium text-[#8A6668]">
                                Pengelola 9 cabang laundry
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div
                className="pointer-events-none absolute right-0 bottom-0 left-0 h-[180px] max-md:hidden"
                style={{
                    background:
                        'linear-gradient(0deg,#FDEBEA 30%,rgba(253,235,234,0) 100%)',
                }}
            />
            <div className="absolute right-[-8%] -bottom-[90px] left-[-8%] h-[180px] rounded-[50%] bg-white max-md:hidden" />
        </section>
    );
}
