var express = require("express");

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
});

app.get('/test', (req, res) => {
	console.log('/test was accessed');
	var response = 'Этот текст был загружен с сервера';

  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  setTimeout(() => {
      res.write(response);
      res.end();
  }, 500);

});

app.listen(PORT, () => {
    console.log(`Server running at localhost:${PORT}`);
});
