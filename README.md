# **Forever E-Commerce Application**

**[Live](https://forever-phi.vercel.app/) | [GitHub Repository](https://github.com/rushikesh5035/forever.git)**

A dynamic and user-friendly e-commerce platform designed for clothing stores. Built using the MERN stack, it ensures a smooth shopping experience for users and efficient management tools for administrators. Supports multiple payment options, including Stripe, Razorpay, and Cash on Delivery (COD).

---

## **Features**

### **User Panel**

- **Authentication:**
  - Register and log in with secure JWT-based authentication.
- **Product Browsing:**
  - Effortlessly explore product categories, search, and apply filters by gender categorie, and price.
- **Shopping Cart:**
  - Add products to the cart, adjust quantities, or remove items with ease.
- **Payment Options:**
  - Flexible payment methods, including Stripe, Razorpay, and Cash on Delivery (COD).
- **Order Management:**
  - View order history, track order status, and receive updates.

### **Admin Panel**

- **Authentication:**
  - Role-based secure access for administrators.
- **Product Management:**
  - Add, edit, and delete products with comprehensive control.
- **Order Management:**
  - Monitor and update the status of user orders.

---

## **Tech Stack**

- **Frontend:** React.js, Tailwind CSS.
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB.
- **Payment Gateway:** Stripe and Razorpay.
- **Image Storage:** Cloudinary.

---

## **Installation and Setup**

### **1. Clone the Repository**

```bash
git clone https://github.com/rushikesh5035/forever.git
cd forever
```

### **2. Install Dependencies**

#### Backend:

```bash
cd backend
npm install
```

#### Frontend:

```bash
cd frontend
npm install
```

#### Admin:

```bash
cd admin
npm install
```

### **3. Environment Variables**

Create a `.env` file in the backend, frontend and admin directory with the following variables:

**For Backend:**

```plaintext
MONGODB_URI = "your_mongodb_connection_string"
CLOUDINARY_NAME = "your_cloudinary_name"
CLOUDINARY_API_KEY = "cloudinary_api_key"
CLOUDINARY_SECRET_KEY = "cloudinary_api_key"
JWT_SECRET ="your_jwt_secret"
ADMIN_EMAIL="admin_email"
ADMIN_PASSWORD = "admin_password"
STRIPE_SECRET_KEY="your_stripe_secret_key"
RAZORPAY_KEY_SECRET="your_stripe_secret_key"
RAZORPAY_KEY_ID="your_razorpay_key_secret"
```

**For Frontend:**

```plaintext
VITE_BACKEND_URL = "your_backend_url" (Ex: VITE_BACKEND_URL= "http://localhost:4000")
VITE_RAZORPAY_KEY_ID = "your_razorpay_key_secret"
```

**For Admin:**

```plaintext
VITE_BACKEND_URL = "your_backend_url" (Ex: VITE_BACKEND_URL= "http://localhost:4000")
```

### **4. Run the Application**

#### Backend:

```bash
npm run server
```

#### Frontend:

```bash
npm run dev
```

#### Admin:

```bash
npm run dev
```

---

## **Usage**

### **Admin Panel**

1. Login as an admin.
2. Manage products and view/update order statuses.

### **User Panel**

1. Register or log in as a user.
2. Browse products, add items to the cart, and proceed to checkout.
3. Choose a payment method (Stripe, Razorpay, or COD).
4. View order history and track status.

---
