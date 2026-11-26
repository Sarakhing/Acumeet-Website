/** 19.06 · Security Policy document (Figma 67:74439), verbatim. Format: see doc-privacy.js. */
export default {
  title: 'Security Policy',
  meta: 'Effective date: [DD Month YYYY] | Last reviewed: [DD Month YYYY]',
  body: `Acumeet AI Technologies Limited maintains a security programme designed to protect the confidentiality, integrity and availability of the Acumeet Services and Customer Data. This policy summarises the programme at a high level and does not replace a signed security schedule, DPA or customer-specific commitment.

## 6.1 Governance and risk management
Acumeet assigns responsibility for security, maintains security policies and procedures, evaluates risks, manages access and changes, and reviews relevant service providers. Security controls are intended to be proportionate to the nature of the Services and data processed.

## 6.2 Access control
Access to systems and data is restricted based on business need and role. The security programme includes access provisioning and removal, privileged access controls, authentication protections, periodic reviews and confidentiality obligations. The SOC 2 draft describes RBAC, MFA for core infrastructure access and access reviews. Confirm current scope before publication.

## 6.3 Encryption and infrastructure
The supplied SOC 2 draft describes AES-256 encryption at rest, TLS 1.2 or higher in transit and Azure network segmentation using virtual networks and Network Security Groups. Acumeet must validate the production scope, key-management arrangements, storage configurations and exceptions before these details are presented as current guarantees.

## 6.4 Monitoring and incident response
Acumeet uses logging and monitoring to identify operational and security events and maintains an incident response process for assessment, escalation, containment, remediation and recovery. Customers will be notified of a confirmed Personal Data Breach affecting their Customer Personal Data in accordance with the DPA and applicable law.

## 6.5 Resilience and availability
Acumeet maintains backup and recovery controls intended to support service continuity. Recovery time objectives, recovery point objectives, geographic redundancy, failover and service availability commitments apply only where documented in a signed SLA or Order Form.

## 6.6 Data lifecycle
Data is retained according to product configuration, customer instructions, contractual requirements and legal obligations. Deletion processes and backup expiry are designed to remove data when no longer required. Specific retention periods and claims of cryptographic erasure must be confirmed against production implementation.

## 6.7 Shared responsibility
Acumeet is responsible for the security controls within its environment and contractual scope. Customers are responsible for secure endpoints, user credentials, administrator permissions, meeting participant notices, their integrations and third-party accounts, lawful instructions, and configuration choices under their control.

## 6.8 Vulnerability reporting
Security researchers and customers should report suspected vulnerabilities to [security email]. Do not access, alter, download or disclose data without permission, and do not conduct destructive testing. Acumeet will review reports and respond according to severity and available information.

## 6.9 Assurance reports
Customers may request available security documentation through [security contact], subject to confidentiality and appropriate access controls. The prior SOC 2 report supplied for drafting was marked as a draft and contained placeholder date/signature fields. Acumeet must not state that it holds a final SOC 2 Type 1 report or publish a report until the final auditor-issued document and permitted distribution terms are confirmed.`,
};
