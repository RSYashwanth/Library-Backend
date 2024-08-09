const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = 'randomSessionSecret';

const login = async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    if(!username || !password) {
        res.status(400).json({error: 'Fields cannot be empty'});
        return;
    }
    try {
        const user = await User.getUserByName(username);
        if (!user) 
            return res.status(404).json({ error: 'User not found' });
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) 
            return res.status(401).json({ error: 'Invalid password' });

        const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '24h' });
        res.status(200).json({ token: token, isAdmin: user.admin });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const register = async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    const user = await User.getUserByName(username);
    if (user) 
        return res.status(404).json({ error: 'User already exists' });
  
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
  
        await User.addUser(username, hashedPassword)
  
        res.status(200).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getAllUsers = async (req, res) => {
    res.end(await User.getAllUsers());
}

const getNumUsers = async (req, res) => {
    res.end(await User.getNumUsers());
}

module.exports = {
    login,
    register,
    getAllUsers,
    getNumUsers
};
