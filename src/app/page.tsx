"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { Activity, AlertCircle, Gauge, LineChart, ShieldCheck, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmall"
        background="none"
        cardStyle="solid"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Ringkasan Eksekutif",          id: "executive-summary"},
        {
          name: "Metrik Utama",          id: "key-metrics"},
        {
          name: "Analisis Risiko",          id: "risk-analysis"},
        {
          name: "Temuan Audit",          id: "audit-findings"},
        {
          name: "Penyebab Utama",          id: "root-causes"},
        {
          name: "Panduan Audit",          id: "audit-guide"},
        {
          name: "Kontak & Ekspor",          id: "contact-export"},
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=y0ojkn"
      logoAlt="Frisian Flag Indonesia Logo"
      brandName="Audit Internal FFI"
    />
  </div>

  <div id="executive-summary" data-section="executive-summary">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-animated"}}
      title="Dasbor Audit Internal"
      description="Tinjauan Eksekutif untuk Frisian Flag Indonesia - Cabang Kuningan. Dapatkan wawasan penting tentang temuan audit, risiko, dan tindakan korektif untuk keputusan manajemen yang proaktif. Dasbor ini menyediakan pandangan terpadu bagi Manajemen Senior dan Komite Audit."
      testimonials={[
        {
          name: "Divisi: Frisian Flag Indonesia",          handle: "Cabang: Kuningan",          testimonial: "Pelaku Utama: Ega Anggara",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/modern-work-environment-empty-office-business-industry-enterprise-culture_482257-118995.jpg",          imageAlt: "Audit Dashboard Screenshot"},
        {
          name: "Nilai Kerugian",          handle: "Rp 394.254.899",          testimonial: "Jumlah Faktur: 131 lembar",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/empty-business-workspace-with-device-showing-data-analytics-infographics_482257-116612.jpg",          imageAlt: "Financial Metrics Snapshot"},
        {
          name: "Modus Operandi",          handle: "Faktur Fiktif & Pengalihan Barang",          testimonial: "Salesman membuat faktur fiktif dan mengalihkan pengiriman ke satu pihak (Dede Aziz) secara fisik.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/executive-workspace-features-digital-dashboard-with-financial-charts_482257-123845.jpg",          imageAlt: "Fraud Modus Operandi"},
        {
          name: "Pihak Terlibat",          handle: "Tim Ekspedisi & Supervisor",          testimonial: "Muhammad Soni, Egi Zia Saputra, Dede Aziz, Rio Hardyansah, Rizaldi Yusuf, Anggy Nurul Kamaludin, Bayu Purnawan. Supervisor: Uhi Nasuhi.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-data-interface_23-2152011741.jpg",          imageAlt: "Involved Parties List"},
        {
          name: "Root Causes",          handle: "Systemic Failure",          testimonial: "Kelemahan Pengendalian Internal, Fraud Opportunity, Collusion, Lemahnya Monitoring Supervisor.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-modern-laptop-with-rate-charts-display-while-man-woman-working-business-project-design-computer-screen-with-data-chart-information-finance-analysis-desk_482257-40065.jpg",          imageAlt: "Root Causes Illustration"},
      ]}
      buttons={[
        {
          text: "Lihat Semua Temuan",          href: "#audit-findings"},
        {
          text: "Jelajahi Risiko",          href: "#risk-analysis"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/stock-portfolio-computer-monitor-containing-collection-financial-assets_482257-93465.jpg",          alt: "Dashboard Overview"},
        {
          src: "http://img.b2bpic.net/free-photo/determined-ceo-works-office-analyzing-infographics-setting-business-goals_482257-123120.jpg",          alt: "Financial Chart"},
        {
          src: "http://img.b2bpic.net/free-photo/customer-marketing-sales-dashboard-graphics-concept_53876-133831.jpg",          alt: "Risk Map"},
        {
          src: "http://img.b2bpic.net/free-photo/sales-graph-tablet-screen_1262-3819.jpg",          alt: "Trend Analysis"},
        {
          src: "http://img.b2bpic.net/free-photo/modern-work-environment-empty-office-business-industry-enterprise-culture_482257-118995.jpg",          alt: "Comprehensive Report"},
      ]}
      avatarText="Data Audit Komprehensif"
      imageSrc="http://img.b2bpic.net/free-photo/person-reading-data-tablet_23-2149370610.jpg"
      imageAlt="Internal Audit Dashboard"
      mediaAnimation="slide-up"
      marqueeItems={[
        {
          type: "text",          text: "Wawasan Real-time"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/african-american-staff-gathers-examines-monthly-revenue-balance_482257-130896.jpg",          alt: "African american staff gathers and examines monthly revenue balance"},
        {
          type: "text-icon",          text: "Pencegahan Fraud",          icon: ShieldCheck,
        },
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/executive-manager-modern-office-engaged-infographics-analysis_482257-122660.jpg",          alt: "Executive manager in modern office engaged in infographics analysis"},
        {
          type: "text",          text: "Jaminan Kepatuhan"},
      ]}
    />
  </div>

  <div id="key-metrics" data-section="key-metrics">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Metrik Audit Utama"
      tag="Ikhtisar"
      metrics={[
        {
          id: "metric-1",          value: "Rp 394 Juta",          description: "Total Kerugian Finansial"},
        {
          id: "metric-2",          value: "131 Lembar",          description: "Jumlah Faktur Fiktif"},
        {
          id: "metric-3",          value: "8 Pihak",          description: "Pihak Terlibat dalam Kolusi"},
        {
          id: "metric-4",          value: "Tinggi",          description: "Tingkat Risiko Fraud Saat Ini"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="risk-analysis" data-section="risk-analysis">
      <FeatureHoverPattern
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: LineChart,
          title: "Peta Panas Risiko",          description: "Visualisasi interaktif risiko penipuan dan operasional di seluruh departemen. Klik untuk menelusuri area risiko tertentu dan dampaknya.",          button: {
            text: "Lihat Peta Panas"},
        },
        {
          icon: Activity,
          title: "Analisis Tren Audit",          description: "Pantau temuan audit, kelemahan kontrol, dan tingkat kepatuhan dari waktu ke waktu. Identifikasi area peningkatan atau masalah berulang.",          button: {
            text: "Lihat Tren"},
        },
        {
          icon: AlertCircle,
          title: "Deteksi Kerentanan",          description: "Identifikasi proaktif kerentanan sistem dan celah kontrol internal berdasarkan data historis dan audit saat ini.",          button: {
            text: "Lihat Kerentanan"},
        },
        {
          icon: TrendingUp,
          title: "Pelacakan Kinerja",          description: "Lacak efektivitas tindakan korektif dan kinerja audit secara keseluruhan terhadap tolok ukur yang ditetapkan.",          button: {
            text: "Lacak Kinerja"},
        },
      ]}
      title="Analisis Risiko & Tren"
      description="Visualisasikan risiko utama dan identifikasi pola yang muncul. Peta panas interaktif dan alat analisis tren kami memberikan pandangan yang jelas tentang potensi ancaman dan status kepatuhan."
      tag="Analisis Lanjutan"
    />
  </div>

  <div id="audit-findings" data-section="audit-findings">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "finding-1",          name: "Faktur Fiktif Salesman",          price: "Risiko Tinggi",          imageSrc: "http://img.b2bpic.net/free-photo/concentrated-adult-handsome-man-wearing-glasses-holding-documents-looking-one_141793-112160.jpg",          imageAlt: "Fiktif Invoice Icon"},
        {
          id: "finding-2",          name: "Pengalihan Barang Fisik",          price: "Risiko Tinggi",          imageSrc: "http://img.b2bpic.net/free-photo/box_53876-65526.jpg",          imageAlt: "Goods Diversion Icon"},
        {
          id: "finding-3",          name: "Tim Ekspedisi Tidak Sesuai SOP",          price: "Risiko Sedang",          imageSrc: "http://img.b2bpic.net/free-photo/transportation-concept-with-car_23-2148996437.jpg",          imageAlt: "Non-compliance Icon"},
        {
          id: "finding-4",          name: "Kelemahan Pengendalian Internal",          price: "Risiko Tinggi",          imageSrc: "http://img.b2bpic.net/free-photo/unsecured-danger-warning-risk-management-security-system-concept_53876-13731.jpg",          imageAlt: "Weak Control Icon"},
        {
          id: "finding-5",          name: "Lemahnya Monitoring Supervisor",          price: "Risiko Sedang",          imageSrc: "http://img.b2bpic.net/free-photo/finance-tracking-concept-wallet-with-magnifying-glass_23-2152012414.jpg",          imageAlt: "Supervisor Monitoring Icon"},
        {
          id: "finding-6",          name: "Indikasi Kolusi Pihak Internal",          price: "Risiko Tinggi",          imageSrc: "http://img.b2bpic.net/free-photo/puzzle-pieces-with-thumbs-up_1156-436.jpg",          imageAlt: "Collusion Icon"},
      ]}
      title="Dasbor Temuan Audit"
      description="Tinjauan terperinci tentang semua temuan audit yang teridentifikasi. Setiap kartu menyajikan ringkasan, tingkat risiko, dan memungkinkan penelusuran ke bukti dan status tindakan korektif."
      tag="Wawasan Mendalam"
    />
  </div>

  <div id="root-causes" data-section="root-causes">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Penelusuran Mendalam"
      tagIcon={Gauge}
      title="Analisis Penyebab Utama"
      description="Memahami alasan mendasar di balik temuan audit sangat penting untuk resolusi yang berkelanjutan. Bagian ini menguraikan masalah inti yang teridentifikasi dalam kasus penipuan Cabang Kuningan."
      subdescription="Kasus ini menyoroti kegagalan sistemik yang meliputi lemahnya pengendalian internal, peluang penipuan yang tinggi karena akses tidak terbatas, kolusi aktif antara penjualan dan logistik, serta pengawasan supervisor yang tidak memadai. Penanganan penyebab utama ini sangat penting."
      icon={LineChart}
      imageSrc="http://img.b2bpic.net/free-photo/student-doing-academic-research-internet-gain-career-knowledge_482257-124934.jpg"
      imageAlt="Fishbone Diagram for Root Cause Analysis"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="audit-guide" data-section="audit-guide">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",          title: "Apa itu Audit Universe?",          content: "Audit Universe merepresentasikan seluruh cakupan entitas yang dapat diaudit dalam Frisian Flag Indonesia, termasuk semua cabang, departemen, proses, dan sistem, memastikan cakupan yang komprehensif."},
        {
          id: "faq-2",          title: "Bagaimana Risiko Audit Dinilai?",          content: "Risiko audit dinilai berdasarkan dampak dan kemungkinan, mempertimbangkan faktor-faktor seperti eksposur keuangan, kepatuhan regulasi, efisiensi operasional, dan potensi penipuan, divisualisasikan dalam Peta Panas Risiko."},
        {
          id: "faq-3",          title: "Apa itu Tindakan Korektif?",          content: "Tindakan korektif adalah langkah-langkah spesifik yang diamanatkan untuk mengatasi temuan audit dan kelemahan kontrol yang teridentifikasi. Kemajuannya dilacak untuk memastikan remediasi yang efektif dan mencegah terulangnya kembali."},
        {
          id: "faq-4",          title: "Bagaimana Cara Melihat Bukti & Detail?",          content: "Setiap kartu temuan audit di dasbor dapat diklik. Mengklik kartu akan menampilkan informasi rinci, dokumen pendukung, rekomendasi spesifik, dan status tindak lanjut saat ini."},
        {
          id: "faq-5",          title: "Apa Peran Supervisor?",          content: "Supervisor bertanggung jawab untuk pemantauan berkelanjutan transaksi, kinerja penjualan, dan kepatuhan tim terhadap SOP, bertindak sebagai lini pertahanan pertama terhadap penyimpangan operasional dan penipuan."},
        {
          id: "faq-6",          title: "Bisakah Saya Mengekspor Laporan?",          content: "Ya, laporan audit komprehensif, termasuk ringkasan eksekutif dan temuan terperinci, dapat diekspor dalam format PDF dan Excel untuk analisis lebih lanjut dan distribusi kepada para pemangku kepentingan."},
      ]}
      title="Audit Universe & Panduan"
      description="Navigasikan melalui kerangka audit, pahami cakupan audit universe, dan dapatkan jawaban atas pertanyaan yang sering diajukan tentang proses dan pelaporan audit."
      tag="Pusat Informasi"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact-export" data-section="contact-export">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Pelaporan & Dukungan"
      title="Permintaan Laporan atau Dukungan"
      description="Manfaatkan alat kami untuk menghasilkan dan mengekspor data audit dalam format PDF dan Excel atau hubungi tim Audit Internal untuk klarifikasi dan bantuan lebih lanjut. Pastikan kepatuhan dan pengambilan keputusan yang terinformasi."
      imageSrc="http://img.b2bpic.net/free-vector/technology-business-card-template_23-2148036338.jpg"
      imageAlt="Abstract tech background"
      mediaAnimation="blur-reveal"
      mediaPosition="right"
      inputPlaceholder="Masukkan detail permintaan atau pertanyaan Anda"
      buttonText="Unduh Laporan"
      termsText="Dengan mengirimkan, Anda menyetujui protokol penanganan data yang aman."
      onSubmit={(email) => console.log(email)}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=y0ojkn"
      logoAlt="Frisian Flag Indonesia Logo"
      logoText="Dasbor Audit Internal"
      leftLink={{
        text: "Kebijakan Privasi",        href: "#"}}
      rightLink={{
        text: "Ketentuan Layanan",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
