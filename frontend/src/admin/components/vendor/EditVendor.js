import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { User, Smartphone, Home, Briefcase, Tool } from 'react-feather';
import {
	VendorGetAction,
	EditVendorAction,
} from '../../../redux/actions/apislogic/vendorapis';
import {
	Card,
	CardBody,
	Row,
	Col,
	Input,
	Form,
	Button,
	Label,
	FormGroup,
	InputGroupAddon,
	InputGroup,
	InputGroupText,
} from 'reactstrap';

import { Link } from 'react-router-dom';
import '@styles/react/libs/flatpickr/flatpickr.scss';
import { VENDOR_EDIT_RESET } from '../../../redux/Constants/userConstants';

const EditVendor = () => {
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();

	const VendorGetData = useSelector((state) => state.vendorRecords);
	var { error: errorgetVendorsRecords, getVendorsRecords } = VendorGetData;

	const EditDataMessage = useSelector((state) => state.EditVendorData);
	const { VendorEditData, error: errorVendorEditData } = EditDataMessage;

	useEffect(() => {
		if (VendorEditData) {
			history.push('/vendor/list');
		}
	}, [VendorEditData]);

	const [vendor, setVendor] = useState({
		name: '',
		lastname: '',
		mobile_no: '',
		profession: '',
		services: '',
		address: '',
	});

	const onInputChange = (e) => {
		setVendor({ ...vendor, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		dispatch(VendorGetAction(id));
		dispatch({ type: VENDOR_EDIT_RESET });
	}, []);

	useEffect(() => {
		setVendor({
			name: getVendorsRecords && getVendorsRecords['data']['name'],
			lastname:
				getVendorsRecords && getVendorsRecords['data']['lastname'],
			mobile_no:
				getVendorsRecords && getVendorsRecords['data']['mobile_no'],
			profession:
				getVendorsRecords && getVendorsRecords['data']['profession'],
			services:
				getVendorsRecords && getVendorsRecords['data']['services'],
			address: getVendorsRecords && getVendorsRecords['data']['address'],
		});
	}, [getVendorsRecords]);

	const onSubmit = (e) => {
		e.preventDefault();
		const { name, lastname, mobile_no, profession, services, address } =
			vendor;

		let formData = new FormData();
		formData.append('name', name);
		formData.append('lastname', lastname);
		formData.append('mobile_no', mobile_no);
		formData.append('profession', profession);
		formData.append('services', services);
		formData.append('address', address);
		dispatch(EditVendorAction(id, formData));
	};
	return (
		<>
			<h3>Edit Vendor</h3>
			{vendor && (
				<Card>
					<CardBody>
						<Form onSubmit={(e) => onSubmit(e)}>
							<Row>
								<Col md='6' sm='12'>
									<FormGroup className="mb-2">
										<Label className='form-label' for='name'>
											First Name
										</Label>
										<InputGroup className={errorVendorEditData && errorVendorEditData.name ? "is-invalid input-group-merge" : 'input-group-merge'}>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText className={errorVendorEditData && errorVendorEditData.name ? "is-invalid" : ''}>
													<User size={15} />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												className='p-1'
												type='text'
												name='name'
												id='name'
												placeholder='First Name'
												defaultValue={vendor.name}
												onChange={(e) => onInputChange(e)}
											/>
										</InputGroup>
										{errorVendorEditData &&
											errorVendorEditData.name ? (
											<div className='error'>
												{errorVendorEditData.name}
											</div>
										) : null}
									</FormGroup>
								</Col>


								<Col md='6' sm='12' >
									<FormGroup className="mb-2">
										<Label
											className='form-label'
											for='lastname'>
											Last Name
										</Label>
										<InputGroup className={errorVendorEditData && errorVendorEditData.lastname ? "is-invalid input-group-merge" : 'input-group-merge'}>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText className={errorVendorEditData && errorVendorEditData.lastname ? "is-invalid" : ''}>
													<User size={15} />
												</InputGroupText>
											</InputGroupAddon>

											<Input
												className='p-1'
												type='text'
												name='lastname'
												id='lastname'
												placeholder='Last Name'
												defaultValue={vendor.lastname}
												onChange={(e) => onInputChange(e)}
											/>
										</InputGroup>
										{errorVendorEditData &&
											errorVendorEditData.lastname ? (
											<div className='error'>
												{errorVendorEditData.lastname}
											</div>
										) : null}
									</FormGroup>
								</Col>


								<Col md='6' sm='12' >
									<FormGroup className="mb-2">
										<Label
											className='form-label'
											for='mobile_no'>
											Mobile No
										</Label>
										<InputGroup className={errorVendorEditData && errorVendorEditData.mobile_no ? "is-invalid input-group-merge" : 'input-group-merge'}>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText className={errorVendorEditData && errorVendorEditData.mobile_no ? "is-invalid" : ''}>
													<Smartphone size={15} />
												</InputGroupText>
											</InputGroupAddon>

											<Input
												className='p-1'
												type='number'
												name='mobile_no'
												id='mobile_no'
												placeholder='Mobile no'
												defaultValue={vendor.mobile_no}
												onChange={(e) => onInputChange(e)}
											/>
										</InputGroup>
										{errorVendorEditData &&
											errorVendorEditData.mobile_no ? (
											<div className='error'>
												{errorVendorEditData.mobile_no}
											</div>
										) : null}
									</FormGroup>
								</Col>

								<Col md='6' sm='12'>
									<FormGroup className="mb-2">
										<Label
											className='form-label'
											for='profession'>
											Profession
										</Label>
										<InputGroup className={errorVendorEditData && errorVendorEditData.profession ? "is-invalid input-group-merge" : 'input-group-merge'}>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText className={errorVendorEditData && errorVendorEditData.profession ? "is-invalid" : ''}>
													<Briefcase size={15} />
												</InputGroupText>
											</InputGroupAddon>

											<Input
												className='p-1'
												type='text'
												name='profession'
												id='profession'
												placeholder='Profession'
												defaultValue={vendor.profession}
												onChange={(e) => onInputChange(e)}
											/>
										</InputGroup>
										{errorVendorEditData &&
											errorVendorEditData.profession ? (
											<div className='error'>
												{errorVendorEditData.profession}
											</div>
										) : null}
									</FormGroup>
								</Col>


								<Col md='6' sm='12' >
									<FormGroup className="mb-2">
										<Label className='form-label' for='service'>
											Type of Service
										</Label>
										<InputGroup className={errorVendorEditData && errorVendorEditData.services ? "is-invalid input-group-merge" : 'input-group-merge'}>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText className={errorVendorEditData && errorVendorEditData.services ? "is-invalid" : ''}>
													<Tool size={15} />
												</InputGroupText>
											</InputGroupAddon>

											<Input
												className='p-1'
												type='text'
												name='services'
												id='service'
												placeholder='Service'
												defaultValue={vendor.services}
												onChange={(e) => onInputChange(e)}
											/>
										</InputGroup>
										{errorVendorEditData &&
											errorVendorEditData.services ? (
											<div className='error'>
												{errorVendorEditData.services}
											</div>
										) : null}
									</FormGroup>
								</Col>

								<Col md='6' sm='12' >
									<FormGroup className="mb-2">
										<Label className='form-label' for='address'>
											Address
										</Label>
										<InputGroup className={errorVendorEditData && errorVendorEditData.address ? "is-invalid input-group-merge" : 'input-group-merge'}>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText className={errorVendorEditData && errorVendorEditData.address ? "is-invalid" : ''}>
													<Home size={15} />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												className='p-1'
												type='textarea'
												rows='2'
												name='address'
												id='address'
												placeholder='Address'
												defaultValue={vendor.address}
												onChange={(e) => onInputChange(e)}
											/>
										</InputGroup>
										{errorVendorEditData &&
											errorVendorEditData.address ? (
											<div className='error'>
												{errorVendorEditData.address}
											</div>
										) : null}
									</FormGroup>
								</Col>
								<Col sm='12'>
									<div className='d-flex '>
										<Button.Ripple
											className='me-1 mr-1'
											color='primary'
											type='submit'>
											Save Changes
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
			)}
		</>
	);
};

export default EditVendor;
