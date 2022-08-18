const Realestate = require('./realestate.model')
const { commonResponse } = require("../../helper");




module.exports = {

    //create roll
    save: async (data) => {
        try {

            const newRealestate = new Realestate(data);
            return await newRealestate.save();
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },



    //get roll
    get: async () => {
        try {
            let realestate = await Realestate.find();
            return realestate;
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },

    //getbyid
    getone: async (res, id) => {
        try {
            let realesate = await Realestate.findById({ _id: id });

            return realesate;
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },

    //update roll
    update: async (id, realestatebody) => {
        try {
            let updatedRealestate = await Realestate.findOneAndUpdate({ _id: id }, { $set: realestatebody }, { new: true, }).lean();

            return updatedRealestate;
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },

    //delete roll
    delete: async (id) => {
        try {
            let deleteRealestate = await Realestate.findByIdAndDelete(id);

            return deleteRealestate
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    }
}

