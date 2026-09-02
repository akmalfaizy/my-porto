import React, { useState } from 'react';
import { 
  FileText, 
  Printer, 
  ArrowLeft, 
  Copy, 
  Check, 
  ShieldCheck, 
  Calendar, 
  CreditCard, 
  Building,
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Code
} from 'lucide-react';

export default function Invoice({ onBack }) {
  const [copied, setCopied] = useState(false);
  const [showRawText, setShowRawText] = useState(false);

  const rawInvoiceText = `================================================================================
                                INVOICE
================================================================================

Nama Penyedia Jasa : Akmal Dandy / Software Engineering Studio
No. HP / WA        : 0813-2513-6081
Email              : gdandipradana13@gmail.com
Alamat             : Kota Yogyakarta, DIY

KEPADA:
Nama Klien / Client : MOrganizerr
Perusahaan / Club   : MOrganizer (Event Organizer)
Tanggal Invoice     : 01 September 2026
No. Invoice         : INV/2026/MRG/001

--------------------------------------------------------------------------------
NO  DESKRIPSI FITUR / MODUL UTAMA                                  JUMLAH (IDR)
--------------------------------------------------------------------------------
1.  SISTEM LANDING PAGE UTAMA & PORTAL PUBLIK (CORE PRODUCT)       Rp  7.000.000
    - Tampilan Landing Page Event Balap Modern, Dinamis & Responsif
    - Showcase Event, Informasi Kategori (Drag Bike & Drag Race) & Jadwal
    - Pusat Unduh Berkas PDF Regulasi Resmi & PPP (Peraturan Lintasan)
    - Portal Publik Cek Status Pendaftaran & Tiket Mandiri Peserta

2.  FITUR TERBARU: BOOKING & DENAH PADDOCK INTERAKTIF (PUBLIC)     Rp  3.000.000
    - Denah/Map Interaktif Paddock dengan Layout Pemetaan Slot Visual
    - System Pemesanan Online Multi-Slot Paddock (Drag Bike & Race)
    - Proteksi Anti Double-Booking Slot Paddock (Idempotency Engine)
    - Halaman Cek Status Booking Paddock & Lookup WA Publik

3.  MODUL ALUR PENDAFTARAN BALAP (SINGLE & MANAGER BATCH)          Rp  2.500.000
    - Form Pendaftaran Pembalap Mandiri & Manager Batch (1-15 Rider)
    - Validasi Data NIK 16 digit, No. KIS, Spesifikasi Kendaraan & Upload Berkas
    - Alokasi Nomor Start Otomatis & Compaction Pool (Auto Merapikan Nomor)

4.  DASHBOARD ADMIN PADDOCK BARU & VERIFIKASI BOOKING              Rp  2.500.000
    - Dashboard Khusus Monitoring & Pengelolaan Slot Paddock Real-Time
    - Modul Verifikasi Pembayaran Booking Paddock & Konfirmasi Manual
    - Fitur Cetak Bukti Nota Booking Paddock & Export Data Paddock Excel

--------------------------------------------------------------------------------
5.  [BONUS SPEKTAKULER] MODUL CETAK DOKUMEN BALAP & SCRUT         Rp          0
    (INCLUDED FREE - MENUNGGU TEMPLATE DOKUMEN DARI KLIEN)             (GRATIS)
    - Cetak Kartu Kontrol Balap & Kwitansi Resmi (Terbilang Rupiah)
    - Cetak Form Scrutineering (Pemeriksaan Teknis Kendaraan Balap)
    - Auto Push Google Spreadsheet API & Export Excel Sensor Timing
--------------------------------------------------------------------------------
SUBTOTAL                                                           Rp 15.000.000
POTONGAN DISKON / BONUS                                            Rp  1.000.000
--------------------------------------------------------------------------------
TOTAL TAGIHAN                                                      Rp 14.000.000
================================================================================

METODE PEMBAYARAN:
Bank          : BCA
No. Rekening  : 8020892952
Atas Nama     : Dandy Aurellio Pradana

SYARAT & KETENTUAN:
1. Modul Cetak Dokumen Balap diberikan GRATIS dan akan disesuaikan begitu template resmi diterima dari klien.
2. Biaya sudah mencakup Garansi Pemeliharaan (Maintenance & Support) selama event berlangsung.

Terima kasih atas kerja samanya!`;

  const handlePrint = () => {
    const originalTitle = document.title;
    // Format: NOMORINVOICE_NAMAKLIEN -> INV_2026_MRG_001_MOrganizerr
    const invoiceNo = "INV_2026_MRG_001";
    const clientName = "MOrganizerr";
    document.title = `${invoiceNo}_${clientName}`;

    window.print();

    setTimeout(() => {
      document.title = originalTitle;
    }, 1500);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(rawInvoiceText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const invoiceItems = [
    {
      no: 1,
      title: "SISTEM LANDING PAGE UTAMA & PORTAL PUBLIK (CORE PRODUCT)",
      price: 7000000,
      priceFormatted: "Rp 7.000.000",
      features: [
        "Tampilan Landing Page Event Balap Modern, Dinamis & Responsif",
        "Showcase Event, Informasi Kategori (Drag Bike & Drag Race) & Jadwal",
        "Pusat Unduh Berkas PDF Regulasi Resmi & PPP (Peraturan Lintasan)",
        "Portal Publik Cek Status Pendaftaran & Tiket Mandiri Peserta"
      ]
    },
    {
      no: 2,
      title: "FITUR TERBARU: BOOKING & DENAH PADDOCK INTERAKTIF (PUBLIC)",
      price: 3000000,
      priceFormatted: "Rp 3.000.000",
      features: [
        "Denah/Map Interaktif Paddock dengan Layout Pemetaan Slot Visual",
        "System Pemesanan Online Multi-Slot Paddock (Drag Bike & Race)",
        "Proteksi Anti Double-Booking Slot Paddock (Idempotency Engine)",
        "Halaman Cek Status Booking Paddock & Lookup WA Publik"
      ]
    },
    {
      no: 3,
      title: "MODUL ALUR PENDAFTARAN BALAP (SINGLE & MANAGER BATCH)",
      price: 2500000,
      priceFormatted: "Rp 2.500.000",
      features: [
        "Form Pendaftaran Pembalap Mandiri & Manager Batch (1-15 Rider)",
        "Validasi Data NIK 16 digit, No. KIS, Spesifikasi Kendaraan & Upload Berkas",
        "Alokasi Nomor Start Otomatis & Compaction Pool (Auto Merapikan Nomor)"
      ]
    },
    {
      no: 4,
      title: "DASHBOARD ADMIN PADDOCK BARU & VERIFIKASI BOOKING",
      price: 2500000,
      priceFormatted: "Rp 2.500.000",
      features: [
        "Dashboard Khusus Monitoring & Pengelolaan Slot Paddock Real-Time",
        "Modul Verifikasi Pembayaran Booking Paddock & Konfirmasi Manual",
        "Fitur Cetak Bukti Nota Booking Paddock & Export Data Paddock Excel"
      ]
    },
    {
      no: 5,
      title: "[BONUS SPEKTAKULER] MODUL CETAK DOKUMEN BALAP & SCRUT",
      isBonus: true,
      price: 0,
      priceFormatted: "Rp 0 (GRATIS)",
      note: "(INCLUDED FREE - MENUNGGU TEMPLATE DOKUMEN DARI KLIEN)",
      features: [
        "Cetak Kartu Kontrol Balap & Kwitansi Resmi (Terbilang Rupiah)",
        "Cetak Form Scrutineering (Pemeriksaan Teknis Kendaraan Balap)",
        "Auto Push Google Spreadsheet API & Export Excel Sensor Timing"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 py-8 px-4 sm:px-6 lg:px-8 relative selection:bg-slate-900 selection:text-white">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Action Header / Top Bar (Web Screen Only) */}
        <div className="print:hidden flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <button
            onClick={onBack || (() => {
              window.location.hash = '';
              if (window.history.length > 1) {
                window.history.back();
              } else {
                window.location.pathname = '/';
              }
            })}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-heading text-xs font-semibold tracking-wider transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 text-slate-600" />
            Kembali ke Portofolio
          </button>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowRawText(!showRawText)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border font-heading text-xs font-semibold transition-all duration-200 ${
                showRawText 
                  ? 'bg-blue-50 border-blue-300 text-blue-700' 
                  : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              <Code className="w-4 h-4" />
              {showRawText ? 'Tampilan Invoice' : 'Format Teks ASCII'}
            </button>

            <button
              onClick={handleCopyText}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-heading text-xs font-semibold transition-all duration-200"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-600 font-bold">Teks Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-600" />
                  Salin Teks Invoice
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-xs tracking-wider uppercase shadow-sm active:scale-95 transition-all duration-200"
            >
              <Printer className="w-4 h-4" />
              Cetak / Simpan PDF
            </button>
          </div>
        </div>

        {/* RAW ASCII TEXT VIEW MODE */}
        {showRawText ? (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 font-mono text-xs text-slate-800 leading-relaxed overflow-x-auto whitespace-pre shadow-sm">
            {rawInvoiceText}
          </div>
        ) : (
          /* PROFESSIONAL LIGHT MODE CORPORATE INVOICE */
          <div className="invoice-container bg-white rounded-2xl p-6 sm:p-9 border border-slate-200 shadow-xl relative overflow-hidden text-slate-800">
            
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-900" />

            {/* Header Banner */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-5 border-b border-slate-200 gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-100 border border-slate-300 text-slate-700 text-[10px] font-mono font-bold tracking-wider uppercase">
                    OFFICIAL INVOICE
                  </div>

                  {/* UNPAID STATUS BADGE */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-[10px] font-mono font-bold tracking-widest uppercase">
                    <AlertCircle className="w-3 h-3 text-red-600" />
                    STATUS: BELUM LUNAS (UNPAID)
                  </div>
                </div>

                <h1 className="text-3xl font-heading font-extrabold tracking-tight text-slate-900">
                  INVOICE
                </h1>
                <p className="text-slate-500 font-mono text-[11px] mt-0.5">
                  Tagihan Pengembangan Sistem Software & Infrastructure
                </p>
              </div>

              <div className="md:text-right bg-slate-50 p-4 rounded-xl border border-slate-200 min-w-[240px]">
                <div className="text-slate-500 font-mono text-[11px]">No. Invoice</div>
                <div className="text-lg font-heading font-extrabold text-slate-900 font-mono tracking-wider">
                  INV/2026/MRG/001
                </div>
                <div className="flex items-center md:justify-end gap-1.5 mt-1.5 text-[11px] font-mono text-slate-600">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Tanggal Invoice: <strong className="text-slate-900 font-semibold">01 September 2026</strong></span>
                </div>
              </div>
            </div>

            {/* Provider & Client Grid Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 pb-5 border-b border-slate-200">
              
              {/* Provider Info */}
              <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-2 text-slate-700 font-heading font-bold text-xs uppercase tracking-wider mb-2">
                  <Building className="w-3.5 h-3.5 text-slate-500" />
                  Penyedia Jasa (Developer / Vendor)
                </div>
                <h3 className="text-sm font-heading font-bold text-slate-900 mb-1.5">
                  Akmal Dandy / Software Engineering Studio
                </h3>
                <ul className="space-y-1 text-[11px] text-slate-600 font-mono">
                  <li className="flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-slate-400" />
                    <span>No. HP / WA: <strong className="text-slate-800">0813-2513-6081</strong></span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-slate-400" />
                    <span>Email: <strong className="text-slate-800">gdandipradana13@gmail.com</strong></span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>Alamat: <strong className="text-slate-800">Kota Yogyakarta, DIY</strong></span>
                  </li>
                </ul>
              </div>

              {/* Client Info */}
              <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-2 text-slate-700 font-heading font-bold text-xs uppercase tracking-wider mb-2">
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  Ditujukan Kepada (Client / Event Organizer)
                </div>
                <h3 className="text-sm font-heading font-bold text-slate-900 mb-1.5">
                  MOrganizerr
                </h3>
                <ul className="space-y-1 text-[11px] text-slate-600 font-mono">
                  <li className="flex items-center gap-1.5">
                    <Building className="w-3 h-3 text-slate-400" />
                    <span>Perusahaan / Club: <strong className="text-slate-800">MOrganizer (Event Organizer)</strong></span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>Status Kontrak: <strong className="text-emerald-700 font-semibold">Resmi & Garansi System</strong></span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Invoice Line Items Table */}
            <div className="my-5">
              <h2 className="text-xs font-heading font-bold text-slate-500 uppercase tracking-wider mb-3">
                Rincian Fitur & Modul Layanan
              </h2>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-100/90 font-mono text-[10px] uppercase tracking-wider text-slate-700">
                      <th className="py-2.5 px-3 w-10 text-center">NO</th>
                      <th className="py-2.5 px-3">DESKRIPSI FITUR / MODUL UTAMA</th>
                      <th className="py-2.5 px-3 text-right w-36">JUMLAH (IDR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-sans">
                    {invoiceItems.map((item) => (
                      <tr 
                        key={item.no}
                        className={`transition-colors ${item.isBonus ? 'bg-purple-50/40 hover:bg-purple-50/70' : 'hover:bg-slate-50/80'}`}
                      >
                        <td className="py-2.5 px-3 font-mono text-center text-xs font-bold text-slate-500 align-top">
                          {item.no}.
                        </td>
                        <td className="py-2.5 px-3 align-top">
                          <div className="flex items-center gap-2 font-heading font-bold text-xs text-slate-900">
                            <span>{item.title}</span>
                            {item.isBonus && (
                              <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-purple-100 text-purple-800 border border-purple-200 font-bold">
                                BONUS FREE
                              </span>
                            )}
                          </div>
                          
                          {item.note && (
                            <p className="text-[10px] font-mono text-purple-700 font-semibold mt-0.5">
                              {item.note}
                            </p>
                          )}

                          <ul className="mt-1.5 space-y-1">
                            {item.features.map((feat, idx) => (
                              <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                                <CheckCircle2 className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td className="py-2.5 px-3 text-right align-top font-mono font-bold text-xs whitespace-nowrap">
                          {item.isBonus ? (
                            <div className="text-emerald-700">
                              <div>Rp 0</div>
                              <span className="text-[9px] uppercase font-mono font-bold tracking-wider">
                                (GRATIS)
                              </span>
                            </div>
                          ) : (
                            <span className="text-slate-900">{item.priceFormatted}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Calculations & Total Summary */}
            <div className="flex flex-col md:flex-row justify-end items-center gap-4 pt-3 border-t border-slate-200">
              
              {/* Right Total Summary Box */}
              <div className="w-full md:w-80 space-y-1.5 font-mono">
                <div className="flex justify-between items-center text-[11px] text-slate-500">
                  <span>SUBTOTAL</span>
                  <span className="font-bold text-slate-800">Rp 15.000.000</span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-500">
                  <span>POTONGAN DISKON / BONUS</span>
                  <span className="font-bold text-emerald-600">- Rp 1.000.000</span>
                </div>
                <div className="h-px bg-slate-200 my-1" />
                <div className="flex justify-between items-center text-sm font-heading font-bold text-white bg-slate-900 p-3 rounded-xl shadow-sm">
                  <span>TOTAL TAGIHAN</span>
                  <span className="text-blue-400 font-mono text-base font-extrabold">Rp 14.000.000</span>
                </div>
              </div>

            </div>

            {/* Payment Method & Terms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 pt-4 border-t border-slate-200">
              
              {/* Payment Info */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 className="font-heading font-bold text-xs text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-slate-600" />
                  Metode Pembayaran
                </h3>
                <ul className="space-y-1 text-[11px] font-mono text-slate-700">
                  <li className="flex justify-between border-b border-slate-200/60 pb-1">
                    <span className="text-slate-500">Bank</span>
                    <strong className="text-slate-900">BCA</strong>
                  </li>
                  <li className="flex justify-between border-b border-slate-200/60 pb-1">
                    <span className="text-slate-500">No. Rekening</span>
                    <strong className="text-blue-700 font-mono text-xs">8020892952</strong>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-500">Atas Nama</span>
                    <strong className="text-slate-900">Dandy Aurellio Pradana</strong>
                  </li>
                </ul>
              </div>

              {/* Terms & Conditions */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 className="font-heading font-bold text-xs text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Syarat & Ketentuan
                </h3>
                <ol className="list-decimal list-inside space-y-1 text-[11px] text-slate-600 leading-tight font-sans">
                  <li>Modul Cetak Dokumen Balap diberikan GRATIS dan akan disesuaikan begitu template resmi diterima dari klien.</li>
                  <li>Biaya sudah mencakup Garansi Pemeliharaan (Maintenance & Support) selama event berlangsung.</li>
                </ol>
              </div>

            </div>

            {/* Footer Note */}
            <div className="text-center pt-4 border-t border-slate-200">
              <p className="font-heading font-bold text-base text-slate-900">
                Terima kasih atas kerja samanya!
              </p>
              <p className="text-slate-500 font-mono text-[10px] mt-0.5">
                Portofolio & Jasa Software Engineering Resmi oleh Akmal Dandy
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
