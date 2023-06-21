const { User } = require('../models');
const { checkPass } = require('../helpers/encryptor');
const { signToken } = require('../helpers/jwt');

class Controller {

    static async register(req, res, next) {
        try {
            const { name, password, phone, email } = req.body;

            const user = await User.create({
                email,
                name,
                password,
                phone,
                type: 1
            });

            res.status(201).json({
                message: 'User created successfully',
                user
            })

        } catch (err) {
            next(err);
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({
                where: {
                    email
                }
            });

            if (!user) {
                throw { name: "not_found", message: "Invalid email or password", code: 401 };
            }

            const isMatch = await checkPass(password, user.password);

            if (!isMatch) {
                throw { name: "not_found", message: "Invalid email or password", code: 401 };
            }
            const token = signToken({ id: user.id, email: user.email });

            res.status(200).json({
                message: 'User logged in successfully',
                user: { id: user.id, name: user.name, email: user.email, avatar: user.avatar },
                token
            });

        } catch (err) {
            next(err);
        }
    }

    static async dashboard(req, res, next) {
        try {
            const arrNumber = [];
            const arrTitle = ["Vendors/Suppliers", "Products", "Sales Orders", "Customers/Dealers", "Products SKU", "Purchase Orders", "Grinds", "Manuals", "Verts Transfers"]
            for (let i = 0; i < 8; i++) {
                let randNumber = Math.floor(Math.random() * 1000000)
                let obj = {}
                obj["title"] = arrTitle[i];
                obj["num"] = randNumber
                arrNumber.push(obj);
            }

            res.status(200).json({
                arrNumber
            });

        } catch (err) {
            next(err);
        }
    }

}

module.exports = Controller;