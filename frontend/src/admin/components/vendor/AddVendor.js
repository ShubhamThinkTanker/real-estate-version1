import React, { useState } from 'react';
import { useEffect } from 'react';
import {
	Card,
	CardBody,
	Row,
	Col,
	Input,
	Form,
	Button,
	Label,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import '@styles/react/libs/flatpickr/flatpickr.scss';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { VendorRegisterAction } from '../../../redux/actions/apislogic/vendorapis';
import { VENDOR_REGISTER_RESET } from '../../../redux/Constants/userConstants';

const AddVendor = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	function handleChange(e) {
		setFileSend(e.target.files[0]);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	const [values, setValues] = useState({
		name: '',
		lastname: '',
		mobile_no: '',
		profession: '',
		services: '',
		address: '',
	});

	const registerRecord = useSelector((state) => state.registerVendorData);
	var { error, VendorRegisterData } = registerRecord;

	useEffect(() => {
		if (VendorRegisterData) {
			history.push('/vendor/list');
		}
	}, [VendorRegisterData && VendorRegisterData]);

	useEffect(() => {
		dispatch({ type: VENDOR_REGISTER_RESET });
	}, []);

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(values);
		const { name, lastname, mobile_no, profession, services, address } =
			values;

		const formData = new FormData();
		formData.append('name', name);
		formData.append('lastname', lastname);
		formData.append('mobile_no', mobile_no);
		formData.append('profession', profession);
		formData.append('services', services);
		formData.append('address', address);
		dispatch(VendorRegisterAction(formData));
	};

	return (
		<>
			<h3>Create Vendor</h3>
			<Card>
				<CardBody>
					<Form onSubmit={(e) => onSubmit(e)}>
						<Row>
							<Col md='6' sm='12' className='mb-1'>
								<Label className='form-label' for='name'>
									First Name
								</Label>
								<Input
									type='text'
									name='name'
									id='name'
									placeholder='First Name'
									defaultValue={values.name}
									onChange={(e) =>
										(values['name'] = e.target.value)
									}
								/>
								{error && error.name ? (
									<div className='error'>{error.name}</div>
								) : null}
							</Col>
							<Col md='6' sm='12' className='mb-1'>
								<Label className='form-label' for='lastname'>
									Last Name
								</Label>
								<Input
									type='text'
									name='lastname'
									id='lastname'
									placeholder='Last Name'
									defaultValue={values.lastname}
									onChange={(e) =>
										(values['lastname'] = e.target.value)
									}
								/>
								{error && error.lastname ? (
									<div className='error'>
										{error.lastname}
									</div>
								) : null}
							</Col>
							<Col md='6' sm='12' className='mb-1'>
								<Label className='form-label' for='mobile_no'>
									Mobile No
								</Label>
								<Input
									type='number'
									name='mobile_no'
									id='mobile_no'
									placeholder='Mobile no'
									defaultValue={values.mobile_no}
									onChange={(e) =>
										(values['mobile_no'] = e.target.value)
									}
								/>
								{error && error.mobile_no ? (
									<div className='error'>
										{error.mobile_no}
									</div>
								) : null}
							</Col>
							<Col md='6' sm='12' className='mb-1'>
								<Label className='form-label' for='profession'>
									Profession
								</Label>
								<Input
									type='text'
									name='profession'
									id='profession'
									placeholder='Profession'
									defaultValue={values.profession}
									onChange={(e) =>
										(values['profession'] = e.target.value)
									}
								/>
								{error && error.profession ? (
									<div className='error'>
										{error.profession}
									</div>
								) : null}
							</Col>
							<Col md='6' sm='12' className='mb-1'>
								<Label className='form-label' for='service'>
									Type of Service
								</Label>
								<Input
									type='text'
									name='service-type'
									id='service'
									placeholder='Service'
									defaultValue={values.services}
									onChange={(e) =>
										(values['services'] = e.target.value)
									}
								/>
								{error && error.services ? (
									<div className='error'>
										{error.services}
									</div>
								) : null}
							</Col>
							<Col md='6' sm='12' className='mb-1'>
								<Label className='form-label' for='address'>
									Address
								</Label>
								<Input
									type='text'
									name='address'
									id='address'
									placeholder='Address'
									defaultValue={values.address}
									onChange={(e) =>
										(values['address'] = e.target.value)
									}
								/>
								{error && error.address ? (
									<div className='error'>{error.address}</div>
								) : null}
							</Col>
							<Col sm='12'>
								<div className='d-flex '>
									<Button.Ripple
										className='me-1 mr-1'
										color='primary'
										type='submit'>
										Submit
									</Button.Ripple>
									<Button.Ripple
										outline
										color='secondary'
										type='cancel'
										tag={Link}
										to={'/vendor/list'}>
										Cancel
									</Button.Ripple>
								</div>
							</Col>
						</Row>
					</Form>
				</CardBody>
			</Card>
		</>
	);
};

export default AddVendor;
