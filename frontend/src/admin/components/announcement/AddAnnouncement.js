import React from 'react';
import {
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
} from 'reactstrap';
import { Lock, Edit, Trash2 } from 'react-feather';
import { Link } from 'react-router-dom';
function AddAnnouncement() {
	return (
		<>
			<h3>Create Chairman</h3>
			<Row>
				<Col sm='12'>
					<Form onSubmit={(e) => onSubmit(e)}>
						<Row>
							<Col md='6' sm='12'>
								<FormGroup>
									<Label for='name'>Name</Label>
									<Input
										type='text'
										id='name'
										name='name'
										placeholder='Name'
										// defaultValue={values.name}
										// onChange={(e) =>
										// 	(values['name'] = e.target.value)
										// }
									/>
									{/* {error && error.name ? (
										<div className='error'>
											{error.name}
										</div>
									) : null} */}
								</FormGroup>
							</Col>
							<Col md='6' sm='12'>
								<FormGroup>
									<Label for='email'>Email</Label>
									<Input
										type='text'
										id='email'
										name='email'
										placeholder='Email'
										// defaultValue={values.email}
										// onChange={(e) =>
										// 	(values['email'] = e.target.value)
										// }
									/>
									{/* {error && error.email ? (
										<div className='error'>
											{error.email}
										</div>
									) : null} */}
								</FormGroup>
							</Col>
							<Col md='6' sm='12'>
								<FormGroup>
									<Label for='mobile_no'>Mobile No</Label>
									<Input
										type='text'
										id='mobile_no'
										name='mobile_no'
										placeholder='Mobile No'
										// defaultValue={values.mobile_no}
										// onChange={(e) =>
										// 	(values['mobile_no'] =
										// 		e.target.value)
										// }
									/>
									{/* {error && error.mobile_no ? (
										<div className='error'>
											{error.mobile_no}
										</div>
									) : null} */}
								</FormGroup>
							</Col>
							<Col md='6' sm='12'>
								<Label for='gender'>Gender</Label>
								<br></br>
								<CustomInput
									type='radio'
									id='gender1'
									name='gender'
									inline
									label='Male'
									// defaultValue='male'
									// onChange={(e) =>
									// 	(values['gender'] = e.target.value)
									// }
								/>

								<CustomInput
									type='radio'
									id='gender2'
									name='gender'
									inline
									label='Female'
									// defaultValue='female'
									// onChange={(e) =>
									// 	(values['gender'] = e.target.value)
									// }
								/>
								{/* {error && error.gender ? (
									<div className='error'>{error.gender}</div>
								) : null} */}
							</Col>

							<Col sm='12'>
								<Label for='image'>Profile Image</Label>
								<Media className='mb-2'>
									{/* <img
										className='user-avatar rounded mr-2 my-25 cursor-pointer'
										src={img}
										height='90'
										width='90'
									/> */}
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
													// onChange={onChange}
													accept='image/*'
												/>
											</Button.Ripple>
											<Button.Ripple
												color='secondary'
												outline
												onClick={() =>
													setImg(
														'https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default.png'
													)
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
								{/* {error && error.profile_image ? (
									<div className='error'>
										{error.profile_image}
									</div>
								) : null} */}
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>
		</>
	);
}

export default AddAnnouncement;
