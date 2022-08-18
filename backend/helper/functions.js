const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

exports.encryptStringCrypt = async (string_value) => {
	let encryptedString = cryptr.encrypt(string_value);
	return encryptedString;
};

exports.decryptedString = async (string_value) => {
	let decryptedString = cryptr.decrypt(string_value);
	return decryptedString;
};
