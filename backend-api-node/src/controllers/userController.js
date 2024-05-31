const { User: UserModel } = require("../models/user");

const userController = {
    create: async (req, res) => {
        try {
            const user = {
                name: req.body.name,
                surname: req.body.surname,
                image: req.body.image,
                birth: req.body.birth,
                email: req.body.email,
                password: req.body.password
            }
            const response = await UserModel.create(user);
            res.status(200).json({ response, msg: "Usuário criado com sucesso!" });

        } catch (error) {
            console.log("Ocorreu um erro ao processar a requisição " + error.message)
        }
    },

    getAll: async (req, res) => {

        try {
            const usersData = await UserModel.find();
            res.json(usersData);

        } catch (error) {
            console.log("Ocorreu um erro ao processar a requisição " + error.message);
        }

    },

    get: async (req, res) => {
        try {
            const id = req.params.id;
            const userData = await UserModel.findById(id);

            if (!userData) {
                res.status(404).json({ msg: "Usuário não encontrado" });
                return;
            }

            res.json(userData);

        } catch (error) {
            console.log(error.message);

        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const userData = await UserModel.findById(id);

            if (!userData) {
                res.status(404).json({ msg: "Usuário não encontrado" });
                return;
            }

            const deletedUser = await UserModel.findByIdAndDelete(id);

            res.status(200).json({ deletedUser, msg: "Usuário excluído com sucesso!" });


        } catch (error) {
            console.log(error.message);
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id;

            const user = {
                name: req.body.name,
                surname: req.body.surname,
                image: req.body.image,
                birth: req.body.birth,
                email: req.body.email,
                password: req.body.password
            }
            const updatedUser = await UserModel.findByIdAndUpdate(id, user);

            if (!updatedUser) {
                res.status(404).json({ msg: "Usuário não encontrado" });
                return;
            }

            res.status(200).json({ updatedUser, msg: "Dados atualizados com sucesso" });

        } catch (error) {
            console.log(error.message);
        }
    }

};

module.exports = userController;