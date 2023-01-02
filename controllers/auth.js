const register = async (req, res) => {
    res.send('Register User Controllers');
}

const login = async (req, res) => {
    res.send('Login User Controller');
}

module.exports = { register, login }