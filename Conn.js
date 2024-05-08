//importing all the necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect('mongodb+srv://anupdangi28:farmers123@localfarmersapp.8bbteeb.mongodb.net/users')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

const farmerApp = require('./farmer');
const adminApp = require('./admin');

//schema for admin
const  AdminSchema = new mongoose.Schema({
    username : String,
    password : String
});

//schema for the login data
const loginDataSchema = new mongoose.Schema({
    username: String,
    password: String
});

//schema for the register data
const registerUserSchema = new mongoose.Schema({
    name: String,
    email:String,
    username:String,
    password:String
})

const admins = mongoose.model('admin', AdminSchema); //for admin
const LoginData = mongoose.model('LoginData', loginDataSchema); //for login
const RegisterLoginData = mongoose.model('userRegister', registerUserSchema); //for registration

app.use('/customer', express.static(path.join(__dirname, 'customer')));
app.use('/admin', express.static(path.join(__dirname, 'admin')));
app.use('/farmer', express.static(path.join(__dirname,'farmer')))

app.get("/", function(req, res){
    res.sendFile(__dirname + '/customer/customer1.html');
});

// Handle signin requests
app.post('/signin', async function(req, res) {
    const { username, password } = req.body;
    try {
        if (username && password) {
            const user = await LoginData.findOne({ username, password }).exec();
            const admin = await admins.findOne({ username, password }).exec();
            const register = await RegisterLoginData.findOne({username, password}).exec();
            if (user) {
                return res.redirect("/customer/afterlogin.html");
            } else if (admin) {
                return res.redirect("./admin/admin.html");
            } else if (register) {
                return res.redirect("/customer/afterlogin.html");
            } else {
                return res.status(400).send('Missing username or password');
            }
        } else {
            return res.status(400).send('Missing username or password');
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).send('Internal server error');
    }
});

// Handle registration requests
app.post('/register', async function(req, res) {
    const { name, email, username, password } = req.body;
    try {
        if (name && email && username && password) {
            const newUser = new RegisterLoginData({
                name: name,
                email: email,
                username: username,
                password: password
            });
            await newUser.save();
            console.log("User registered successfully");
            return res.redirect("/customer1.html");
        } else {
            return res.status(400).send('Missing required fields');
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).send('Internal server error');
    }
});

//schema for the supplier
const supplierSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    username: String,
    companyname: String
});

const Supplier = mongoose.model('Supplier', supplierSchema);
app.post('/supplier', async function(req, res) {
    const { fullname, email, password, username, companyname } = req.body;
    if (fullname && email && password && username && companyname) {
        const newSupplier = new Supplier({
            fullname: fullname,
            email: email,
            password: password,
            username: username,
            companyname: companyname
        });
        await newSupplier.save();
        console.log("Supplier registered successfully");
        return res.redirect("/farmer/main.html");
    } else {
        console.log("Something error"); 
        return res.status(400).send('Missing required fields');
    }
});

// app.use(express.static(__dirname + '/customer'));
let publicPath = path.join(__dirname ,  'customer');
console.log(publicPath);

// Serve static files from the 'public' directory
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/customer1.html`);
}); 

app.get('/catagories ', (req, res) => {
    res.sendFile(`${publicPath}/catagories.html`);
});
app.get('/about ', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));
