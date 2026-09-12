import { Head, Link } from '@inertiajs/react';

export default function ThankYou() {
    return (
        <main className="grid min-h-screen place-items-center bg-[#FDEBEA] p-6 text-[#16181A]">
            <Head title="Pendaftaran Berhasil" />
            <section className="w-full max-w-lg rounded-3xl border border-[#F3C9C7] bg-white p-8 text-center shadow-xl shadow-[#8A1015]/10 sm:p-12">
                <img
                    src="/assets/img_p0_6.webp"
                    alt="Laundry Mastery"
                    width={332}
                    height={91}
                    decoding="async"
                    className="mx-auto h-10 w-auto"
                />
                <p className="mt-8 text-sm font-bold tracking-widest text-[#1E9E5A] uppercase">
                    Pendaftaran berhasil
                </p>
                <h1 className="mt-4 text-4xl font-black text-[#8A1015]">
                    Terima kasih.
                </h1>
                <p className="mt-4 leading-7 text-[#4E5357]">
                    Data Anda sudah tersimpan. Tim Laundry Mastery akan
                    mengirimkan detail webinar dan langkah berikutnya melalui
                    WhatsApp.
                </p>
                <Link
                    href="/"
                    className="mt-8 inline-flex rounded-xl bg-[#12A150] px-6 py-3 font-bold text-white transition-colors hover:bg-[#0E8944]"
                >
                    Kembali ke halaman utama
                </Link>
            </section>
        </main>
    );
}
