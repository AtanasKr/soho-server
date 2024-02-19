const User = require('../model/User');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user, email, pwd } = req.body;
    if (!user || !email || !pwd) return res.status(400).json({ 'message': 'Username, email and password are required' });

    //check if the email exists
    const duplicate = await User.findOne({ email: email }).exec();
    if (duplicate) return res.sendStatus(409).json({ 'message': 'User already exists' });

    try {
        const hashedPwd = await bcrypt.hash(pwd, 10);
        const result = await User.create({
            "username": user,
            "email": email,
            "password": hashedPwd
        });

        console.log(result);

        res.status(201).json({ 'success': `New user ${user} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };