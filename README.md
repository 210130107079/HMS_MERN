# HMS - Hospital Management System

The **Hospital Management System (HMS)** is a comprehensive web-based application designed to streamline hospital operations, manage patient records, appointments, and doctor information. It consists of three main components:

1. **Frontend**: A React-based user interface for patients to register, log in, book appointments, and interact with the hospital system.
2. **Dashboard**: A React-based admin panel for managing doctors, appointments, and messages.
3. **Backend**: A Node.js and Express.js server that handles API requests, authentication, and database operations.

---

## **Features**

### **Frontend**
- Patient registration and login.
- Appointment booking with department and doctor selection.
- Contact form to send messages to the admin.
- Responsive design with a user-friendly interface.

### **Dashboard**
- Admin login and authentication.
- Manage doctors: Add new doctors and view doctor details.
- Manage appointments: View, update, and delete appointments.
- View messages sent by patients.

### **Backend**
- RESTful API for user, appointment, and message management.
- Authentication and authorization for patients and admins.
- Cloudinary integration for doctor profile picture uploads.
- MongoDB database for storing user, appointment, and message data.

---

## **Folder Structure**

### **1. Frontend**
- **Path:** `d:\VS_Code\HMS\frontend`
- **Tech Stack:** React, Vite, React Router, Axios, React Toastify.
- **Key Features:**
  - Patient-facing interface.
  - Pages: Home, Login, Register, About Us, Appointment.
  - Components: Navbar, Footer, Hero, Departments, MessageForm, AppointmentForm.

### **2. Dashboard**
- **Path:** `d:\VS_Code\HMS\dashboard`
- **Tech Stack:** React, Vite, React Router, Axios, React Toastify.
- **Key Features:**
  - Admin-facing interface.
  - Pages: Dashboard, Login, Add New Doctor, Add New Admin, Messages, Doctors.
  - Components: Sidebar, Messages, Doctors, AddNewDoctor, AddNewAdmin.

### **3. Backend**
- **Path:** `d:\VS_Code\HMS\backend`
- **Tech Stack:** Node.js, Express.js, MongoDB, Cloudinary, Nodemailer.
- **Key Features:**
  - RESTful API for user, appointment, and message management.
  - Authentication and authorization middleware.
  - Models: User, Appointment, Message.
  - Routes: User, Appointment, Message.

---

## **Setup Instructions**

### **1. Prerequisites**
- Node.js and npm installed.
- MongoDB database connection string.
- Cloudinary account for image uploads.

### **2. Clone the Repository**
```bash
git clone <repository-url>
cd HMS
```

### **3. Backend Setup**
```bash
cd backend
npm install
# Create a .env file and configure environment variables
npm run dev
```

### **4. Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```

### **5. Dashboard Setup**
```bash
cd dashboard
npm install
npm run dev
```

---

## **Environment Variables**

### **Backend**
Create a `.env` file in the `backend/config` folder with the following variables:
```
PORT=4444
MONGO_URL=<your-mongodb-connection-string>
FRONTEND_URL=http://localhost:5174
ADMIN_URL=http://localhost:5173
JWT_SECRET=<your-jwt-secret>
JWT_EXPIRES=1h
COOKIE_EXPIRE=1h
CLOUDINARY_NAME=<your-cloudinary-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
```

---

## **API Documentation**
Detailed API documentation is available in the [Backend README](./backend/README.md).

---

## **Tech Stack**
- **Frontend:** React, Vite, React Router, Axios, React Toastify.
- **Backend:** Node.js, Express.js, MongoDB, Cloudinary, Nodemailer.
- **Dashboard:** React, Vite, React Router, Axios, React Toastify.

---

## **Screenshots**
### **Frontend**
- Patient Registration
- Appointment Booking
- Contact Form

### **Dashboard**
- Admin Dashboard
- Manage Doctors
- Manage Appointments
- View Messages

---

## **Contributors**
- **Admin Email:** admnx130507@gmail.com
- **Admin Password:** Admin9898
- **User Email:** devmakwana4343@gmail.com
- **User Password:** dev989898

---

## **License**
This project is licensed under the MIT License.
