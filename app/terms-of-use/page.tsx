import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Rule from '@/components/ui/Rule'

export const metadata = {
  title: 'Terms of Service — ekai',
}

export default function TermsOfUse() {
  return (
    <>
      <Navbar />
      <main className="bg-cream pt-[60px]">
        <div className="max-w-[760px] mx-auto px-6 md:px-12 py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted mb-4">Legal</p>
          <h1 className="font-black text-ink tracking-[-0.035em] leading-[1.05] mb-4" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            Terms of Service
          </h1>
          <p className="text-muted text-[14px] mb-16">Last Updated July 08, 2024</p>

          <Rule />

          <div className="prose-ekai mt-16 flex flex-col gap-6">

            <p className="text-muted text-[15px] leading-relaxed">
              This Master Service Agreement (the &ldquo;Agreement&rdquo;) governs the use of the Service (defined below), and includes the Service Level Agreement found in Exhibit A (the &ldquo;SLA&rdquo;), any support plans in Exhibit B, any applicable Data Processing Addendum (&ldquo;DPA&rdquo;) in Exhibit C, and Security Overview in Exhibit D, all of which are hereby incorporated by reference in their entirety. This is a legal agreement between IDX Studios, Inc. (&ldquo;Ekai&rdquo;) and you or the entity that you represent (&ldquo;Customer&rdquo;). By accepting this Agreement, either by physically signing this Agreement, by clicking a box or button indicating your acceptance, by executing an order form or similar instrument that references this Agreement, or by accessing the Service, you agree to the terms of this Agreement. If you do not agree with the terms of this Agreement, you must not accept this Agreement, and may not use or access the Service.
            </p>

            <Section title="1. Definitions">
              <P>1.1 An &ldquo;Affiliate&rdquo; of a party means any entity that directly or indirectly controls, is controlled by, or is under common control with the party. For purposes of this definition, &ldquo;control&rdquo; means direct or indirect ownership or control of more than fifty percent (50%) of the voting interests of the party.</P>
              <P>1.2 &ldquo;Customer Data&rdquo; means Customer&apos;s content and application data uploaded by or on behalf of Customer to the Service.</P>
              <P>1.3 &ldquo;Customer Personal Data&rdquo; means Customer Data that is Personal Data owned or controlled by Customer and which ekai, a ekai affiliate or subcontractor may process in the course of providing the Service.</P>
              <P>1.4 &ldquo;Documentation&rdquo; means any documents regarding the Service made available to Customer by ekai, including user guides made available to Customer within the Service itself.</P>
              <P>1.5 &ldquo;Downtime Period&rdquo; means the same as defined in the SLA.</P>
              <P>1.6 &ldquo;Effective Date&rdquo; means the date Customer accepts the terms of this Agreement.</P>
              <P>1.7 &ldquo;Order&rdquo; means an order form or other agreed upon legally binding document placed by Customer that specifies a subscription period, licence quantities, description of the Service, and any ancillary services such as support and professional services purchased by Customer.</P>
              <P>1.8 &ldquo;Personal Data&rdquo; means (i) any information relating to an identified or identifiable natural person; and/or (ii) any information that identifies, relates to, describes, or could reasonably be linked, directly or indirectly, with a particular consumer or household. Unless prohibited by applicable laws or regulations, Personal Data shall not include information or data that is anonymized, de-identified and/or compiled on a generic basis and which does not name or identify a specific person.</P>
              <P>1.9 &ldquo;Service&rdquo; means the cloud-based software as a service offering purchased by Customer as specified in an applicable Order. The Service includes all updates, copies, modifications, and derivative works thereof. The Service does not include software that originates from Customer or a third party and interoperates with the Service. ekai shall be deemed to have accepted an Order if it supplies the Services to the Customer.</P>
              <P>1.10 &ldquo;Term&rdquo; means the longer of: (1) one year from the Effective Date; or (2) the period from the Effective Date until the date the last subscription period in any Order expires. If a Customer terminates any individual Services, any remaining Services, and this Agreement shall remain in force for the periods described in this section.</P>
            </Section>

            <Section title="2. Customer License">
              <P>2.1 License to Use the Service; Service and Support. Subject to Customer&apos;s compliance with this Agreement and Customer&apos;s payment of all fees due, for the duration of the applicable subscription period, ekai grants Customer a limited, non-exclusive, non-sublicensable, non-transferable (except as may be expressly permitted herein) revocable, right to access and use the Service in accordance with any Documentation, solely for Customer&apos;s internal business purposes, limited to the quantities and any other limitations set forth in the applicable Order.</P>
              <P>2.2 Suspension and Discontinuation of Service. ekai shall have the right to suspend the provision of the Services and/or deny the Customer&apos;s access to the Services without first hearing the Customer due to (a) a significant data security risk to the Database Services, (b) if applicable law or a court or administrative order requires ekai to do so, (c) if ekai becomes aware of, or reasonably suspects, any activities of the Customer or its authorised users that infringe on ekai&apos;s Acceptable Use Policy, (d) if the Services are used contrary to, or for a purpose prohibited by this Agreement, applicable laws or court or administrative orders, or (e) the Services are used in a manner that jeopardises the provision of the Services to other users.</P>
              <P>2.3 Subscription Period; Term of Agreement. Subject to Customer&apos;s compliance with its obligations under this Agreement, Customer may use the Service for the duration of Customer&apos;s subscription specified in the applicable Order. If Customer does not renew the subscription to the Service on or before the subscription period renewal date, Customer&apos;s right to use the Service terminates and the Service will no longer operate.</P>
            </Section>

            <Section title="3. Customer Obligations">
              <P>3.1 Use of the Service: Customer will not, nor will Customer assist others to: (i) copy or distribute the Service or Documentation; (ii) reverse engineer, disassemble, decompile or otherwise attempt to discover the source code; (iii) sell, license, sublicense, rent, lease, lend or transfer the Service; (iv) remove, alter or obscure any patent, copyright, trademark or other proprietary notices; (v) publish or disclose to any third party any technical features, performance, or benchmark tests; (vi) access or use the Service to promote any product competitive with ekai; (vii) violate or circumvent any technological restrictions in the Service; (viii) use the Service for any purpose not authorized by this Agreement; (ix) use the Service in violation of any applicable laws and regulations; or (x) host or deploy the Service as a service on behalf of any unaffiliated third party without ekai&apos;s express written agreement.</P>
              <P>3.2 Customer Credentials: Customer is responsible for secure storage of passwords, keys or other access authentication methods. Customer acknowledges that ekai is unable and has no obligation to recover Customer&apos;s Credentials if lost.</P>
              <P>3.3 Customer Data in Service: Customer shall only upload Customer Data to the Service that it has the authority to upload.</P>
            </Section>

            <Section title="4. Fees">
              <P>4.1 General: The rates applicable for the Service are disclosed in the applicable Order. Unless otherwise specified in the Order, fees for overuse of the Service will be on a pro rata basis, and such overages will be invoiced separately.</P>
              <P>4.2 Invoicing: Unless otherwise stated in the applicable Order, all fees are due and payable within thirty (30) days of Customer&apos;s receipt of ekai&apos;s invoice.</P>
              <P>4.3 Renewal Price Adjustment: Unless otherwise stated in the applicable Order, all fees for renewal of Services will increase by seven and a half percent (7.5%) over the then current Term&apos;s fees. ekai will inform the Customer of such change at least thirty (30) days before implementing such change.</P>
              <P>4.4 Taxes: All fees quoted are exclusive of sales, value added, or other applicable tax.</P>
            </Section>

            <Section title="5. Proprietary Rights">
              <P>5.1 Customer Data: As between ekai and Customer, Customer owns Customer Data. Customer grants to ekai, its Affiliates and applicable contractors a worldwide, limited-term licence to host, copy, transmit and display Customer Data, as reasonably necessary for ekai to provide the Service in accordance with this Agreement.</P>
              <P>5.2 Service: As between ekai and Customer, ekai and its licensors retain all rights, title, and interest in and to the Service, Documentation, support services and professional Services, including all copies, modifications, and derivative works thereof and all intellectual property rights therein.</P>
              <P>5.3 Open Source Software: Customers can access any notice and attribution files for any applicable open-source software distributed with, hosted with, provided with or otherwise made use of with the Service upon request.</P>
            </Section>

            <Section title="6. Audit">
              <P>6.1 Standard Audits: During the Term and for a period of one (1) year thereafter, ekai (or its independent third-party auditors) has the right, upon reasonable notice, to reasonably audit Customer&apos;s relevant systems and records to confirm Customer&apos;s compliance with this Agreement. ekai may conduct no more than one (1) audit per twelve (12) month period.</P>
              <P>6.2 Additional Audits: In addition to the above, ekai may conduct one additional audit if Customer is in breach of any obligations under this Agreement.</P>
            </Section>

            <Section title="7. Confidentiality">
              <P>7.1 Confidential Information: Customer and ekai may disclose Confidential Information to each other during the Term. &ldquo;Confidential Information&rdquo; means all nonpublic proprietary business and technical information disclosed by one Party to the other Party which is in tangible form and labelled &ldquo;confidential&rdquo; or that reasonably should be understood to be confidential given the circumstances of disclosure and the nature of the information.</P>
              <P>7.2 Use and Obligations: The Receiving Party will protect Confidential Information received from the Disclosing Party using the same degree of care as it uses to protect its own similar confidential materials, but in no event using less than reasonable care.</P>
              <P>7.3 Security and Protection of Personal Data: ekai will implement and maintain commercially reasonable administrative, physical and technical safeguards and measures designed to address the security, confidentiality and availability of Customer Data in the Service.</P>
              <P>7.4 Return or Destruction: Upon expiration or termination of this Agreement for any reason, the Receiving Party will, upon request, return or destroy the Disclosing Party&apos;s Confidential Information.</P>
            </Section>

            <Section title="8. Warranty">
              <P>8.1 Service Warranty: ekai warrants to Customer during the Term that the Service will conform in all material respects to the applicable Documentation and the SLA.</P>
              <P>8.2 Professional Services Warranty: ekai warrants that it and its personnel have the necessary knowledge, skills, experience, qualifications and resources to provide and perform the professional services in a professional and workmanlike manner in accordance with industry standards.</P>
              <P>8.3 Remedy and Exclusions: ekai&apos;s sole obligation under the Service Warranty is to use commercially reasonable efforts to correct the non-conformity during the Warranty Period.</P>
              <P>8.4 Disclaimer of Warranties: EXCEPT AS PROVIDED UNDER THIS SECTION, AND TO THE EXTENT NOT PROHIBITED BY APPLICABLE LAW, ekai AND ITS LICENSORS DISCLAIM ALL CONDITIONS, REPRESENTATIONS AND WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTY OF MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE.</P>
            </Section>

            <Section title="9. Indemnification">
              <P>9.1 Indemnification by ekai: ekai agrees to defend or settle, at ekai&apos;s expense, a third-party claim against Customer alleging that the Service infringes a copyright or patent of such third party, and to pay damages finally awarded against Customer by a court of competent jurisdiction or as agreed to in a settlement.</P>
              <P>9.2 Customer Indemnity: Customer agrees to defend and indemnify ekai from and against any loss, damage, or cost arising from a third-party claim that Customer&apos;s provision or use of Customer Data violates a third party&apos;s rights.</P>
              <P>9.3 Indemnification Process: As a condition of receiving indemnity, the party seeking the indemnity will provide the other party with prompt written notice of the claim, complete control over the defence and settlement of the claim, and reasonable assistance in connection with the defence and settlement of the claim.</P>
            </Section>

            <Section title="10. Limitation of Liability">
              <P>IN NO EVENT WILL EITHER PARTY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES, INCLUDING, WITHOUT LIMITATION, LOST PROFITS OR REVENUE, LOSS OR CORRUPTION OF DATA OR THE COST OF COVER, HOWEVER CAUSED, WHETHER BASED IN CONTRACT, TORT, WARRANTY, NEGLIGENCE, INDEMNITY OR ANY OTHER THEORY OF LIABILITY, EVEN IF SUCH PARTY HAS BEEN ADVISED AS TO THE POSSIBILITY OF SUCH DAMAGES. EXCEPT FOR INTELLECTUAL PROPERTY INDEMNIFICATION OBLIGATIONS, IN NO EVENT WILL ekai&apos;S TOTAL, CUMULATIVE AND ENTIRE LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT EXCEED THE TOTAL FEES PAID BY CUSTOMER FOR THE SERVICE GIVING RISE TO THE LIABILITY FOR THE TWELVE (12) MONTH PERIOD PRECEDING THE FIRST INCIDENT OUT OF WHICH THE LIABILITY AROSE.</P>
            </Section>

            <Section title="11. Termination">
              <P>11.1 Termination for Cause: Any Orders placed pursuant to this Agreement are non-cancellable and non-refundable, except as provided for herein. A party may terminate this Agreement if the other Party materially breaches this Agreement and such breach is not cured within thirty (30) days of such Party&apos;s receipt of written notice describing the breach.</P>
              <P>11.2 Post-Termination Obligations: Upon expiration or termination of this Agreement, Customer will no longer have access to the Service. For a period of thirty (30) days after termination, upon Customer&apos;s prior written request, ekai will allow Customer limited access to retrieve any Customer Data remaining on the Service.</P>
              <P>11.3 Surviving Provisions: The following sections shall survive termination or expiration of this Agreement: Section 1, Section 4, Section 5, Section 6, Section 7.2, Section 8, Section 9.4, Section 10, Section 11, Section 12.3, and Section 13.</P>
            </Section>

            <Section title="12. General">
              <P>12.1 Independent Contractors: The parties are independent contractors under this Agreement.</P>
              <P>12.2 Assignment: Neither party will assign any of its rights or delegate any of its obligations under this Agreement without the prior written consent of the other party, which shall not be unreasonably withheld; except that either party may assign this Agreement to any successor by way of merger, consolidation, or the acquisition of all or substantially all of its assets or voting securities.</P>
              <P>12.3 Export Controls and Trade Laws: Each party will comply with all applicable export laws and regulations, including the Export Administration Regulations and economic sanctions programs implemented by the Office of Foreign Assets Control.</P>
              <P>12.4 Customer Reference: During the Term, Customer grants ekai a limited, revocable, non-exclusive and non-transferable licence to use Customer&apos;s name and logo in connection with ekai&apos;s marketing and sales efforts.</P>
              <P>12.5 Severability: In the event that any provision of this Agreement is declared illegal, void or unenforceable, such provision will be limited or eliminated to the extent necessary so that the remainder of this Agreement shall continue in full force and effect.</P>
              <P>12.6 Non Waiver: The failure of a party to enforce any provision of this Agreement will not be construed as a waiver of such provision.</P>
              <P>12.7 Force Majeure: Neither party shall be liable hereunder by reason of any failure or delay in the performance of its obligations under this Agreement to the extent caused by circumstances beyond the reasonable control of the party including pandemics, strikes, riots, fires, acts of God, war, terrorism, governmental action, or earthquakes.</P>
              <P>12.8 Integration; Order of Precedence: This Agreement constitutes the entire agreement between Customer and ekai and supersedes any and all prior agreements or communications between the parties with regard to the subject matter hereof.</P>
              <P>12.9 Governing Law; Dispute Resolution: This Agreement shall be governed by and construed in accordance with the laws of the State of California, U.S.A., without applying conflict of law principles. With respect to all disputes and actions arising from or related to this Agreement, the Parties irrevocably consent to exclusive jurisdiction and venue in the state and federal courts located in Santa Clara County.</P>
            </Section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 pt-4">
      <h2 className="font-bold text-ink text-[18px] tracking-[-0.02em]">{title}</h2>
      {children}
    </div>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-muted text-[14px] leading-[1.75]">{children}</p>
}
