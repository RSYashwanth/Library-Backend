const express = require('express');
const http = require('http');
const fs = require('fs');

const userRouter = require('./routers/UserRouter');

const app = express();
const port = 8081;

app.use(express.json());

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'librarydb',
//   password: 'AA123@gmail.com',
//   port: 9881,
// });

// function isAuthenticated(req, res, next){
//   const authHeader = req.headers.authorization;
//   const token = authHeader && authHeader.split(' ')[1];

//   if (token == null)
//     return res.status(401).json({error:"Null token"});

//   jwt.verify(token, secretKey, (err, user) => {
//     if (err) 
//       return res.status(403).json({error:"Error authenticating"});
//     req.user = user;
//     next();
//   });
// }

// app.post('/register', async (req, res) => {
//   const { username, password } = req.body;
//   console.log(username);

//   const query = 'SELECT * FROM users WHERE USERNAME = $1';
//   const result = await pool.query(query, [username]);
//   const user = result.rows[0];

//   if (user) 
//     return res.status(404).json({ error: 'User already exists' });

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const query = 'INSERT INTO users (USERNAME, PASSWORD, ADMIN) VALUES ($1, $2, $3)';
//     const numUsers = (await pool.query("SELECT COUNT(*) FROM users")).rows[0].count;
//     console.log(numUsers);
//     await pool.query(query, [username, hashedPassword, numUsers == '0']);

//     res.status(200).json({ message: 'User registered successfully!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   console.log(username);
//   try {
//     const query = 'SELECT * FROM users WHERE USERNAME = $1';
//     const result = await pool.query(query, [username]);
//     const user = result.rows[0];

//     if (!user) 
//       return res.status(404).json({ error: 'User not found' });

//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) 
//       return res.status(401).json({ error: 'Invalid password' });

//     const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '24h' });

//     res.status(200).json({ token: token, isAdmin: user.admin });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.post('/users', isAuthenticated, async (req, res) => {
//   const query = 'SELECT * FROM users';
//   const response = await pool.query(query);

//   result = '';
//   response.rows.forEach(row=>{
//     result += JSON.stringify(row) + '\n';
//   });

//   res.end(result);
// });

// const options = {
//   key: fs.readFileSync('./security/key.pem'),
//   cert: fs.readFileSync('./security/cert.pem')
// };

app.use('/lib', userRouter);

const server = http.createServer(app);

server.listen(port, () => {
  console.log('HTTP server listening on port 8081');
});
