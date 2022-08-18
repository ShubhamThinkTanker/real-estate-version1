import React, { useEffect, useState } from 'react';
import { Home } from "react-feather";
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
	InputGroupAddon
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import '@styles/react/libs/flatpickr/flatpickr.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ComplexCreateAction } from '../../../redux/actions/apislogic/complexapi';
import { COMPLEX_CREATE_RESET } from '../../../redux/Constants/userConstants';

const AddComplex = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const [values, setValues] = useState({
		realestate_name: '',
		address: '',
		country: '',
		state: '',
		city: '',
		map_link: 'https://g.page/thinktankerio?share',
	});

	const addComplexRecord = useSelector((state) => state.createComplexRecord);
	const { error: Complexerror, ComplexCreateData } = addComplexRecord;

	useEffect(() => {
		if (ComplexCreateData) {
			history.push('/complex/list');
		}
	}, [ComplexCreateData]);

	useEffect(() => {
		dispatch({ type: COMPLEX_CREATE_RESET });
	}, []);

	const onSubmit = (e) => {
		e.preventDefault();
		const { realestate_name, address, country, state, city, map_link } =
			values;
		const createRealestate = {
			realestate_name,
			address,
			country,
			state,
			city,
			map_link,
		};
		dispatch(ComplexCreateAction(createRealestate));
	};

	return (
		<>
			<h3>Create </h3>
			<Card>
				<CardBody>

					<Form onSubmit={(e) => onSubmit(e)}>

						<Row>

							<Col md='6' sm='12'>
								<FormGroup className="mb-2">
									<Label className='form-label' for='name'>
										Realestate Name
									</Label>

									<Input
										className={Complexerror && Complexerror.realestate_name ? "is-invalid" : ''}
										type='text'
										name='realestate_name'
										id='realestate_name'
										placeholder='Realestate Name'
										defaultValue={values.realestate_name}
										onChange={(e) =>
										(values['realestate_name'] =
											e.target.value)
										}
									/>

									{Complexerror &&
										Complexerror.realestate_name ? (
										<div className='error'>
											{Complexerror.realestate_name}
										</div>
									) : null}
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<FormGroup className="mb-2">
									<Label className='form-label' for='mobileno'>
										Country
									</Label>
									<Input
										className={Complexerror && Complexerror.country ? "is-invalid" : ''}
										type='select'
										onChange={(e) =>
											(values['country'] = e.target.value)
										}
										name='country'>
										<option value=''>Select Country</option>
										<option value='india'>India</option>
									</Input>
									{Complexerror && Complexerror.country ? (
										<div className='error'>
											{Complexerror.country}
										</div>
									) : null}
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<FormGroup className="mb-2">
									<Label className='form-label' for='profession'>
										State
									</Label>
									<Input
										className={Complexerror && Complexerror.state ? "is-invalid" : ''}
										type='select'
										onChange={(e) =>
											(values['state'] = e.target.value)
										}
										name='state'>
										<option value=''>Select State</option>
										<option value='gujarat'>Gujarat</option>
									</Input>
									{Complexerror && Complexerror.state ? (
										<div className='error'>
											{Complexerror.state}
										</div>
									) : null}
								</FormGroup>
							</Col>

							<Col md='6' sm='12' >
								<FormGroup className="mb-2">
									<Label className='form-label' for='service'>
										City
									</Label>
									<Input
										className={Complexerror && Complexerror.city ? "is-invalid" : ''}
										type='select'
										onChange={(e) =>
											(values['city'] = e.target.value)
										}
										name='city'>
										<option value=''>Select City</option>
										<option value='ahmedabad'>Ahmedabad</option>
										<option value='surat'>Surat</option>
										<option value='rajkot'>Rajkot</option>
									</Input>
									{Complexerror && Complexerror.city ? (
										<div className='error'>
											{Complexerror.city}
										</div>
									) : null}
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<FormGroup className="mb-2">
									<Label className='form-label' for='lastname'>
										Address
									</Label>
									<InputGroup className={Complexerror && Complexerror.address ? "is-invalid input-group-merge" : 'input-group-merge'}>
										<InputGroupAddon addonType='prepend'>
											<InputGroupText className={Complexerror && Complexerror.address ? "is-invalid" : ''}>
												<Home size={15} />
											</InputGroupText>
										</InputGroupAddon>
										<Input
											className={Complexerror && Complexerror.address ? "is-invalid" : ''}
											type='text'
											name='address'
											id='address'
											placeholder='Address'
											defaultValue={values.address}
											onChange={(e) =>
												(values['address'] = e.target.value)
											}
										/>
									</InputGroup>
									{Complexerror && Complexerror.address ? (
										<div className='error'>
											{Complexerror.address}
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
										to={'/complex/list'}>
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

export default AddComplex;
