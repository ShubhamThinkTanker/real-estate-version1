

const { userRoutes } = require("../services/user/index");
const { roleRoutes } = require('../services/role')
const { realestateRoutes } = require('../services/realestate')
const { estateStructureRoutes } = require('../services/estateStructure/index')
const { announcementRoute } = require('../services/announcement')
const { vendorRoutes } = require('../services/vendor')
const { maintenanceRoute } = require('../services/maintenance')
const { vehicleRoutes } = require('../services/vehicle/index')
const { countryRoute } = require('../services/Country/index')



const initialize = (app) => {
	app.use("/api", userRoutes);
	app.use("/role", roleRoutes);
	app.use("/realestate", realestateRoutes)
	app.use('/estateStructure', estateStructureRoutes)
	app.use("/chairman/announcement", announcementRoute)
	app.use("/vendor", vendorRoutes);
	app.use("/vehicle", vehicleRoutes)
	app.use("/", countryRoute)
	app.use("/maintenance", maintenanceRoute)


};

module.exports = { initialize };




