# Health Nexus Hub

Build a complete, professional, competition-level web application called:

🏥 Hospital Records & Intelligent Referral System

IMPORTANT TECHNICAL REQUIREMENT:
The entire project MUST be contained in ONE SINGLE HTML FILE named index.html.

Do NOT create:

separate CSS files

separate JavaScript files

separate component folders

separate backend files

separate JSON files

separate image folders

separate configuration files

Everything must be inside the single index.html file using:

HTML

CSS inside <style>

JavaScript inside <script>

The application must run directly by opening index.html in a browser and must also work in VS Code using Live Server.

Use localStorage for persistent demo data so that patient records, appointments, reports, referrals and previous history remain available after refreshing the page.

The UI should look like a modern hospital software product, NOT like a basic student HTML project.

==================================================

MAIN PURPOSE
==================================================

The system solves a real hospital problem:

Different hospital departments such as:

General Medicine

Cardiology

Neurology

Orthopedics

Pediatrics

Dermatology

ENT

Gynecology

may maintain patient information separately.

This can make it difficult to quickly identify:

previous treatments

previous appointments

previous doctors

previous departments

referral history

previous reports

repeated hospital visits

current symptoms

appropriate department to consult

The proposed solution is a centralized Hospital Records & Referral System.

The system connects:

Patient → Symptoms → AI Symptom Guidance → Doctor → Department → Appointment → Referral → Medical History → Reports → Risk Score → Staff Dashboard

==================================================
2. PROFESSIONAL DASHBOARD

Create a modern responsive dashboard with:

Sidebar navigation:

🏠 Dashboard
👤 Patients
➕ Register Patient
🔍 AI Symptom Assistant
📅 Appointments
🔗 Referrals
📋 Medical History
📄 Reports
⚠️ Risk Analysis
👨‍⚕️ Doctors
🏥 Departments
📊 Analytics
🧩 Subject Integration
ℹ️ About System

Top navigation should contain:

Hospital logo/icon

Search

Notifications

Current date

Staff profile

Emergency alert indicator

Dashboard cards:

Total Patients
Today's Appointments
Active Referrals
Pending Follow-ups
High Risk Patients
Reports Available

Use attractive cards, icons, subtle animations and clean spacing.

==================================================
3. PATIENT REGISTRATION

Create a complete patient registration form.

Fields:

Patient ID
Full Name
Age
Gender
Phone Number
Email
Address
Blood Group
Emergency Contact
Allergies
Existing Conditions
Current Symptoms
Previous Admissions
Previous Surgeries
Current Medication
Preferred Department

Generate a unique Patient ID automatically.

After registration, save the patient in localStorage.

Show:

"Patient Registered Successfully"

and immediately provide:

View Profile
Add Appointment
Start AI Symptom Assessment
Upload/Add Report
Create Referral

==================================================
4. PATIENT PROFILE

Create a detailed patient profile page.

Display:

Patient basic information
Contact information
Blood group
Allergies
Existing conditions
Current medication
Previous admissions
Current symptoms

Then create tabs:

Overview
Appointments
Medical History
Reports
Referrals
Risk Analysis
AI Assessment

Patient Timeline:

Example:

Registration
↓
General Medicine Consultation
↓
Blood Test
↓
Cardiology Referral
↓
Cardiology Appointment
↓
Follow-up
↓
Current Visit

Display the complete patient journey visually.

==================================================
5. AI SYMPTOM ASSISTANT

Create an intelligent-looking AI symptom assistant.

IMPORTANT:
This is a healthcare guidance prototype.

The AI MUST NOT claim to diagnose a disease.

It should clearly state:

"This tool provides preliminary guidance only and does not replace professional medical diagnosis or treatment."

The patient can type:

"I have leg pain"

The AI should NOT simply return one disease.

Instead, ask structured follow-up questions.

For example:

Where exactly is the pain?

Hip

Thigh

Knee

Calf

Ankle

Foot

Whole leg

What type of pain is it?

Sharp

Dull

Burning

Throbbing

Cramping

Tingling

Numbness

Stiffness

When did it start?

Today

Few days

Few weeks

More than a month

How severe is it?

0–10 pain scale.

Does the pain occur:

At rest

While walking

After exercise

At night

Continuously

Are there additional symptoms?

Swelling

Redness

Fever

Numbness

Weakness

Difficulty walking

Injury

Chest discomfort

Shortness of breath

Also ask relevant questions dynamically based on the selected symptoms.

For example:

If the user selects knee pain:
ask about injury, swelling, movement and walking.

If the user selects calf pain:
ask about swelling, redness, recent long travel, injury and sudden onset.

If the user selects numbness:
ask about weakness, back pain and loss of sensation.

The system should dynamically change questions according to the symptom category.

==================================================
6. AI RESULT

After collecting information, show a structured result.

Example:

SYMPTOM SUMMARY

Main complaint:
Leg pain

Location:
Calf

Pain type:
Cramping

Duration:
3 days

Severity:
6/10

Associated symptoms:
Mild swelling

Then show:

Possible symptom categories:

Musculoskeletal-related symptoms

Nerve-related symptoms

Circulation-related symptoms

Injury-related symptoms

Do NOT state that the patient definitely has a disease.

Instead use language such as:

"These symptoms can have several possible causes. A healthcare professional should evaluate the patient."

Then recommend a relevant department/specialist based on the symptom pattern.

Examples:

Joint/bone/muscle pattern → Orthopedics

Numbness/tingling/weakness pattern → Neurology

Skin-related symptoms → Dermatology

Heart/chest-related symptoms → Cardiology

General unexplained symptoms → General Medicine

The system must explain WHY that department was suggested.

==================================================
7. EMERGENCY RED FLAG SYSTEM

Create a highly visible emergency warning mechanism.

If symptoms include potentially urgent warning signs such as:

severe sudden pain

chest pain

severe breathing difficulty

sudden weakness

fainting

severe bleeding

sudden confusion

major injury

display:

🔴 URGENT MEDICAL ATTENTION

"These symptoms may require urgent medical evaluation. Please seek immediate professional medical care or contact local emergency services."

Do NOT provide dangerous treatment instructions.

Use red alert cards.

For non-emergency cases:

🟢 Routine consultation may be appropriate.

For uncertain cases:

🟠 Medical evaluation recommended.

==================================================
8. PATIENT → DOCTOR INFORMATION FLOW

This is a major feature.

After the patient completes the AI symptom assessment, generate a structured:

"Doctor Consultation Summary"

containing:

Patient ID
Patient Name
Age
Main Complaint
Symptom Location
Pain Type
Duration
Severity
Associated Symptoms
Relevant Previous Conditions
Current Medication
Allergies
Previous Department Visits
Previous Referrals
Previous Reports
AI Suggested Department
Urgency Level
AI Reasoning Summary

The patient should NOT have to explain everything again.

The doctor can open this summary before consultation.

Add a button:

"Send to Doctor"

and:

"Add to Patient History"

==================================================
9. DOCTOR DASHBOARD

Create a doctor dashboard.

Doctor can see:

Today's appointments
Patient queue
New AI assessments
Pending referrals
Patient history
Previous reports
Current symptoms
Risk status

For each patient display:

Patient ID
Name
Age
Main complaint
AI summary
Suggested department
Risk level
Appointment time

Add:

"Open Patient Record"

==================================================
10. MEDICAL REPORTS

Create a reports section.

Since this is a single HTML demo without a backend, allow users to:

Add Report

Fields:

Report Type
Report Name
Date
Doctor
Department
Summary
Important Findings

Allow sample reports such as:

Blood Test
X-Ray
MRI
CT Scan
ECG
Prescription
Discharge Summary

Store report metadata in localStorage.

Display reports in a timeline.

Use:

📄 Report Available

button.

For a prototype, do not claim to upload files to a real hospital server.

==================================================
11. MEDICAL HISTORY

Create a chronological medical history.

Example:

2026-08-10
General Medicine
Fever consultation

2026-08-20
Orthopedics
Knee pain consultation

2026-09-05
Cardiology
Follow-up

Each record should show:

Date
Department
Doctor
Complaint
Treatment/Notes
Referral
Report

==================================================
12. REFERRAL MANAGEMENT

Create a referral module.

A doctor can create:

Referral ID
Patient ID
From Doctor
From Department
To Doctor
To Department
Reason
Priority
Date
Status

Statuses:

Pending
Accepted
Completed
Follow-up Required

Show referral history.

==================================================
13. ADSA REFERRAL GRAPH

Create an interactive visual referral network.

Use JavaScript and SVG/Canvas if necessary.

Represent:

Doctors and Departments as nodes.

Referrals as connections.

Example:

General Medicine
↓
Cardiology
↓
Neurology

For a specific patient:

Patient
↓
Doctor A
↓
General Medicine
↓
Doctor B
↓
Cardiology

Clearly explain:

ADSA is used to represent the referral network using graph concepts.

Nodes = Doctors / Departments

Edges = Referral relationships

Make the graph visually attractive.

==================================================
14. RISK SCORE

Create a transparent prototype risk-scoring system.

The risk score can consider:

Previous admissions
Frequent hospital visits
Recent symptoms
Multiple referrals
Follow-up status
Relevant medical history

Generate:

Risk Score: 0–100

Categories:

🟢 LOW
🟠 MEDIUM
🩷 HIGH
🔴 CRITICAL

Use clear prototype thresholds and display:

"Prototype risk classification — not a medical diagnosis."

Show WHY the score was generated.

Example:

Previous admissions: +20
Recent repeated visits: +15
Pending follow-up: +10

Total: 45

Risk Level: MEDIUM

Do not present this score as clinically validated.

==================================================
15. DOCTOR-PATIENT MATCHING

Based on department recommendation, show available doctors.

Example:

Recommended Department:
Orthopedics

Available Doctors:

Dr. Anil Kumar
Orthopedics
8 years experience
Available: 10:30 AM

Dr. Priya
Orthopedics
6 years experience
Available: 2:00 PM

Allow:

Select Doctor
Select Date
Select Time
Book Appointment

==================================================
16. APPOINTMENT SYSTEM

Create an appointment module.

Fields:

Patient
Doctor
Department
Date
Time
Reason
Priority
Status

Statuses:

Scheduled
Completed
Cancelled
Follow-up

Show appointments in:

List view
Calendar-style view

==================================================
17. SEARCH SYSTEM

Create global patient search.

Search using:

Patient ID
Name
Phone Number
Doctor
Department

When a patient is found, show:

Complete Patient Profile
Previous Visits
Reports
Referrals
Appointments
Risk Score
AI Assessments

The goal is to demonstrate how centralized records reduce time spent searching through separate files.

==================================================
18. ANALYTICS DASHBOARD

Create visual analytics using pure JavaScript/CSS or inline SVG.

Show:

Patients by Department
Appointments by Department
Referral Counts
Risk Distribution
Frequent Visitors
Pending Referrals
Completed Referrals

Use charts/cards.

Do not use external libraries if they require separate setup.

==================================================
19. SIX SUBJECT INTEGRATION

Create a dedicated:

"Academic Subject Integration"

section.

Display six clickable cards:

☕ JAVA
🗄️ DBMS
🔗 ADSA
🐍 PYTHON
👨‍💻 OOPJ
📐 DMGT

When clicked, open a detailed explanation.

JAVA:
Used for application logic and hospital record management.

DBMS:
Used for centralized storage and retrieval of patient, doctor, appointment, referral and history records.

ADSA:
Used to represent doctor/department referral networks using graph concepts.

PYTHON:
Used for patient-history analysis and prototype risk scoring.

OOPJ:
Used to model real-world entities such as Patient, Doctor, Department, Appointment and Referral as classes and objects.

DMGT:
Used for mathematical relations, sets, mappings and graph-based representation of relationships.

==================================================
20. ER DIAGRAM

Create a visually attractive ER diagram inside the website.

Entities:

PATIENT
DOCTOR
DEPARTMENT
APPOINTMENT
REFERRAL
PATIENT_HISTORY
REPORT
RISK_SCORE

Show:

Primary Keys
Foreign Keys
Relationships
Cardinality

Example:

Patient 1:M Appointment
Doctor 1:M Appointment
Department 1:M Doctor
Patient 1:M History
Patient 1:M Report
Doctor 1:M Referral

Make the ER diagram viewable directly inside the single HTML file.

==================================================
21. DMGT MATHEMATICAL REPRESENTATION

Create a dedicated section.

Define:

P = Set of Patients
D = Set of Doctors
D

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/79a2bfda-cbee-5af5-bbc5-83cbe9981363).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
