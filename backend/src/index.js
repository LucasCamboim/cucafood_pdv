const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => res.send('CucaFood PDV API'));
app.listen(process.env.PORT || 3000, () => console.log('Server running'));