const { commonResponse } = require("../../helper");
const ChairmanModel = require("./user.model");
const { fileUploadToS3, deleteImage } = require("../../helper/s3aws");



exports.chairmanCreate = async (reqbody, id, hash) => {
	try {
		// console.log(reqbody, "reqbody");

		var link = await fileUploadToS3(reqbody.profile_image);
		const newUser = new ChairmanModel({
			name: reqbody.name,
			email: reqbody.email,
			password: hash,
			mobile_no: reqbody.mobile_no,
			gender: reqbody.gender,
			role: reqbody.role,
			profile_image: link["link"],
			address: reqbody.address,
			city: reqbody.city,
			state: reqbody.state,
			country: reqbody.country,
			status: reqbody.status || "active",
			resetPasswordToken: reqbody.resetPasswordToken,
			resetPasswordExpires: reqbody.resetPasswordExpires,
			created_by: id
		});
		return await newUser.save();
	} catch (error) {
		console.log(" Add new User Error : ", error);
		return { error: error };
	}
};


exports.userCreate = async (reqbody, id, hash) => {
	try {
		var link = await fileUploadToS3(reqbody.profile_image);

		const newUsers = new ChairmanModel({
			name: reqbody.name,
			email: reqbody.email,
			password: hash,
			mobile_no: reqbody.mobile_no,
			gender: reqbody.gender,
			role: reqbody.role,
			address: reqbody.address,
			city: reqbody.city,
			status: reqbody.status || "active",
			country: reqbody.country,
			profile_image: link["link"],
			resetPasswordToken: reqbody.resetPasswordToken,
			resetPasswordExpires: reqbody.resetPasswordExpires,
			created_by: id
		});

		return await newUsers.save();
	} catch (error) {
		console.log("  Error-------------user : ", error);
		return { error: error };
	}
};


exports.is_email_exist = async (reqBody) => {
	try {
		let user = await ChairmanModel.findOne({ email: reqBody.email }).lean();
		// console.log("user..email...",user);
		if (!user) {
			return false;
		}
		return user;
	} catch (error) {
		// console.log("Check Email Error : ", error);
		return new Error(error);
	}
};


exports.is_mobile_no_exist = async (reqBody) => {
	try {
		let user = await ChairmanModel.findOne({
			mobile_no: reqBody.mobile_no
		}).lean();

		if (!user) {
			return false;
		}
		return user;
	} catch (error) {
		return new Error(error);
	}
};


exports.Update = async (token, id) => {
	try {
		// console.log(id, ":id");

		const updatetoken = await ChairmanModel.updateOne({ _id: id }, { resetPasswordToken: token, resetPasswordExpires: Date.now() })


	} catch (error) {
		console.log("Check Email Error : ", error);
		return new Error(error);
	}
};


exports.login = async (reqBody) => {
	try {
		console.log(reqBody);
		// var mobile_no = username
		let user = await ChairmanModel.findOne({
			$or: [{ email: reqBody.username }, { mobile_no: reqBody.username }]
		}).select("+password");
		if (!user) {
			return false;
		}
		return user;
	} catch (error) {
		return new Error(error);
	}
};


exports.FindAdmin = async (reqBody) => {
	try {
		const user = await ChairmanModel.findOne({
			$or: [{ email: reqBody.email }, { mobile_no: reqBody.mobile_no }]
		});
		// console.log(user, ":user");
		if (!user) {
			return false;
		}
		return user;
	} catch (error) {
		return new Error(error);
	}
};


exports.Valid_token = async (token) => {
	try {
		const user = await ChairmanModel.findOne({
			resetPasswordToken: token,
			ResetPasswordExpire: { $gt: Date.now() }
		});
		if (!user) {
			return false;
		}
		return user;
	} catch (error) {
		console.log("Check  Error : ", error);
		return new Error(error);
	}
};


exports.UpdatePassword = async (token, HashPassword) => {
	try {
		const updatetoken = await ChairmanModel.updateOne({
			resetPasswordToken: "",
			resetPasswordExpires: Date.now(),
			password: HashPassword
		});
	} catch (error) {
		console.log("Check Error : ", error);
		return new Error(error);
	}
};


exports.getAllChairman = async (reqQuery, sort_array, filter_value, status) => {
	try {
		let LIMIT = reqQuery.limit * 1;
		let SKIP = (reqQuery.page - 1) * reqQuery.limit;
		if (filter_value != "") {
			var regex = new RegExp(filter_value, "i");
			// console.log(regex, ":regex");
			filter_value = {
				$or: [{ mobile_no: regex }, { email: regex }, { name: regex }, { status: regex }, { status: status }]
			};
		} else {
			filter_value = {};
		}

		if (status != "") {
			var regex = new RegExp(status, "i");
			status = {
				$or: [{ status: regex }]
			}
		} else {
			status = {};
		}
		let getAllUser = await ChairmanModel.find({
			$and: [{ role: "chairman" }, filter_value, status]
		})
			.limit(LIMIT)
			.skip(SKIP)
			.sort([sort_array]);

		return getAllUser;
	} catch (error) {
		return { error: error };
	}
};


exports.getAlluser = async (reqQuery, sort_array, filter_value, status) => {
	try {
		// console.log(filter_value, ":sortJson");
		let LIMIT = reqQuery.limit * 1;
		let SKIP = (reqQuery.page - 1) * reqQuery.limit;
		if (filter_value != "") {
			var regex = new RegExp(filter_value, "i");
			console.log(regex, ":regex");
			filter_value = {
				$or: [{ mobile_no: regex }, { email: regex }, { name: regex }]
			};
		} else {
			filter_value = {};
		}

		if (status != "") {
			var regex = new RegExp(status, "i");
			status = {
				$or: [{ status: regex }]
			}
		} else {
			status = {};
		}

		let getAllUser = await ChairmanModel.find({
			$and: [{ role: "user" }, filter_value, status]
		})
			.limit(LIMIT)
			.skip(SKIP)
			.sort([sort_array]);
		return getAllUser;
	} catch (error) {
		return { error: error };
	}
};


exports.get = async (id) => {
	// console.log(id , ":id");
	try {
		let getUserBYId = await ChairmanModel.findOne({ _id: id }).lean();

		if (!getUserBYId) {
			return new Error(commonResponse.getErrorMessage("USER_NOT_FOUND"));
		}
		return getUserBYId;
	} catch (error) {
		console.log("Error : ", error);
		return { error: error };
	}
};


exports.update = async (id, reqBody) => {
	console.log(reqBody);
	try {
		let findOneBYId = await ChairmanModel.findOne({ _id: id });

		// console.log(findOneBYId.profile_image.split("/")[findOneBYId.profile_image.split("/").length - 1], "findOneBYId...");

		if (reqBody.profile_image && findOneBYId != null) {

			var link = await fileUploadToS3(reqBody.profile_image, "Profile_Image")

			deleteImage(findOneBYId.profile_image.split("/")[findOneBYId.profile_image.split("/").length - 1], "Profile_Image")
			reqBody.profile_image = link['link']
		}
		let updateUserData = await ChairmanModel.findOneAndUpdate({ _id: id }, { $set: reqBody }, { new: true, }).lean();

		// console.log(updateUserData.profile_image.split("/")[updateUserData.profile_image.split("/").length - 1], "updateUserData........");

		if (!updateUserData) {
			return new Error(commonResponse.getErrorMessage("USER_NOT_FOUND"));
		}
		return updateUserData;
	} catch (error) {
		console.log("Error : ", error);
		return { error: error };
	}
}


exports.delete = async (id) => {

	try {

		let deleteUserData = await ChairmanModel.findOneAndDelete({ _id: id }).lean();

		// console.log("deleteUserData", deleteUserData);
		// console.log("deleteUserData.......", deleteUserData.profile_image.split("/")[deleteUserData.profile_image.split("/").length - 1]);

		deleteImage(deleteUserData.profile_image.split("/")[deleteUserData.profile_image.split("/").length - 1], "Profile_Image")

		if (!deleteUserData) {
			return new Error(commonResponse.getErrorMessage("USER_NOT_FOUND"));
		}
		return deleteUserData;

	} catch (error) {
		console.log("Error : ", error);
		return { error: error };
	}
}

exports.deletemulti = async (id) => {
	try {
		let GetData = await ChairmanModel.deleteMany({ _id: { $in: id } });
		return GetData;
	} catch (error) {
		console.log("Error : ", error);
		return new Error(error);
	}
};

exports.updatepassword = async (id, hash) => {
	try {

		let updatepassword = await ChairmanModel.findOneAndUpdate({ _id: id }, { password: hash }).lean();

		if (!updatepassword) {
			return new Error(commonResponse.getErrorMessage("Data not found"));
		}
		return updatepassword;
	} catch (error) {
		console.log(error, ":error");
	}
}


