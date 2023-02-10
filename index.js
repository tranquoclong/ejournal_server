// express setups
const express = require('express');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 5000;
const server = require('http').createServer(app);
// route
const loginRoute = require('./routes/login');
const logoutRoute = require('./routes/logout');

const adminRoute = require('./routes/admin');
const authorRoute = require('./routes/author');
const editorRoute = require('./routes/editor');

const accountRoute = require('./routes/account');
const majorRoute = require('./routes/major');
const universityRoute = require('./routes/university');

const profileRoute = require('./routes/profile');
const articleRoute = require('./routes/article');
const reviewRoute = require('./routes/review');
const paymentRoute = require('./routes/payment');
//other
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//hi
//Session
const KnexSessionStore = require('connect-session-knex')(session);

const Knex = require('knex');

//Local run
const knex = Knex({
  client: 'pg',
  connection: {
    user: "tranquoclong",
    password: "Q5SmpLTlzD4C",
    host: "ep-wild-fog-161357.ap-southeast-1.aws.neon.tech",
    port: 5432,
    database: "neondb",
    ssl:true
  },
});

const store = new KnexSessionStore({
  knex,
  tablename: 'sessions', // optional. Defaults to 'sessions'
});

app.use(
  session({
    secret: 'EJOURNAL',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10 * 60 * 60 * 1000,
    },
    store,
  })
);

const compression = require('compression');
app.use(compression());

app.use('/login', loginRoute);
app.use('/logout', logoutRoute);

// async function checkUserSession(req, res, next) {
//   try {
//     if (req.session.user) {
//       next();
//     } else {
//       res.status(400).json({ msg: 'Xin đăng nhập lại vào hệ thống' });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ msg: 'Lỗi hệ thống' });
//   }
// }
// app.use(checkUserSession);

app.use('/admin', adminRoute);
app.use('/author', authorRoute);
app.use('/editor', editorRoute);
app.use('/account', accountRoute);
app.use('/major', majorRoute);
app.use('/university', universityRoute);
app.use('/profile', profileRoute);
app.use('/article', articleRoute);
app.use('/review', reviewRoute);
app.use('/payment', paymentRoute);

server.listen(PORT, () => {
  console.log('Server running...');
});
