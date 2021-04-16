const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

let corsOptions = {
  origin: "https://localhost:8081"
};

app.use(cors(corsOptions));

// body-parser is replaced with express
app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

const db = require('./models');
const Role = db.role;

db.Sequelize.sync({ force: true }).then(() => {
  console.log('Drop and resync Db');
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
  Role.create({
    id: 2,
    name: "moderator"
  });
  Role.create({
    id: 3,
    name: "admin"
  });
}

app.get('/', (req, res) => {
  res.json({ message: "Welcome" })
});

//routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`)
});