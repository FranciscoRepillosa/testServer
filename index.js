const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" })

process.on("uncaughtException", err => {
  console.log(err);
  console.log(err.name, err.message); 
  process.exit(1);
});

const app = require("./server");


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/localServer', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log(" we're connected!! ");
});


const port = process.env.PORT || 3000 ;


const server = app.listen(port, function () {
    console.log(`listen on port ${port}`)
});

process.on("unhandledRejection", err => {
  console.log(err);
  console.log(err.name, err.message); 
  server.close(() => {
    process.exit(1);
  })
});

