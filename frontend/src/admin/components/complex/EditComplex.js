import React, { useEffect, useState } from 'react';
import {
	ComplexGetAction,
	EditComplexAction,
} from '../../../redux/actions/apislogic/complexapi';
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
import { useParams } from 'react-router-dom';
import { COMPLEX_EDIT_RESET } from '../../../redux/Constants/userConstants';
import BreadCrumbs from '../../../@core/components/breadcrumbs';
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

const EditComplex = () => {
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();

	const ComplexGetData = useSelector((state) => state.getidComplexRecord);
	var { error: errorgetComplexRecord, getComplexRecord } = ComplexGetData;

	// const getComplexRecordList = useSelector(
	// 	(state) => state.getidComplexRecord
	// );
	// const { getComplexRecord } = getComplexRecordList;

	const EditDataMessage = useSelector((state) => state.EditComplexData);
	const { ComplexEditData, error: errorComplexEditData } = EditDataMessage;

	useEffect(() => {
		if (ComplexEditData) {
			history.push('/complex/list');
		}
	}, [ComplexEditData]);

	const [complex, setComplex] = useState({
		realestate_name: '',
		address: '',
		country: '',
		state: '',
		city: '',
		map_link: 'https://g.page/thinktankerio?share',
	});

	const onInputChange = (e) => {
		setComplex({ ...complex, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		dispatch(ComplexGetAction(id));
		dispatch({ type: COMPLEX_EDIT_RESET });
	}, []);

	useEffect(() => {
		setComplex({
			realestate_name:
				getComplexRecord && getComplexRecord['data']['realestate_name'],
			address: getComplexRecord && getComplexRecord['data']['address'],
			country: getComplexRecord && getComplexRecord['data']['country'],
			state: getComplexRecord && getComplexRecord['data']['state'],
			city: getComplexRecord && getComplexRecord['data']['city'],
			map_link: getComplexRecord && getComplexRecord['data']['map_link'],
		});
	}, [getComplexRecord]);

	const onSubmit = (e) => {
		e.preventDefault();
		const { realestate_name, address, country, state, city, map_link } =
			complex;

		let formData = new FormData();
		formData.append('realestate_name', realestate_name);
		formData.append('address', address);
		formData.append('country', country);
		formData.append('state', state);
		formData.append('city', city);
		formData.append('map_link', map_link);
		dispatch(EditComplexAction(id, formData));
	};

	return (
		<>
			<BreadCrumbs
				breadCrumbTitle='Real Estate'
				breadCrumbParent={
					<Link to='/complex/list'>Real Estate List</Link>
				}
				breadCrumbActive='Edit Real Estate'
			/>
			<Card>
				<CardBody>
					<Form onSubmit={(e) => onSubmit(e)}>
						<Row>
							<Col md='6' sm='12' >
								<FormGroup className="mb-2">
									<Label className='form-label' for='name'>
										Realestate Name
									</Label>
									<Input
										type='text'
										name='realestate_name'
										id='realestate_name'
										placeholder='Realestate Name'
										defaultValue={complex.realestate_name}
										onChange={(e) => onInputChange(e)}
									/>
									{errorComplexEditData &&
										errorComplexEditData.realestate_name ? (
										<div className='error'>
											{errorComplexEditData.realestate_name}
										</div>
									) : null}
								</FormGroup>
							</Col>

							<Col md='6' sm='12' >
								<FormGroup className="mb-2">
									<Label className='form-label' for='mobileno'>
										Country
									</Label>
									{/* <Input
										type='select'
										defaultValue={complex.country}
										onChange={(e) => onInputChange(e)}
										name='country'>
										<option value=''>Select Country</option>
										<option value='india'>India</option>
									</Input> */}
									<Select
										theme={selectThemeColors}
										name='country'
										className={errorComplexEditData && errorComplexEditData.country ? "is-invalid" : 'react-select flex-fill'}
										classNamePrefix='select'
										defaultValue={countryOptions[2]}
										options={countryOptions}
										isClearable={false}
										// onChange={(e) =>
										// 	(values['country'] = e.target.value)
										// }
										onChange={(e) => {
											setComplex({
												...complex,
												country: e.value,
											});
										}}
										/>
									{errorComplexEditData &&
										errorComplexEditData.country ? (
										<div className='error'>
											{errorComplexEditData.country}
										</div>
									) : null}
								</FormGroup>
							</Col>
							<Col md='6' sm='12'>
								<FormGroup className="mb-2">
									<Label className='form-label' for='profession'>
										State
									</Label>
									{/* <Input
										type='select'
										defaultValue={complex.state}
										onChange={(e) => onInputChange(e)}
										name='state'>
										<option value=''>Select State</option>
										<option value='gujarat'>Gujarat</option>
									</Input> */}
									<Select
										theme={selectThemeColors}
										name='state'
										className={errorComplexEditData && errorComplexEditData.state ? "is-invalid" : 'react-select flex-fill'}
										classNamePrefix='select'
										defaultValue={stateOptions[2]}
										options={stateOptions}
										isClearable={false}
										onChange={(e) => {
											setComplex({
												...complex,
												state: e.value,
											});
										}}
										/>
									{errorComplexEditData &&
										errorComplexEditData.state ? (
										<div className='error'>
											{errorComplexEditData.state}
										</div>
									) : null}
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<FormGroup className="mb-2">
									<Label className='form-label' for='service'>
										City
									</Label>
									{/* <Input
										type='select'
										defaultValue={complex.city}
										onChange={(e) => onInputChange(e)}
										name='city'>
										<option value=''>Select City</option>
										<option value='ahmedabad'>Ahmedabad</option>
										<option value='surat'>Surat</option>
										<option value='rajkot'>Rajkot</option>
									</Input> */}
									<Select
										theme={selectThemeColors}
										name='city'
										className={errorComplexEditData && errorComplexEditData.city ? "is-invalid" : 'react-select flex-fill'}
										classNamePrefix='select'
										defaultValue={cityOptions[2]}
										options={cityOptions}
										isClearable={false}
										onChange={(e) => {
											setComplex({
												...complex,
												city: e.value,
											});
										}}
										/>
									{errorComplexEditData &&
										errorComplexEditData.city ? (
										<div className='error'>
											{errorComplexEditData.city}
										</div>
									) : null}
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<FormGroup className="mb-2">
									<Label className='form-label' for='lastname'>
										Address
									</Label>

									<InputGroup className={errorComplexEditData && errorComplexEditData.address ? "is-invalid input-group-merge" : 'input-group-merge'}>
										<InputGroupAddon addonType='prepend'>
											<InputGroupText className={errorComplexEditData && errorComplexEditData.address ? "is-invalid" : ''}>
												<Home size={15} />
											</InputGroupText>
										</InputGroupAddon>
										<Input
											type='text'
											name='address'
											id='address'
											rows='2'
											placeholder='Address'
											defaultValue={complex.address}
											onChange={(e) => onInputChange(e)}
										/>
									</InputGroup>
									{errorComplexEditData &&
										errorComplexEditData.address ? (
										<div className='error'>
											{errorComplexEditData.address}
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

export default EditComplex;
