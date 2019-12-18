const express = require('express');
const models = require("./models");
const app = express();
const bodyParser = require('body-parser')
const port = 3009
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))

require('./routes/UserRoutes')(app)
require('./routes/PalmaresRoutes')(app)
require('./routes/DistinctionRoutes')(app)
require('./routes/ClubHistoryRoutes')(app)

models  
    .sequelize
    .sync({alter:true})
    .then(() => app.listen(port, () => console.log(`App listening on port ${port}`)));