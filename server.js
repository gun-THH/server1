const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// สมมติฐานข้อมูลคีย์ชั่วคราว (ในอนาคตจะเชื่อมต่อ MongoDB หรือ SQL)
let databaseKeys = [
  { key: "GUN-FREE-9999", valid: true },
  { key: "VIP-KEY-7777", valid: true }
];

app.get('/checkkey', (req, res) => {
  const userKey = req.query.key;
  const found = databaseKeys.find(k => k.key === userKey && k.valid === true);
  
  if (found) {
    res.json({ valid: true, message: "Key is valid!" });
  } else {
    res.json({ valid: false, message: "Invalid or expired key." });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));