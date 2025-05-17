# 📊 Report Calculation Front-End

The **Report Calculation Front-End** is a responsive web application designed to visualize and manage financial reports. Built using modern JavaScript technologies, it offers users an intuitive interface to explore complex data, generate reports, and gain actionable insights with ease.

---

## 🚀 Features

- **Interactive Dashboard**: Real-time visualization of key financial metrics and data trends.
- **Purchases Overview**: Detailed view and analysis of purchase records and behavior.
- **Responsive Design**: Optimized for performance across desktops, tablets, and mobile devices.
- **Modular Architecture**: Designed with reusability and scalability in mind for easy maintenance and extension.

---

## 📸 Screenshots

### Dashboard Page

![Dashboard Page](./resources/Dashboard.png)

### Purchases Page

![Purchases Page](./resources/Purchases.png)

---

## 🛠️ Technologies Used

- **Frontend**: JavaScript, HTML5, CSS3
- **Build Tools**: Webpack, Babel
- **Package Management**: npm
- **Containerization**: Docker, Docker Compose

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v14 or later)
- Docker & Docker Compose (for production deployment)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/DanielDucuara2018/report_calculation_front.git
   cd report_calculation_front
   ````

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**

   * **Development Mode**

     ```bash
     npm start
     ```

   * **Production Mode with Docker**

     ```bash
     docker-compose -f docker-compose.prod.yml up --build
     ```

---

## 📁 Project Structure

```
report_calculation_front/
├── public/                 # Static assets
├── resources/              # Images and other resources
├── src/                    # Source code
├── Dockerfile.dev          # Docker configuration for development
├── Dockerfile.prod         # Docker configuration for production
├── docker-compose.dev.yml  # Docker Compose for development
├── docker-compose.prod.yml # Docker Compose for production
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request with your improvements, bug fixes, or new features.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
