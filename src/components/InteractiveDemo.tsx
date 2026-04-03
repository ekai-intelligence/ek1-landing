import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronDown,
  Sparkles,
  Check,
  Edit3,
  ExternalLink,
  Send,
  Clock,
  User,
  Brain,
  Database,
  Search,
  FileText,
  Code,
  Eye,
  Play,
  X,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* Brand icon SVG components */
const SlackIcon = ({ className, size = 16 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
    <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
    <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.522 2.521 2.527 2.527 0 0 1-2.521-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.522 2.522v6.312z" fill="#2EB67D"/>
    <path d="M15.165 18.956a2.528 2.528 0 0 1 2.522 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.521-2.522v-2.522h2.521zm0-1.27a2.527 2.527 0 0 1-2.521-2.522 2.528 2.528 0 0 1 2.521-2.522h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.521h-6.313z" fill="#ECB22E"/>
  </svg>
);

const OutlookIcon = ({ className, size = 16 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M24 7.387v10.478c0 .23-.08.424-.238.583a.793.793 0 0 1-.583.238h-8.304v-12.5h8.304c.23 0 .424.08.583.238.159.159.238.353.238.583v.38z" fill="#0364B8"/>
    <path d="M14.875 6.186v12.5l-1.25.625L2.375 24 1.75 23.688 0 22.75V1.938L1.75.312 13.625 5.5l1.25.686z" fill="#0078D4"/>
    <path d="M14.875 6.186H24v5.621h-9.125V6.186z" fill="#28A8EA"/>
    <path d="M14.875 11.807H24v5.621h-9.125v-5.621z" fill="#0078D4"/>
    <path d="M14.875 6.186v5.621H24V7.387a.793.793 0 0 0-.238-.583.793.793 0 0 0-.583-.238h-8.304v-.38z" fill="#50D9FF"/>
    <ellipse cx="7.5" cy="12.5" rx="3.75" ry="3.75" fill="#0A2767" opacity="0.5"/>
    <ellipse cx="7.5" cy="12.5" rx="3" ry="3" fill="white"/>
    <ellipse cx="7.5" cy="12.5" rx="2.25" ry="2.25" fill="#0078D4"/>
  </svg>
);

const ServiceNowIcon = ({ className, size = 16 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 15.5c-3.038 0-5.5-2.462-5.5-5.5S8.962 6.5 12 6.5s5.5 2.462 5.5 5.5-2.462 5.5-5.5 5.5z" fill="#81B5A1"/>
    <circle cx="12" cy="12" r="3" fill="#81B5A1"/>
  </svg>
);

const JiraIcon = ({ className, size = 16 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005z" fill="#2684FF"/>
    <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005z" fill="url(#jira-a)" opacity="0.4"/>
    <path d="M17.362 5.77H5.791a5.218 5.218 0 0 0 5.232 5.214h2.13v2.057A5.216 5.216 0 0 0 18.366 18.3V6.775a1.005 1.005 0 0 0-1.004-1.005z" fill="#2684FF"/>
    <path d="M23.152 0H11.58a5.22 5.22 0 0 0 5.233 5.215h2.13v2.057A5.216 5.216 0 0 0 24.157 12.53V1.005A1.005 1.005 0 0 0 23.152 0z" fill="#2684FF"/>
    <defs>
      <linearGradient id="jira-a" x1="11.99" y1="11.94" x2="7.04" y2="17.26" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0052CC"/>
        <stop offset="1" stopColor="#2684FF"/>
      </linearGradient>
    </defs>
  </svg>
);

type ActionType = "send" | "status-change";

type InboxItem = {
  id: number;
  source: string;
  sourceIcon: typeof SlackIcon;
  sourceColor: string;
  from: string;
  subject: string;
  preview: string;
  time: string;
  fullQuestion: string;
  reasoning: {
    title: string;
    steps: { icon: typeof Search; label: string; detail: string }[];
  };
  draft: string;
  status: "pending" | "approved" | "editing";
  actionType: ActionType;
  actionLabel?: string;
  secondaryActionLabel?: string;
  sentMessage?: string;
  questionLabel?: string;
  draftLabel?: string;
};

const inboxItems: InboxItem[] = [
  {
    id: 1,
    source: "Slack",
    sourceIcon: SlackIcon,
    sourceColor: "",
    from: "Lisa Chen (Sales)",
    subject: "How is Sales KPI calculated?",
    preview: "Hey team, I need to explain our KPI formula to a new hire…",
    time: "2 min ago",
    fullQuestion:
      "Hey team, I need to explain our Sales KPI formula to a new hire. How exactly is the Quarterly Revenue Attainment KPI calculated? Is it based on closed-won deals only or does it include pipeline weighted amounts?",
    reasoning: {
      title: "AI Synthesis Process",
      steps: [
        { icon: Search, label: "Source Discovery", detail: 'Found "Sales KPI Framework v3.2" in Confluence & 2 related Slack threads' },
        { icon: Database, label: "Data Cross-Reference", detail: "Verified formula against Salesforce report configs and last QBR deck" },
        { icon: FileText, label: "Policy Check", detail: "Confirmed with Rev Ops handbook: closed-won only, weighted pipeline excluded" },
        { icon: Brain, label: "Draft Generation", detail: "Composed response synthesizing 4 sources into a clear, structured answer" },
      ],
    },
    draft: `Hi Lisa,

Great question! Here's how the Quarterly Revenue Attainment KPI is calculated:

**Formula:** (Closed-Won Revenue ÷ Quarterly Target) × 100

**Key details:**
• Only **closed-won deals** are counted — pipeline weighted amounts are excluded
• The quarterly target is set per-rep by Rev Ops at the start of each quarter
• Multi-year deals are recognized in the quarter the contract is signed (per ASC 606)
• Renewals count toward attainment only if there's an upsell component ≥15%

**Sources:** Rev Ops Handbook §4.2, Salesforce "Quarterly Attainment" report, Q3 QBR deck (slide 12)

Let me know if you need anything else!`,
    status: "pending",
    actionType: "send",
  },
  {
    id: 2,
    source: "Outlook",
    sourceIcon: OutlookIcon,
    sourceColor: "",
    from: "David Park (Product)",
    subject: "Sprint velocity report needed",
    preview: "Can someone pull together the velocity numbers for…",
    time: "8 min ago",
    fullQuestion:
      "Can someone pull together the velocity numbers for the Platform team's last 3 sprints? The VP of Eng is asking for a trend analysis before tomorrow's planning session.",
    reasoning: {
      title: "AI Synthesis Process",
      steps: [
        { icon: Search, label: "Source Discovery", detail: "Pulled Sprint 14-16 data from Jira boards & past standup summaries" },
        { icon: Database, label: "Data Aggregation", detail: "Calculated avg velocity: 47 → 52 → 58 story points (trending +11.7%/sprint)" },
        { icon: FileText, label: "Context Addition", detail: "Noted team grew by 1 dev in Sprint 15, explaining velocity jump" },
        { icon: Brain, label: "Draft Generation", detail: "Created trend summary with chart-ready data and key takeaways" },
      ],
    },
    draft: `Hi David,

Here's the Platform team velocity summary for Sprints 14–16:

| Sprint | Story Points | Change |
|--------|-------------|--------|
| Sprint 14 | 47 pts | baseline |
| Sprint 15 | 52 pts | +10.6% |
| Sprint 16 | 58 pts | +11.5% |

**Trend:** Consistent upward trajectory, averaging +11% per sprint.

**Context:** The team added one senior dev (Maya) at the start of Sprint 15, which accounts for the initial jump. The continued increase in Sprint 16 suggests the onboarding is going well.

**Recommendation for planning:** A conservative Sprint 17 target of 55-60 pts seems realistic.

Source: Jira Platform Board, Sprint retrospective notes`,
    status: "pending",
    actionType: "send",
  },
  {
    id: 3,
    source: "ServiceNow",
    sourceIcon: ServiceNowIcon,
    sourceColor: "",
    from: "Auto-escalation",
    subject: "SSO outage — root cause update",
    preview: "INC-4892 escalated: Customer requesting RCA for…",
    time: "15 min ago",
    fullQuestion:
      "INC-4892 has been escalated. The customer (Acme Corp) is requesting a root cause analysis for the SSO authentication outage that occurred on March 28th. They need this for their compliance audit.",
    reasoning: {
      title: "AI Synthesis Process",
      steps: [
        { icon: Search, label: "Incident Correlation", detail: "Linked INC-4892 to Datadog alert #2847 and PagerDuty incident timeline" },
        { icon: Database, label: "Log Analysis", detail: "Identified expired OAuth certificate as root cause from CloudWatch logs" },
        { icon: FileText, label: "Template Matching", detail: "Used RCA template from SRE runbook, pre-filled with incident timeline" },
        { icon: Brain, label: "Draft Generation", detail: "Composed customer-facing RCA with technical detail appropriate for compliance" },
      ],
    },
    draft: `Root Cause Analysis — INC-4892

**Incident:** SSO Authentication Outage
**Duration:** March 28, 14:23–15:47 UTC (84 minutes)
**Impact:** ~340 users unable to authenticate via SAML SSO

**Root Cause:** An OAuth signing certificate expired at 14:22 UTC. The auto-renewal job failed silently due to a misconfigured IAM role introduced during the March 25 infrastructure update.

**Resolution:** Certificate manually rotated at 15:41 UTC. Service restored at 15:47 UTC.

**Preventive Measures:**
1. Certificate expiry monitoring added (alerts at 30, 14, 7 days)
2. IAM role permissions audited and corrected
3. Auto-renewal job added to integration test suite

This RCA is suitable for compliance documentation per SOC 2 Type II requirements.`,
    status: "pending",
    actionType: "send",
  },
  {
    id: 4,
    source: "Jira",
    sourceIcon: JiraIcon,
    sourceColor: "",
    from: "System Notification",
    subject: "Upstream task complete — ready to start",
    preview: "PLAT-347 \"Auth service migration\" is now Done…",
    time: "5 min ago",
    questionLabel: "Detail",
    draftLabel: "AI-Generated Comment",
    fullQuestion:
      "PLAT-347 \"Auth service migration to v3\" has been moved to Done by Sarah Kim. Your dependent task PLAT-352 \"Integrate SSO with new auth service\" is now unblocked. Sprint 17 ends in 8 days.",
    reasoning: {
      title: "AI Synthesis Process",
      steps: [
        { icon: Search, label: "Dependency Check", detail: "Detected PLAT-347 (blocker) moved to Done — PLAT-352 is now unblocked" },
        { icon: Database, label: "Context Gathering", detail: "Pulled PLAT-352 acceptance criteria, linked PRs from PLAT-347, and sprint timeline" },
        { icon: FileText, label: "Readiness Assessment", detail: "Verified auth-service v3 is deployed to staging; API docs updated; no remaining blockers" },
        { icon: Brain, label: "Action Recommendation", detail: "Prepared Jira comment summarizing readiness and suggested status transition" },
      ],
    },
    draft: `Starting work on PLAT-352. Blocker PLAT-347 is now resolved — here's the readiness summary:

**Dependencies cleared:**
• Auth-service v3 deployed to staging ✅
• All 47 integration tests passing ✅
• API docs updated in Confluence ✅

**My plan:**
1. Wire SSO login flow to v3 auth endpoints (Day 1)
2. Implement backward-compatible token refresh (Day 2)
3. Document rollback path in SRE runbook (Day 2-3)

**Estimated completion:** 3 days (5 story points)

Moving to In Progress now.`,
    status: "pending",
    actionType: "status-change",
    actionLabel: "Start Task",
    secondaryActionLabel: "Comment & Start Task",
    sentMessage: "Task started — status updated to In Progress",
  },
];

const initialItems = inboxItems.slice(0, 3);
const incomingItemsPool: InboxItem[] = [
  inboxItems[3], // Jira upstream task
  {
    id: 5,
    source: "Slack",
    sourceIcon: SlackIcon,
    sourceColor: "",
    from: "Mike Torres (Engineering)",
    subject: "API rate limits for v3 migration?",
    preview: "What are the new rate limits for the auth-service v3…",
    time: "Just now",
    fullQuestion: "What are the new rate limits for the auth-service v3 API? We're planning the migration and need to know if our current usage patterns will hit any throttling.",
    reasoning: {
      title: "AI Synthesis Process",
      steps: [
        { icon: Search, label: "Source Discovery", detail: 'Found rate limit specs in "Auth Service v3 API Reference" on Confluence' },
        { icon: Database, label: "Usage Analysis", detail: "Pulled current API call volumes from Datadog: avg 1,200 req/min, peak 3,400 req/min" },
        { icon: FileText, label: "Comparison", detail: "v3 limits (5,000 req/min) exceed current peak usage by 47% — no throttling risk" },
        { icon: Brain, label: "Draft Generation", detail: "Composed comparison table with migration safety assessment" },
      ],
    },
    draft: `Hi Mike,

Here are the auth-service v3 rate limits:

| Endpoint | v2 Limit | v3 Limit |
|----------|----------|----------|
| /auth/token | 1,000/min | 5,000/min |
| /auth/refresh | 500/min | 2,000/min |
| /auth/validate | 2,000/min | 10,000/min |

**Your current usage:** Peak 3,400 req/min across all endpoints — well within v3 limits.

**Assessment:** No throttling risk for the migration. You have ~47% headroom at peak.

Source: Auth Service v3 API Reference (Confluence), Datadog dashboard "API Gateway Metrics"`,
    status: "pending",
    actionType: "send",
  },
  {
    id: 6,
    source: "Outlook",
    sourceIcon: OutlookIcon,
    sourceColor: "",
    from: "Rachel Adams (Legal)",
    subject: "DPA update for Acme Corp",
    preview: "Need the updated data processing addendum for…",
    time: "Just now",
    fullQuestion: "We need to send Acme Corp the updated Data Processing Addendum reflecting our new sub-processors list. Can you prepare the draft with the changes highlighted?",
    reasoning: {
      title: "AI Synthesis Process",
      steps: [
        { icon: Search, label: "Document Retrieval", detail: "Found current DPA v2.1 and new sub-processor list approved by Security team" },
        { icon: Database, label: "Diff Analysis", detail: "Identified 2 new sub-processors added, 1 removed since last DPA version" },
        { icon: FileText, label: "Compliance Check", detail: "Verified changes align with GDPR Art. 28 and Acme Corp's contractual requirements" },
        { icon: Brain, label: "Draft Generation", detail: "Prepared updated DPA with tracked changes summary for legal review" },
      ],
    },
    draft: `Hi Rachel,

Here's the updated DPA draft for Acme Corp:

**Changes from v2.1 → v2.2:**

**Added sub-processors:**
• CloudFlare (CDN & DDoS protection) — EU region only
• Datadog (Infrastructure monitoring) — SOC 2 Type II certified

**Removed:**
• LogRocket (Session replay) — discontinued as of Q2

**Key clauses updated:**
• Section 4.3: Sub-processor list now references Annex C (auto-updated)
• Section 7.1: Data retention period aligned to 90 days per new policy

All changes comply with GDPR Art. 28. Ready for your review and Acme Corp sign-off.`,
    status: "pending",
    actionType: "send",
  },
  {
    id: 7,
    source: "Jira",
    sourceIcon: JiraIcon,
    sourceColor: "",
    from: "System Notification",
    subject: "Sprint review — action items assigned",
    preview: "3 action items from Sprint 16 retro assigned to you…",
    time: "Just now",
    questionLabel: "Detail",
    draftLabel: "AI-Generated Comment",
    fullQuestion: "Sprint 16 retrospective has concluded. 3 action items have been assigned to you: (1) Document auth-service v3 rollback procedure, (2) Set up monitoring alerts for certificate expiry, (3) Update on-call runbook with new escalation path. All items are due by end of Sprint 17.",
    reasoning: {
      title: "AI Synthesis Process",
      steps: [
        { icon: Search, label: "Context Retrieval", detail: "Pulled Sprint 16 retro notes and linked incidents (INC-4892)" },
        { icon: Database, label: "Effort Estimation", detail: "Cross-referenced with similar past tasks: estimated 2 story points total" },
        { icon: FileText, label: "Template Match", detail: "Found existing runbook template and monitoring alert configs to accelerate work" },
        { icon: Brain, label: "Action Plan", detail: "Prepared acceptance comment and sub-task breakdown" },
      ],
    },
    draft: `Acknowledged — picking up all 3 action items from Sprint 16 retro:

**1. Document auth-service v3 rollback procedure**
• Will use existing SRE Runbook "Service Rollback" template
• ETA: 1 hour

**2. Set up certificate expiry monitoring**
• Cloning Datadog monitor template, setting alerts at 30/14/7 days
• Related to INC-4892 preventive measure #1
• ETA: 30 min

**3. Update on-call runbook — new escalation path**
• Adding: L1 → L2 → Security On-Call (post INC-4892)
• Will sync PagerDuty escalation policy
• ETA: 45 min

**Total estimate:** 2 story points — targeting completion by mid-sprint.`,
    status: "pending",
    actionType: "status-change",
    actionLabel: "Start Tasks",
    secondaryActionLabel: "Comment & Start Tasks",
    sentMessage: "Tasks started — comment posted to Jira",
  },
  {
    id: 8,
    source: "ServiceNow",
    sourceIcon: ServiceNowIcon,
    sourceColor: "",
    from: "Auto-assignment",
    subject: "New access request — review needed",
    preview: "REQ-7231: Contractor requesting prod database access…",
    time: "Just now",
    fullQuestion: "REQ-7231: External contractor (James Liu, Vendor: TechPartners Inc.) is requesting read-only access to the production analytics database for the Q1 data migration project. Requires manager approval.",
    reasoning: {
      title: "AI Synthesis Process",
      steps: [
        { icon: Search, label: "Policy Lookup", detail: "Checked contractor access policy: requires manager + security approval for prod" },
        { icon: Database, label: "Background Check", detail: "Verified contractor has active NDA, background check passed, SOW covers data access" },
        { icon: FileText, label: "Risk Assessment", detail: "Read-only access to analytics DB: LOW risk per data classification matrix" },
        { icon: Brain, label: "Recommendation", detail: "Pre-filled approval with 90-day expiry and audit logging conditions" },
      ],
    },
    draft: `**Access Request Review — REQ-7231**

**Requestor:** James Liu (Contractor, TechPartners Inc.)
**Access:** Read-only, Production Analytics Database
**Project:** Q1 Data Migration
**Duration:** 90 days (auto-expires)

**Compliance Check:**
• ✅ Active NDA on file (expires Dec 2026)
• ✅ Background check passed
• ✅ SOW Section 3.2 covers production data access
• ✅ Data classification: Internal (LOW risk for read-only)

**Recommended conditions:**
1. Read-only access only — no export capabilities
2. All queries logged to audit trail
3. Access reviewed at 45-day midpoint
4. Auto-revocation after 90 days

**Recommendation:** Approve with stated conditions.`,
    status: "pending",
    actionType: "send",
  },
  {
    id: 9,
    source: "Slack",
    sourceIcon: SlackIcon,
    sourceColor: "",
    from: "Anna Wei (Customer Success)",
    subject: "Renewal risk — Globex account health",
    preview: "Seeing some red flags on the Globex renewal coming up…",
    time: "Just now",
    fullQuestion: "I'm seeing some concerning signals on the Globex Corp renewal (due in 45 days). Their product usage dropped 30% last quarter and they haven't responded to my last two check-in emails. Can you pull together an account health summary?",
    reasoning: {
      title: "AI Synthesis Process",
      steps: [
        { icon: Search, label: "Account Data", detail: "Pulled Globex usage metrics from product analytics and Salesforce account history" },
        { icon: Database, label: "Signal Analysis", detail: "Usage down 31%, support tickets up 2x, NPS dropped from 8 to 5 in last survey" },
        { icon: FileText, label: "Playbook Match", detail: "Matched to 'At-Risk Renewal' playbook — recommends exec sponsor escalation" },
        { icon: Brain, label: "Draft Generation", detail: "Created account health summary with risk score and recommended save plan" },
      ],
    },
    draft: `Hi Anna,

**Globex Corp Account Health Summary**

**Risk Score:** 🔴 High (72/100 → needs intervention)
**Renewal Date:** May 14, 2026 (45 days)
**ARR:** $284,000

**Warning Signals:**
• Product usage: -31% QoQ (active users: 89 → 61)
• Support tickets: 2x increase (mostly onboarding-related)
• NPS score: dropped 8 → 5 in Q4 survey
• Champion (VP Ops) left the company in February

**Recommended Save Plan:**
1. **This week:** Exec sponsor call (our VP CS → their new VP Ops)
2. **Week 2:** Free training session for their new team members
3. **Week 3:** Custom ROI report showing value delivered YTD
4. **Week 4:** Renewal discussion with flexible terms if needed

Source: Salesforce, Product Analytics, Zendesk, Gainsight`,
    status: "pending",
    actionType: "send",
  },
  {
    id: 10,
    source: "Outlook",
    sourceIcon: OutlookIcon,
    sourceColor: "",
    from: "Tom Bradley (Finance)",
    subject: "Budget variance explanation needed",
    preview: "The board is asking why cloud costs were 18% over…",
    time: "Just now",
    fullQuestion: "The board is asking why cloud infrastructure costs were 18% over budget last quarter. I need a clear breakdown by service and an explanation of what drove the overage. Can you pull this together before Thursday's board prep?",
    reasoning: {
      title: "AI Synthesis Process",
      steps: [
        { icon: Search, label: "Cost Data", detail: "Pulled AWS Cost Explorer data and compared against Q4 budget allocations" },
        { icon: Database, label: "Variance Analysis", detail: "Top drivers: EC2 +22% (auth migration), S3 +35% (data lake expansion), RDS +8%" },
        { icon: FileText, label: "Context Addition", detail: "Linked overage to approved projects: auth-service migration and compliance data retention" },
        { icon: Brain, label: "Draft Generation", detail: "Created board-ready variance summary with approved vs. unplanned breakdown" },
      ],
    },
    draft: `Hi Tom,

**Q4 Cloud Cost Variance Analysis**

**Total Budget:** $1.2M | **Actual:** $1.42M | **Variance:** +$216K (+18%)

| Service | Budget | Actual | Variance | Driver |
|---------|--------|--------|----------|--------|
| EC2 | $480K | $586K | +$106K | Auth service migration (approved) |
| S3 | $180K | $243K | +$63K | Data lake expansion for compliance |
| RDS | $320K | $345K | +$25K | Read replica scaling |
| Other | $220K | $242K | +$22K | Minor overages across services |

**Key Takeaway:** 78% of the overage ($169K) ties to two board-approved projects. The remaining $47K is within normal operational variance.

**Q1 Forecast:** Back to budget — migration complete, data lake costs stabilizing.

Source: AWS Cost Explorer, Finance Budget Tracker, Project Approval Records`,
    status: "pending",
    actionType: "send",
  },
];

/** Notification toast component */
const InboxNotification = ({
  item,
  onClose,
}: {
  item: InboxItem;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, x: 20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -20, x: 20 }}
      className="absolute top-16 right-4 z-50 w-80 rounded-xl border border-border/60 bg-card card-shadow overflow-hidden"
    >
      <div className="px-4 py-3 flex items-start gap-3">
        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
          <Bell size={14} className="text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <item.sourceIcon size={12} />
            <span className="text-[11px] font-mono text-muted-foreground">{item.source}</span>
          </div>
          <p className="text-sm font-semibold text-foreground truncate">{item.subject}</p>
          <p className="text-xs text-muted-foreground truncate">{item.from}</p>
        </div>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors shrink-0 mt-0.5">
          <X size={14} />
        </button>
      </div>
      <div className="h-0.5 bg-border/20">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transition={{ duration: 3, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

const renderMarkdown = (text: string) => {
  const lines = text.split("\n");
  const elements: JSX.Element[] = [];
  let tableRows: string[][] = [];
  let inTable = false;

  const renderInline = (str: string) => {
    // Bold
    const parts: (string | JSX.Element)[] = [];
    const regex = /\*\*(.+?)\*\*/g;
    let last = 0;
    let match;
    let key = 0;
    while ((match = regex.exec(str)) !== null) {
      if (match.index > last) parts.push(str.slice(last, match.index));
      parts.push(<strong key={key++} className="font-semibold text-foreground">{match[1]}</strong>);
      last = regex.lastIndex;
    }
    if (last < str.length) parts.push(str.slice(last));
    return parts;
  };

  const flushTable = () => {
    if (tableRows.length === 0) return;
    const header = tableRows[0];
    const body = tableRows.slice(1).filter(r => !r.every(c => /^[-|:\s]+$/.test(c)));
    elements.push(
      <div key={elements.length} className="overflow-x-auto my-2">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border/40">
              {header.map((cell, i) => (
                <th key={i} className="text-left py-1.5 px-3 text-xs font-semibold text-foreground/80">{cell.trim()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, ri) => (
              <tr key={ri} className="border-b border-border/20">
                {row.map((cell, ci) => (
                  <td key={ci} className="py-1.5 px-3 text-sm text-foreground/80">{renderInline(cell.trim())}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableRows = [];
    inTable = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Table row
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      inTable = true;
      const cells = line.split("|").slice(1, -1);
      // Skip separator rows
      if (cells.every(c => /^[-:\s]+$/.test(c.trim()))) continue;
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Empty line
    if (line.trim() === "") {
      elements.push(<div key={elements.length} className="h-2" />);
      continue;
    }

    // Bullet points
    if (line.trim().startsWith("•") || line.trim().startsWith("- ") || line.trim().match(/^\d+\.\s/)) {
      const content = line.trim().replace(/^[•\-]\s*/, "").replace(/^\d+\.\s*/, "");
      elements.push(
        <div key={elements.length} className="flex items-start gap-2 ml-1">
          <span className="text-primary mt-1 shrink-0">•</span>
          <span className="text-sm text-foreground/90 leading-relaxed">{renderInline(content)}</span>
        </div>
      );
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={elements.length} className="text-sm text-foreground/90 leading-relaxed">
        {renderInline(line)}
      </p>
    );
  }

  if (inTable) flushTable();

  return <div className="space-y-1">{elements}</div>;
};

const InteractiveDemo = () => {
  const [visibleItems, setVisibleItems] = useState<InboxItem[]>(initialItems);
  const [selectedId, setSelectedId] = useState<number>(1);
  const [sentItems, setSentItems] = useState<Record<number, string>>({});
  const [showMarkdown, setShowMarkdown] = useState(false);
  const [showReasoning, setShowReasoning] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDrafts, setEditedDrafts] = useState<Record<number, string>>({});
  const [newItemIds, setNewItemIds] = useState<Set<number>>(new Set());
  const [notification, setNotification] = useState<InboxItem | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const isInViewRef = useRef(false);
  const incomingIndexRef = useRef(0);
  const addTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const notifTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const selected = visibleItems.find((i) => i.id === selectedId) ?? visibleItems[0];
  const currentDraft = editedDrafts[selectedId] ?? selected.draft;
  const isSent = sentItems[selectedId] !== undefined;
  const renderedDraft = useMemo(() => renderMarkdown(currentDraft), [currentDraft]);

  const clearAddTimer = useCallback(() => {
    if (addTimerRef.current) { clearTimeout(addTimerRef.current); addTimerRef.current = null; }
  }, []);

  const clearResetTimer = useCallback(() => {
    if (resetTimerRef.current) { clearTimeout(resetTimerRef.current); resetTimerRef.current = null; }
  }, []);

  const scheduleNext = useCallback(() => {
    clearAddTimer();
    if (incomingIndexRef.current >= incomingItemsPool.length) return;
    const delay = incomingIndexRef.current === 0 ? 5000 : 5000 + Math.random() * 5000;
    addTimerRef.current = setTimeout(() => {
      if (!isInViewRef.current) return;
      setVisibleItems((prev) => {
        if (prev.length >= 10) return prev;
        const newItem = incomingItemsPool[incomingIndexRef.current];
        if (!newItem) return prev;
        incomingIndexRef.current++;
        setNewItemIds((ids) => new Set(ids).add(newItem.id));
        // Show notification
        setNotification(newItem);
        if (notifTimerRef.current) clearTimeout(notifTimerRef.current);
        notifTimerRef.current = setTimeout(() => setNotification(null), 3000);
        // Remove highlight after 4s
        setTimeout(() => {
          setNewItemIds((ids) => {
            const next = new Set(ids);
            next.delete(newItem.id);
            return next;
          });
        }, 4000);
        return [newItem, ...prev];
      });
      scheduleNext();
    }, delay);
  }, [clearAddTimer]);

  // IntersectionObserver for scroll in/out detection
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasInView = isInViewRef.current;
        isInViewRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          clearResetTimer();
          if (!wasInView) {
            scheduleNext();
          }
        } else {
          clearAddTimer();
          // Reset after 10 seconds out of view
          resetTimerRef.current = setTimeout(() => {
            setVisibleItems(initialItems);
            setNewItemIds(new Set());
            incomingIndexRef.current = 0;
            setNotification(null);
          }, 10000);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearAddTimer();
      clearResetTimer();
      if (notifTimerRef.current) clearTimeout(notifTimerRef.current);
    };
  }, [scheduleNext, clearAddTimer, clearResetTimer]);

  const handleApprove = () => {
    setSentItems((prev) => ({ ...prev, [selectedId]: selected.source }));
    setIsEditing(false);
  };

  const handleReset = () => {
    setSentItems({});
    setEditedDrafts({});
    setIsEditing(false);
    setVisibleItems(initialItems);
    setNewItemIds(new Set());
    setNotification(null);
    setSelectedId(1);
    setShowReasoning(false);
    setShowMarkdown(false);
    incomingIndexRef.current = 0;
    if (isInViewRef.current) scheduleNext();
  };

  return (
    <section ref={sectionRef} id="demo" className="relative py-12 md:py-16">
      <div className="container relative max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            Interactive Demo
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-foreground">
            See It <span className="text-gradient">In Action</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-border/60 bg-card overflow-hidden card-shadow"
        >
          {/* Notification Toast */}
          <AnimatePresence>
            {notification && (
              <InboxNotification
                item={notification}
                onClose={() => setNotification(null)}
              />
            )}
          </AnimatePresence>
          {/* Toolbar */}
          <div className="flex items-center justify-between border-b border-border/40 px-5 py-3 bg-muted/30">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-sm font-mono text-muted-foreground">
                Action Inbox
              </span>
            </div>
            <button
              onClick={handleReset}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Reset demo
            </button>
          </div>

          <div className="flex flex-col md:flex-row h-[calc(100vh-220px)] min-h-[400px] max-h-[700px]">
            {/* Left Pane */}
            <div className="w-full md:w-[320px] border-b md:border-b-0 md:border-r border-border/40 bg-muted/20 overflow-y-auto">
              <div className="px-4 py-3 border-b border-border/30">
                <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Your Action Items
                </h3>
              </div>
              <AnimatePresence initial={false}>
                {visibleItems.map((item) => {
                  const isActive = selectedId === item.id;
                  const isItemSent = sentItems[item.id] !== undefined;
                  const isNew = newItemIds.has(item.id);
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setSelectedId(item.id)}
                      className={`w-full text-left px-4 py-4 border-b border-border/20 transition-all duration-200 ${
                        isNew && !isActive
                          ? "bg-primary/[0.1] border-l-2 border-l-primary ring-1 ring-primary/20"
                          : isActive
                          ? "bg-primary/[0.06] border-l-2 border-l-primary"
                          : "hover:bg-muted/40 border-l-2 border-l-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <item.sourceIcon size={14} className={item.sourceColor} />
                        <span className="text-[11px] font-mono text-muted-foreground">
                          {item.source}
                        </span>
                        {isNew && (
                          <span className="text-[9px] font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-full px-1.5 py-0.5">
                            New
                          </span>
                        )}
                        <span className="text-[11px] text-muted-foreground/60 ml-auto flex items-center gap-1">
                          <Clock size={10} />
                          {item.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className={`text-sm font-semibold truncate flex-1 ${isNew ? "text-primary" : "text-foreground"}`}>
                          {item.subject}
                        </p>
                        {isItemSent && (
                          <Check size={14} className="text-green-500 shrink-0" />
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <User size={10} className="text-muted-foreground/60" />
                        <span className="text-xs text-muted-foreground truncate">
                          {item.from}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Right Pane */}
            <div className="flex-1 flex flex-col overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedId}-${isSent}`}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 flex flex-col min-h-0"
                >
                  {!isSent ? (
                    <>
                      {/* Header */}
                      <div className="px-6 py-4 border-b border-border/30">
                        <div className="flex items-center gap-2 mb-2">
                          <selected.sourceIcon size={16} className={selected.sourceColor} />
                          <span className="text-xs font-mono text-muted-foreground">
                            via {selected.source}
                          </span>
                          <ChevronRight size={12} className="text-muted-foreground/40" />
                          <span className="text-xs text-muted-foreground">
                            {selected.from}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground">
                          {selected.subject}
                        </h3>
                      </div>

                      <div className="flex-1 min-h-0 px-6 py-5 space-y-4 overflow-hidden flex flex-col">
                        {/* Original Question */}
                        <div className="shrink-0">
                          <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                            {selected.questionLabel || "Original Question"}
                          </h4>
                          <div className="rounded-xl bg-muted/40 border border-border/30 p-3 max-h-[7.5rem] overflow-y-auto">
                            <p className="text-sm text-foreground/90 leading-relaxed">
                              {selected.fullQuestion}
                            </p>
                          </div>
                        </div>

                        {/* AI Draft */}
                        <div className="flex flex-col flex-1 min-h-0">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                              {isEditing ? "Editing Draft" : (selected.draftLabel || "AI-Generated Draft")}
                            </h4>
                            {!isEditing && (
                              <button
                                onClick={() => setShowMarkdown(!showMarkdown)}
                                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground hover:text-foreground transition-colors rounded-lg border border-border/40 px-2.5 py-1"
                              >
                                {showMarkdown ? <Eye size={12} /> : <Code size={12} />}
                                {showMarkdown ? "Formatted" : "Markdown"}
                              </button>
                            )}
                          </div>
                          <div className="rounded-xl bg-muted/20 border border-border/30 p-4 overflow-y-auto flex-1 min-h-0">
                            {isEditing ? (
                              <textarea
                                value={currentDraft}
                                onChange={(e) =>
                                  setEditedDrafts((prev) => ({
                                    ...prev,
                                    [selectedId]: e.target.value,
                                  }))
                                }
                                className="w-full min-h-[240px] bg-transparent text-sm text-foreground/90 leading-relaxed font-mono resize-y outline-none"
                              />
                            ) : showMarkdown ? (
                              <pre className="text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap font-mono text-xs">
                                {currentDraft}
                              </pre>
                            ) : (
                              renderedDraft
                            )}
                          </div>
                        </div>

                        {/* AI Reasoning */}
                        <div className="shrink-0 bg-card pt-2 relative z-10">
                          <button
                            onClick={() => setShowReasoning(!showReasoning)}
                            className="text-xs font-mono text-primary uppercase tracking-wider flex items-center gap-2 hover:opacity-80 transition-opacity bg-card"
                          >
                            <Sparkles size={12} />
                            {selected.reasoning.title}
                            <ChevronDown
                              size={14}
                              className={`transition-transform duration-200 ${showReasoning ? "rotate-180" : ""}`}
                            />
                          </button>
                          <AnimatePresence>
                            {showReasoning && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden mt-3"
                              >
                                <div className="space-y-2">
                                  {selected.reasoning.steps.map((step, i) => (
                                    <motion.div
                                      key={i}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.1 }}
                                      className="flex items-start gap-3 rounded-xl bg-primary/[0.04] border border-primary/10 p-3"
                                    >
                                      <div className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <step.icon size={14} className="text-primary" />
                                      </div>
                                      <div>
                                        <p className="text-xs font-semibold text-foreground">
                                          {step.label}
                                        </p>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                          {step.detail}
                                        </p>
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Action Bar */}
                      <div className="shrink-0 px-6 py-4 border-t border-border/30 bg-muted/20 flex items-center gap-3">
                        {isEditing ? (
                          <>
                            <Button
                              variant="hero"
                              size="lg"
                              onClick={() => setIsEditing(false)}
                              className="gap-2"
                            >
                              <Check size={16} />
                              Done Editing
                            </Button>
                            <Button
                              variant="hero-outline"
                              size="lg"
                              onClick={() => {
                                setEditedDrafts((prev) => {
                                  const next = { ...prev };
                                  delete next[selectedId];
                                  return next;
                                });
                                setIsEditing(false);
                              }}
                              className="gap-2"
                            >
                              Discard Changes
                            </Button>
                          </>
                        ) : (
                          <>
                            {selected.actionType === "status-change" ? (
                              <>
                                <Button
                                  variant="hero"
                                  size="lg"
                                  onClick={handleApprove}
                                  className="gap-2"
                                >
                                  <Play size={16} />
                                  {selected.actionLabel}
                                </Button>
                                {selected.secondaryActionLabel && (
                                  <Button
                                    variant="hero-outline"
                                    size="lg"
                                    onClick={handleApprove}
                                    className="gap-2"
                                  >
                                    <Edit3 size={16} />
                                    {selected.secondaryActionLabel}
                                  </Button>
                                )}
                              </>
                            ) : (
                              <>
                                <Button
                                  variant="hero"
                                  size="lg"
                                  onClick={handleApprove}
                                  className="gap-2"
                                >
                                  <Check size={16} />
                                  Approve & Send to {selected.source}
                                </Button>
                                <Button
                                  variant="hero-outline"
                                  size="lg"
                                  onClick={() => setIsEditing(true)}
                                  className="gap-2"
                                >
                                  <Edit3 size={16} />
                                  Edit Draft
                                </Button>
                              </>
                            )}
                          </>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 flex items-center justify-center p-8">
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center max-w-md"
                      >
                        <div className="h-16 w-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-5">
                          {selected.actionType === "status-change" ? (
                            <Play size={28} className="text-green-500" />
                          ) : (
                            <Send size={28} className="text-green-500" />
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {selected.sentMessage || "Response Sent!"}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-6">
                          {selected.actionType === "status-change"
                            ? `Task status has been updated in ${sentItems[selectedId]} via secure MCP protocol. Data never left your VPC.`
                            : <>Your approved response has been written back to{" "}
                                <span className="text-foreground font-medium">{sentItems[selectedId]}</span>{" "}
                                via secure MCP protocol. Data never left your VPC.</>
                          }
                        </p>
                        <Button
                          variant="hero-outline"
                          size="lg"
                          className="gap-2"
                          onClick={() => window.open("#", "_blank")}
                        >
                          <ExternalLink size={16} />
                          View in {sentItems[selectedId]}
                        </Button>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveDemo;