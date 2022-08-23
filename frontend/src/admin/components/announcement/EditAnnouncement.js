import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import {
	EditAnnouncementAction,
	AnnouncementGetAction,
} from '../../../redux/actions/apislogic/announcementapis';
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
import BreadCrumbs from '../../../@core/components/breadcrumbs';
import { Link } from 'react-router-dom';
import '@styles/react/libs/flatpickr/flatpickr.scss';
import { ANNOUNCEMENT_EDIT_RESET } from '../../../redux/Constants/userConstants';

const EditAnnouncement = () => {
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	const [filesend, setFileSend] = useState();

	const AnnouncementGetData = useSelector((state) => state.announcementRecords);
	var { getAnnouncementsRecords } = AnnouncementGetData;

	const EditDataMessage = useSelector((state) => state.EditAnnouncementData);
	const { AnnouncementEditData, error: errorAnnouncementEditData } = EditDataMessage;

	useEffect(() => {
		if (AnnouncementEditData) {
			history.push('/announcement/list');
		}
	}, [AnnouncementEditData]);
	console.log(AnnouncementEditData, "AnnouncementEditData");
	const [announcement, setAnnouncement] = useState({
		image: '',
		title: '',
		descripton: '',
		start_date: '',
		end_date: '',
		location: '',

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
						announcement.image === 'Testing'
							? 'https://bootdey.com/img/Content/avatar/avatar7.png'
							: announcement.image
					}
					height='90'
					width='90'
				/>
			);
		}
	};
	const onInputChange = (e) => {
		setAnnouncement({ ...announcement, [e.target.name]: e.target.value });
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
		dispatch(AnnouncementGetAction(id));
		dispatch({ type: ANNOUNCEMENT_EDIT_RESET });
	}, []);

	useEffect(() => {
		setAnnouncement({
			title: getAnnouncementsRecords && getAnnouncementsRecords['data']['title'],
			description: getAnnouncementsRecords && getAnnouncementsRecords['data']['description'],
			start_date: getAnnouncementsRecords && getAnnouncementsRecords['data']['start_date'],
			end_date: getAnnouncementsRecords && getAnnouncementsRecords['data']['end_date'],
			location: getAnnouncementsRecords && getAnnouncementsRecords['data']['location'],
			image: getAnnouncementsRecords && getAnnouncementsRecords['data']['image'],

		});
	}, [getAnnouncementsRecords]);
	console.log(getAnnouncementsRecords, "getAnnouncementsRecords");
	const onSubmit = (e) => {
		e.preventDefault();
		const { title, description, start_date, end_date, location, image } =
			announcement;

		let formData = new FormData();
		formData.append('title', title);
		formData.append('description', description);
		formData.append('start_date', start_date);
		formData.append('end_date', end_date);
		formData.append('location', location);
		filesend != undefined
			? formData.append('image', filesend)
			: null;
		dispatch(EditAnnouncementAction(id, formData));
	};
	return (
		<>
			<BreadCrumbs
				breadCrumbTitle='Announcement'
				breadCrumbParent={<Link to='/announcement/list'>Announcement List</Link>}
				breadCrumbActive='Announcement Edit'
			/>
			{announcement && (
				<Card>
					<CardBody>
						<Form onSubmit={(e) => onSubmit(e)}>
							<Row>
								<Col sm='12'>
									<Label for='image'>Image</Label>
									<Media className='mb-2'>
										{renderimagefun()}
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
														accept='image/*'
														onChange={(e) =>
															onChange(e)
														}
													/>
												</Button.Ripple>
												<Button.Ripple
													color='danger'
													outline
													onClick={() =>
														setFileSend()
													}>
													Remove
												</Button.Ripple>
											</div>
										</Media>
									</Media>
								</Col>


								<Col md='6' sm='12'>
									<FormGroup className='mb-2'>
										<Label for='title'>Title</Label>
										<InputGroup
											className={
												errorAnnouncementEditData &&
													errorAnnouncementEditData.title
													? 'is-invalid input-group-merge'
													: 'input-group-merge'
											}>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText
													className={
														errorAnnouncementEditData &&
															errorAnnouncementEditData.title
															? 'is-invalid'
															: ''
													}>

												</InputGroupText>
											</InputGroupAddon>
											<Input
												className={
													errorAnnouncementEditData &&
														errorAnnouncementEditData.title
														? 'is-invalid'
														: ''
												}
												type='text'
												id='title'
												name='title'
												placeholder='Title'
												value={announcement.title}
												onChange={(e) =>
													onInputChange(e)
												}
											/>
										</InputGroup>
										{errorAnnouncementEditData &&
											errorAnnouncementEditData.title ? (
											<div className='error'>
												{errorAnnouncementEditData.title}
											</div>
										) : null}
									</FormGroup>
								</Col>




								<Col md='6' sm='12'>
									<FormGroup className='mb-2'>
										<Label for='description'>Description</Label>
										<InputGroup
											className={
												errorAnnouncementEditData &&
													errorAnnouncementEditData.description
													? 'is-invalid input-group-merge'
													: 'input-group-merge'
											}>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText
													className={
														errorAnnouncementEditData &&
															errorAnnouncementEditData.description
															? 'is-invalid'
															: ''
													}>

												</InputGroupText>
											</InputGroupAddon>
											<Input
												className={
													errorAnnouncementEditData &&
														errorAnnouncementEditData.description
														? 'is-invalid'
														: ''
												}
												type='text'
												id='description'
												name='description'
												placeholder='Description'
												value={announcement.description}
												onChange={(e) =>
													onInputChange(e)
												}
											/>
										</InputGroup>
										{errorAnnouncementEditData &&
											errorAnnouncementEditData.description ? (
											<div className='error'>
												{errorAnnouncementEditData.description}
											</div>
										) : null}
									</FormGroup>
								</Col>

								<Col md='6' sm='12'>
									<FormGroup className='mb-2'>
										<Label for='start_date'>Start Date</Label>
										<InputGroup
											className={
												errorAnnouncementEditData &&
													errorAnnouncementEditData.start_date
													? 'is-invalid input-group-merge'
													: 'input-group-merge'
											}>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText
													className={
														errorAnnouncementEditData &&
															errorAnnouncementEditData.start_date
															? 'is-invalid'
															: ''
													}>

												</InputGroupText>
											</InputGroupAddon>
											<Input
												className={
													errorAnnouncementEditData &&
														errorAnnouncementEditData.start_date
														? 'is-invalid'
														: ''
												}
												type='text'
												id='start_date'
												name='start_date'
												placeholder='Start Date'
												value={announcement.start_date}
												onChange={(e) =>
													onInputChange(e)
												}
											/>
										</InputGroup>
										{errorAnnouncementEditData &&
											errorAnnouncementEditData.start_date ? (
											<div className='error'>
												{errorAnnouncementEditData.start_date}
											</div>
										) : null}
									</FormGroup>
								</Col>


								<Col md='6' sm='12'>
									<FormGroup className='mb-2'>
										<Label for='end_date'>End Date</Label>
										<InputGroup
											className={
												errorAnnouncementEditData &&
													errorAnnouncementEditData.end_date
													? 'is-invalid input-group-merge'
													: 'input-group-merge'
											}>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText
													className={
														errorAnnouncementEditData &&
															errorAnnouncementEditData.end_date
															? 'is-invalid'
															: ''
													}>

												</InputGroupText>
											</InputGroupAddon>
											<Input
												className={
													errorAnnouncementEditData &&
														errorAnnouncementEditData.end_date
														? 'is-invalid'
														: ''
												}
												type='text'
												id='end_date'
												name='end_date'
												placeholder='End Date'
												value={announcement.end_date}
												onChange={(e) =>
													onInputChange(e)
												}
											/>
										</InputGroup>
										{errorAnnouncementEditData &&
											errorAnnouncementEditData.end_date ? (
											<div className='error'>
												{errorAnnouncementEditData.end_date}
											</div>
										) : null}
									</FormGroup>
								</Col>

								<Col md='6' sm='12'>
									<FormGroup className='mb-2'>
										<Label for='location'>Location</Label>
										<InputGroup
											className={
												errorAnnouncementEditData &&
													errorAnnouncementEditData.location
													? 'is-invalid input-group-merge'
													: 'input-group-merge'
											}>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText
													className={
														errorAnnouncementEditData &&
															errorAnnouncementEditData.location
															? 'is-invalid'
															: ''
													}>

												</InputGroupText>
											</InputGroupAddon>
											<Input
												className={
													errorAnnouncementEditData &&
														errorAnnouncementEditData.location
														? 'is-invalid'
														: ''
												}
												type='text'
												id='location'
												name='location'
												placeholder='Location'
												value={announcement.location}
												onChange={(e) =>
													onInputChange(e)
												}
											/>
										</InputGroup>
										{errorAnnouncementEditData &&
											errorAnnouncementEditData.location ? (
											<div className='error'>
												{errorAnnouncementEditData.location}
											</div>
										) : null}
									</FormGroup>
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
										color='danger'
										tag={Link}
										to='/announcement/list'
										outline>
										Cancel
									</Button.Ripple>
								</Col>
							</Row>
						</Form>
					</CardBody>
				</Card>
			)}
		</>
	);
};

export default EditAnnouncement;
