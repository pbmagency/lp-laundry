import { useState } from 'react';
import { TrackedCTA } from '@/components/tracking/TrackedCTA';

const faqData = [
    {
        q: 'Apakah cocok untuk pemula total?',
        a: 'Ya. Materi disusun dari nol — mulai dari cara membaca potensi lokasi sampai menyiapkan modal awal, sehingga bisa diikuti tanpa pengalaman laundry sebelumnya.',
    },
    {
        q: 'Berapa lama estimasi balik modalnya?',
        a: 'Berbeda-beda tergantung lokasi, skala, dan strategi harga. Di sesi keuangan Anda akan diajak menghitung BEP versi usaha Anda sendiri.',
    },
    {
        q: 'Apa saja yang saya dapatkan?',
        a: '6 modul strategi laundry, sesi live bersama Muhamad Afin, Template SOP Laundry, dan Video SOP Operasional.',
    },
    {
        q: 'Kapan webinar berlangsung dan apakah ada rekaman?',
        a: 'Jadwal terkini tertera di bagian atas halaman dan akan dikonfirmasi kembali melalui WhatsApp. Rekaman sesi dibagikan kepada seluruh peserta yang terdaftar.',
    },
    {
        q: 'Bagaimana kalau saya tidak puas?',
        a: 'Ada garansi kepuasan sesi 100%. Sampaikan kepada tim kami setelah sesi berakhir dan biaya pendaftaran Anda dikembalikan.',
    },
];

export function FaqSection({ ctaClassName }: { ctaClassName: string }) {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <section
            id="faq"
            className="scroll-mt-[76px] px-[clamp(18px,3vw,28px)] pt-[clamp(52px,7vw,72px)] pb-[clamp(60px,8vw,84px)]"
            style={{
                background:
                    'linear-gradient(120deg,#FBD4D1 0%,#FDECEB 34%,#FEF4F3 100%)',
            }}
        >
            <div className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-[clamp(28px,4vw,50px)]">
                <div className="min-w-0 flex-[1_1_300px]">
                    <div className="text-[20px] font-bold text-[#C62C36]">
                        FAQ
                    </div>
                    <h2 className="mt-[12px] text-[clamp(24px,3.2vw,34px)] leading-[1.25] font-extrabold tracking-[-0.02em] text-[#16181A]">
                        Masih Ada yang ingin Anda Tanyakan?
                    </h2>
                    <p className="mt-[16px] max-w-[330px] text-[14px] leading-[1.7] text-[#4E5357]">
                        Jawaban untuk pertanyaan yang mungkin masih Anda
                        pikirkan.
                    </p>
                    <TrackedCTA
                        href="#daftar"
                        zone="faq"
                        action="form_anchor"
                        label="Amankan Kursi Saya"
                        className={`${ctaClassName} mt-[24px] inline-flex rounded-[14px] px-[26px] py-[18px] text-[clamp(15px,1.5vw,17px)]`}
                    >
                        Amankan Kursi Saya
                        <span className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full bg-white/[0.24] text-[13px]">
                            →
                        </span>
                    </TrackedCTA>
                </div>
                <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-[12px]">
                    {faqData.map((item, index) => {
                        const isOpen = openFaq === index;

                        return (
                            <div
                                key={item.q}
                                className="rounded-[12px] border border-[#F3DCDA] bg-white px-[20px] py-[16px]"
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenFaq((current) =>
                                            current === index ? -1 : index,
                                        )
                                    }
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${index}`}
                                    className="flex min-h-[32px] w-full cursor-pointer items-center gap-[16px] text-left"
                                >
                                    <span className="flex-1 text-[14.5px] leading-[1.5] font-semibold text-[#16181A]">
                                        {item.q}
                                    </span>
                                    <span className="flex-none text-[20px] leading-none text-[#8A1015]">
                                        {isOpen ? '–' : '+'}
                                    </span>
                                </button>
                                {isOpen && (
                                    <p
                                        id={`faq-answer-${index}`}
                                        className="mt-[12px] text-[13.5px] leading-[1.75] text-[#5A5F63]"
                                    >
                                        {item.a}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
