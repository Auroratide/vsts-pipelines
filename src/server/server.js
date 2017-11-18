import path from 'path';
import express from 'express';
import { render } from './middleware';
import { renderFile as ejs } from 'ejs';

const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejs);

app.use(express.static(path.join(__dirname)));

app.get('*', render);

app.listen(port, function() {
  console.log(`Listening on ${port}`);
});
