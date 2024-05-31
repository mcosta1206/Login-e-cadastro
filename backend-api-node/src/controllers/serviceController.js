const { model } = require("mongoose");
const { Service: ServiceModel,  MembersQtd: membersQuantity} = require("../models/Service");

const serviceController = {

    create: async (req, res) => {

        try {

            const service = { //completar todas as descrições de serviços

                name: req.body.name,
                description: req.body.description,
                quantity: req.body.quantity,
                image: req.body.image,
                status: req.body.status,
                members: req.body.members
            };
            

            // Tentativa de implementação da validação de quantidade (falta criar a função para validar)
            // if(service.members && !funçãoASerCriada)){
            // res.status(406).json({msg: "A quantidade máxima de membros para essa campanha já foi atingida!"});
            // return;
            // }

            const response = await ServiceModel.create(service);
            res.status(201).json({ response, msg: "serviço criado com sucesso!" });

        } catch (error) {

            console.log("ocorreu um erro ao processar a requisição: " + error.message);

        }


    },

    getAll: async (req, res) => {
        try {
            const services = await ServiceModel.find();
            res.json(services);
        } catch (error) {
            console.log(error.message);
        }
    },

    get: async (req, res) => {
        try {
            const id = req.params.id
            const service = await ServiceModel.findById(id)


            if (!service) {
                res.status(404).json({ msg: "Serviço não encontrado" });
                return;
            }

            res.json(service)
        } catch (error) {
            console.log(error.message)

        }
    },

    delete: async (req, res) => {
        try {

            const id = req.params.id
            const service = await ServiceModel.findById(id)

            if (!service) {
                res.status(404).json({ msg: "Serviço não encontrado" });
                return;
            }

            const deletedService = await ServiceModel.findByIdAndDelete(id)

            res.status(200).json({ deletedService, msg: "Serviço excluído com sucesso" })



        } catch (error) {
            console.log(error.message)

        }
    },
    update: async (req, res) => {
        const id = req.params.id

        const service = {
            
            name: req.body.name,
            description: req.body.description,
            quantity: req.body.quantity,
            image: req.body.image,
            status: req.body.status,
            members: req.body.members
        }

        const updatedService = await ServiceModel.findByIdAndUpdate(id, service)

        if (!updatedService) {
            res.status(404).json({ msg: "Serviço não encontrado" });
            return;
        }

        res.status(200).json({service, msg: "Serviço atualizado com sucesso."})

    }

};

module.exports = serviceController;