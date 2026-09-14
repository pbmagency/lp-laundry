import { Head } from '@inertiajs/react';
import { useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { FaqSection } from '@/components/landing/faq-section';
import { HeroSection } from '@/components/landing/hero-section';
import { RegistrationSection } from '@/components/landing/registration-section';
import { WhatsappWidget } from '@/components/landing/whatsapp-widget';
import { TrackedCTA } from '@/components/tracking/TrackedCTA';

interface ProjectProps {
    whatsappUrl: string | null;
    paymentMode: 'none' | 'external' | 'internal';
    productName: string;
    productPrice: number;
    productOriginalPrice: number;
    promoEndsAt: string | null;
    webinarStartsAt: string | null;
}

type Icon = ReactNode;

const iconPin: Icon = (
    <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </>
);
const iconWasher: Icon = (
    <>
        <rect x="4" y="2.5" width="16" height="19" rx="2.5" />
        <circle cx="12" cy="14" r="4.5" />
        <path d="M16.6 6.5h.01" />
    </>
);
const iconClipboard: Icon = (
    <>
        <rect x="4.5" y="4" width="15" height="17" rx="2.5" />
        <path d="M9 4V3.2A1.2 1.2 0 0 1 10.2 2h3.6A1.2 1.2 0 0 1 15 3.2V4" />
        <path d="M9.2 12.8l2 2 3.8-4" />
    </>
);
const iconMega: Icon = (
    <>
        <path d="M4 9.5h3l7-4.5v14L7 14.5H4A1.5 1.5 0 0 1 2.5 13v-2A1.5 1.5 0 0 1 4 9.5Z" />
        <path d="M7 14.5v4a1.5 1.5 0 0 0 3 0v-2.1" />
        <path d="M17.5 9.2a3.6 3.6 0 0 1 0 5.6" />
    </>
);
const iconUsers: Icon = (
    <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3 20c0-3.2 2.7-5.2 6-5.2s6 2 6 5.2" />
        <path d="M16 5.6a3 3 0 0 1 0 5.5M17.6 14.7c2 .7 3.4 2.4 3.4 5.3" />
    </>
);
const iconCalc: Icon = (
    <>
        <rect x="4.5" y="2.5" width="15" height="19" rx="2.5" />
        <rect x="7.5" y="5.5" width="9" height="3.5" rx="1" />
        <path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01" />
    </>
);
const iconMoney: Icon = (
    <>
        <rect x="2.5" y="6" width="19" height="12" rx="2" />
        <circle cx="12" cy="12" r="2.6" />
        <path d="M6 9.6v4.8M18 9.6v4.8" />
    </>
);
const iconPlayBox: Icon = (
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

const pains: { icon: Icon; title: string; desc: string }[] = [
    {
        icon: iconPin,
        title: 'Tidak tahu mulai dari mana',
        desc: 'Bingung langkah awal apa yang harus dipersiapkan untuk memulai usaha laundry.',
    },
    {
        icon: iconWasher,
        title: 'Bingung memilih mesin & perlengkapan',
        desc: 'Tidak tahu mesin dan perlengkapan apa yang benar-benar dibutuhkan sesuai skala usaha.',
    },
    {
        icon: iconUsers,
        title: 'Takut kalah bersaing',
        desc: 'Ragu bisa bersaing karena sudah banyak usaha laundry lain di daerah yang sama.',
    },
    {
        icon: iconMoney,
        title: 'Takut modal tidak kembali',
        desc: 'Tidak tahu estimasi BEP sehingga khawatir modal yang dikeluarkan tidak kembali.',
    },
];

const modules: { icon: Icon; title: string; desc: string }[] = [
    {
        icon: iconPin,
        title: 'Pilih Lokasi yang Tepat',
        desc: 'Menilai lokasi berdasarkan potensi pasar agar tidak salah memilih tempat usaha.',
    },
    {
        icon: iconWasher,
        title: 'Tentukan Mesin & Perlengkapan',
        desc: 'Pilih mesin sesuai skala usaha agar investasi awal lebih efisien.',
    },
    {
        icon: iconClipboard,
        title: 'Bangun SOP Operasional',
        desc: 'Alur kerja rapi agar kualitas layanan konsisten dan mudah dikelola.',
    },
    {
        icon: iconMega,
        title: 'Datangkan & Pertahankan Pelanggan',
        desc: 'Strategi marketing untuk menarik pelanggan baru dan membuat mereka kembali.',
    },
    {
        icon: iconCalc,
        title: 'Kelola Keuangan Bisnis',
        desc: 'Atur arus kas dan hitung strategi harga agar modal bisa kembali.',
    },
    {
        icon: iconUsers,
        title: 'Bangun Tim yang Bisa Diandalkan',
        desc: 'Cara merekrut, melatih, dan mengelola karyawan dengan SOP yang jelas.',
    },
];

const mentorPoints: { icon: Icon; label: string }[] = [
    { icon: iconPin, label: 'Memilih lokasi yang potensial' },
    { icon: iconWasher, label: 'Menentukan mesin yang tepat' },
    { icon: iconClipboard, label: 'Menyusun SOP operasional' },
    { icon: iconMega, label: 'Strategi marketing' },
    { icon: iconUsers, label: 'Mengelola SDM' },
    { icon: iconCalc, label: 'Mengatur keuangan bisnis' },
];

const testimonials: {
    quote: string;
    person: string;
    video: string;
    videoCaption: string;
    full?: boolean;
}[] = [
    {
        quote: '“Sekarang kami lebih fokus dan tidak takut menghadapi perang harga.”',
        person: '— Wulan, Klinik Reparasi, Pati, Jawa Tengah',
        video: 'https://Laundry.b-cdn.net/Wulan%2C%20Klinik%20Reparasi%2C%20Pati%2C%20Jawa%20Tengah.mp4',
        videoCaption: 'Putar kisah Wulan',
    },
    {
        quote: '“Business Model Canvas sangat menginspirasi untuk mengembangkan usaha laundry.”',
        person: '— Muhammad Kirsyam, Owner A3 Laundry, Pekalongan',
        video: 'https://Laundry.b-cdn.net/Muhammad%20Kirsyam%2C%20Owner%20A3%20Laundry%2C%20Pekalongan.mp4',
        videoCaption: 'Putar kisah Muhammad Kirsyam',
    },
    {
        quote: '“Kami jadi lebih paham pentingnya identitas dan positioning bisnis laundry.”',
        person: '— Bang Bambang, DPD ILI Jawa Tengah',
        video: 'https://Laundry.b-cdn.net/Bang%20Bambang%2C%20DPD%20ILI%20Jawa%20Tengah.mp4',
        videoCaption: 'Putar kisah Bang Bambang',
        full: true,
    },
];

function TestimonialVideo({ src, caption }: { src: string; caption: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hasStarted, setHasStarted] = useState(false);

    const playVideo = () => {
        void videoRef.current?.play();
    };

    return (
        <div className="relative aspect-video overflow-hidden rounded-[6px] bg-[#0B0B0B]">
            <video
                ref={videoRef}
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                onPlay={() => setHasStarted(true)}
                onEnded={() => setHasStarted(false)}
            >
                <source src={src} type="video/mp4" />
                Browser Anda tidak mendukung pemutaran video.
            </video>

            {!hasStarted && (
                <button
                    type="button"
                    onClick={playVideo}
                    aria-label={caption}
                    className="group absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-[10px] bg-black/25 text-white transition-colors hover:bg-black/35 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
                >
                    <span className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#C62C36] shadow-[0_10px_28px_rgba(198,44,54,0.48)] transition-transform group-hover:scale-105">
                        <svg
                            width="20"
                            height="22"
                            viewBox="0 0 20 22"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M19 11 1 21V1l18 10Z"
                                fill="currentColor"
                            />
                        </svg>
                    </span>
                    <span className="rounded-full bg-black/55 px-[12px] py-[5px] text-[12px] font-bold tracking-[0.01em] shadow-sm backdrop-blur-[2px]">
                        {caption}
                    </span>
                </button>
            )}
        </div>
    );
}

const includes: string[] = [
    '6 Modul Strategi Laundry',
    'Live bersama Muhamad Afin',
    'Template SOP Laundry',
    'Video SOP Operasional',
];

const trustBadges: { icon: Icon; label: string }[] = [
    {
        icon: (
            <>
                <rect x="4" y="10.5" width="16" height="10.5" rx="2.5" />
                <path d="M7.8 10.5V7.6a4.2 4.2 0 0 1 8.4 0v2.9" />
            </>
        ),
        label: 'Pembayaran terenkripsi SSL',
    },
    {
        icon: (
            <>
                <path d="M12 21.2s7-3.3 7-9.2V5.8L12 3 5 5.8V12c0 5.9 7 9.2 7 9.2Z" />
                <path d="M9.2 12l2 2 3.6-3.8" />
            </>
        ),
        label: 'Garansi kepuasan sesi 100%',
    },
    {
        icon: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M8.4 12.2l2.4 2.4 4.8-4.8" />
            </>
        ),
        label: 'BNSP tersertifikasi Binatu',
    },
    { icon: iconUsers, label: '500+ peserta telah bergabung' },
];

function formatWebinarSchedule(value: string | null): string {
    if (!value) {
        return 'Jadwal webinar dikirim melalui WhatsApp';
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return 'Jadwal webinar dikirim melalui WhatsApp';
    }

    return `${new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Jakarta',
    }).format(date)} WIB`;
}

export default function LaundryMasteryPage({
    whatsappUrl,
    paymentMode,
    productName,
    productPrice,
    productOriginalPrice,
    promoEndsAt,
    webinarStartsAt,
}: ProjectProps) {
    const webinarSchedule = formatWebinarSchedule(webinarStartsAt);
    const ctaGreen =
        'flex items-center justify-center gap-[14px] bg-[#12A150] text-white font-extrabold transition-colors hover:bg-[#0E8944] hover:text-white';

    return (
        <>
            <Head title="Webinar Laundry Mastery">
                <meta
                    name="description"
                    content="Webinar membangun usaha laundry untuk sumber penghasilan di masa pensiun, dibimbing praktisi yang mengelola sembilan cabang."
                />
            </Head>
            <div className="w-full overflow-x-clip bg-white font-sans text-[#16181A] antialiased">
                {/* HEADER */}
                <header className="sticky top-0 z-50 border-b border-[#F7D6D3] bg-[#FDEBEAF0] backdrop-blur-[10px]">
                    <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-x-[20px] gap-y-[10px] px-[clamp(16px,3vw,28px)] py-[10px]">
                        <img
                            src="/assets/img_p0_6.webp"
                            alt="Laundry Mastery"
                            width={332}
                            height={91}
                            decoding="async"
                            className="block h-[clamp(28px,4.4vw,36px)] w-auto"
                        />
                        <nav className="ml-auto flex items-center gap-[clamp(10px,2vw,26px)]">
                            <div className="flex max-w-[clamp(0px,100vw-560px,420px)] items-center gap-[clamp(16px,2.6vw,34px)] overflow-hidden whitespace-nowrap">
                                <a
                                    href="#materi"
                                    className="py-[6px] text-[14.5px] font-medium text-[#3A3F43] hover:text-[#C62C36]"
                                >
                                    Materi
                                </a>
                                <a
                                    href="#mentor"
                                    className="py-[6px] text-[14.5px] font-medium text-[#3A3F43] hover:text-[#C62C36]"
                                >
                                    Mentor
                                </a>
                                <a
                                    href="#faq"
                                    className="py-[6px] text-[14.5px] font-medium text-[#3A3F43] hover:text-[#C62C36]"
                                >
                                    FAQ
                                </a>
                            </div>
                            <TrackedCTA
                                href="#daftar"
                                zone="nav"
                                action="form_anchor"
                                label="Amankan Kursi Saya"
                                className="flex min-h-[44px] items-center gap-[10px] rounded-full bg-[#12A150] py-[11px] pr-[14px] pl-[20px] text-[13.5px] font-bold whitespace-nowrap text-white transition-colors hover:bg-[#0E8944] hover:text-white"
                            >
                                Amankan Kursi Saya
                                <span className="flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-white/[0.24] text-[12px]">
                                    →
                                </span>
                            </TrackedCTA>
                        </nav>
                    </div>
                </header>

                <HeroSection
                    ctaClassName={ctaGreen}
                    webinarSchedule={webinarSchedule}
                />
                {/* PAIN + TESTIMONI */}
                <section className="relative overflow-hidden bg-white px-[clamp(18px,3vw,28px)] pt-[clamp(56px,8vw,96px)] pb-[clamp(80px,12vw,150px)]">
                    <div className="absolute top-[180px] left-[-180px] h-[520px] w-[520px] rounded-full bg-[#FDECEB]" />
                    <div className="absolute top-[60px] right-[-200px] h-[460px] w-[460px] rounded-full bg-[#FDF1F0]" />
                    <div
                        className="pointer-events-none absolute inset-0 opacity-60"
                        style={{
                            backgroundImage:
                                'radial-gradient(#F3CFCC 1.3px,transparent 1.3px)',
                            backgroundSize: '24px 24px',
                            WebkitMaskImage:
                                'radial-gradient(120% 70% at 50% 45%,#000 25%,transparent 78%)',
                            maskImage:
                                'radial-gradient(120% 70% at 50% 45%,#000 25%,transparent 78%)',
                        }}
                    />
                    <div
                        className="pointer-events-none absolute bottom-[-40px] left-1/2 h-[520px] w-[min(1100px,96%)] -translate-x-1/2 rounded-[50%]"
                        style={{
                            background:
                                'radial-gradient(closest-side,#FDECEB,rgba(253,236,235,0))',
                        }}
                    />
                    <div className="pointer-events-none absolute bottom-[-260px] left-[-170px] h-[520px] w-[520px] rounded-full border-[88px] border-[#FCE3E1]" />
                    <div className="pointer-events-none absolute right-[-140px] bottom-[-200px] h-[360px] w-[360px] rounded-full border-[62px] border-[#FDEEED]" />

                    <div className="relative mx-auto max-w-[1200px]">
                        <div className="text-center">
                            <div className="text-[12px] font-extrabold tracking-[0.12em] text-[#C62C36]">
                                SEBELUM MENGELUARKAN MODAL
                            </div>
                            <h2 className="mt-[14px] text-[clamp(25px,3.4vw,36px)] leading-[1.25] font-extrabold tracking-[-0.02em] text-balance text-[#16181A]">
                                Banyak yang tergiur, tapi{' '}
                                <span className="text-[#C62C36]">GAGAL</span>{' '}
                                karena 4 hal ini
                            </h2>
                        </div>

                        <div className="mt-[clamp(32px,5vw,52px)] grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-[clamp(14px,2vw,24px)]">
                            {pains.map((p, i) => (
                                <div
                                    key={p.title}
                                    className="relative flex flex-col rounded-[18px] border border-[#A3282D] bg-[#8A1015] px-[22px] pt-[26px] pb-[28px] text-white"
                                >
                                    <div className="absolute top-[18px] right-[20px] text-[34px] leading-none font-extrabold tracking-[-0.03em] text-white/[0.18]">
                                        {`0${i + 1}`}
                                    </div>
                                    <div className="flex h-[44px] w-[44px] flex-none items-center justify-center rounded-[12px] bg-white/[0.14] text-white">
                                        <Svg size={24}>{p.icon}</Svg>
                                    </div>
                                    <div className="mt-[20px] pr-[34px] text-[16.5px] leading-[1.35] font-bold">
                                        {p.title}
                                    </div>
                                    <div className="mt-[14px] h-px bg-white/[0.18]" />
                                    <p className="mt-[14px] text-[12.5px] leading-[1.75] text-[#F2C9CB]">
                                        {p.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-[clamp(30px,4vw,44px)] flex flex-col items-center gap-[12px]">
                            <TrackedCTA
                                href="#daftar"
                                zone="midpage"
                                action="form_anchor"
                                label="Amankan Kursi Saya"
                                className={`${ctaGreen} rounded-[12px] px-[32px] py-[18px] text-[clamp(15px,1.5vw,16.5px)] shadow-[0_14px_30px_rgba(18,161,80,0.34)]`}
                            >
                                Amankan Kursi Saya{' '}
                                <span className="font-medium">→</span>
                            </TrackedCTA>
                            <span className="text-center text-[12.5px] text-[#7A7F83]">
                                Hindari 4 kesalahan ini sebelum modal Anda
                                keluar
                            </span>
                        </div>

                        <div className="mt-[clamp(56px,9vw,96px)] text-center">
                            <h2 className="text-[clamp(25px,3.4vw,36px)] font-extrabold tracking-[-0.02em] text-[#16181A]">
                                Apa <span className="text-[#C62C36]">kata</span>{' '}
                                mereka?
                            </h2>
                            <p className="mx-auto mt-[14px] max-w-[520px] text-[clamp(14px,1.3vw,15.5px)] leading-[1.7] text-[#A9545B]">
                                Pengalaman nyata dari peserta yang telah belajar
                                langsung bersama praktisi laundry.
                            </p>
                        </div>

                        <div className="mx-auto mt-[clamp(30px,5vw,48px)] grid max-w-[840px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,290px),1fr))] gap-x-[clamp(20px,3vw,44px)] gap-y-[34px]">
                            {testimonials.map((t) => (
                                <div
                                    key={t.person}
                                    className={
                                        t.full
                                            ? '[grid-column:1/-1] mx-auto w-full max-w-[400px]'
                                            : undefined
                                    }
                                >
                                    <TestimonialVideo
                                        src={t.video}
                                        caption={t.videoCaption}
                                    />
                                    <div className="relative mx-[14px] -mt-[14px] rounded-[12px] border border-[#5C1416] bg-[#F6DFB4] px-[20px] py-[18px] text-center">
                                        <p className="text-[13px] leading-[1.55] font-bold text-[#5C1416]">
                                            {t.quote}
                                        </p>
                                        <div className="mt-[8px] text-[11.5px] text-[#8A5A2E]">
                                            {t.person}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-[clamp(36px,5vw,56px)] flex flex-col items-center gap-[12px]">
                            <TrackedCTA
                                href="#daftar"
                                zone="midpage"
                                action="form_anchor"
                                label="Amankan Kursi Saya"
                                className={`${ctaGreen} rounded-[12px] px-[34px] py-[18px] text-[clamp(15px,1.5vw,17px)] shadow-[0_14px_30px_rgba(18,161,80,0.34)]`}
                            >
                                Amankan Kursi Saya{' '}
                                <span className="font-medium">→</span>
                            </TrackedCTA>
                            <span className="text-center text-[12.5px] text-[#7A7F83]">
                                Belajar dari yang sudah menjalankannya, bukan
                                coba-coba sendiri
                            </span>
                        </div>
                    </div>
                </section>

                {/* 6 MODUL */}
                <section
                    id="materi"
                    className="scroll-mt-[76px] bg-[#8A1015] px-[clamp(18px,3vw,28px)] pt-[clamp(52px,7vw,72px)] pb-[clamp(60px,8vw,84px)]"
                >
                    <div className="mx-auto max-w-[1240px]">
                        <div className="text-center">
                            <div className="text-[12px] font-extrabold tracking-[0.12em] text-[#E8B96A]">
                                DARI NOL SAMPAI SIAP MULAI
                            </div>
                            <h2 className="mt-[14px] text-[clamp(25px,3.4vw,36px)] leading-[1.25] font-extrabold tracking-[-0.02em] text-white">
                                <span className="text-[#E8B96A]">
                                    6 Modul Inti
                                </span>{' '}
                                yang Akan Anda Pelajari
                            </h2>
                        </div>

                        <div className="mt-[clamp(32px,5vw,48px)] flex flex-wrap items-start gap-[clamp(20px,3vw,34px)]">
                            <div className="min-w-0 flex-[1_1_400px]">
                                <div className="grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,215px),1fr))] gap-[clamp(12px,1.6vw,18px)]">
                                    {modules.map((m, i) => (
                                        <div
                                            key={m.title}
                                            className="flex flex-col rounded-[16px] bg-white px-[20px] pt-[22px] pb-[24px]"
                                        >
                                            <div className="flex items-center gap-[12px]">
                                                <span className="flex h-[40px] w-[40px] flex-none items-center justify-center rounded-[11px] bg-[#FDECEB] text-[#8A1015]">
                                                    <Svg size={22}>
                                                        {m.icon}
                                                    </Svg>
                                                </span>
                                                <span className="text-[13px] font-extrabold tracking-[0.04em] text-[#D8A9AB]">{`MODUL 0${i + 1}`}</span>
                                            </div>
                                            <div className="mt-[16px] text-[15px] leading-[1.3] font-bold text-[#C62C36]">
                                                {m.title}
                                            </div>
                                            <p className="mt-[10px] text-[12px] leading-[1.7] text-[#6C7175]">
                                                {m.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-[clamp(26px,4vw,36px)] flex flex-col items-center gap-[12px]">
                                    <TrackedCTA
                                        href="#daftar"
                                        zone="midpage"
                                        action="form_anchor"
                                        label="Amankan Kursi Saya"
                                        className="flex items-center justify-center gap-[14px] rounded-[12px] bg-white px-[32px] py-[18px] text-[clamp(15px,1.5vw,16.5px)] font-extrabold text-[#0B6B36] transition-colors hover:bg-[#E7F6ED] hover:text-[#0B6B36]"
                                    >
                                        Amankan Kursi Saya{' '}
                                        <span className="font-medium">→</span>
                                    </TrackedCTA>
                                    <span className="text-center text-[12.5px] text-[#E8B96A]">
                                        Materi lengkap dari nol sampai siap buka
                                        laundry
                                    </span>
                                </div>
                            </div>

                            <div className="sticky top-[88px] flex min-w-0 flex-[1_1_260px] flex-col gap-[14px] self-start">
                                <img
                                    src="/assets/zoom-2.webp"
                                    alt="Sesi live webinar Laundry Mastery via Zoom"
                                    width={411}
                                    height={231}
                                    loading="lazy"
                                    decoding="async"
                                    className="block w-full rounded-[14px]"
                                />
                                <img
                                    src="/assets/zoom-1.webp"
                                    alt="Peserta webinar dari berbagai kota"
                                    width={411}
                                    height={231}
                                    loading="lazy"
                                    decoding="async"
                                    className="block w-full rounded-[14px]"
                                />
                                <div className="mt-[6px] text-[clamp(17px,1.7vw,19px)] leading-[1.3] font-extrabold text-white">
                                    Belajar Langsung Bersama Praktisi
                                </div>
                                <p className="text-[13px] leading-[1.75] text-[#F1BFBB]">
                                    Materi tidak berhenti di teori. Anda juga
                                    melihat pengalaman nyata dan berdiskusi
                                    bersama mentor serta peserta lainnya.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HASIL + BONUS */}
                <section className="bg-white px-[clamp(18px,3vw,28px)] py-[clamp(48px,6vw,70px)]">
                    <div className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-[clamp(26px,4vw,44px)] rounded-[22px] border border-[#F7D6D3] bg-[#FDECEB] p-[clamp(24px,4vw,46px)]">
                        <div className="min-w-0 flex-[1_1_320px]">
                            <div className="text-[12px] font-extrabold tracking-[0.12em] text-[#C62C36]">
                                HASIL YANG ANDA BAWA PULANG
                            </div>
                            <h2 className="mt-[14px] text-[clamp(23px,2.7vw,29px)] leading-[1.3] font-extrabold tracking-[-0.02em] text-[#16181A]">
                                Lebih dari Sekadar Ilmu, Ini Bekal untuk Masa
                                Depan.
                            </h2>
                            <div className="mt-[26px] flex flex-col gap-[14px]">
                                {[
                                    'Tahu persis apa yang harus disiapkan sebelum mengeluarkan modal.',
                                    'Bisa menghitung sendiri estimasi modal, harga jual, dan BEP usaha Anda.',
                                    'Punya SOP operasional siap pakai untuk hari pertama buka.',
                                    'Paham cara bersaing tanpa harus ikut perang harga.',
                                ].map((t) => (
                                    <div
                                        key={t}
                                        className="flex items-start gap-[12px]"
                                    >
                                        <span className="mt-[2px] flex h-[20px] w-[20px] flex-none items-center justify-center rounded-full bg-[#1E9E5A] text-[11px] text-white">
                                            ✓
                                        </span>
                                        <span className="text-[13.5px] leading-[1.6] text-[#3A3F43]">
                                            {t}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="min-w-0 flex-[1_1_320px] rounded-[18px] bg-white p-[clamp(20px,3vw,30px)]">
                            <div className="text-[17px] font-bold text-[#16181A]">
                                Anda juga mendapatkan:
                            </div>
                            <div className="mt-[18px] grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,155px),1fr))] gap-[16px]">
                                {[
                                    {
                                        icon: (
                                            <>
                                                <path d="M14 3H7.5A2.5 2.5 0 0 0 5 5.5v13A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.5-2.5V8z" />
                                                <path d="M14 3v5h5" />
                                                <path d="M8.5 13h7M8.5 16.5h4.5" />
                                            </>
                                        ),
                                        tag: 'Bonus 1',
                                        title: 'Template SOP Laundry',
                                        desc: 'Sudah teruji dan siap pakai.',
                                    },
                                    {
                                        icon: iconPlayBox,
                                        tag: 'Bonus 2',
                                        title: 'Video SOP Operasional',
                                        desc: 'Bisa dipelajari kembali kapan saja.',
                                    },
                                ].map((b) => (
                                    <div
                                        key={b.tag}
                                        className="rounded-[14px] border border-[#F7D6D3] bg-[#FEF4F3] px-[18px] pt-[20px] pb-[22px]"
                                    >
                                        <div className="leading-[0] text-[#C62C36]">
                                            <Svg size={28}>{b.icon}</Svg>
                                        </div>
                                        <div className="mt-[16px] text-[12px] font-semibold text-[#C98A8C]">
                                            {b.tag}
                                        </div>
                                        <div className="mt-[4px] text-[15.5px] leading-[1.3] font-bold text-[#16181A]">
                                            {b.title}
                                        </div>
                                        <p className="mt-[8px] text-[12px] leading-[1.6] text-[#7A7F83]">
                                            {b.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <TrackedCTA
                                href="#daftar"
                                zone="midpage"
                                action="form_anchor"
                                label="Amankan Kursi Saya"
                                className={`${ctaGreen} mt-[20px] gap-[12px] rounded-[11px] px-[24px] py-[17px] text-[clamp(14.5px,1.4vw,15.5px)]`}
                            >
                                Amankan Kursi Saya{' '}
                                <span className="font-medium">→</span>
                            </TrackedCTA>
                            <div className="mt-[10px] text-center text-[12px] text-[#7A7F83]">
                                Bonus dikirim setelah pendaftaran dikonfirmasi
                            </div>
                        </div>
                    </div>
                </section>

                {/* MENTOR */}
                <section
                    id="mentor"
                    className="relative scroll-mt-[76px] overflow-hidden bg-[#FDECEB] px-[clamp(18px,3vw,28px)] pt-[clamp(56px,8vw,96px)] pb-[clamp(64px,8vw,104px)]"
                >
                    <div className="absolute top-[-80px] right-[-180px] h-[460px] w-[460px] rounded-full bg-[#FCE0DE]" />
                    <div className="relative mx-auto max-w-[1080px]">
                        <div className="max-w-[760px]">
                            <div className="text-[12px] font-extrabold tracking-[0.12em] text-[#C62C36]">
                                BUKAN SEKADAR BELAJAR TEORI
                            </div>
                            <h2 className="mt-[16px] text-[clamp(25px,3.4vw,36px)] leading-[1.22] font-extrabold tracking-[-0.02em] text-balance text-[#16181A]">
                                Belajar Langsung dari Praktisi yang{' '}
                                <span className="text-[#C62C36]">
                                    Menjalankan 9 Cabang Laundry
                                </span>
                            </h2>
                            <p className="mt-[18px] max-w-[600px] text-[clamp(14px,1.3vw,15px)] leading-[1.8] text-[#4E5357]">
                                Bukan teori, bukan jualan mesin. Anda belajar
                                dari pengalaman nyata membangun dan menjalankan
                                bisnis laundry:
                            </p>
                        </div>

                        <div className="mt-[clamp(28px,4vw,40px)] flex flex-wrap items-start gap-[clamp(28px,4.5vw,56px)]">
                            <div className="max-w-[340px] min-w-0 flex-[1_1_260px]">
                                <div className="relative [aspect-ratio:300/370] overflow-hidden rounded-[18px] bg-[#8A1015]">
                                    <img
                                        src="/assets/img_p0_19.webp"
                                        alt=""
                                        width={680}
                                        height={907}
                                        loading="lazy"
                                        decoding="async"
                                        className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-luminosity"
                                    />
                                    <img
                                        src="/assets/img_p0_28.webp"
                                        alt="Muhamad Afin"
                                        width={377}
                                        height={488}
                                        loading="lazy"
                                        decoding="async"
                                        className="absolute bottom-0 left-1/2 h-full w-auto -translate-x-1/2 object-contain"
                                    />
                                    <div className="absolute right-[14px] bottom-[14px] left-[14px] flex items-center gap-[14px] rounded-[12px] bg-white/[0.94] px-[16px] py-[12px]">
                                        <span className="text-[34px] leading-none font-extrabold tracking-[-0.03em] text-[#8A1015]">
                                            9
                                        </span>
                                        <span className="text-[12.5px] leading-[1.3] font-bold text-[#16181A]">
                                            Cabang Dikelola
                                            <br />
                                            <span className="font-medium text-[#8A6668]">
                                                Flash Laundry Express
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-[18px] text-[clamp(20px,2.2vw,22px)] font-extrabold tracking-[-0.02em] text-[#16181A]">
                                    Muhamad Afin
                                </div>
                                <div className="mt-[5px] text-[13.5px] leading-[1.5] text-[#8A6668]">
                                    Praktisi Laundry · BNSP Tersertifikasi
                                    Binatu
                                </div>
                            </div>

                            <div className="min-w-0 flex-[1_1_380px]">
                                <div className="grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-x-[24px] gap-y-[16px]">
                                    {mentorPoints.map((p) => (
                                        <div
                                            key={p.label}
                                            className="flex items-center gap-[11px]"
                                        >
                                            <span className="flex-none leading-[0] text-[#C62C36]">
                                                <Svg size={18}>{p.icon}</Svg>
                                            </span>
                                            <span className="text-[13.5px] leading-[1.4] font-semibold text-[#2B3034]">
                                                {p.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <TrackedCTA
                                    href="#daftar"
                                    zone="midpage"
                                    action="form_anchor"
                                    label="Amankan Kursi Saya"
                                    className={`${ctaGreen} mt-[32px] inline-flex gap-[12px] rounded-[12px] px-[30px] py-[18px] text-[clamp(15px,1.5vw,16px)] shadow-[0_14px_30px_rgba(138,16,21,0.2)]`}
                                >
                                    Amankan Kursi Saya{' '}
                                    <span className="font-medium">→</span>
                                </TrackedCTA>
                            </div>
                        </div>
                    </div>
                </section>

                <RegistrationSection
                    includes={includes}
                    paymentMode={paymentMode}
                    productName={productName}
                    productOriginalPrice={productOriginalPrice}
                    productPrice={productPrice}
                    promoEndsAt={promoEndsAt}
                    trustBadges={trustBadges}
                />
                <FaqSection ctaClassName={ctaGreen} />
                {/* CTA BAWAH */}
                <section className="relative overflow-hidden bg-[#7E0F13] px-[clamp(18px,3vw,28px)] py-[clamp(52px,7vw,72px)]">
                    <img
                        src="/assets/cta-bg.webp"
                        alt=""
                        width={764}
                        height={382}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover object-right"
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                'linear-gradient(90deg,#8A1015 0%,#8A1015 34%,rgba(138,16,21,0.82) 62%,rgba(138,16,21,0.55) 100%)',
                        }}
                    />
                    <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-center gap-[clamp(24px,3vw,40px)]">
                        <div className="min-w-0 flex-[1_1_320px]">
                            <h2 className="text-[clamp(24px,3.2vw,34px)] leading-[1.28] font-extrabold tracking-[-0.02em] text-balance text-white">
                                Jangan biarkan modal besar dimulai dari sekadar
                                coba-coba
                            </h2>
                            <p className="mt-[16px] max-w-[430px] text-[clamp(14px,1.3vw,15px)] leading-[1.7] text-[#E8B96A]">
                                Pelajari fondasinya bersama praktisi yang sudah
                                menjalankan sendiri.
                            </p>
                        </div>
                        <div className="flex flex-[0_1_auto] justify-start">
                            <TrackedCTA
                                href="#daftar"
                                zone="footer"
                                action="form_anchor"
                                label="Amankan Kursi Saya"
                                className="flex items-center justify-center gap-[12px] rounded-[14px] bg-white px-[36px] py-[19px] text-[clamp(16px,1.7vw,19px)] font-extrabold text-[#0B6B36] transition-colors hover:bg-[#E7F6ED] hover:text-[#0B6B36]"
                            >
                                Amankan Kursi Saya{' '}
                                <span className="font-medium">→</span>
                            </TrackedCTA>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="bg-white px-[clamp(18px,3vw,28px)] pt-[clamp(36px,5vw,48px)] pb-[30px]">
                    <div className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-[clamp(24px,3vw,32px)]">
                        <div className="min-w-0 flex-[1_1_300px]">
                            <img
                                src="/assets/img_p0_6.webp"
                                alt="Laundry Mastery"
                                width={332}
                                height={91}
                                loading="lazy"
                                decoding="async"
                                className="block h-[34px] w-auto"
                            />
                            <p className="mt-[16px] max-w-[420px] text-[11.5px] leading-[1.8] text-[#7A7F83]">
                                Disclaimer: Hasil usaha, kebutuhan modal, dan
                                waktu menuju BEP dapat berbeda tergantung
                                lokasi, skala usaha, strategi pemasaran, serta
                                kondisi pasar di masing-masing kota.
                            </p>
                        </div>
                        <div className="flex flex-[0_1_auto] flex-wrap items-center gap-x-[24px] gap-y-[12px]">
                            <a
                                href="#materi"
                                className="text-[13.5px] font-semibold text-[#16181A] hover:text-[#C62C36]"
                            >
                                Layanan Kami
                            </a>
                            <a
                                href="#faq"
                                className="text-[13.5px] font-semibold text-[#16181A] hover:text-[#C62C36]"
                            >
                                Kebijakan Privasi
                            </a>
                            <a
                                href="#faq"
                                className="text-[13.5px] font-semibold text-[#16181A] hover:text-[#C62C36]"
                            >
                                Syarat &amp; Ketentuan
                            </a>
                        </div>
                    </div>
                    <div className="mt-[24px] text-center text-[11.5px] text-[#9AA0A4]">
                        Copyright © 2026. All Rights Reserved
                    </div>
                </footer>

                <WhatsappWidget whatsappUrl={whatsappUrl} />
            </div>
        </>
    );
}
