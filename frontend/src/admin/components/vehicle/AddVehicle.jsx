import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import BreadCrumbs from '@components/breadcrumbs';
import {
	Button,
	Card,
	CardBody,
	Col,
	CustomInput,
	Form,
	FormGroup,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Label,
	Row,
} from 'reactstrap';
import { Type } from 'react-feather';
import Select from 'react-select';
import { selectThemeColors } from '@utils';
import { VehicleRegisterRequest } from '../../../redux/actions/vehicleActions/Index';
import { VEHICLE_REGISTER_RESET } from '../../../redux/Constants/userConstants';

const AddVehicle = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { error, loading, createdVehicle } = useSelector(
		(state) => state?.vehicle
	);
	const [formValues, setFormsValues] = useState({
		vehicle_no: '',
		vehicle_type: '',
		sticker_status: 'NO',
	});

	const vehicleTypesOptions = [
		{ value: 'car', label: 'CAR' },
		{ value: 'bike', label: 'BIKE' },
		{ value: 'scooty', label: 'SCOOTY' },
		{ value: 'truck', label: 'TRUCK' },
		{ value: 'bus', label: 'BUS' },
	];

	const handleChangeInput = (e) => {
		setFormsValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const handleSumbit = async (e) => {
		e.preventDefault();
		const { vehicle_no, vehicle_type, sticker_status } = formValues;

		const formData = new FormData();
		formData.append('vehicle_no', vehicle_no);
		formData.append('vehicle_type', vehicle_type);
		formData.append(
			'sticker_status',
			sticker_status === 'YES' ? true : false
		);
		await dispatch(VehicleRegisterRequest(formData));
	};

	useEffect(() => {
		if (createdVehicle) {
			history.push('/vehicle/list');
		}
		return () => {
			dispatch({ type: VEHICLE_REGISTER_RESET });
		};
	}, [createdVehicle, dispatch]);
	return (
		<Fragment>
			<BreadCrumbs
				breadCrumbTitle='Vehicle'
				breadCrumbParent={<Link to='/vehicle/list'>Vehicle List</Link>}
				breadCrumbActive='Create Vehicle Details'
			/>
			<Card>
				<CardBody>
					<Form onSubmit={(e) => handleSumbit(e)}>
						<Row>
							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label for='vehicle_no'>Vehicle No</Label>
									<InputGroup
										className={
											error && error.vehicle_no
												? 'is-invalid input-group-merge'
												: 'input-group-merge mb-1'
										}>
										<InputGroupAddon addonType='prepend'>
											<InputGroupText
												className={
													error && error.vehicle_no
														? 'is-invalid'
														: ''
												}>
												<Type size={15} />
											</InputGroupText>
										</InputGroupAddon>
										<Input
											className={
												error && error.vehicle_no
													? 'is-invalid'
													: ''
											}
											type='text'
											id='vehicle_no'
											name='vehicle_no'
											placeholder='Vehicle Number'
											onChange={handleChangeInput}
										/>
									</InputGroup>
									{error && error.vehicle_no ? (
										<div className='error'>
											{error.vehicle_no}
										</div>
									) : null}
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label for='vehicle_type'>
										Vehicle Type
									</Label>
									<InputGroup
										className={
											error && error.vehicle_type
												? 'is-invalid input-group-merge'
												: 'input-group-merge'
										}>
										<Select
											className={
												error && error.vehicle_type
													? 'is-invalid  w-100'
													: ' w-100'
											}
											theme={selectThemeColors}
											id='vehicle_type'
											name='vehicle_type'
											options={vehicleTypesOptions}
											onChange={(e) =>
												setFormsValues({
													...formValues,
													vehicle_type: e.value,
												})
											}
										/>
									</InputGroup>
									{error && error.vehicle_type ? (
										<div className='error'>
											{error.vehicle_type}
										</div>
									) : null}
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<Label for='sticker_status'>
									Sticker Status
								</Label>
								<FormGroup className=''>
									<CustomInput
										type='radio'
										id='sticker_status_yes'
										name='sticker_status'
										inline
										label='YES'
										checked={
											formValues.sticker_status === 'YES'
												? true
												: false
										}
										defaultValue='YES'
										onChange={handleChangeInput}
									/>

									<CustomInput
										type='radio'
										id='sticker_status_no'
										name='sticker_status'
										inline
										label='NO'
										checked={
											formValues.sticker_status === 'NO'
												? true
												: false
										}
										defaultValue='NO'
										onChange={handleChangeInput}
									/>
								</FormGroup>
							</Col>

							<Col
								className='d-flex flex-sm-row flex-column mt-2'
								sm='12'>
								<Button.Ripple
									className='mb-1 mb-sm-0 mr-0 mr-sm-1'
									color='primary'
									type='submit'>
									Submit
								</Button.Ripple>
								<Button.Ripple
									color='danger'
									tag={Link}
									to='/vehicle/list'
									outline>
									Cancel
								</Button.Ripple>
							</Col>
						</Row>
					</Form>
				</CardBody>
			</Card>
		</Fragment>
	);
};

export default AddVehicle;
