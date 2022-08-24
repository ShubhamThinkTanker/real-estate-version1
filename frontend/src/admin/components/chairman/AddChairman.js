import { useEffect, useState } from 'react';
import '@styles/react/libs/flatpickr/flatpickr.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// ** React Imports

// ** Third Party Components
import {
	Lock,
	Edit,
	Trash2,
	Home,
	User,
	Mail,
	Smartphone,
} from 'react-feather';

import { Link } from 'react-router-dom';
import {
	CardBody,
	Card,
	Col,
	CustomInput,
	Form,
	Input,
	Label,
	Media,
	Row,
	Table,
	Button,
	FormGroup,
	InputGroup,
	InputGroupText,
	InputGroupAddon,
} from 'reactstrap';
import { ChairmanRegisterAction } from '../../../redux/actions/apislogic/chairmanapis';
import { CHAIRMAN_REGISTER_RESET } from '../../../redux/Constants/userConstants';
import BreadCrumbs from '../../../@core/components/breadcrumbs';

const AddChairman = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [filesend, setFileSend] = useState();
	const [genderRadio, setGenderRadio] = useState('male');
	const [values, setValues] = useState({
		name: '',
		email: '',
		mobile_no: '',
		address: '',
		country: '',
		state: '',
		city: '',
		role: 'chairman',
	});

	const registerRecords = useSelector((state) => state.registerChairmanData);
	var { error, ChairmanRegisterData } = registerRecords;

	useEffect(() => {
		if (ChairmanRegisterData) {
			history.push('/chairman/list');
		}
	}, [ChairmanRegisterData]);

	useEffect(() => {
		dispatch({ type: CHAIRMAN_REGISTER_RESET });
	}, []);

	const onSubmit = (e) => {
		e.preventDefault();

		const { name, email, mobile_no, role, address, country, state, city } =
			values;

		const formData = new FormData();
		formData.append('profile_image', filesend);
		formData.append('name', name);
		formData.append('email', email);
		formData.append('mobile_no', mobile_no);
		formData.append('address', address);
		formData.append('country', country);
		formData.append('state', state);
		formData.append('city', city);
		formData.append('gender', genderRadio);
		formData.append('role', role);
		dispatch(ChairmanRegisterAction(formData));
	};

	const onChange = (e) => {
		setFileSend(e.target.files[0]);
		const reader = new FileReader(),
			files = e.target.files;
		reader.onload = function () {
			setImg(reader.result);
		};
		reader.readAsDataURL(files[0]);
	};

	const handleChangeInput = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	const [img, setImg] = useState(
		'https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default.png'
	);

	return (
		<>
			<BreadCrumbs
				breadCrumbTitle='Chairman'
				breadCrumbParent={
					<Link to='/chairman/list'>Chairman List</Link>
				}
				breadCrumbActive='Create Chairman'
			/>
			<Card>
				<CardBody>
					<Form onSubmit={(e) => onSubmit(e)}>
						<Row>
							<Col sm='12'>
								<Label className='required' for='image'>
									Profile Image
								</Label>
								<Media className='mb-2'>
									<img
										className='user-avatar rounded mr-2 my-25 cursor-pointer'
										src={img}
										height='90'
										width='90'
									/>
									<Media className='mt-50' body>
										<div className='d-flex flex-wrap mt-1 px-0'>
											<Button.Ripple
												id='change-img'
												tag={Label}
												className='mr-75 mb-0'
												color='primary'>
												Upload
												<Input
													type='file'
													hidden
													id='change-img'
													onChange={onChange}
													accept='image/*'
												/>
											</Button.Ripple>
											<Button.Ripple
												color='danger'
												outline
												onClick={() =>
													setImg(
														'https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default.png'
													)
												}>
												Remove
											</Button.Ripple>
										</div>
									</Media>
								</Media>
								{error && error.profile_image ? (
									<div className='error'>
										{error.profile_image}
									</div>
								) : null}
							</Col>

							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label className='required' for='name'>
										Name
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
											id='name'
											name='name'
											placeholder='Name'
											defaultValue={values.name}
											onChange={handleChangeInput}
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
									<Label className='required' for='email'>
										Email
									</Label>
									<InputGroup
										className={
											error && error.email
												? 'is-invalid input-group-merge'
												: 'input-group-merge'
										}>
										<InputGroupAddon addonType='prepend'>
											<InputGroupText
												className={
													error && error.email
														? 'is-invalid'
														: ''
												}>
												<Mail size={15} />
											</InputGroupText>
										</InputGroupAddon>
										<Input
											className={
												error && error.email
													? 'is-invalid'
													: ''
											}
											type='text'
											id='email'
											name='email'
											placeholder='Email'
											defaultValue={values.email}
											onChange={handleChangeInput}
										/>
									</InputGroup>
									{error && error.email ? (
										<div className='error'>
											{error.email}
										</div>
									) : null}
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label for='mobile_no' className='required'>
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
											type='text'
											id='mobile_no'
											name='mobile_no'
											placeholder='Mobile No'
											defaultValue={values.mobile_no}
											onChange={handleChangeInput}
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
										className='form-label required'
										for='address'>
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
											onChange={handleChangeInput}
										/>
									</InputGroup>
									{error && error.address ? (
										<div className='error'>
											{error.address}
										</div>
									) : null}
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label
										className='form-label required'
										for='mobileno'>
										Country
									</Label>
									<Input
										type='select'
										onChange={handleChangeInput}
										name='country'>
										<option value=''>Select Country</option>
										<option value='india'>India</option>
									</Input>
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label
										className='form-label required'
										for='profession'>
										State
									</Label>
									<Input
										type='select'
										onChange={handleChangeInput}
										name='state'>
										<option value=''>Select State</option>
										<option value='gujarat'>Gujarat</option>
										<option value='gujarat'>
											Madhya Pradesh
										</option>
										<option value='gujarat'>
											Andhra Pradesh
										</option>
										<option value='gujarat'>
											Himachal Pradesh
										</option>
										<option value='gujarat'>
											Arunachal Pradesh
										</option>
										<option value='gujarat'>
											Uttar Pradesh
										</option>
										<option value='gujarat'>Sikkim</option>
										<option value='gujarat'>
											Chhattisgath
										</option>
										<option value='gujarat'>
											Uttrakhand
										</option>
										<option value='gujarat'>
											Jharkhand
										</option>
										<option value='gujarat'>Kerala</option>
										<option value='gujarat'>
											Meghalaya
										</option>
										<option value='gujarat'>Tripura</option>
										<option value='gujarat'>Manipur</option>
										<option value='gujarat'>Assam</option>
										<option value='gujarat'>Haryana</option>
										<option value='gujarat'>Goa</option>
										<option value='gujarat'>
											Rajasthan
										</option>
										<option value='gujarat'>
											Maharashtra
										</option>
										<option value='gujarat'>Punjab</option>
										<option value='gujarat'>Bihar</option>
										<option value='gujarat'>
											Karnataka
										</option>
										<option value='gujarat'>
											Jammu and Kashmir
										</option>
										<option value='gujarat'>Tamil</option>
										<option value='gujarat'>
											West Bangal
										</option>
										<option value='gujarat'>
											Telangana
										</option>
									</Input>
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label
										className='form-label required'
										for='service'>
										City
									</Label>
									<Input
										type='select'
										onChange={handleChangeInput}
										name='city'>
										<option value=''>Select City</option>
										<option value='ahmedabad'>
											Ahmedabad
										</option>
										<option value='surat'>Surat</option>
										<option value='rajkot'>Rajkot</option>
										<option value='rajkot'>Vadodara</option>
										<option value='rajkot'>
											Bhavnagar
										</option>
										<option value='rajkot'>Jamnagar</option>
										<option value='rajkot'>
											Ghandhinagar
										</option>
										<option value='rajkot'>Anand</option>
										<option value='rajkot'>Navsari</option>
										<option value='rajkot'>Morbi</option>
										<option value='rajkot'>Nadiad</option>
										<option value='rajkot'>Bhuj</option>
										<option value='rajkot'>Vapi</option>
										<option value='rajkot'>Patan</option>
										<option value='rajkot'>Botad</option>
										<option value='rajkot'>Amreli</option>
										<option value='rajkot'>Deesa</option>
										<option value='rajkot'>Jetpur</option>
										<option value='rajkot'>Dahod</option>
										<option value='rajkot'>Veraval</option>
									</Input>
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<Label for='gender' className='required'>
									Gender
								</Label>
								<FormGroup className='mb-2'>
									<br></br>
									<CustomInput
										type='radio'
										id='gender1'
										name='gender'
										inline
										label='Male'
										checked={
											genderRadio === 'male'
												? true
												: false
										}
										defaultValue='male'
										onChange={(e) =>
											setGenderRadio(e.target.value)
										}
									/>

									<CustomInput
										type='radio'
										id='gender2'
										name='gender'
										inline
										label='Female'
										checked={
											genderRadio === 'female'
												? true
												: false
										}
										defaultValue='female'
										onChange={(e) =>
											setGenderRadio(e.target.value)
										}
									/>
								</FormGroup>
							</Col>

							<Col sm='12'>
								<div className='permissions border mt-1'>
									<h6 className='py-1 mx-1 mb-0 font-medium-2'>
										<Lock size={18} className='mr-25' />
										<span className='align-middle'>
											Permissions
										</span>
									</h6>
									<Table borderless striped responsive>
										<thead className='thead-light'>
											<tr>
												<th>Module</th>
												<th>Read</th>
												<th>Write</th>
												<th>Create</th>
												<th>Delete</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Admin</td>
												<td>
													<CustomInput
														type='checkbox'
														id='admin-1'
														label=''
														defaultChecked
													/>
												</td>
												<td>
													<CustomInput
														type='checkbox'
														id='admin-2'
														label=''
													/>
												</td>
												<td>
													<CustomInput
														type='checkbox'
														id='admin-3'
														label=''
													/>
												</td>
												<td>
													<CustomInput
														type='checkbox'
														id='admin-4'
														label=''
													/>
												</td>
											</tr>

											<tr>
												<td>User</td>
												<td>
													<CustomInput
														type='checkbox'
														id='user-1'
														label=''
													/>
												</td>
												<td>
													<CustomInput
														type='checkbox'
														id='user-2'
														label=''
													/>
												</td>
												<td>
													<CustomInput
														type='checkbox'
														id='user-3'
														label=''
													/>
												</td>
												<td>
													<CustomInput
														type='checkbox'
														id='user-4'
														label=''
													/>
												</td>
											</tr>
										</tbody>
									</Table>
								</div>
							</Col>

							<Col
								className='d-flex flex-sm-row flex-column mt-2'
								sm='12'>
								<Button.Ripple
									className='mb-1 mb-sm-0 mr-0 mr-sm-1'
									type='submit'
									color='primary'>
									Submit
								</Button.Ripple>
								<Button.Ripple
									color='danger'
									tag={Link}
									to='/chairman/list'
									outline>
									Cancel
								</Button.Ripple>
							</Col>
						</Row>
					</Form>
				</CardBody>
			</Card>
		</>
	);
};

export default AddChairman;
