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
	FormGroup,
	InputGroup,
	InputGroupText,
	InputGroupAddon,
} from 'reactstrap';
import { User, Smartphone, Home, Briefcase, Tool } from 'react-feather';
import { Link } from 'react-router-dom';
import '@styles/react/libs/flatpickr/flatpickr.scss';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { VendorRegisterAction } from '../../../redux/actions/apislogic/vendorapis';
import { VENDOR_REGISTER_RESET } from '../../../redux/Constants/userConstants';

// const ValidationOnChange = () => {
// 	const SignupSchema = yup.object().shape({
// 	  email: yup.string().email().required(),
// 	  lastName: yup.string().min(3).required(),
// 	  firstName: yup.string().min(3).required(),
// 	  password: yup.string().min(6).required()
// 	})
// 	const { register, errors, handleSubmit } = useForm({ mode: 'onChange', resolver: yupResolver(SignupSchema) })

// 	const onSubmit = data => {
// 	  console.log(data)
// 	}

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
			<h3>Create</h3>
			<Card>
				<CardBody>
					<Form onSubmit={(e) => onSubmit(e)}>
						<Row>
							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label className='form-label' for='name'>
										First Name
									</Label>
									<InputGroup
										className={
											error && error.name
												? 'is-invalid input-group-merge'
												: 'input-group-merge mb-1'
										}>
										<InputGroupAddon addonType='prepend'>
											<InputGroupText
												className={
													error && error.name
														? 'is-invalid'
														: ''
												}>
												<User size={15} />
											</InputGroupText>
										</InputGroupAddon>
										<Input
											className={
												error && error.name
													? 'is-invalid'
													: ''
											}
											type='text'
											name='name'
											id='name'
											placeholder='Enter Your First Name'
											defaultValue={values.name}
											onChange={(e) =>
												(values['name'] =
													e.target.value)
											}
										/>
									</InputGroup>

									{error && error.name ? (
										<div className='error'>
											{error.name}
										</div>
									) : null}
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label
										className='form-label'
										for='lastname'>
										Last Name
									</Label>
									<InputGroup
										className={
											error && error.name
												? 'is-invalid input-group-merge'
												: 'input-group-merge mb-1'
										}>
										<InputGroupAddon addonType='prepend'>
											<InputGroupText
												className={
													error && error.name
														? 'is-invalid'
														: ''
												}>
												<User size={15} />
											</InputGroupText>
										</InputGroupAddon>
										<Input
											className={
												error && error.lastname
													? 'is-invalid'
													: ''
											}
											type='text'
											name='lastname'
											id='lastname'
											placeholder='Enter Your Last Name'
											defaultValue={values.lastname}
											onChange={(e) =>
												(values['lastname'] =
													e.target.value)
											}
										/>
									</InputGroup>

									{error && error.lastname ? (
										<div className='error'>
											{error.lastname}
										</div>
									) : null}
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label
										className='form-label'
										for='mobile_no'>
										Mobile No
									</Label>
									<InputGroup
										className={
											error && error.mobile_no
												? 'is-invalid input-group-merge'
												: 'input-group-merge'
										}>
										<InputGroupAddon addonType='prepend'>
											<InputGroupText
												className={
													error && error.mobile_no
														? 'is-invalid'
														: ''
												}>
												<Smartphone size={15} />
											</InputGroupText>
										</InputGroupAddon>
										<Input
											className={
												error && error.mobile_no
													? 'is-invalid'
													: ''
											}
											type='number'
											name='mobile_no'
											id='mobile_no'
											placeholder='Enter Your Mobile No'
											defaultValue={values.mobile_no}
											onChange={(e) =>
												(values['mobile_no'] =
													e.target.value)
											}
										/>
									</InputGroup>

									{error && error.mobile_no ? (
										<div className='error'>
											{error.mobile_no}
										</div>
									) : null}
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label
										className='form-label'
										for='profession'>
										Profession
									</Label>
									<InputGroup
										className={
											error && error.mobile_no
												? 'is-invalid input-group-merge'
												: 'input-group-merge'
										}>
										<InputGroupAddon addonType='prepend'>
											<InputGroupText
												className={
													error && error.mobile_no
														? 'is-invalid'
														: ''
												}>
												<Briefcase size={15} />
											</InputGroupText>
										</InputGroupAddon>
										<Input
											className={
												error && error.profession
													? 'is-invalid'
													: ''
											}
											type='text'
											name='profession'
											id='profession'
											placeholder='Profession'
											defaultValue={values.profession}
											onChange={(e) =>
												(values['profession'] =
													e.target.value)
											}
										/>
									</InputGroup>
									{error && error.profession ? (
										<div className='error'>
											{error.profession}
										</div>
									) : null}
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label className='form-label' for='service'>
										Type of Service
									</Label>
									<InputGroup
										className={
											error && error.mobile_no
												? 'is-invalid input-group-merge'
												: 'input-group-merge'
										}>
										<InputGroupAddon addonType='prepend'>
											<InputGroupText
												className={
													error && error.mobile_no
														? 'is-invalid'
														: ''
												}>
												<Tool size={15} />
											</InputGroupText>
										</InputGroupAddon>
										<Input
											className={
												error && error.services
													? 'is-invalid'
													: ''
											}
											type='text'
											name='service-type'
											id='service'
											placeholder='Service'
											defaultValue={values.services}
											onChange={(e) =>
												(values['services'] =
													e.target.value)
											}
										/>
									</InputGroup>
									{error && error.services ? (
										<div className='error'>
											{error.services}
										</div>
									) : null}
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label className='form-label' for='address'>
										Address
									</Label>
									<InputGroup
										className={
											error && error.address
												? 'is-invalid input-group-merge'
												: 'input-group-merge'
										}>
										<InputGroupAddon addonType='prepend'>
											<InputGroupText
												className={
													error && error.address
														? 'is-invalid'
														: ''
												}>
												<Home size={15} />
											</InputGroupText>
										</InputGroupAddon>
										<Input
											className={
												error && error.address
													? 'is-invalid'
													: ''
											}
											type='text'
											name='address'
											id='address'
											placeholder='Address'
											defaultValue={values.address}
											onChange={(e) =>
												(values['address'] =
													e.target.value)
											}
										/>
									</InputGroup>
									{error && error.address ? (
										<div className='error'>
											{error.address}
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
