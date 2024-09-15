# MedixFlow Patient Management System

![MedixFlow Screenshot](/public/assets/medixflow.png)

## Project Description

MedixFlow is a web application designed for managing patient appointments and records. It provides a user-friendly interface for both patients and administrators. The application includes features for scheduling appointments, managing patient information, and an admin dashboard for overseeing records and analytics.

## Features

- ✅ **Patient Registration**: Users can sign up and create a personal profile to manage their healthcare needs.

- ✅ **Schedule Appointments**: Patients can easily book new appointments with doctors and manage multiple appointments as needed.

- ✅ **Appointment Management for Admins**: Administrators can efficiently view, modify, and manage all scheduled appointments.

- ✅ **Admin Appointment Confirmation**: Admins can confirm and set appointment times to ensure accurate scheduling.

- ✅ **Appointment Cancellation by Admins**: Administrators can cancel any appointment if required.

- ✅ **SMS Notifications for Confirmations**: Patients receive SMS alerts to confirm their appointment details and updates.

- ✅ **Fully Responsive Design**: The application is optimized for a seamless experience across all devices and screen sizes.

- ✅ **Secure File Uploads**: Users can upload and store files securely using Appwrite storage services integrated into the application.


## Technologies Used

![Static Badge](https://img.shields.io/badge/NextJS-black) ![Static Badge](https://img.shields.io/badge/Appwrite-pink) ![Static Badge](https://img.shields.io/badge/Typescript-blue)  ![Static Badge](https://img.shields.io/badge/Tailwind-navy) ![Static Badge](https://img.shields.io/badge/ShadCN-white) ![Static Badge](https://img.shields.io/badge/Twilio-red) 

## Setup

To set up and run this project locally, follow these steps:

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/healthcare.git
cd healthcare
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
#APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=your_passkey
```

Replace the placeholder values with your actual Appwrite credentials. You can obtain these credentials by signing up on the [Appwrite website](https://appwrite.io/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Acknowledgements

- The base of this project was built following a tutorial provided by [JavaScript Mastery](https://www.youtube.com/watch?v=lEflo_sc82g). Special thanks to the authors for their valuable guidance and insights.