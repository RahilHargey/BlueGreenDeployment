const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>BLUE Environment</title>
        <style>
          body {
            background-color: #eff6ff;
            font-family: Arial;
            text-align: center;
            padding-top: 100px;
          }
          h1 { color: #1e3a8a; }
          .box {
            display: inline-block;
            padding: 30px;
            border: 2px solid #3b82f6;
            border-radius: 10px;
            background: #dbeafe;
          }
        </style>
      </head>
      <body>
        <div class="box">
          <h1>🔵 BLUE ENVIRONMENT</h1>
          <p>Version: v1</p>
          <p>Status: Stable</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('BLUE app running on port 3000');
});
