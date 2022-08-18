const Role = require('./role.model')
const { commonResponse } = require("../../helper");




module.exports = {

    //create roll
    save: async (data) => {
        try {

            const newRole = new Role(data);
            return await newRole.save();
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },



    //get roll
    get: async () => {
        try {
            let role = await Role.find();
            if (!role) {
                throw new Error(commonResponse.getErrorMessage("USER_NOT_FOUND"));
            }
            return role;
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },

    //getbyid
    getone: async (res, id) => {
        try {
            let role = await Role.findById({ _id: id });

            return role;
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },

    //update roll
    update: async (id, rolebody) => {
        try {
            let updateRoleData = await Role.findOneAndUpdate({ _id: id }, { $set: rolebody }, { new: true, }).lean();

            return updateRoleData;
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },

    //delete roll
    delete: async (id) => {
        try {
            let deleteRole = await Role.findByIdAndDelete(id);

            return deleteRole
        } catch (error) {

            return new Error(error);
        }
    }
}

