import React ,{useState}	from 'react';
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
import BreadCrumbs from '../../../@core/components/breadcrumbs';
import { Lock, Edit, Trash2 } from 'react-feather';
import { Link } from 'react-router-dom';
function AddAnnouncement() {
	const [filesend, setFileSend] = useState();
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
			<Row>
				<Col sm='12'>
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
							
							</Col>
							<Col md='6' sm='12'>
								<FormGroup>
									<Label for='title'>Title</Label>
									<Input
										type='text'
										id='title'
										Title='title'
										placeholder='Title'
										// defaultValue={values.title}
										// onChange={(e) =>
										// 	(values['title'] = e.target.value)
										// }
									/>
									{/* {error && error.title ? (
										<div className='error'>
											{error.name}
										</div>
									) : null} */}
								</FormGroup>
							</Col>
							<Col md='6' sm='12'>
								<FormGroup>
									<Label for='email'>Description</Label>
									<Input
										type='text'
										id='description'
										name='description'
										placeholder='Description'
										// defaultValue={values.description}
										// onChange={(e) =>
										// 	(values['description'] = e.target.value)
										// }
									/>
									{/* {error && error.description ? (
										<div className='error'>
											{error.description}
										</div>
									) : null} */}
								</FormGroup>
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
				</Col>
			</Row>
		</>
	);
}

export default AddAnnouncement;
