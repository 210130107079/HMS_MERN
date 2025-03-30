# HMS Backend API Documentation

This document provides an overview of all the API endpoints available in the HMS backend, along with their descriptions, required data, and status codes.

---

## **User Routes**

### **1. Register Patient**
- **Endpoint:** `/api/user/patient/register`
- **Method:** POST
- **Description:** Registers a new patient.
- **Required Data:**
  ```json
  {
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "phone": "string",
    "password": "string",
    "confirmPassword": "string",
    "gender": "Male/Female",
    "dob": "YYYY-MM-DD",
    "nic": "string",
    "role": "Patient"
  }
  ```
- **Status Codes:**
  - `200`: User registered successfully.
  - `400`: Missing or invalid data.

---

### **2. Login User**
- **Endpoint:** `/api/user/login`
- **Method:** POST
- **Description:** Logs in a user (Admin or Patient).
- **Required Data:**
  ```json
  {
    "email": "string",
    "password": "string",
    "role": "Admin/Patient"
  }
  ```
- **Status Codes:**
  - `200`: User logged in successfully.
  - `400`: Invalid credentials or missing data.

---

### **3. Add New Doctor**
- **Endpoint:** `/api/user/doctor/register`
- **Method:** POST
- **Description:** Adds a new doctor (Admin only).
- **Required Data:**
  ```json
  {
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "phone": "string",
    "password": "string",
    "confirmPassword": "string",
    "gender": "Male/Female",
    "dob": "YYYY-MM-DD",
    "nic": "string",
    "doctorDepartment": "string",
    "docAvatar": "file"
  }
  ```
- **Status Codes:**
  - `200`: Doctor registered successfully.
  - `400`: Missing or invalid data.

---

### **4. Add New Admin**
- **Endpoint:** `/api/user/admin/register`
- **Method:** POST
- **Description:** Adds a new admin (Admin only).
- **Required Data:**
  ```json
  {
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "phone": "string",
    "password": "string",
    "confirmPassword": "string",
    "gender": "Male/Female",
    "dob": "YYYY-MM-DD",
    "nic": "string"
  }
  ```
- **Status Codes:**
  - `200`: Admin registered successfully.
  - `400`: Missing or invalid data.

---

### **5. Get All Doctors**
- **Endpoint:** `/api/user/doctors/all`
- **Method:** GET
- **Description:** Retrieves all registered doctors.
- **Status Codes:**
  - `200`: Doctors retrieved successfully.

---

### **6. Get All Patients**
- **Endpoint:** `/api/user/patients`
- **Method:** GET
- **Description:** Retrieves all registered patients (Admin only).
- **Status Codes:**
  - `200`: Patients retrieved successfully.

---

### **7. Admin Logout**
- **Endpoint:** `/api/user/admin/logout`
- **Method:** GET
- **Description:** Logs out an admin.
- **Status Codes:**
  - `200`: Admin logged out successfully.

---

### **8. Patient Logout**
- **Endpoint:** `/api/user/patient/logout`
- **Method:** GET
- **Description:** Logs out a patient.
- **Status Codes:**
  - `200`: Patient logged out successfully.

---

### **9. Get User Details**
- **Endpoint:** `/api/user/patient/me` or `/api/user/admin/me`
- **Method:** GET
- **Description:** Retrieves details of the logged-in user.
- **Status Codes:**
  - `200`: User details retrieved successfully.

---

## **Message Routes**

### **1. Send Message**
- **Endpoint:** `/api/message/send`
- **Method:** POST
- **Description:** Sends a message to the admin.
- **Required Data:**
  ```json
  {
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "phone": "string",
    "message": "string"
  }
  ```
- **Status Codes:**
  - `200`: Message sent successfully.
  - `400`: Missing or invalid data.

---

### **2. Get All Messages**
- **Endpoint:** `/api/message/get-all`
- **Method:** GET
- **Description:** Retrieves all messages (Admin only).
- **Status Codes:**
  - `200`: Messages retrieved successfully.

---

## **Appointment Routes**

### **1. Book Appointment**
- **Endpoint:** `/api/appointment/book`
- **Method:** POST
- **Description:** Books a new appointment (Patient only).
- **Required Data:**
  ```json
  {
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "phone": "string",
    "nic": "string",
    "dob": "YYYY-MM-DD",
    "gender": "Male/Female",
    "appointment_date": "YYYY-MM-DD",
    "department": "string",
    "doctor_firstName": "string",
    "doctor_lastName": "string",
    "hasVisited": "boolean",
    "address": "string"
  }
  ```
- **Status Codes:**
  - `200`: Appointment booked successfully.
  - `400`: Missing or invalid data.

---

### **2. Get All Appointments**
- **Endpoint:** `/api/appointment/all-apts`
- **Method:** GET
- **Description:** Retrieves all appointments (Admin only).
- **Status Codes:**
  - `200`: Appointments retrieved successfully.

---

### **3. Update Appointment Status**
- **Endpoint:** `/api/appointment/update/:id`
- **Method:** PUT
- **Description:** Updates the status of an appointment (Admin only).
- **Required Data:**
  ```json
  {
    "status": "Pending/Accepted/Rejected"
  }
  ```
- **Status Codes:**
  - `200`: Appointment updated successfully.
  - `404`: Appointment not found.

---

### **4. Delete Appointment**
- **Endpoint:** `/api/appointment/delete/:id`
- **Method:** DELETE
- **Description:** Deletes an appointment (Admin only).
- **Status Codes:**
  - `200`: Appointment deleted successfully.
  - `404`: Appointment not found.

---

## **Error Handling**
- **400:** Bad Request (Missing or invalid data).
- **401:** Unauthorized (Authentication required).
- **403:** Forbidden (Authorization required).
- **404:** Not Found (Resource not found).
- **500:** Internal Server Error.

---

## **Environment Variables**
Ensure the following environment variables are set in the `.env` file:
- `PORT`
- `MONGO_URL`
- `FRONTEND_URL`
- `ADMIN_URL`
- `JWT_SECRET`
- `JWT_EXPIRES`
- `COOKIE_EXPIRE`
- `CLOUDINARY_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

---

## **Setup Instructions**
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the server: `npm run dev`.
4. Ensure MongoDB and Cloudinary are properly configured.

---
