const { commonResponse } = require("../../helper");
const ChairmanModel = require("./user.model");
const { fileUploadToS3, deleteImage } = require("../../helper/s3aws");

// ------***------  Register Data  -------****--------//

exports.chairmanCreate = async (reqbody, id, hash) => {
	try {
		var link = await fileUploadToS3(reqbody.profile_image);
		const newUser = new ChairmanModel({
			name: reqbody.name,
			email: reqbody.email,
			password: hash,
			mobile_no: reqbody.mobile_no,
			gender: reqbody.gender,
			role: reqbody.role,
			profile_image: link["link"],
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

// ------***------  user Save Data Api -------****--------//
exports.userCreate = async (reqbody, id) => {
	try {
		var link = await fileUploadToS3(reqbody.profile_image);
		console.log(link, "link");
		const newUsers = new ChairmanModel({
			name: reqbody.name,
			email: reqbody.email,
			password: reqbody.password,
			mobile_no: reqbody.mobile_no,
			gender: reqbody.gender,
			role: reqbody.role,
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
}

exports.chairmanCreate = async (reqbody, id, hash) => {
	try {
		var link = await fileUploadToS3(reqbody.profile_image, "Profile_Image")
		const newChairman = new ChairmanModel({
			name: reqbody.name,
			email: reqbody.email,
			password: hash,
			mobile_no: reqbody.mobile_no,
			gender: reqbody.gender,
			role: reqbody.role,
			profile_image: link['link'],
			resetPasswordToken: reqbody.resetPasswordToken,
			resetPasswordExpires: reqbody.resetPasswordExpires,
			created_by: id,
		});
		return await newChairman.save();
	} catch (error) {
		console.log(" Add new User Error : ", error);
		return { error: error };
	}
};

// ------***------  user Save Data Api -------****--------//
exports.userCreate = async (reqbody, id, hash) => {
	try {
		var link = await fileUploadToS3(reqbody.profile_image, "Profile_Image")
		const newUsers = new ChairmanModel(
			{
				name: reqbody.name,
				email: reqbody.email,
				password: hash,
				mobile_no: reqbody.mobile_no,
				gender: reqbody.gender,
				role: reqbody.role,
				profile_image: link['link'],
				resetPasswordToken: reqbody.resetPasswordToken,
				resetPasswordExpires: reqbody.resetPasswordExpires,
				created_by: id,
			},
		);

		return await newUsers.save();
	} catch (error) {
		console.log("  Error-------------user : ", error);
		return { error: error };
	}
};

// ------***------  Check Email Exist Or Not -------****--------//

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

// ------***------  Check MObile No Exist Or Not -------****--------//

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

// ------***------  Update Token-------****--------//

exports.Update = async (token, id) => {
	try {
		console.log(id, ":id");

		const updatetoken = await ChairmanModel.updateOne({ _id: id }, { resetPasswordToken: token, resetPasswordExpires: Date.now() })


	} catch (error) {
		console.log("Check Email Error : ", error);
		return new Error(error);
	}
};

// ------***------  Login Email & Mobile To   -------****--------//

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

// ------***------  Add New User Successfully -------****--------//

exports.FindAdmin = async (reqBody) => {
	try {
		const user = await ChairmanModel.findOne({
			$or: [{ email: reqBody.email }, { mobile_no: reqBody.mobile_no }]
		});
		console.log(user, ":user");
		if (!user) {
			return false;
		}
		return user;
	} catch (error) {
		return new Error(error);
	}
};

// ------***------  Token Verify -------****--------//

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

// ------***------  Update Password  -------****--------//

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

// ---- ***---- Get All  Chairman -----***-----//

exports.getAllChairman = async (reqQuery, sort_array, filter_value) => {
	try {
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
		let getAllUser = await ChairmanModel.find({
			$and: [{ role: "chairman" }, filter_value]
		})
			.limit(LIMIT)
			.skip(SKIP)
			.sort([sort_array]);
		// console.log("user...",user);
		return getAllUser;
	} catch (error) {
		return { error: error };
	}
};

// ---- ***---- Get All User -----***-----//

exports.getAlluser = async (reqQuery, sort_array, filter_value) => {
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

		let getAllUser = await ChairmanModel.find({
			$and: [{ role: "user" }, filter_value]
		})
			.limit(LIMIT)
			.skip(SKIP)
			.sort([sort_array]);
		return getAllUser;
	} catch (error) {
		return { error: error };
	}
};

// ------***------ Find User By Id-------****--------//

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

// ------***------Update User  -------****--------//

exports.update = async (id, reqBody) => {


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


// ------***------Delete User-------****--------//

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

// console.log("deleteUserData", deleteUserData);
// console.log("deleteUserData.......", deleteUserData.profile_image.split("/")[deleteUserData.profile_image.split("/").length - 1]);



// ------***------Delete Multipal User-------****--------//

exports.deletemulti = async (id) => {
	try {
		let GetData = await ChairmanModel.deleteMany({ _id: { $in: id } });
		return GetData;
	} catch (error) {
		console.log("Error : ", error);
		return new Error(error);
	}
};
