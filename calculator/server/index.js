const express = require('express');

const app = express();

const PORT = 5000

app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
app.use(express.json());
app.use('/api', require('./routes/data.routes'))
app.get('/', (req, res) => {
  res.send('Hello!')
})
