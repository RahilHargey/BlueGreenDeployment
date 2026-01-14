const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>GREEN Environment</title>
        <style>
          body {
            background-color: #e6fffa;
            font-family: Arial;
            text-align: center;
            padding-top: 100px;
          }
          h1 { color: #065f46; }
          .box {
            display: inline-block;
            padding: 30px;
            border: 2px solid #10b981;
            border-radius: 10px;
            background: #d1fae5;
          }
        </style>
      </head>
      <body>
        <div class="box">
          <h1>🟢 GREEN ENVIRONMENT THROUGH WEBHOOK</h1>
          <p>Version: v2</p>
          <p>Status: Healthy</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('GREEN app running on port 3000');
});
