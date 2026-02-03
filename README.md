# 🛡️ CyberGuard - Vulnerability Simulation Sandbox

An educational platform demonstrating real-time cyber attacks in a controlled environment. Built with Next.js and Express.js.

## 🚀 Features

- **System Fingerprinting Dashboard** - Display system features, frameworks, and server configuration
- **Threat Simulation Engine** - Interactive simulations for:
  - SQL Injection (SQLi)
  - Denial of Service (DoS)
  - Malware Detection
  - Virus Propagation
- **Real-Time Analysis** - Vulnerability percentage tracking with root cause analysis
- **Safe Execution** - All attacks are simulated using mocked logic in a controlled environment

## 🏗️ Tech Stack

### Frontend
- **Next.js 16.1.6** - React framework with Turbopack
- **React 19.2.3** - UI library
- **Tailwind CSS 4** - Styling
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime environment
- **Express.js 4.18.2** - Web framework
- **CORS** - Cross-origin resource sharing

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/CyberGuard.git
cd CyberGuard
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
```

3. **Install Frontend Dependencies**
```bash
cd ../frontend
npm install
```

## 🎯 Running the Application

### Start Backend Server
```bash
cd backend
npm start
# Server runs on http://localhost:5000
```

### Start Frontend Development Server
```bash
cd frontend
npm run dev
# Application runs on http://localhost:3000
```

## 🌐 Access the Application

- **Local:** http://localhost:3000
- **Network:** http://YOUR_LOCAL_IP:3000

## 📁 Project Structure

```
CyberGuard/
├── backend/
│   ├── server.js              # Express server
│   ├── simulationEngine.js    # Attack simulation logic
│   └── package.json
├── frontend/
│   ├── app/
│   │   ├── page.js           # Main page
│   │   ├── layout.js         # App layout
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── AttackControl.js
│   │   ├── SimulationConsole.js
│   │   └── VulnerabilityReport.js
│   └── package.json
└── README.md
```

## 🔒 Security Note

This is an **educational tool** designed for learning purposes only. All simulations are mocked and run in a safe, controlled environment. Do not use these techniques on systems you don't own or have explicit permission to test.

## 📝 License

MIT License - Feel free to use this project for educational purposes.

## 👨‍💻 Author

Created as an educational cybersecurity demonstration platform.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if this project helped you learn about cybersecurity!
