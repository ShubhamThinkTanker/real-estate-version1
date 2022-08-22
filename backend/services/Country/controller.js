// const EstateStructureServices = require('./service')
const countryModel = require('./countryModel')
const { Country, State, City } = require("country-state-city")
const { commonResponse } = require("../../helper");
module.exports = {



  GetAllCountry: async (req, res, next) => {
    try {

      let allCountry = await countryModel.find()
      let countryName = allCountry.map(index => index.name)


      if (countryName) {
        return commonResponse.success(res, 200, 'Get all countrys', countryName);
      } else {
        return commonResponse.customErrorResponse(res, 422, 'Something went wrong');
      }

    } catch (error) {
      console.log(error);
    }
  },

  GetAllState: async (req, res, next) => {
    try {
      let allCountry = await countryModel.find()
      let countryName = allCountry.map(index => index.name)


      if (countryName) {
        return commonResponse.success(res, 200, 'Get all countrys', countryName);
      } else {
        return commonResponse.customErrorResponse(res, 422, 'Something went wrong');
      }
    } catch (error) {
      console.log(error);
    }
  }
}