const Vendor = require('./vendor.model')
const { commonResponse } = require("../../helper");


module.exports = {

    //create vendor
    save:async(data) => {
        try {
            console.log(data,"2322")
            const newvendor = new Vendor(data);
            return await newvendor.save();
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },
    //get vendor
    get:async (reqQuery, sort_array, filter_value) => {
        try {
            let LIMIT = reqQuery.limit * 1
            let SKIP = (reqQuery.page - 1) * reqQuery.limit
            if (filter_value != '') {
                var regex = new RegExp(filter_value, 'i')
                console.log(regex, ":regex");
                filter_value = {
                    $or: [
                        { 'name': regex },
                        { 'lastname': regex },
                        { 'mobile_no': regex },
                        { 'profession': regex },
                        { 'services': regex },
                        { 'address': regex },
                        
                    ]
                }
            } else {
                filter_value = {};
            }
            console.log(filter_value,"filter_value")
            let getAllVendor = await Vendor.find(
                filter_value
            ).limit(LIMIT)
                .skip(SKIP)
                .sort([sort_array])
            // console.log("user...",user);
            console.log(getAllVendor)
            return getAllVendor;
    } catch (error) {
        console.log("Error : ", error);
        return new Error(error);
    }
    },

    //update vendor
    update: async(id,vendorbody) => {
        try {
            let updateVendorData = await Vendor.findOneAndUpdate({ _id: id }, {$set:vendorbody}, {new: true,}).lean();
           
            return updateVendorData;
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },

    //delete vendor
    delete: async(id) => {
        try{
            let deleteVendor = await Vendor.findByIdAndDelete(id);
            console.log(deleteVendor,"9909009")
            return deleteVendor
        } catch (error){
            console.log("Error : ", error);
            return new Error(error);
        }
    },

    //getbyid
    getone:async (res,id) => {
        try {
        let vendor = await Vendor.findById({_id:id});
        
        return vendor;
    } catch (error) {
        console.log("Error : ", error);
        return new Error(error);
    }
    },

    //deletemulti
    deletemulti:async(id) => {
        try{
            console.log(id)
            let vendor = await Vendor.deleteMany({_id:{$in:id}});
            return vendor;
        } catch(error){
            console.log("Error : ", error);
            return new Error(error);
        }
    }
}