import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { TrackedForm } from '@/components/tracking/TrackedForm';
import type { LeadResponse } from '@/components/tracking/TrackedForm';

type RegistrationSectionProps = {
    includes: string[];
    paymentMode: 'none' | 'external' | 'internal';
    productName: string;
    productOriginalPrice: number;
    productPrice: number;
    promoEndsAt: string | null;
    trustBadges: Array<{ icon: ReactNode; label: string }>;
};

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

const formatCurrency = (value: number): string =>
    new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
    }).format(value);

function remainingSeconds(value: string | null): number | null {
    if (!value) {
        return null;
    }

    const deadline = Date.parse(value);

    return Number.isNaN(deadline)
        ? null
        : Math.max(0, Math.floor((deadline - Date.now()) / 1000));
}

export function RegistrationSection({
    includes,
    paymentMode,
    productName,
    productOriginalPrice,
    productPrice,
    promoEndsAt,
    trustBadges,
}: RegistrationSectionProps) {
    const [left, setLeft] = useState<number | null>(() =>
        remainingSeconds(promoEndsAt),
    );
    const [formError, setFormError] = useState('');

    useEffect(() => {
        if (remainingSeconds(promoEndsAt) === null) {
            return;
        }

        const timer = window.setInterval(
            () => setLeft(remainingSeconds(promoEndsAt)),
            1000,
        );

        return () => window.clearInterval(timer);
    }, [promoEndsAt]);

    const pad = (value: number): string => String(value).padStart(2, '0');
    const countdown =
        left === null
            ? []
            : [
                  { value: pad(Math.floor(left / 86400)), label: 'Hari' },
                  { value: pad(Math.floor(left / 3600) % 24), label: 'Jam' },
                  { value: pad(Math.floor(left / 60) % 60), label: 'Menit' },
                  { value: pad(left % 60), label: 'Detik' },
              ];
    const savings = Math.max(0, productOriginalPrice - productPrice);
    const discount =
        productOriginalPrice > 0
            ? Math.round((savings / productOriginalPrice) * 100)
            : 0;
    const handleSuccess = (response: LeadResponse) =>
        window.location.assign(response.redirect_url);

    return (
        <section
            id="daftar"
            className="relative scroll-mt-[76px] overflow-hidden bg-[#7E0F13] px-[clamp(18px,3vw,28px)] pt-[clamp(48px,6vw,64px)] pb-[clamp(56px,7vw,76px)]"
        >
            <img
                src="/assets/daftar-bg.webp"
                alt=""
                width={1472}
                height={880}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'linear-gradient(180deg,rgba(138,16,21,0.9),rgba(126,15,19,0.94))',
                }}
            />
            <div className="relative mx-auto max-w-[1160px]">
                <div className="text-center">
                    <div className="text-[12px] font-extrabold tracking-[0.12em] text-[#E8B96A]">
                        DAFTAR SEKARANG
                    </div>
                    <h2 className="mt-[12px] text-[clamp(24px,3.2vw,34px)] leading-[1.25] font-extrabold tracking-[-0.02em] text-white">
                        Siap Mulai dengan Arah yang Jelas?
                    </h2>
                </div>

                <div className="mt-[clamp(28px,4vw,40px)] flex flex-wrap items-start gap-[clamp(20px,3vw,34px)]">
                    <div className="min-w-0 flex-[1_1_320px] rounded-[18px] bg-white px-[clamp(20px,3vw,30px)] pt-[clamp(22px,3vw,30px)] pb-[26px] text-center">
                        <div className="inline-block rounded-full bg-[#F6DFB4] px-[16px] py-[7px] text-[11px] font-extrabold tracking-[0.06em] text-[#8A1015]">
                            HARGA PROMO: HEMAT {formatCurrency(savings)}!
                        </div>
                        <div className="mt-[16px] flex flex-wrap items-center justify-center gap-[10px]">
                            <span className="text-[16px] font-bold text-[#C62C36] line-through">
                                {formatCurrency(productOriginalPrice)}
                            </span>
                            <span className="rounded-full bg-[#FDE7E8] px-[12px] py-[5px] text-[11.5px] font-bold text-[#C62C36]">
                                DISKON {discount}%
                            </span>
                        </div>
                        <div className="mt-[6px] text-[clamp(40px,5.6vw,54px)] leading-[1.05] font-extrabold tracking-[-0.03em] text-[#8A1015]">
                            {formatCurrency(productPrice)}
                        </div>
                        <div className="mt-[6px] text-[11.5px] text-[#9A6E70]">
                            {productName} · harga sesuai konfigurasi server
                        </div>

                        {left !== null && (
                            <div className="mt-[22px] rounded-[14px] border border-[#F7D6D3] bg-[#FEF4F3] p-[16px]">
                                <div className="text-[12px] font-semibold text-[#C62C36]">
                                    {left > 0
                                        ? 'Promo berakhir dalam:'
                                        : 'Periode promo telah berakhir'}
                                </div>
                                {left > 0 && (
                                    <div className="mt-[10px] grid grid-cols-4 gap-[8px]">
                                        {countdown.map((item) => (
                                            <div key={item.label}>
                                                <div className="text-[clamp(24px,3.4vw,30px)] leading-[1.1] font-extrabold text-[#C62C36]">
                                                    {item.value}
                                                </div>
                                                <div className="text-[11px] text-[#8A6668]">
                                                    {item.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="mx-auto mt-[22px] flex max-w-[290px] flex-col items-start gap-[12px] text-left">
                            {includes.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-[10px]"
                                >
                                    <span className="flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full border-[1.5px] border-[#1E9E5A] text-[10px] text-[#1E9E5A]">
                                        ✓
                                    </span>
                                    <span className="text-[13px] text-[#3A3F43]">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-[22px] grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr))] gap-x-[18px] gap-y-[14px] border-t border-dashed border-[#F0D8D6] pt-[20px] text-left">
                            {trustBadges.map((badge) => (
                                <div
                                    key={badge.label}
                                    className="flex items-center gap-[9px]"
                                >
                                    <span className="flex-none leading-[0] text-[#1E9E5A]">
                                        <Svg size={18} sw={1.7}>
                                            {badge.icon}
                                        </Svg>
                                    </span>
                                    <span className="text-[11.5px] leading-[1.35] font-semibold text-[#4E5357]">
                                        {badge.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="min-w-0 flex-[1_1_320px] rounded-[18px] bg-white p-[clamp(22px,3vw,30px)]">
                        <div className="text-[clamp(19px,2vw,21px)] font-extrabold text-[#8A1015]">
                            Isi Data, Kursi Langsung Diamankan
                        </div>
                        <div className="mt-[6px] text-[12.5px] text-[#7A7F83]">
                            Detail pembayaran &amp; link Zoom dikirim ke
                            WhatsApp Anda.
                        </div>
                        <TrackedForm
                            formName="laundry-mastery-registration"
                            onSuccess={handleSuccess}
                            onError={setFormError}
                            className="mt-[18px] flex flex-col gap-[14px]"
                        >
                            <label className="block">
                                <span className="mb-[7px] block text-[13.5px] font-semibold text-[#16181A]">
                                    Nama Lengkap
                                </span>
                                <input
                                    type="text"
                                    name="name"
                                    autoComplete="name"
                                    required
                                    placeholder="masukkan nama lengkap"
                                    className="w-full rounded-[9px] border border-[#E3E6E8] px-[15px] py-[14px] text-[14px] text-[#16181A] outline-hidden placeholder:text-[#B9BDC1] focus:border-[#C62C36]"
                                />
                            </label>
                            <label className="block">
                                <span className="mb-[7px] block text-[13.5px] font-semibold text-[#16181A]">
                                    Nomor WhatsApp
                                </span>
                                <input
                                    type="tel"
                                    name="phone"
                                    inputMode="tel"
                                    autoComplete="tel"
                                    required
                                    placeholder="08xxxxxxxxxx"
                                    className="w-full rounded-[9px] border border-[#E3E6E8] px-[15px] py-[14px] text-[14px] text-[#16181A] outline-hidden placeholder:text-[#B9BDC1] focus:border-[#C62C36]"
                                />
                            </label>
                            <label className="block">
                                <span className="mb-[7px] block text-[13.5px] font-semibold text-[#16181A]">
                                    Email
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    inputMode="email"
                                    autoComplete="email"
                                    required
                                    placeholder="masukkan email"
                                    className="w-full rounded-[9px] border border-[#E3E6E8] px-[15px] py-[14px] text-[14px] text-[#16181A] outline-hidden placeholder:text-[#B9BDC1] focus:border-[#C62C36]"
                                />
                            </label>
                            <button
                                type="submit"
                                className="mt-[6px] w-full cursor-pointer rounded-[10px] bg-[#12A150] p-[18px] text-[clamp(15px,1.5vw,16px)] font-extrabold text-white transition-colors hover:bg-[#0E8944]"
                            >
                                {paymentMode === 'none'
                                    ? 'Amankan Kursi Saya'
                                    : 'Lanjutkan ke Pembayaran'}{' '}
                                →
                            </button>
                        </TrackedForm>
                        <div className="mt-[12px] flex items-center justify-center gap-[8px] text-center">
                            <span className="flex-none leading-[0] text-[#C62C36]">
                                <Svg size={14} sw={2}>
                                    <path d="M12 3.5 21 20H3l9-16.5Z" />
                                    <path d="M12 10v4M12 17h.01" />
                                </Svg>
                            </span>
                            <span className="text-[12px] text-[#7A7F83]">
                                <span className="font-semibold text-[#C62C36]">
                                    Kursi terbatas,
                                </span>{' '}
                                jangan sampai ketinggalan
                            </span>
                        </div>
                        {formError && (
                            <div
                                role="alert"
                                className="mt-[10px] text-center text-[12.5px] font-semibold text-[#C62C36]"
                            >
                                {formError}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
