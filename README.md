# 🏡 shDeco – Service Booking & Payment Platform

shDeco is a **full-stack service booking web application** where users can browse services, place bookings, and securely complete payments using **Stripe Checkout**. The platform includes user authentication, booking management, admin controls, and real-time payment tracking.

---

## 🚀 Live Features

### 👤 User Features
- User registration & login
- Browse available services
- View service details
- Book a service
- View personal booking dashboard
- Pay securely using Stripe Checkout
- Track payment status & tracking ID

### 🧑‍💼 Admin Features
- View all bookings
- Update booking status (pending / approved / cancelled)
- Monitor payment records

---

## 🛠️ Tech Stack

### Frontend
- **React**
- **React Router**
- **React Query (TanStack Query)**
- **Axios**
- **Tailwind CSS**
- **DaisyUI**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB**
- **Stripe Payment Gateway**
- **JWT (optional for route protection)**

---

## 💳 Payment System (Stripe)

- Stripe **Checkout Session** is used (no custom card UI required)
- Secure redirect-based payment flow
- Payment success & cancel handling
- Payment data saved in MongoDB
- Unique **Tracking ID** generated after successful payment

---

## 🔄 Payment Flow

1. User books a service
2. User clicks **Pay Now** from dashboard
3. Redirects to payment page
4. Stripe Checkout opens
5. On success:
   - Payment info saved
   - Booking marked as `paid`
   - Tracking ID generated
6. User redirected to success page

---

## 📦 API Overview

### Bookings
- `POST /bookings` → Create booking
- `GET /bookings?email=` → User bookings
- `GET /bookings/:id` → Single booking
- `GET /admin/bookings` → Admin bookings
- `PATCH /admin/bookings/:id` → Update status

### Payments
- `POST /create-checkout-session` → Stripe checkout
- `POST /webhook` → Stripe webhook
- `POST /payments` → Save payment data

### Services
- `GET /services`
- `GET /services/featured`
- `GET /services/details/:id`

### Users
- `POST /users`

---

## 🧪 Stripe Test Mode

Use Stripe test cards:
