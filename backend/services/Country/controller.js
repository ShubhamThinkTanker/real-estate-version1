// const EstateStructureServices = require('./service')
const countryModel = require('./countryModel')
const stateModel = require('./stateModel')
const cityModel = require('./Citymodel')
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

      let countryname = req.query.countryname || "";

      let FindCountrycode = await countryModel.find({ name: countryname })
      let getCountryCode = FindCountrycode.map(index => index.countryCode)

      let allState = await stateModel.find({ countryCode: getCountryCode })

      let stateName = allState.map(index => index.name)



      if (stateName) {
        return commonResponse.success(res, 200, 'Get all State', stateName);
      } else {
        return commonResponse.customErrorResponse(res, 422, 'Something went wrong');
      }
    } catch (error) {
      console.log(error);
    }
  },

  GetAllCity: async (req, res, next) => {
    try {

      let statename = req.query.statename || "";
      let FindCountrycode = await stateModel.find({ name: statename })

      let getisoCode = FindCountrycode.map(index => index.isoCode)
      let getCountry = FindCountrycode.map(index => index.countryCode)

      let allCountry = await cityModel.find({
        stateCode: getisoCode,
        countryCode: getCountry
      })

      let cityName = allCountry.map(index => index.name)

      if (cityName) {
        return commonResponse.success(res, 200, 'Get all State', cityName);
      } else {
        return commonResponse.customErrorResponse(res, 422, 'Something went wrong');
      }

    } catch (error) {
      console.log(error);
    }
  }
}