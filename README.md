# E-Store — React Frontend

A full-stack **E-Commerce frontend application built with React**, integrated with a Laravel REST API backend.

This project was developed to strengthen practical React skills by building a real-world E-Commerce application and integrating it with a Laravel backend.

## 🚀 Project Overview

E-Store provides a complete shopping experience with product browsing, authentication, cart management, order processing and Razorpay payment integration.

The React frontend communicates with the Laravel backend through REST APIs using the **Fetch API**.

## ✨ Key Features

### Customer Features

* User registration and login
* Authentication
* Product listing
* Product details
* Shopping cart
* Add, update and remove cart items
* Quantity management
* Stock validation
* Order creation
* Razorpay payment integration

### React Features

* Functional components
* React Hooks
* React Context API
* Global state management using Context
* Reusable components
* Fetch API for REST API communication
* Protected routes
* Environment-based API configuration
* Responsive UI

## 🛠️ Tech Stack

| Technology        | Usage                   |
| ----------------- | ----------------------- |
| React             | Frontend UI             |
| JavaScript        | Application logic       |
| React Context API | Global state management |
| Fetch API         | REST API communication  |
| Laravel           | Backend REST API        |
| MySQL             | Database                |
| Razorpay          | Payment gateway         |
| HTML5             | Markup                  |
| CSS / Bootstrap   | Styling                 |

## 🏗️ Application Architecture

```text
┌──────────────────────────────┐
│        React Frontend        │
│                              │
│  Components / Pages          │
│           │                  │
│           ▼                  │
│   React Context API          │
│   Global State Management    │
│           │                  │
│           ▼                  │
│        Fetch API             │
└──────────────┬───────────────┘
               │
               │ REST API
               ▼
┌──────────────────────────────┐
│       Laravel Backend        │
│                              │
│ Controllers / Models / Auth  │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│            MySQL             │
└──────────────────────────────┘

               │
               ▼
        Razorpay Gateway
```

## 📁 Project Structure

```text
estore-frontend/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── services/
│   └── ...
│
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/VishnuKumarSA/estore-frontend.git
```

### 2. Navigate to the project

```bash
cd estore-frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure the API

Create the required environment configuration for the Laravel backend API.

Example:

```env
REACT_APP_API_URL=http://localhost:8000/api
```

Update the API URL according to your Laravel backend environment.

### 5. Start the development server

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

## 🔗 Backend Repository

**[E-Store Backend](https://github.com/VishnuKumarSA/estore-backend)**

## 💳 Payment Integration

The application integrates **Razorpay** for online payment processing.

The React frontend communicates with the Laravel backend to create the Razorpay order and initiate the payment flow.

Sensitive payment credentials are handled through environment configuration.

## 🎯 Learning & Development Goals

This project helped strengthen practical knowledge of:

* React fundamentals
* React Hooks
* Context API
* Global state management
* Component-based development
* Fetch API
* REST API integration
* Authentication flows
* Frontend-backend communication
* E-Commerce application architecture
* Payment gateway integration

## 🔮 Future Enhancements

* Product search and filtering
* Wishlist functionality
* Enhanced order tracking
* Improved UI/UX
* Automated testing
* Production deployment
* Performance optimization

## 👨‍💻 Developer

**Vishnu Kumar S A**

PHP / Full-Stack Developer with 5+ years of experience in PHP, Laravel, CakePHP, MySQL and REST API development, currently expanding into modern React-based full-stack development.

## 📄 License

This project is developed for learning and portfolio purposes.

```
```
