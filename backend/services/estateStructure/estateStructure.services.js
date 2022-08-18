const EstateStructure = require('./estateStructure.model')
const { commonResponse } = require("../../helper");

module.exports = {
    save: async (data) => {
        try {
            const newEstateStructure = new EstateStructure(data);
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

    update: async (id, reqBody) => {
        try {
            let updateEstateStructureData = await EstateStructure.findOneAndUpdate({ _id: id }, { $set: reqBody }, { new: true, }).lean();
            if (!updateEstateStructureData || updateEstateStructureData != null) {
                return updateEstateStructureData;
            }
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },

    delete: async (id) => {

        try {
            let deleteEstateStructureData = await EstateStructure.findOneAndDelete({ _id: id }).lean();

            if (!deleteEstateStructureData || deleteEstateStructureData != null) {
                return deleteEstateStructureData;
            }

        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }

    },
}
