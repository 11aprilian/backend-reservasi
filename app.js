const express = require('express');
const app = express();
var cors = require('cors')

const allRoutes = require('./routes');

const PORT = process.env.PORT || 3050

app.use(cors({
  origin:"*"
}))
app.use(express.json())
app.use(allRoutes)

app.listen(PORT, () => {
  console.log("Server Running on " + PORT);
})