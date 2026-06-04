const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// API Endpoint to get available VNC links (Easily scalable)
app.get('/api/servers', (req, res) => {
    // In production, replace 'localhost' with your VPS IP or Domain
    const HOST = req.headers.host.split(':')[0]; 
    
    res.json([
        { id: "kasm", name: "Kasm Premium VNC", url: `http://${HOST}:6901/?password=password123` },
        { id: "novnc", name: "noVNC Chromium Browser", url: `http://${HOST}:7900/?autoconnect=1&resize=scale` }
    ]);
});

app.listen(PORT, () => {
    console.log(`Dashboard backend running on port ${PORT}`);
});
