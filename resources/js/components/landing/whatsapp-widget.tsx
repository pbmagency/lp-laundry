import { useEffect, useState } from 'react';
import { TrackedCTA } from '@/components/tracking/TrackedCTA';

export function WhatsappWidget({
    whatsappUrl,
}: {
    whatsappUrl: string | null;
}) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!whatsappUrl) {
            return;
        }

        const timer = window.setTimeout(() => setIsOpen(true), 10000);

        return () => window.clearTimeout(timer);
    }, [whatsappUrl]);

    if (!whatsappUrl) {
        return null;
    }

    return (
        <div className="fixed right-[clamp(14px,3vw,22px)] bottom-[clamp(14px,3vw,22px)] z-[90] flex max-w-[calc(100vw-28px)] flex-col items-end gap-[12px]">
            {isOpen && (
                <div className="relative flex w-[300px] max-w-full gap-[12px] rounded-[14px] bg-white p-[16px] shadow-[0_18px_44px_rgba(20,10,10,0.18)]">
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        aria-label="Tutup"
                        className="absolute -top-[9px] -right-[9px] flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-full bg-[#16181A] text-[12px] leading-none text-white"
                    >
                        ✕
                    </button>
                    <div className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-full bg-[#8A1015] text-[14px] font-extrabold text-white">
                        MA
                    </div>
                    <div className="min-w-0">
                        <div className="text-[14px] font-extrabold text-[#16181A]">
                            Tim Laundry Mastery
                        </div>
                        <p className="mt-[6px] text-[12.5px] leading-[1.55] text-[#4E5357]">
                            Masih ragu sebelum daftar? Tanya langsung soal
                            modal, lokasi, atau jadwal webinarnya.
                        </p>
                        <TrackedCTA
                            href={whatsappUrl}
                            zone="floating"
                            action="whatsapp"
                            label="Chat sekarang"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-[10px] inline-block text-[13px] font-bold text-[#1E9E5A] hover:text-[#177E48]"
                        >
                            Chat sekarang →
                        </TrackedCTA>
                    </div>
                </div>
            )}
            <TrackedCTA
                href={whatsappUrl}
                zone="floating"
                action="whatsapp"
                label="Chat WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat WhatsApp"
                onClick={() => setIsOpen(false)}
                className="flex h-[56px] w-[56px] flex-none items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.42)] transition-colors hover:bg-[#1EB855] hover:text-white"
            >
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.65-1.23-1.46-1.38-1.71-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.47c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.74 2.65 4.2 3.72.59.25 1.05.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
                </svg>
            </TrackedCTA>
        </div>
    );
}
