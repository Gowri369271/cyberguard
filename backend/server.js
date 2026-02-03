const express = require('express');
const cors = require('cors');
const simulationEngine = require('./simulationEngine');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Mock System Fingerprint
const systemFingerprint = {
    os: "Linux (Ubuntu 22.04 LTS)",
    server: "Nginx/1.18.0",
    framework: "Express.js 4.18.2",
    database: "PostgreSQL 14.5",
    activePorts: [80, 443, 5000, 22],
    securityHeaders: {
        "X-Frame-Options": "MISSING",
        "X-XSS-Protection": "0",
        "Content-Security-Policy": "MISSING"
    }
};

app.get('/api/system-info', (req, res) => {
    res.json(systemFingerprint);
});

app.post('/api/simulate/:type', (req, res) => {
    const type = req.params.type;
    const simulation = simulationEngine[type];

    if (!simulation) {
        return res.status(404).json({ error: "Simulation type not found" });
    }

    // Return the full simulation plan. 
    // The frontend will be responsible for creating the "real-time" delay effect based on the 'delay' property.
    res.json({
        type: type,
        steps: simulation.steps,
        report: simulation.report
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
