'use client'

import { useState } from 'react'
import { ChevronDown, Shield, Lock, Eye, RefreshCw, Handshake, Server, Code, Key, UserCheck, Bell, Search, Users, FileText } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Rule from '@/components/ui/Rule'

interface Commitment { Icon: LucideIcon; title: string; description: string }
interface SecurityControl { Icon: LucideIcon; title: string; description: string; details: React.ReactNode[] }
interface ComplianceItem { name: string; description: string }
interface FaqItem { question: string; answer: React.ReactNode }

const commitments: Commitment[] = [
  { Icon: Shield, title: 'Security First', description: 'Protecting infrastructure, applications, and data with industry-leading practices' },
  { Icon: Lock, title: 'Privacy & Compliance', description: 'Meeting global data protection regulations and maintaining customer data sovereignty' },
  { Icon: Eye, title: 'Transparency', description: 'Openly sharing policies, audits, and security controls with our customers' },
  { Icon: RefreshCw, title: 'Continuous Improvement', description: 'Ongoing monitoring, testing, and security enhancements' },
  { Icon: Handshake, title: 'Trusted Partnerships', description: 'Working with enterprise-grade subprocessors like Recall.ai for secure data handling' },
]

const securityControls: SecurityControl[] = [
  {
    Icon: Server,
    title: 'Infrastructure & Network Security',
    description: 'Self-hosted in customer cloud environments with comprehensive access controls, monitoring, and system hardening',
    details: [
      'Customer retains full control of infrastructure',
      'Network segmentation and firewall protection',
      'DDoS protection and monitoring',
      <>AWS WAF implemented with <a href="https://www.defang.io/" target="_blank" rel="noopener noreferrer" className="text-orange underline">Defang</a></>,
      'Unique authentication and MFA for all production systems',
      'Authorized access controls for databases, OS, and network components',
      'Prompt access revocation upon personnel termination',
      'Encrypted remote access with mandatory MFA',
      'Intrusion detection and comprehensive log management',
      'Infrastructure monitoring with real-time alerts',
      'Network and system hardening standards maintained',
      'Annual security reviews and hardening assessments',
    ],
  },
  {
    Icon: Code,
    title: 'Application Security',
    description: 'Secure coding standards, continuous vulnerability scanning, and third-party security assessments',
    details: [
      'Continuous vulnerability scanning',
      'Secure coding standards and code reviews',
      <>Third-party security assessments by <a href="https://www.we45.com/" target="_blank" rel="noopener noreferrer" className="text-orange underline">we45</a></>,
      'Automated security testing in CI/CD pipeline',
    ],
  },
  {
    Icon: Key,
    title: 'Encryption & Data Protection',
    description: 'TLS 1.2+ for data in transit, AES-256 encryption at rest with comprehensive data lifecycle management',
    details: [
      'TLS 1.2+ for all data transmission',
      'AES-256 encryption at rest',
      'AWS Key Management Service integration',
      'Customer-controlled encryption keys',
      'Data classification and access restriction to authorized personnel',
      'Data retention and disposal procedures established',
      'Customer data deletion upon service exit',
      'Sensitive data handling protocols',
      'Data sovereignty maintained in customer environment',
    ],
  },
  {
    Icon: UserCheck,
    title: 'Identity & Access Management',
    description: 'SSO integration with customer identity providers and MFA enforcement',
    details: [
      'Single Sign-On (SSO) integration',
      'Google, Microsoft, and custom identity providers',
      'Multi-Factor Authentication (MFA) support',
      'Role-based access control (RBAC)',
    ],
  },
  {
    Icon: Bell,
    title: 'Incident Response & Monitoring',
    description: 'Formal incident response plan with customer-initiated incident management',
    details: [
      'Formal incident response procedures',
      'Customer-initiated incident management',
      '24-hour SLA for enterprise support',
      'Comprehensive logging and monitoring',
    ],
  },
  {
    Icon: Search,
    title: 'Vulnerability & Penetration Testing',
    description: 'Continuous vulnerability scanning with independent security assessments',
    details: [
      'Continuous vulnerability scanning',
      <>Independent security assessments by <a href="https://www.we45.com/" target="_blank" rel="noopener noreferrer" className="text-orange underline">we45</a></>,
      <><a href="/VAPT-Report-WE45.pdf" target="_blank" rel="noopener noreferrer" className="text-orange font-semibold">View VAPT Report ↗</a></>,
      'Regular penetration testing',
      'Automated security monitoring',
    ],
  },
  {
    Icon: Users,
    title: 'Organizational Security',
    description: 'Comprehensive personnel controls, asset management, and physical security measures',
    details: [
      'Background checks for all personnel with access to production systems',
      'Security awareness training and annual performance evaluations',
      'Code of conduct and confidentiality agreements',
      'Production inventory maintained and regularly updated',
      'Portable media encryption and mobile device management (MDM)',
      'Visitor sign-in procedures and badge requirements',
      'Escorted access to secure areas enforced',
      'Physical security controls and monitoring',
    ],
  },
  {
    Icon: FileText,
    title: 'Internal Security Procedures',
    description: 'Business continuity, change management, governance, and incident response procedures',
    details: [
      'Business continuity and disaster recovery plans documented and tested',
      'Cybersecurity insurance coverage maintained',
      'Authorized, documented, and reviewed change management procedures',
      'Production deployment restrictions and testing requirements',
      'Defined security roles and maintained security policies',
      'Board oversight and regular risk assessments conducted',
      'Vendor management and third-party risk assessments',
      'Formal incident management policies and procedures',
      'Data backup procedures and system change communication',
      'Support resources and service commitments communicated to customers',
    ],
  },
]

const complianceItems: ComplianceItem[] = [
  { name: 'SOC 2 Type II', description: 'Compliance inherited from customer\'s hosting environment' },
  { name: 'ISO 27001', description: 'Information security management system compliance' },
  { name: 'GDPR', description: 'General Data Protection Regulation compliance' },
  { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act compliance' },
  { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard compliance' },
]

const faqItems: FaqItem[] = [
  { question: 'What encryption do you use?', answer: 'We use TLS 1.2+ for data in transit and AES-256 encryption for data at rest, with keys managed through AWS Key Management Service.' },
  { question: 'How do you handle data deletion?', answer: 'Since ekai is self-hosted in your environment, you maintain full control over data deletion and retention policies according to your compliance requirements.' },
  { question: 'What is your backup and disaster recovery plan?', answer: 'Automated backups are created with each release, with monthly frequency by default. Backup frequency can be configured (daily/weekly) to meet your compliance requirements.' },
  {
    question: 'How often do you perform security audits?',
    answer: <>We conduct continuous vulnerability scanning and regular independent security assessments through our partnership with <a href="https://www.we45.com/" target="_blank" rel="noopener noreferrer" className="text-orange underline">we45</a>, a trusted third-party security firm.</>,
  },
  { question: 'What happens in case of a data breach?', answer: 'We maintain a formal incident response plan. Since data remains in your environment, you initiate incidents, and we provide detection, investigation, containment, and remediation support.' },
  {
    question: 'Who are your third-party sub-processors?',
    answer: <>We partner with <a href="https://www.we45.com/" target="_blank" rel="noopener noreferrer" className="text-orange underline">we45</a> for third-party security assessments and penetration testing. All integrations (Slack, Google Workspace, Microsoft Teams) are direct integrations without third-party data processing.</>,
  },
  { question: 'How does self-hosting affect compliance?', answer: 'Self-hosting means ekai inherits the compliance certifications already in place within your environment, including SOC 2, ISO 27001, HIPAA, or PCI where applicable.' },
  { question: 'What monitoring and logging capabilities do you provide?', answer: 'Logs remain within your environment. We provide event tracking via Mixpanel by default, with options to route analytics to CloudWatch or your preferred monitoring platform.' },
  { question: 'What personnel security controls do you have in place?', answer: 'All personnel with access to production systems undergo background checks, security awareness training, and sign confidentiality agreements. We maintain annual performance evaluations and enforce a code of conduct for all team members.' },
  { question: 'How do you manage business continuity and disaster recovery?', answer: 'We maintain documented business continuity and disaster recovery plans that are regularly tested. Our procedures include automated backups, cybersecurity insurance coverage, and comprehensive incident response protocols.' },
  { question: 'What change management procedures do you follow?', answer: 'All changes are authorized, documented, reviewed, and tested before production deployment. We maintain strict production deployment restrictions and communicate all system changes to internal and external users as appropriate.' },
  { question: 'How do you handle data retention and disposal?', answer: 'Data retention and disposal procedures are established according to customer requirements. Since ekai is self-hosted in your environment, you maintain full control over data lifecycle management and can delete customer data upon service exit.' },
  { question: 'What asset and device management controls are in place?', answer: 'We maintain a production inventory that is regularly updated, encrypt all portable media, and use mobile device management (MDM) for company devices. Physical security includes visitor sign-in procedures, badge requirements, and escorted access to secure areas.' },
]

export default function TrustCentre() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Navbar />
      <main className="bg-cream pt-[60px]">

        {/* Hero */}
        <section className="max-w-content mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-[640px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted mb-6">Trust Centre</p>
            <h1 className="font-black text-ink leading-[1.05] tracking-[-0.035em] mb-6" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
              Trust. Security.<br />Transparency.
            </h1>
            <p className="text-muted text-[17px] leading-relaxed max-w-[480px]">
              At ekai, we safeguard your data with industry-best practices, clear policies, and continuous improvement through our self-hosted architecture.
            </p>
          </div>
        </section>
        <Rule />

        {/* Trust Commitments */}
        <section className="max-w-content mx-auto px-6 md:px-12 py-20">
          <h2 className="font-bold text-ink tracking-[-0.025em] mb-12" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}>
            Our Trust Commitments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commitments.map(({ Icon, title, description }) => (
              <div key={title} className="border border-border rounded-lg p-6 bg-cream hover:bg-white transition-colors duration-150">
                <div className="w-9 h-9 rounded-md border border-border flex items-center justify-center bg-white mb-4">
                  <Icon size={16} className="text-orange" />
                </div>
                <h3 className="font-bold text-ink text-[15px] tracking-[-0.01em] mb-2">{title}</h3>
                <p className="text-muted text-[13px] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>
        <Rule />

        {/* Security & Infrastructure */}
        <section className="max-w-content mx-auto px-6 md:px-12 py-20">
          <h2 className="font-bold text-ink tracking-[-0.025em] mb-12" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}>
            Security &amp; Infrastructure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityControls.map(({ Icon, title, description, details }) => (
              <div key={title} className="border border-border rounded-lg p-6 bg-cream flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md border border-border flex items-center justify-center bg-white flex-shrink-0">
                    <Icon size={14} className="text-orange" />
                  </div>
                  <h3 className="font-bold text-ink text-[15px] tracking-[-0.01em]">{title}</h3>
                </div>
                <p className="text-muted text-[13px] leading-relaxed">{description}</p>
                <ul className="flex flex-col gap-1.5">
                  {details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-muted">
                      <span className="w-1 h-1 rounded-full bg-orange flex-shrink-0 mt-[7px]" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <Rule />

        {/* Compliance */}
        <section className="max-w-content mx-auto px-6 md:px-12 py-20">
          <h2 className="font-bold text-ink tracking-[-0.025em] mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}>
            Compliance &amp; Certifications
          </h2>
          <p className="text-muted text-[15px] leading-relaxed max-w-[640px] mb-10">
            Since ekai is deployed in your environment, it leverages the compliance and security certifications already in place within your hosting infrastructure, including SOC 2, ISO 27001, HIPAA, PCI DSS, and GDPR where applicable. We implement all necessary measures by default to help you maintain and support these compliance standards.
          </p>
          <div className="flex flex-wrap gap-3">
            {complianceItems.map(({ name, description }) => (
              <div key={name} title={description} className="flex items-center gap-2.5 border border-border rounded px-4 py-2.5">
                <span className="text-[13px] font-bold text-ink tracking-wide">{name}</span>
              </div>
            ))}
          </div>
        </section>
        <Rule />

        {/* What We Share */}
        <section className="max-w-content mx-auto px-6 md:px-12 py-20">
          <h2 className="font-bold text-ink tracking-[-0.025em] mb-10" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}>
            What We Share
          </h2>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-ink text-cream text-[11px] font-semibold uppercase tracking-[0.08em]">
              <div className="px-5 py-3">Category</div>
              <div className="px-5 py-3 border-l border-white/10">Public Access</div>
              <div className="px-5 py-3 border-l border-white/10">With Permission</div>
            </div>
            {[
              ['Certifications & Attestations', 'Security overview, compliance status', 'Full audit reports, detailed assessments'],
              ['Policies & Procedures', 'Privacy policy, security overview', 'Internal control manuals, architecture diagrams'],
              ['Security Practices', 'Encryption standards, access controls', 'Penetration test reports, threat models'],
              ['Status & Incidents', 'System status, incident summaries', 'Detailed postmortem reports'],
            ].map(([cat, pub, gated], i) => (
              <div key={cat} className={`grid grid-cols-3 ${i % 2 === 1 ? 'bg-white' : ''}`}>
                <div className="px-5 py-4 text-[13px] font-semibold text-ink">{cat}</div>
                <div className="px-5 py-4 text-[13px] text-muted border-l border-border">{pub}</div>
                <div className="px-5 py-4 text-[13px] text-muted border-l border-border">{gated}</div>
              </div>
            ))}
          </div>
        </section>
        <Rule />

        {/* FAQ */}
        <section className="max-w-content mx-auto px-6 md:px-12 py-20">
          <h2 className="font-bold text-ink tracking-[-0.025em] mb-10" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}>
            FAQ &amp; Common Security Questions
          </h2>
          <div className="flex flex-col divide-y divide-border max-w-[800px]">
            {faqItems.map(({ question, answer }, i) => (
              <div key={i}>
                <button
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-ink text-[15px] tracking-[-0.01em] group-hover:text-orange transition-colors">{question}</span>
                  <ChevronDown
                    size={16}
                    className={`text-muted flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="pb-5 text-muted text-[14px] leading-relaxed">{answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
        <Rule />

        {/* Contact */}
        <section className="max-w-content mx-auto px-6 md:px-12 py-20">
          <h2 className="font-bold text-ink tracking-[-0.025em] mb-10" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}>
            Contact Security / Trust Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[560px]">
            <div className="border border-border rounded-lg p-6 flex flex-col gap-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">Security Inquiries</p>
              <a href="mailto:tech@yourekai.com" className="font-semibold text-ink hover:text-orange transition-colors text-[15px]">tech@yourekai.com</a>
              <p className="text-muted text-[13px]">For security inquiries and incident reporting</p>
            </div>
            <div className="border border-border rounded-lg p-6 flex flex-col gap-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">General Support</p>
              <a href="mailto:hello@yourekai.com" className="font-semibold text-ink hover:text-orange transition-colors text-[15px]">hello@yourekai.com</a>
              <p className="text-muted text-[13px]">General support and technical questions</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
