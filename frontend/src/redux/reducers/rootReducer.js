// ** Redux Imports
import { combineReducers } from 'redux';

// ** Reducers Imports
import {
	ProfileUpdateReducer,
	ResetForgotPasswordReducer,
	UserForgotPasswordReducer,
	userLoginReducer,
} from './auth/authReducer';
import {
	EditRegisterReducer,
	MultiDeleteReducer,
	UserDeleteReducer,
	UserGetReducer,
	UserListReducer,
	UserRegisterReducer,
} from './userReducers/userReducers';
import {
	ChairmanListReducer,
	ChairmanRegisterReducer,
} from './chairmanReducers/chairmanReducers';

import {
	ComplexCreateReducer,
	ComplexGetReducer,
	ComplexListReducer,
} from './complexReducers/complexReducers';
import auth from './auth';
import navbar from './navbar';
import layout from './layout';
import {
	EditVendoreducer,
	VendorDeleteReducer,
	VendorGetReducer,
	VendorListReducer,
	VendormultiReducer,
	VendorRegisterReducer,
} from './vendorReducers/vendorReducer';

const rootReducer = combineReducers({
	auth,
	navbar,
	layout,
	LoginUser: userLoginReducer,
	ProfileUpdate: ProfileUpdateReducer,
	DeleteUser: UserDeleteReducer,
	registerUserData: UserRegisterReducer,
	forgotPasswordUser: UserForgotPasswordReducer,
	ResetpasswordUser: ResetForgotPasswordReducer,
	getAllUser: UserListReducer,
	userRecords: UserGetReducer,
	registerChairmanData: ChairmanRegisterReducer,
	getAllChairman: ChairmanListReducer,
	EditUSerData: EditRegisterReducer,
	MultiDeleteData: MultiDeleteReducer,
	getAllVendor: VendorListReducer,
	registerVendorData: VendorRegisterReducer,
	DeleteVendor: VendorDeleteReducer,
	getAllComplexRecord: ComplexListReducer,
	getidComplexRecord: ComplexGetReducer,
	createComplexRecord: ComplexCreateReducer,
	vendorRecords: VendorGetReducer,
	registerVendorData: VendorRegisterReducer,
	DeleteVendor: VendorDeleteReducer,
	getAllComplexRecord: ComplexListReducer,
	getidComplexRecord: ComplexGetReducer,
	VendordeleteMultiData: VendormultiReducer,
	EditVendorData: EditVendoreducer,
});

export default rootReducer;
