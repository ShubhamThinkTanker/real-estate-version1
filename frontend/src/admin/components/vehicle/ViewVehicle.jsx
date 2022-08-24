import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
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
	Spinner,
} from 'reactstrap';
import { Type } from 'react-feather';
import Select from 'react-select';
import { selectThemeColors } from '@utils';
import { VehicleGetByIdRequest } from '../../../redux/actions/vehicleActions/Index';
import { VEHICLE_GET_RESET } from '../../../redux/Constants/userConstants';

const ViewVehicle = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { loading, vehicle } = useSelector((state) => state?.vehicle);

	const vehicleTypesOptions = [
		{ value: 'car', label: 'CAR' },
		{ value: 'bike', label: 'BIKE' },
		{ value: 'scooty', label: 'SCOOTY' },
		{ value: 'truck', label: 'TRUCK' },
		{ value: 'bus', label: 'BUS' },
	];

	useEffect(() => {
		dispatch(VehicleGetByIdRequest(id));
		return () => {
			dispatch({ type: VEHICLE_GET_RESET });
		};
	}, [dispatch, id]);
	return (
		<Fragment>
			<BreadCrumbs
				breadCrumbTitle='Vehicle'
				breadCrumbParent={<Link to='/vehicle/list'>Vehicle List</Link>}
				breadCrumbActive='Vehicle Details'
			/>
			<Card>
				<CardBody>
					{loading ? (
						<div className='d-flex justify-content-center align-items-center'>
							<Spinner color='primary' />
						</div>
					) : (
						<Form>
							<Row>
								<Col md='6' sm='12'>
									<FormGroup className='mb-2'>
										<Label for='vehicle_no'>
											Vehicle No
										</Label>
										<InputGroup>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText>
													<Type size={15} />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												type='text'
												id='vehicle_no'
												name='vehicle_no'
												placeholder='Vehicle Number'
												defaultValue={
													vehicle?.vehicle_no
												}
												disabled
											/>
										</InputGroup>
									</FormGroup>
								</Col>

								<Col md='6' sm='12'>
									<FormGroup className='mb-2'>
										<Label for='vehicle_type'>
											Vehicle Type
										</Label>
										<InputGroup>
											<Select
												className='w-100'
												classNamePrefix='border-select'
												theme={selectThemeColors}
												id='vehicle_type'
												name='vehicle_type'
												options={vehicleTypesOptions}
												isDisabled
												defaultValue={vehicleTypesOptions.filter(
													(item) =>
														item.value ===
														vehicle?.vehicle_type
												)}
											/>
										</InputGroup>
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
											checked={vehicle?.sticker_status}
											defaultValue='YES'
											disabled
										/>

										<CustomInput
											type='radio'
											id='sticker_status_no'
											name='sticker_status'
											inline
											label='NO'
											checked={!vehicle?.sticker_status}
											defaultValue='NO'
											disabled
										/>
									</FormGroup>
								</Col>

								<Col
									className='d-flex flex-sm-row flex-column mt-2'
									sm='12'>
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
					)}
				</CardBody>
			</Card>
		</Fragment>
	);
};

export default ViewVehicle;
