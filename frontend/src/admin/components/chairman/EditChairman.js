import { Fragment, useEffect, useState } from 'react';
import '@styles/react/libs/flatpickr/flatpickr.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
	EditRegisterAction,
	UserGetAction,
	UserRegisterAction,
} from '../../../redux/actions/apislogic/userapis';
import { useHistory, useParams } from 'react-router-dom';

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
import {
	USER_EDIT_RESET,
	USER_GET_RESET,
} from '../../../redux/Constants/userConstants';

const EditChairman = () => {
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	const [filesend, setFileSend] = useState();

	const UserGetData = useSelector((state) => state.userRecords);
	var { getUsersRecords } = UserGetData;

	const EditDatMessage = useSelector((state) => state.EditUSerData);

	const { error: errorsUSerEdit, UserEditData } = EditDatMessage;

	useEffect(() => {
		if (UserEditData) {
			history.push('/chairman/list');
		}
	}, [UserEditData]);

	const [user, setUser] = useState({
		name: '',
		mobile_no: '',
		email: '',
		gender: '',
		profile_image: '',
	});
	const [img, setImg] = useState();
	const renderimagefun = () => {
		if (img != null) {
			return (
				<img
					className='user-avatar rounded mr-2 my-25 cursor-pointer'
					src={img}
					height='90'
					width='90'
				/>
			);
		} else {
			return (
				<img
					className='user-avatar rounded mr-2 my-25 cursor-pointer'
					src={
						user.profile_image === 'Testing'
							? 'https://bootdey.com/img/Content/avatar/avatar7.png'
							: user.profile_image
					}
					height='90'
					width='90'
				/>
			);
		}
	};

	const onInputChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
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

	useEffect(() => {
		dispatch(UserGetAction(id));
		dispatch({ type: USER_EDIT_RESET });
	}, []);

	useEffect(() => {
		setUser({
			name: getUsersRecords && getUsersRecords['data']['name'],
			mobile_no: getUsersRecords && getUsersRecords['data']['mobile_no'],
			email: getUsersRecords && getUsersRecords['data']['email'],
			gender: getUsersRecords && getUsersRecords['data']['gender'],
			profile_image:
				getUsersRecords && getUsersRecords['data']['profile_image'],
		});
	}, [getUsersRecords]);

	const onSubmit = (e) => {
		e.preventDefault();

		const { name, email, mobile_no, gender, profile_image } = user;
		let formData = new FormData();
		formData.append('name', name);
		formData.append('email', email);
		formData.append('mobile_no', mobile_no);
		formData.append('gender', gender);
		filesend != undefined
			? formData.append('profile_image', filesend)
			: null;
		dispatch(EditRegisterAction(id, formData));
	};

	return (
		<Fragment>
			<h3>Edit Chairman</h3>
			{user && (
				<Card>
					<CardBody>
						<Form onSubmit={(e) => onSubmit(e)}>
							<Row>
								<Col sm='12'>
									<Label for='image'>Profile Image</Label>
									<Media className='mb-2'>
										{renderimagefun()}
										<Media className='mt-50' body>
											<div className='d-flex flex-wrap mt-1 px-0'>
												<Button.Ripple
													id='change-img'
													tag={Label}
													className='mr-75 mb-0'
													color='primary'>
													<span className='d-none d-sm-block'>
														Upload
													</span>
													<span className='d-block d-sm-none'>
														<Edit size={14} />
													</span>
													<Input
														type='file'
														hidden
														id='change-img'
														accept='image/*'
														onChange={(e) =>
															onChange(e)
														}
													/>
												</Button.Ripple>
												<Button.Ripple
													color='secondary'
													outline
													onClick={() =>
														setFileSend()
													}>
													<span className='d-none d-sm-block'>
														Remove
													</span>
													<span className='d-block d-sm-none'>
														<Trash2 size={14} />
													</span>
												</Button.Ripple>
											</div>
										</Media>
									</Media>
								</Col>

								<Col md='6' sm='12'>
									<FormGroup className='mb-2'>
										<Label for='name'>Name</Label>
										<InputGroup
											className={
												errorsUSerEdit &&
												errorsUSerEdit.name
													? 'is-invalid input-group-merge'
													: 'input-group-merge'
											}>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText
													className={
														errorsUSerEdit &&
														errorsUSerEdit.name
															? 'is-invalid'
															: ''
													}>
													<User size={15} />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												className={
													errorsUSerEdit &&
													errorsUSerEdit.name
														? 'is-invalid'
														: ''
												}
												type='text'
												id='name'
												name='name'
												placeholder='Name'
												value={user.name}
												onChange={(e) =>
													onInputChange(e)
												}
											/>
										</InputGroup>
										{errorsUSerEdit &&
										errorsUSerEdit.name ? (
											<div className='error'>
												{errorsUSerEdit.name}
											</div>
										) : null}
									</FormGroup>
								</Col>

								<Col md='6' sm='12'>
									<FormGroup className='mb-2'>
										<Label for='email'>Email</Label>
										<InputGroup
											className={
												errorsUSerEdit &&
												errorsUSerEdit.email
													? 'is-invalid input-group-merge'
													: 'input-group-merge'
											}>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText
													className={
														errorsUSerEdit &&
														errorsUSerEdit.email
															? 'is-invalid'
															: ''
													}>
													<Mail size={15} />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												className={
													errorsUSerEdit &&
													errorsUSerEdit.email
														? 'is-invalid'
														: ''
												}
												type='text'
												id='email'
												name='email'
												placeholder='Email'
												value={user.email}
												onChange={(e) =>
													onInputChange(e)
												}
											/>
										</InputGroup>
									</FormGroup>
								</Col>

								<Col md='6' sm='12'>
									<FormGroup className='mb-2'>
										<Label for='mobile_no'>Mobile No</Label>
										<InputGroup
											className={
												errorsUSerEdit &&
												errorsUSerEdit.mobile_no
													? 'is-invalid input-group-merge'
													: 'input-group-merge'
											}>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText
													className={
														errorsUSerEdit &&
														errorsUSerEdit.mobile_no
															? 'is-invalid'
															: ''
													}>
													<Smartphone size={15} />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												className={
													errorsUSerEdit &&
													errorsUSerEdit.mobile_no
														? 'is-invalid'
														: ''
												}
												type='text'
												id='mobile_no'
												name='mobile_no'
												placeholder='Mobile No'
												value={user.mobile_no}
												onChange={(e) =>
													onInputChange(e)
												}
											/>
										</InputGroup>
										{errorsUSerEdit &&
										errorsUSerEdit.mobile_no ? (
											<div className='error'>
												{errorsUSerEdit.mobile_no}
											</div>
										) : null}
									</FormGroup>
								</Col>

								<Col md='6' sm='12'>
									<FormGroup className='mb-2'>
										<Label
											className='form-label'
											for='address'>
											Address
										</Label>

										<InputGroup
											className={
												errorsUSerEdit &&
												errorsUSerEdit.address
													? 'is-invalid input-group-merge'
													: 'input-group-merge'
											}>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText
													className={
														errorsUSerEdit &&
														errorsUSerEdit.address
															? 'is-invalid'
															: ''
													}>
													<Home size={15} />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												className={
													errorsUSerEdit &&
													errorsUSerEdit.address
														? 'is-invalid'
														: ''
												}
												type='text'
												name='address'
												id='address'
												placeholder='Address'
												value={user.address}
												onChange={(e) =>
													onInputChange(e)
												}
											/>
										</InputGroup>
										{errorsUSerEdit &&
										errorsUSerEdit.address ? (
											<div className='error'>
												{errorsUSerEdit.address}
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
										<Input
											type='select'
											onChange={(e) =>
												(values['country'] =
													e.target.value)
											}
											name='country'>
											<option value=''>
												Select Country
											</option>
											<option value='india'>India</option>
										</Input>
									</FormGroup>
								</Col>

								<Col md='6' sm='12'>
									<FormGroup className='mb-2'>
										<Label
											className='form-label'
											for='profession'>
											State
										</Label>
										<Input
											type='select'
											onChange={(e) =>
												(values['state'] =
													e.target.value)
											}
											name='state'>
											<option value=''>
												Select State
											</option>
											<option value='gujarat'>
												Gujarat
											</option>
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
											<option value='gujarat'>
												Sikkim
											</option>
											<option value='gujarat'>
												Chhattisgath
											</option>
											<option value='gujarat'>
												Uttrakhand
											</option>
											<option value='gujarat'>
												Jharkhand
											</option>
											<option value='gujarat'>
												Kerala
											</option>
											<option value='gujarat'>
												Meghalaya
											</option>
											<option value='gujarat'>
												Tripura
											</option>
											<option value='gujarat'>
												Manipur
											</option>
											<option value='gujarat'>
												Assam
											</option>
											<option value='gujarat'>
												Haryana
											</option>
											<option value='gujarat'>Goa</option>
											<option value='gujarat'>
												Rajasthan
											</option>
											<option value='gujarat'>
												Maharashtra
											</option>
											<option value='gujarat'>
												Punjab
											</option>
											<option value='gujarat'>
												Bihar
											</option>
											<option value='gujarat'>
												Karnataka
											</option>
											<option value='gujarat'>
												Jammu and Kashmir
											</option>
											<option value='gujarat'>
												Tamil
											</option>
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
											className='form-label'
											for='service'>
											City
										</Label>
										<Input
											type='select'
											onChange={(e) =>
												(values['city'] =
													e.target.value)
											}
											name='city'>
											<option value=''>
												Select City
											</option>
											<option value='ahmedabad'>
												Ahmedabad
											</option>
											<option value='surat'>Surat</option>
											<option value='rajkot'>
												Rajkot
											</option>
											<option value='rajkot'>
												Vadodara
											</option>
											<option value='rajkot'>
												Bhavnagar
											</option>
											<option value='rajkot'>
												Jamnagar
											</option>
											<option value='rajkot'>
												Ghandhinagar
											</option>
											<option value='rajkot'>
												Anand
											</option>
											<option value='rajkot'>
												Navsari
											</option>
											<option value='rajkot'>
												Morbi
											</option>
											<option value='rajkot'>
												Nadiad
											</option>
											<option value='rajkot'>Bhuj</option>
											<option value='rajkot'>Vapi</option>
											<option value='rajkot'>
												Patan
											</option>
											<option value='rajkot'>
												Botad
											</option>
											<option value='rajkot'>
												Amreli
											</option>
											<option value='rajkot'>
												Deesa
											</option>
											<option value='rajkot'>
												Jetpur
											</option>
											<option value='rajkot'>
												Dahod
											</option>
											<option value='rajkot'>
												Veraval
											</option>
										</Input>
									</FormGroup>
								</Col>

								<Col md='6' sm='12'>
									<FormGroup className='mb-2'>
										<Label for='gender'>Gender</Label>
										<br></br>
										<CustomInput
											type='radio'
											id='gender1'
											name='gender'
											inline
											label='Male'
											value='male'
											checked={user.gender === 'male'}
											onChange={(e) => onInputChange(e)}
										/>
										<CustomInput
											type='radio'
											id='gender2'
											name='gender'
											inline
											label='Female'
											value='female'
											checked={user.gender === 'female'}
											onChange={(e) => onInputChange(e)}
										/>
										{errorsUSerEdit &&
										errorsUSerEdit.gender ? (
											<div className='error'>
												{errorsUSerEdit.gender}
											</div>
										) : null}
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
										Save Changes
									</Button.Ripple>
									<Button.Ripple
										color='secondary'
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
			)}
		</Fragment>
	);
};

export default EditChairman;
