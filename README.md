# SHIFAA

![SHIFAA platform preview](public/readme/Screenshot%202026-10-02%20013721.png)

SHIFAA is an intelligent patient journey management platform for connected, proactive healthcare. It brings patients, doctors, hospitals, caregivers, telemedicine services, health devices, and AI-assisted workflows into one secure digital ecosystem.

The project is based on the SHIFAA Business Requirements Document (BRD), Version 1.0, dated September 15, 2026. The BRD is the baseline for the product vision, business requirements, data model, security expectations, and future direction.

## Product Vision

SHIFAA supports the complete patient journey, from registration and initial assessment through diagnosis, treatment, monitoring, recovery, and long-term follow-up.

The platform is designed to:

- Centralize relevant patient medical information.
- Improve continuity of care before, during, and after visits.
- Help doctors access longitudinal patient history faster.
- Support medication reminders, tracking, and adherence analysis.
- Enable secure real-time and remote communication.
- Detect risks and abnormal changes earlier.
- Give caregivers controlled access when patient authorization permits.
- Provide hospitals with operational and healthcare quality analytics.

## Core Platform Areas

| Area                | Purpose                                                                                                   |
| ------------------- | --------------------------------------------------------------------------------------------------------- |
| Patient application | Access records, tests, images, vital signs, devices, reminders, treatment, and AI assistance.             |
| Doctor dashboard    | Review patient history, visits, tests, treatment plans, trends, and alerts.                               |
| Hospital dashboard  | Monitor capacity, utilization, staff performance, adherence, readmission, and quality indicators.         |
| Family portal       | Give authorized caregivers relevant patient visibility and alerts.                                        |
| Telemedicine        | Support secure chat, audio/video consultations, documents, and recommendations.                           |
| AI modules          | Provide health assistance, risk analysis, medical summaries, adherence analysis, and recovery monitoring. |

## Patient Journey

1. **Registration and setup** - Create an account, complete the patient profile, upload documents, and manage consent.
2. **Initial assessment** - Collect symptoms and context with AI-assisted guidance and risk indication.
3. **Appointment and consultation** - Book an appointment or start a remote consultation.
4. **Examination and diagnosis** - Record visits, assessments, diagnoses, tests, images, and treatment plans.
5. **Monitoring and follow-up** - Track medication, vital signs, devices, reminders, and notifications.
6. **Early warning and recovery** - Analyze trends, detect anomalies, issue alerts, and support recovery follow-up.

## AI Capabilities

SHIFAA defines five AI capabilities:

- **AI Health Assistant:** Collect symptoms, medication information, measurements, and initial context to provide early guidance and specialty direction.
- **Predictive Risk Analysis:** Analyze cumulative health data to identify potential complications earlier.
- **AI Medical Summary:** Summarize complex longitudinal records for authorized doctors.
- **Medication Adherence Analysis:** Detect missed or interrupted treatment behavior.
- **Recovery Monitoring and Anomaly Detection:** Monitor recovery trends and identify sudden changes in vital indicators.

AI outputs are decision-support information, not definitive clinician diagnoses. High-risk alerts should be routed to an authorized care provider, with confidence, limitations, and escalation rules defined before production use.

## Users and Access

The platform is designed for patients, doctors, caregivers, hospitals, administrators, and AI services. Access follows role-based access control (RBAC), least-privilege principles, and explicit patient consent where required.

Security expectations include encryption in transit and at rest, audit logging, protected health-data access, and support for multi-factor authentication in sensitive workflows.

## Scope

### In Scope

User accounts and roles, patient and professional profiles, caregiver authorization, appointments, visits, assessments, diagnoses, medical documents, tests, imaging, vital signs, devices, treatments, prescriptions, medication tracking, alerts, notifications, telemedicine, consent, audit logs, and doctor and hospital analytics.

### Future Expansion

External EHR/HIS integration, pharmacy and insurance integrations, advanced medical imaging analysis, broader IoT device connectivity, and production regulatory certification and clinical validation.

## Technology Stack

- [Next.js](https://nextjs.org/) 16 with the App Router
- React 19 and TypeScript
- [next-intl](https://next-intl.dev/) for Arabic and English localization
- Tailwind CSS 4 and shadcn/ui foundations
- Cairo via `next/font` for Arabic and Latin typography
- Lenis for accessible smooth scrolling
- Framer Motion for interface animation
- TanStack Query and Zustand for client-side state and data workflows
- Lucide React and React Icons for interface icons

## Getting Started

### Requirements

- Node.js 20 or later
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The supported localized routes are:

- [Arabic](http://localhost:3000/ar)
- [English](http://localhost:3000/en)

### Production Check

```bash
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

## Project Structure

```text
app/[locale]/       Localized App Router pages, layout, and global styles
components/        Reusable UI and client components
i18n/               Routing, request configuration, and navigation helpers
messages/           Arabic and English translation files
lib/                Shared utilities
public/             Static assets
```

## Requirements Baseline

The project requirements are documented in the supplied SHIFAA BRD. Changes to workflows, AI capabilities, security controls, scope, or the 31-entity data model should be reviewed against that document before implementation decisions are finalized.

The current repository contains the Next.js application foundation, localization setup, SHIFAA metadata and copy, design tokens, and smooth-scroll integration. Clinical workflows, authentication, data persistence, dashboards, telemedicine services, AI services, and external integrations remain implementation areas governed by the approved scope.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl.dev/docs)
- [Lenis Documentation](https://lenis.dev/)
