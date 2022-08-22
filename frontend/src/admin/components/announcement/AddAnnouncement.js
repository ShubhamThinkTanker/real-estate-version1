import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
	Card,
	CardBody,
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
import Flatpickr from 'react-flatpickr'
import BreadCrumbs from '../../../@core/components/breadcrumbs';
import { Lock, Edit, Trash2 } from 'react-feather';
import { Link } from 'react-router-dom';
import { AnnouncementRegisterAction } from '../../../redux/actions/apislogic/announcementapis';
import { ANNOUNCEMENT_REGISTER_RESET } from '../../../redux/Constants/userConstants';

function AddAnnouncement() {
	const history = useHistory();
	const dispatch = useDispatch();
	const [filesend, setFileSend] = useState();
	const [startPicker, setStartPicker] = useState(new Date())
	const [endPicker, setEndPicker] = useState(new Date())
	const [allDay, setAllDay] = useState(false)
	const [values, setValues] = useState({
		title: '',
		description: '',
		location:''
	});

	const registerRecord = useSelector((state) => state.registerAnnouncementData);
	var { error, AnnouncementRegisterData } = registerRecord;



	// useEffect(() => {
	// 	if (AnnouncementRegisterData) {
	// 		history.push('/announcement/list');

	// 	}
	// }, [AnnouncementRegisterData]);

	// console.log(registerRecord, "registerRecord");

	useEffect(() => {
		dispatch({ type: ANNOUNCEMENT_REGISTER_RESET });
	}, []);

	const onSubmit = async (e) => {
		e.preventDefault();

		const { title, description ,location} = values;

		const formData = new FormData();
		formData.append('image', filesend);
		formData.append('title', title);
		formData.append('description', description);
		formData.append('start_date', startPicker);
		formData.append('end_date', endPicker);
		formData.append('location',location);
		dispatch(AnnouncementRegisterAction(formData));
		history.push('/announcement/list');
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


	const [img, setImg] = useState(
		'https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default.png'
	);


	return (
		<>
			<BreadCrumbs
				breadCrumbTitle='Announcement'
				breadCrumbParent={
					<Link to='/announcement/list'>Announcement List</Link>
				}
				breadCrumbActive='Create Announcement'
			/>

			<Card>
				<CardBody>
					<Form onSubmit={(e) => onSubmit(e)}>
						<Row>

							<Col sm='12'>
								<Label for='image'>Image</Label>
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
								{error && error.image ? (
									<div className='error'>
										{error.image}
									</div>
								) : null}
							</Col>


							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label for='title'>Title</Label>
									<InputGroup
										className={
											error && error.title
												? 'is-invalid input-group-merge'
												: 'input-group-merge mb-1'
										}>
										<InputGroupAddon addonType='prepend'>
											<InputGroupText
												className={
													error && error.title
														? 'is-invalid'
														: ''
												}>

											</InputGroupText>
										</InputGroupAddon>
										<Input
											className={
												error && error.title
													? 'is-invalid'
													: ''
											}
											type='text'
											id='title'
											name='title'
											placeholder='Title'
											defaultValue={values.title}
											onChange={(e) =>
											(values['title'] =
												e.target.value)
											}
										/>
									</InputGroup>
									{error && error.title ? (
										<div className='error'>
											{error.title}
										</div>
									) : null}
								</FormGroup>
							</Col>


							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label for='description'>Description</Label>
									<InputGroup
										className={
											error && error.description
												? 'is-invalid input-group-merge'
												: 'input-group-merge mb-1'
										}>
										<InputGroupAddon addonType='prepend'>
											<InputGroupText
												className={
													error && error.description
														? 'is-invalid'
														: ''
												}>

											</InputGroupText>
										</InputGroupAddon>
										<Input
											className={
												error && error.description
													? 'is-invalid'
													: ''
											}
											type='text'
											id='description'
											name='description'
											placeholder='Description'
											defaultValue={values.description}
											onChange={(e) =>
											(values['description'] =
												e.target.value)
											}
										/>
									</InputGroup>
									{error && error.description ? (
										<div className='error'>
											{error.description}
										</div>
									) : null}
								</FormGroup>
							</Col>


							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label for='startDate'>Start Date</Label>
									<InputGroup
										className={
											error && error.start_date
												? 'is-invalid input-group-merge'
												: 'input-group-merge mb-1'
										}>
										<InputGroupAddon addonType='prepend'>
											<InputGroupText
												className={
													error && error.start_date
														? 'is-invalid'
														: ''
												}>

											</InputGroupText>
										</InputGroupAddon>
										<Flatpickr
											required
											id='start_date'
											name='start_date'
											className='form-control'
											onChange={date => setStartPicker(date[0])}
											value={startPicker}
											options={{
												enableTime: allDay === false,
												dateFormat: 'Y-m-d'
											}}
										/>
									</InputGroup>
									{error && error.start_date ? (
										<div className='error'>
											{error.start_date}
										</div>
									) : null}
								</FormGroup>
							</Col>

							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label for='end_date'>End Date</Label>
									<InputGroup
										className={
											error && error.end_date
												? 'is-invalid input-group-merge'
												: 'input-group-merge mb-1'
										}>
										<InputGroupAddon addonType='prepend'>
											<InputGroupText
												className={
													error && error.end_date
														? 'is-invalid'
														: ''
												}>

											</InputGroupText>
										</InputGroupAddon>
										<Flatpickr
											required
											id='end_date'
											name='end_date'
											className='form-control'
											onChange={date => setEndPicker(date[0])}
											value={endPicker}
											options={{
												enableTime: allDay === false,
												dateFormat: 'Y-m-d'
											}}
										/>
									</InputGroup>
									{error && error.end_date ? (
										<div className='error'>
											{error.end_date}
										</div>
									) : null}
								</FormGroup>
							</Col>


							<Col md='6' sm='12'>
								<FormGroup className='mb-2'>
									<Label className='form-label' for='location'>
										Location
									</Label>
									<InputGroup
										className={
											error && error.location
												? 'is-invalid input-group-merge'
												: 'input-group-merge'
										}>
										<InputGroupAddon addonType='prepend'>
											<InputGroupText
												className={
													error && error.location
														? 'is-invalid'
														: ''
												}>
											
											</InputGroupText>
										</InputGroupAddon>
										<Input
											className={
												error && error.location
													? 'is-invalid'
													: ''
											}
											type='text'
											name='location'
											id='location'
											placeholder='Location'
											defaultValue={values.location}
											onChange={(e) =>
												(values['location'] =
													e.target.value)
											}
										/>
									</InputGroup>
									{error && error.location ? (
										<div className='error'>
											{error.location}
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
										to='/announcement/list'
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
}

export default AddAnnouncement;
