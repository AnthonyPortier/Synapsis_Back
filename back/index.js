const express = require('express');
const models = require("./models");
const app = express();
const bodyParser = require('body-parser')
const port = 5000
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))

const LoginRoutes = require('./routes/LoginRoutes')
app.use('/utilisateur', LoginRoutes)

require('./routes/UserRoutes')(app)
require('./routes/PalmaresRoutes')(app)
require('./routes/DistinctionRoutes')(app)
require('./routes/ClubHistoryRoutes')(app)
require('./routes/ClientRoutes')(app)

models  
    .sequelize
    .sync()
    .then(() => app.listen(port, () => console.log(`App listening on port ${port}`)));