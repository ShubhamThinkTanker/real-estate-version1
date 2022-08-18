import { Fragment, useEffect } from 'react';
import '@styles/react/libs/flatpickr/flatpickr.scss';
import { useDispatch, useSelector } from 'react-redux';
import { UserGetAction } from '../../../redux/actions/apislogic/userapis';
import { Link, useParams } from 'react-router-dom';

import { Home, User, Mail, Smartphone } from 'react-feather';

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
	Button,
	FormGroup,
	InputGroup,
	InputGroupText,
	InputGroupAddon,
} from 'reactstrap';

const ViewChairman = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(UserGetAction(id));
	}, []);

	const UserGetData = useSelector((state) => state.userRecords);
	const { getUsersRecords } = UserGetData;

	return (
		<Fragment>
			<h3>View Chairman</h3>
			{getUsersRecords && (
				<Card>
					<CardBody>
						<Form>
							<Row>
								<Col sm='12'>
									<Label for='image'>Profile Image</Label>
									<Media className='mb-2'>
										<div className='d-flex flex-wrap mt-1 px-0'>
											<img
												className='user-avatar rounded mr-2 my-25 cursor-pointer'
												src={
													getUsersRecords['data']
														.profile_image
												}
												height='90'
												width='90'
											/>
										</div>
									</Media>
								</Col>

								<Col md='6' sm='12'>
									<FormGroup className='mb-2'>
										<Label for='name'>Name</Label>
										<InputGroup className='input-group-merge disabled'>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText>
													<User size={15} />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												type='text'
												id='name'
												name='name'
												placeholder='Name'
												disabled={true}
												defaultValue={
													getUsersRecords['data'].name
												}
											/>
										</InputGroup>
									</FormGroup>
								</Col>

								<Col md='6' sm='12'>
									<FormGroup className='mb-2'>
										<Label for='email'>Email</Label>
										<InputGroup className='input-group-merge disabled'>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText>
													<Mail size={15} />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												type='text'
												id='email'
												name='email'
												placeholder='Email'
												disabled={true}
												defaultValue={
													getUsersRecords['data']
														.email
												}
											/>
										</InputGroup>
									</FormGroup>
								</Col>

								<Col md='6' sm='12'>
									<FormGroup className='mb-2'>
										<Label for='mobile_no'>Mobile No</Label>
										<InputGroup className='input-group-merge disabled'>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText>
													<Smartphone size={15} />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												type='text'
												id='mobile_no'
												name='mobile_no'
												placeholder='Mobile No'
												disabled={true}
												defaultValue={
													getUsersRecords['data']
														.mobile_no
												}
											/>
										</InputGroup>
									</FormGroup>
								</Col>

								<Col md='6' sm='12'>
									<FormGroup className='mb-2'>
										<Label for='address'>Address</Label>
										<InputGroup className='input-group-merge disabled'>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText>
													<Home size={15} />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												type='text'
												rows='2'
												Col='5'
												name='address'
												id='address'
												placeholder='Address'
												disabled={true}
												defaultValue={
													getUsersRecords['data']
														.address
												}
											/>
										</InputGroup>
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
											disabled={true}
											defaultChecked={
												getUsersRecords['data']
													.gender === 'male'
											}
										/>
										<CustomInput
											type='radio'
											id='gender2'
											name='gender'
											inline
											label='Female'
											disabled={true}
											defaultChecked={
												getUsersRecords['data']
													.gender === 'female'
											}
										/>
									</FormGroup>
								</Col>

								<Col sm='12'>
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

export default ViewChairman;
