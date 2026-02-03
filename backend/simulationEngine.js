const simulationEngine = {
  sqli: {
    steps: [
      { message: "Initiating connection to target database...", delay: 500 },
      { message: "Testing input field 'username' for sanitization...", delay: 1000 },
      { message: "[ALERT] Input not sanitized! Injecting payload: ' OR 1=1 --", delay: 1500, type: "error" },
      { message: "Query executed: SELECT * FROM users WHERE username = '' OR 1=1 --", delay: 2000, type: "warning" },
      { message: "Bypassing authentication...", delay: 2500 },
      { message: "Access GRANTED based on true condition.", delay: 3000, type: "success" },
      { message: "Dumping user table...", delay: 3500 }
    ],
    report: {
        score: 95,
        rootCause: "The application constructs SQL queries by directly concatenating user input without sanitization or parameterization.",
        remediation: "Use Parameterized Queries (Prepared Statements) to ensure input is treated as data, not code. Example in Node.js/pg: `db.query('SELECT * FROM users WHERE id = $1', [userId])`."
    }
  },
  dos: {
    steps: [
      { message: "Initiating high-volume traffic simulation...", delay: 500 },
      { message: "Sending 1000 concurrent requests to /api/login...", delay: 1000 },
      { message: "Server resource usage monitoring started.", delay: 1200 },
      { message: "[WARNING] CPU usage at 85%...", delay: 2000, type: "warning" },
      { message: "[WARNING] Memory usage at 90%...", delay: 2500, type: "warning" },
      { message: "Request latency increased to 5000ms.", delay: 3000, type: "error" },
      { message: "Service Unavailable (503) responses detected.", delay: 3500, type: "error" },
      { message: "Server unresponsive.", delay: 4000 }
    ],
    report: {
        score: 80,
        rootCause: "No rate limiting or request throttling is implemented on API endpoints, allowing a single IP to exhaust server resources.",
        remediation: "Implement Rate Limiting middleware (e.g., `express-rate-limit`). Configure Nginx or Load Balancer to drop excessive requests from a single source."
    }
  },
  malware: {
    steps: [
      { message: "Scanning file upload endpoint...", delay: 500 },
      { message: "Uploading executable file 'trojan.exe' masked as 'image.jpg'...", delay: 1500 },
      { message: "Bypassing MIME type check (magic number not verified)...", delay: 2000, type: "warning" },
      { message: "File stored in /uploads/public directory.", delay: 2500 },
      { message: "Executing file via remote command...", delay: 3000, type: "error" },
      { message: "Payload executed. Reverse shell established.", delay: 3500, type: "error" },
      { message: "Exfiltrating sensitive environment variables...", delay: 4000 }
    ],
    report: {
        score: 90,
        rootCause: "File upload functionality only checks file extensions and not the actual content (magic bytes), and uploads are stored in an executable directory.",
        remediation: "Validate file content using magic numbers. specific libraries (e.g., `mmmagic`). Store uploads in a non-executable storage bucket (S3) or outside the web root."
    }
  },
  virus: {
    steps: [
      { message: "Injecting self-replicating script into template engine...", delay: 500 },
      { message: "Script embedded in 'Home' page footer.", delay: 1500, type: "warning" },
      { message: "Visitor accessed Home page.", delay: 2000 },
      { message: "Virus propagating to visitor authentication tokens...", delay: 2500, type: "error" },
      { message: "Replicating to '/admin' dashboard...", delay: 3000 },
      { message: "Admin session hijacked.", delay: 3500, type: "success" },
      { message: "System-wide infection spread initiated.", delay: 4000, type: "error" }
    ],
    report: {
        score: 88,
        rootCause: "Cross-Site Scripting (XSS) vulnerability allows injection of malicious scripts that can propagate across user sessions.",
        remediation: "Sanitize all user-generated content before rendering. Use Content Security Policy (CSP) headers to restrict script execution sources."
    }
  }
};

module.exports = simulationEngine;
