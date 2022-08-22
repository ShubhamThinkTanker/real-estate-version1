// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import { ChairmanListAction } from '../redux/actions/apislogic/chairmanapis';
// import { ComplexCreateAction } from '../redux/actions/apislogic/complexapi';
// import { UserListAction } from '../redux/actions/apislogic/userapis';
// import { VendorListAction } from '../redux/actions/apislogic/vendorapis';
// import { ComplexListAction } from '../redux/actions/apislogic/complexapi';
// import {
// 	CHAIRMAN_REGISTER_RESET,
// 	COMPLEX_CREATE_RESET,
// 	MULTI_DELETE_RESET,
// 	USER_DELETE_RESET,
// 	USER_EDIT_RESET,
// 	USER_REGISTER_RESET,
// 	VENDOR_DELETE_RESET,
// 	VENDOR_EDIT_RESET,
// 	VENDOR_MULTI_DELETE_RESET,
// 	VENDOR_REGISTER_RESET,
// 	COMPLEX_EDIT_RESET,
// 	COMPLEX_DELETE_RESET,
// 	COMPLEX_MULTI_DELETE_RESET,
// } from '../redux/Constants/userConstants';

// // Chairman message
// export const User_Chairman_Message = (setDeletedRow) => {
// 	const dispatch = useDispatch();
// 	const registerRecords = useSelector((state) => state.registerChairmanData);
// 	var { ChairmanRegisterData } = registerRecords;
// 	const EditDatMessage = useSelector((state) => state.EditUSerData);
// 	const { UserEditData } = EditDatMessage;
// 	const multideletedatas = useSelector((state) => state.MultiDeleteData);
// 	const { deleteMultirData } = multideletedatas;
// 	const deleteresponse = useSelector((state) => state.DeleteUser);
// 	var { loading, error, deleteUserData } = deleteresponse;

// 	useEffect(() => {
// 		if (ChairmanRegisterData) {
// 			toast.success('Chairman create successfully', {
// 				className: 'toast-success-btn',
// 			});
// 			dispatch({ type: CHAIRMAN_REGISTER_RESET });
// 			dispatch(ChairmanListAction());
// 		} else if (UserEditData) {
// 			toast.success('Chairman update successfully', {
// 				className: 'toast-success-btn',
// 			});
// 			dispatch({ type: USER_EDIT_RESET });
// 		} else if (deleteUserData) {
// 			toast.error('Data delete successfully!', {
// 				className: 'toast-delete-btn',
// 			});
// 			dispatch({ type: USER_DELETE_RESET });
// 			dispatch(ChairmanListAction());
// 		} else if (deleteMultirData) {
// 			toast.error('Data delete successfully!', {
// 				className: 'toast-delete-btn',
// 			});
// 			dispatch({ type: MULTI_DELETE_RESET });
// 			dispatch(ChairmanListAction());
// 			setDeletedRow([]);
// 		}
// 	}, [
// 		dispatch,
// 		ChairmanRegisterData,
// 		UserEditData,
// 		deleteUserData,
// 		deleteMultirData,
// 	]);
// };

// // User message
// export const User_Data_Message = (setDeletedRow) => {
// 	const dispatch = useDispatch();
// 	const registerRecords = useSelector((state) => state.registerUserData);
// 	var { UserRegisterData } = registerRecords;
// 	const EditDatMessage = useSelector((state) => state.EditUSerData);
// 	const { UserEditData } = EditDatMessage;
// 	const multideletedatas = useSelector((state) => state.MultiDeleteData);
// 	const { deleteMultirData } = multideletedatas;
// 	const deleteresponse = useSelector((state) => state.DeleteUser);
// 	var { loading, error, deleteUserData } = deleteresponse;

// 	useEffect(() => {
// 		if (UserRegisterData) {
// 			toast.success('User create successfully', {
// 				className: 'toast-success-btn',
// 			});
// 			dispatch({ type: USER_REGISTER_RESET });
// 		} else if (UserEditData) {
// 			toast.success('User update successfully', {
// 				className: 'toast-success-btn',
// 			});
// 			dispatch({ type: USER_EDIT_RESET });
// 		} else if (deleteUserData) {
// 			toast.error('Data delete successfully!', {
// 				className: 'toast-user-delete-btn',
// 			});
// 			dispatch({ type: USER_DELETE_RESET });
// 			dispatch(UserListAction());
// 		} else if (deleteMultirData) {
// 			toast.error('Data delete successfully!', {
// 				className: 'toast-user-delete-btn',
// 			});
// 			dispatch({ type: MULTI_DELETE_RESET });
// 			dispatch(UserListAction());
// 			setDeletedRow([]);
// 		}
// 	}, [
// 		dispatch,
// 		UserRegisterData,
// 		UserEditData,
// 		deleteUserData,
// 		deleteMultirData,
// 	]);
// };

// // Complex message
// export const Complex_Data_Message = (setDeletedRow) => {
// 	const dispatch = useDispatch();
// 	const addComplexRecord = useSelector((state) => state.createComplexRecord);
// 	const { ComplexCreateData } = addComplexRecord;
// 	const EditDataMessage = useSelector((state) => state.EditComplexData);
// 	const { ComplexEditData } = EditDataMessage;
// 	const deleteresponse = useSelector((state) => state.DeleteComplex);
// 	var { deleteComplexData } = deleteresponse;
// 	const complexDeleteMulti = useSelector(
// 		(state) => state.ComplexdeleteMultiData
// 	);
// 	const { ComplexdeleteMultiData } = complexDeleteMulti;
// 	useEffect(() => {
// 		if (ComplexCreateData) {
// 			toast.success('Realestate create successfully', {
// 				className: 'toast-success-btn',
// 			});
// 			dispatch({ type: COMPLEX_CREATE_RESET });
// 			dispatch(ComplexCreateAction());
// 		} else if (ComplexEditData) {
// 			toast.success('Realestate Update Successfully', {
// 				className: 'toast-success-btn',
// 			});
// 			dispatch({ type: COMPLEX_EDIT_RESET });
// 		} else if (deleteComplexData) {
// 			toast.error('Realestate delete successfully!', {
// 				className: 'toast-delete-btn ',
// 			});
// 			dispatch({ type: COMPLEX_DELETE_RESET });
// 			dispatch(ComplexListAction());
// 		} else if (ComplexdeleteMultiData) {
// 			toast.error('Data delete successfully!', {
// 				className: 'toast-user-delete-btn',
// 			});
// 			dispatch({ type: COMPLEX_MULTI_DELETE_RESET });
// 			dispatch(ComplexListAction());
// 			setDeletedRow([]);
// 		}
// 	}, [
// 		dispatch,
// 		ComplexCreateData,
// 		ComplexEditData,
// 		deleteComplexData,
// 		ComplexdeleteMultiData,
// 	]);
// };

// // Vendor message
// export const Vendor_Data_Message = (setDeletedRow) => {
// 	const dispatch = useDispatch();
// 	const registerRecords = useSelector((state) => state.registerVendorData);
// 	var { VendorRegisterData } = registerRecords;
// 	const deleteresponse = useSelector((state) => state.DeleteVendor);
// 	var { deleteVendorData } = deleteresponse;
// 	const EditDataMessage = useSelector((state) => state.EditVendorData);
// 	const { VendorEditData } = EditDataMessage;

// 	const vendorDeleteMulti = useSelector(
// 		(state) => state.VendordeleteMultiData
// 	);
// 	const { VendordeleteMultiData } = vendorDeleteMulti;

// 	useEffect(() => {
// 		if (VendorRegisterData) {
// 			toast.success('Vendor Create Successfully', {
// 				className: 'toast-success-btn',
// 			});
// 			dispatch({ type: VENDOR_REGISTER_RESET });
// 		} else if (deleteVendorData) {
// 			toast.error('Data delete successfully!', {
// 				// className: 'toast-delete-btn ',
// 			});
// 			dispatch({ type: VENDOR_DELETE_RESET });
// 			dispatch(VendorListAction());
// 		} else if (VendorEditData) {
// 			toast.success('Vendor Update Successfully', {
// 				// className: 'toast-success-btn',
// 			});
// 			dispatch({ type: VENDOR_EDIT_RESET });
// 		} else if (VendordeleteMultiData) {
// 			toast.error('Data delete successfully!', {
// 				// className: 'toast-user-delete-btn',
// 			});
// 			dispatch({ type: VENDOR_MULTI_DELETE_RESET });
// 			dispatch(VendorListAction());
// 			setDeletedRow([]);
// 		}
// 	}, [dispatch, VendorRegisterData, deleteVendorData, VendordeleteMultiData]);
// };
