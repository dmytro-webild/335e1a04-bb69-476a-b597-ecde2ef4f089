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
          name: "Executive Summary",
          id: "executive-summary",
        },
        {
          name: "Key Metrics",
          id: "key-metrics",
        },
        {
          name: "Risk Analysis",
          id: "risk-analysis",
        },
        {
          name: "Audit Findings",
          id: "audit-findings",
        },
        {
          name: "Root Causes",
          id: "root-causes",
        },
        {
          name: "Audit Guide",
          id: "audit-guide",
        },
        {
          name: "Contact & Export",
          id: "contact-export",
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=y0ojkn"
      logoAlt="Frisian Flag Indonesia Logo"
      brandName="FFI Internal Audit"
    />
  </div>

  <div id="executive-summary" data-section="executive-summary">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-animated",
      }}
      title="Internal Audit Dashboard"
      description="Executive Overview for Frisian Flag Indonesia - Kuningan Branch. Gain crucial insights into audit findings, risks, and corrective actions for proactive management decisions. This dashboard provides a consolidated view for Senior Management and the Audit Committee."
      testimonials={[
        {
          name: "Divisi: Frisian Flag Indonesia",
          handle: "Cabang: Kuningan",
          testimonial: "Pelaku Utama: Ega Anggara",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/modern-work-environment-empty-office-business-industry-enterprise-culture_482257-118995.jpg",
          imageAlt: "Audit Dashboard Screenshot",
        },
        {
          name: "Nilai Kerugian",
          handle: "Rp 394.254.899",
          testimonial: "Jumlah Faktur: 131 lembar",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/empty-business-workspace-with-device-showing-data-analytics-infographics_482257-116612.jpg",
          imageAlt: "Financial Metrics Snapshot",
        },
        {
          name: "Modus Operandi",
          handle: "Faktur Fiktif & Pengalihan Barang",
          testimonial: "Salesman membuat faktur fiktif dan mengalihkan pengiriman ke satu pihak (Dede Aziz) secara fisik.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/executive-workspace-features-digital-dashboard-with-financial-charts_482257-123845.jpg",
          imageAlt: "Fraud Modus Operandi",
        },
        {
          name: "Pihak Terlibat",
          handle: "Tim Ekspedisi & Supervisor",
          testimonial: "Muhammad Soni, Egi Zia Saputra, Dede Aziz, Rio Hardyansah, Rizaldi Yusuf, Anggy Nurul Kamaludin, Bayu Purnawan. Supervisor: Uhi Nasuhi.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-data-interface_23-2152011741.jpg",
          imageAlt: "Involved Parties List",
        },
        {
          name: "Root Causes",
          handle: "Systemic Failure",
          testimonial: "Kelemahan Pengendalian Internal, Fraud Opportunity, Collusion, Lemahnya Monitoring Supervisor.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-modern-laptop-with-rate-charts-display-while-man-woman-working-business-project-design-computer-screen-with-data-chart-information-finance-analysis-desk_482257-40065.jpg",
          imageAlt: "Root Causes Illustration",
        },
      ]}
      buttons={[
        {
          text: "View All Findings",
          href: "#audit-findings",
        },
        {
          text: "Explore Risks",
          href: "#risk-analysis",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/stock-portfolio-computer-monitor-containing-collection-financial-assets_482257-93465.jpg",
          alt: "Dashboard Overview",
        },
        {
          src: "http://img.b2bpic.net/free-photo/determined-ceo-works-office-analyzing-infographics-setting-business-goals_482257-123120.jpg",
          alt: "Financial Chart",
        },
        {
          src: "http://img.b2bpic.net/free-photo/customer-marketing-sales-dashboard-graphics-concept_53876-133831.jpg",
          alt: "Risk Map",
        },
        {
          src: "http://img.b2bpic.net/free-photo/sales-graph-tablet-screen_1262-3819.jpg",
          alt: "Trend Analysis",
        },
        {
          src: "http://img.b2bpic.net/free-photo/modern-work-environment-empty-office-business-industry-enterprise-culture_482257-118995.jpg",
          alt: "Comprehensive Report",
        },
      ]}
      avatarText="Comprehensive Audit Data"
      imageSrc="http://img.b2bpic.net/free-photo/person-reading-data-tablet_23-2149370610.jpg"
      imageAlt="Internal Audit Dashboard"
      mediaAnimation="slide-up"
      marqueeItems={[
        {
          type: "text",
          text: "Real-time Insights",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/african-american-staff-gathers-examines-monthly-revenue-balance_482257-130896.jpg",
          alt: "African american staff gathers and examines monthly revenue balance",
        },
        {
          type: "text-icon",
          text: "Fraud Prevention",
          icon: ShieldCheck,
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/executive-manager-modern-office-engaged-infographics-analysis_482257-122660.jpg",
          alt: "Executive manager in modern office engaged in infographics analysis",
        },
        {
          type: "text",
          text: "Compliance Assurance",
        },
      ]}
    />
  </div>

  <div id="key-metrics" data-section="key-metrics">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Key Audit Metrics"
      tag="Snapshot"
      metrics={[
        {
          id: "metric-1",
          value: "Rp 394 Juta",
          description: "Total Kerugian Finansial",
        },
        {
          id: "metric-2",
          value: "131 Lembar",
          description: "Jumlah Faktur Fiktif",
        },
        {
          id: "metric-3",
          value: "8 Pihak",
          description: "Pihak Terlibat dalam Kolusi",
        },
        {
          id: "metric-4",
          value: "Tinggi",
          description: "Tingkat Risiko Fraud Saat Ini",
        },
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
          title: "Risk Heat Map",
          description: "Interactive visualization of fraud and operational risks across departments. Click to drill down into specific risk areas and their impact.",
          button: {
            text: "View Heatmap",
          },
        },
        {
          icon: Activity,
          title: "Audit Trend Analysis",
          description: "Monitor audit findings, control weaknesses, and compliance rates over time. Identify areas of improvement or recurring issues.",
          button: {
            text: "View Trends",
          },
        },
        {
          icon: AlertCircle,
          title: "Vulnerability Detection",
          description: "Proactive identification of system vulnerabilities and internal control gaps based on historical data and current audits.",
          button: {
            text: "View Vulnerabilities",
          },
        },
        {
          icon: TrendingUp,
          title: "Performance Tracking",
          description: "Track the effectiveness of corrective actions and overall audit performance against set benchmarks.",
          button: {
            text: "Track Performance",
          },
        },
      ]}
      title="Risk & Trend Analysis"
      description="Visualize key risks and identify emerging patterns. Our interactive heat map and trend analysis tools provide a clear view of potential threats and compliance status."
      tag="Advanced Analytics"
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
          id: "finding-1",
          name: "Faktur Fiktif Salesman",
          price: "Risiko Tinggi",
          imageSrc: "http://img.b2bpic.net/free-photo/concentrated-adult-handsome-man-wearing-glasses-holding-documents-looking-one_141793-112160.jpg",
          imageAlt: "Fiktif Invoice Icon",
        },
        {
          id: "finding-2",
          name: "Pengalihan Barang Fisik",
          price: "Risiko Tinggi",
          imageSrc: "http://img.b2bpic.net/free-photo/box_53876-65526.jpg",
          imageAlt: "Goods Diversion Icon",
        },
        {
          id: "finding-3",
          name: "Tim Ekspedisi Tidak Sesuai SOP",
          price: "Risiko Sedang",
          imageSrc: "http://img.b2bpic.net/free-photo/transportation-concept-with-car_23-2148996437.jpg",
          imageAlt: "Non-compliance Icon",
        },
        {
          id: "finding-4",
          name: "Kelemahan Pengendalian Internal",
          price: "Risiko Tinggi",
          imageSrc: "http://img.b2bpic.net/free-photo/unsecured-danger-warning-risk-management-security-system-concept_53876-13731.jpg",
          imageAlt: "Weak Control Icon",
        },
        {
          id: "finding-5",
          name: "Lemahnya Monitoring Supervisor",
          price: "Risiko Sedang",
          imageSrc: "http://img.b2bpic.net/free-photo/finance-tracking-concept-wallet-with-magnifying-glass_23-2152012414.jpg",
          imageAlt: "Supervisor Monitoring Icon",
        },
        {
          id: "finding-6",
          name: "Indikasi Kolusi Pihak Internal",
          price: "Risiko Tinggi",
          imageSrc: "http://img.b2bpic.net/free-photo/puzzle-pieces-with-thumbs-up_1156-436.jpg",
          imageAlt: "Collusion Icon",
        },
      ]}
      title="Audit Findings Dashboard"
      description="Detailed overview of all identified audit findings. Each card provides a summary, risk level, and allows drill-down to evidence and corrective action status."
      tag="Detailed Insights"
    />
  </div>

  <div id="root-causes" data-section="root-causes">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Deep Dive"
      tagIcon={Gauge}
      title="Root Cause Analysis"
      description="Understanding the fundamental reasons behind audit findings is critical for sustainable resolution. This section outlines the core issues identified in the Kuningan Branch fraud case."
      subdescription="The case highlights a systemic failure encompassing weak internal controls, high fraud opportunity due to unrestricted access, active collusion between sales and logistics, and inadequate supervisory oversight. Addressing these root causes is paramount."
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
          id: "faq-1",
          title: "What is the Audit Universe?",
          content: "The Audit Universe represents the entire scope of auditable entities within Frisian Flag Indonesia, including all branches, departments, processes, and systems, ensuring comprehensive coverage.",
        },
        {
          id: "faq-2",
          title: "How are Audit Risks Assessed?",
          content: "Audit risks are assessed based on impact and likelihood, considering factors like financial exposure, regulatory compliance, operational efficiency, and potential for fraud, visualized in the Risk Heat Map.",
        },
        {
          id: "faq-3",
          title: "What are Corrective Actions?",
          content: "Corrective actions are specific steps mandated to address identified audit findings and control weaknesses. Their progress is tracked to ensure effective remediation and prevent recurrence.",
        },
        {
          id: "faq-4",
          title: "How to View Evidence & Details?",
          content: "Each audit finding card in the dashboard is clickable. Clicking a card will display detailed information, supporting evidence documents, specific recommendations, and current follow-up status.",
        },
        {
          id: "faq-5",
          title: "What is the Role of a Supervisor?",
          content: "Supervisors are responsible for continuous monitoring of transactions, sales performance, and team adherence to SOPs, acting as the first line of defense against operational deviations and fraud.",
        },
        {
          id: "faq-6",
          title: "Can I Export Reports?",
          content: "Yes, comprehensive audit reports, including executive summaries and detailed findings, can be exported in PDF and Excel formats for further analysis and distribution to stakeholders.",
        },
      ]}
      title="Audit Universe & Guide"
      description="Navigate through the audit framework, understand the scope of the audit universe, and get answers to frequently asked questions about audit processes and reporting."
      tag="Information Hub"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact-export" data-section="contact-export">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Reporting & Support"
      title="Request Reports or Get Support"
      description="Utilize our tools to export audit data or reach out to the Internal Audit team for further clarification and assistance. Ensure compliance and informed decision-making."
      imageSrc="http://img.b2bpic.net/free-vector/technology-business-card-template_23-2148036338.jpg"
      imageAlt="Abstract tech background"
      mediaAnimation="blur-reveal"
      mediaPosition="right"
      inputPlaceholder="Enter your request details or question"
      buttonText="Submit Request"
      termsText="By submitting, you agree to secure data handling protocols."
      onSubmit={(email) => console.log(email)}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=y0ojkn"
      logoAlt="Frisian Flag Indonesia Logo"
      logoText="Internal Audit Dashboard"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
