import React, { useEffect, useState } from 'react';
import { Home } from 'react-feather';
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
import BreadCrumbs from '../../../@core/components/breadcrumbs';
import { Link, useHistory } from 'react-router-dom';
import '@styles/react/libs/flatpickr/flatpickr.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ComplexCreateAction } from '../../../redux/actions/apislogic/complexapi';
import { COMPLEX_CREATE_RESET } from '../../../redux/Constants/userConstants';
import { selectThemeColors } from '@utils';
import Select from 'react-select';
import './style.css'

const countryOptions = [
	{ value: 'india', label: 'India' }
  ]
const stateOptions = [
	{ value: 'gujarat', label: 'Gujarat' }
  ]
const cityOptions = [
	{ value: 'ahmedabad', label: 'Ahmedabad' },
	{ value: 'surat', label: 'Surat' },
	{ value: 'rajkot', label: 'Rajkot' }
  ]

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
			<BreadCrumbs
				breadCrumbTitle='Real Estate'
				breadCrumbParent={
					<Link to='/complex/list'>Real Estate List</Link>
				}
				breadCrumbActive='Create Real Estate'
			/>
			<Card>
				<CardBody>
					<Form onSubmit={(e) => onSubmit(e)}>
						<Row>
							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label className='form-label' for='name'>
										Realestate Name
									</Label>

									<Input
										className={
											Complexerror &&
											Complexerror.realestate_name
												? 'is-invalid'
												: ''
										}
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
								<FormGroup className='mb-2'>
									<Label
										className='form-label'
										for='mobileno'>
										Country
									</Label>
									
									<Select
										theme={selectThemeColors}
										name='country'
										className={Complexerror && Complexerror.country ? "is-invalid" : 'react-select flex-fill'}
										classNamePrefix='select'
										defaultValue={countryOptions[2]}
										options={countryOptions}
										isClearable={false}
										// onChange={(e) =>
										// 	(values['country'] = e.target.value)
										// }
										onChange={(e) => {
											setValues({
												...values,
												country: e.value,
											});
										}}
										/>
									{Complexerror && Complexerror.country ? (
										<div className='error'>
											{Complexerror.country}
										</div>
									) : null}
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label
										className='form-label'
										for='profession'>
										State
									</Label>
									
									<Select
										theme={selectThemeColors}
										name='state'
										className={Complexerror && Complexerror.state ? "is-invalid" : 'react-select flex-fill'}
										classNamePrefix='select'
										defaultValue={stateOptions[2]}
										options={stateOptions}
										isClearable={false}
										onChange={(e) => {
											setValues({
												...values,
												state: e.value,
											});
										}}
										/>

									{Complexerror && Complexerror.state ? (
										<div className='error'>
											{Complexerror.state}
										</div>
									) : null}
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label className='form-label' for='service'>
										City
									</Label>
									
									<Select
										theme={selectThemeColors}
										name='city'
										className={Complexerror && Complexerror.city ? "is-invalid" : 'react-select flex-fill'}
										classNamePrefix='select'
										defaultValue={cityOptions[2]}
										options={cityOptions}
										isClearable={false}
										onChange={(e) => {
											setValues({
												...values,
												city: e.value,
											});
										}}
										/>
									{Complexerror && Complexerror.city ? (
										<div className='error'>
											{Complexerror.city}
										</div>
									) : null}
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label
										className='form-label'
										for='lastname'>
										Address
									</Label>

									<Input
										className={
											Complexerror && Complexerror.address
												? 'is-invalid'
												: ''
										}
										type='text'
										name='address'
										id='address'
										placeholder='Address'
										defaultValue={values.address}
										onChange={(e) =>
											(values['address'] = e.target.value)
										}
									/>

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
										color='danger'
										tag={Link}
										to='/complex/list'
										outline>
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
