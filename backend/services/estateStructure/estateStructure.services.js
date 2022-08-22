const EstateStructure = require('./estateStructure.model')
const { commonResponse } = require("../../helper");

module.exports = {
    save: async (reqBody, id) => {
        try {
            const newEstateStructure = new EstateStructure({
                real_estates_id: id,
                estate: reqBody.estate
            });
            // console.log(newEstateStructure, "newEstateStructure");
            return await newEstateStructure.save();
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },

    getAll: async () => {
        try {
            let getAllEstateStructure = await EstateStructure.find()
            return getAllEstateStructure;
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },

    get: async (id) => {
        try {
            let getEsatateStructureBYId = await EstateStructure.findById({ _id: id }).lean();
            if (getEsatateStructureBYId || getEsatateStructureBYId != null) {
                return getEsatateStructureBYId;
            }
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },

    update: async ( reqBody,id) => {
 
        try {
            let updateEstateStructureData = await EstateStructure.findOneAndUpdate({ _id: id }, { $set: reqBody }, { new: true, }).lean();
            return updateEstateStructureData;

        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },

    delete: async (id) => {

        try {
            let deleteEstateStructureData = await EstateStructure.findOneAndDelete(id);
            return deleteEstateStructureData

        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }

    },

    deleteMultiple: async (id) => {
        try {
            let deleteMultipleEstateStructure = await EstateStructure.deleteMany({ _id: { $in: id } });
            return deleteMultipleEstateStructure;
        } catch (error) {
            console.log('Error : ', error);
            return new Error(error);
        }
    },
}
