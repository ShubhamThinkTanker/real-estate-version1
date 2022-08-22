import React, { Fragment, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { VendorGetAction } from '../../../redux/actions/apislogic/vendorapis';
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
import BreadCrumbs from '../../../@core/components/breadcrumbs';
import { Briefcase, Smartphone, User, Tool, Home } from 'react-feather';
function ViewVendor() {
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(VendorGetAction(id));
	}, []);

	const VendorGetData = useSelector((state) => state.vendorRecords);
	const { getVendorsRecords } = VendorGetData;
	return (
		<>
			<BreadCrumbs
				breadCrumbTitle='Vendor'
				breadCrumbParent={
					<Link to='/vendor/list'>Vendor List</Link>
				}
				breadCrumbActive='Vendor View'
			/>
		<Fragment>
		
			{getVendorsRecords && (
				<Card>
					<CardBody>
						<Form onSubmit={(e) => onSubmit(e)}>
							<Row>
								<Col md='6' sm='12'>
									<FormGroup className="mb-2">
										<Label className='form-label' for='name'>
											First Name
										</Label>
										<InputGroup className='input-group-merge disabled'>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText>
													<User size={15} />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												className='p-1'
												type='text'
												name='name'
												id='name'
												placeholder='First Name'
												disabled={true}
												defaultValue={
													getVendorsRecords['data'].name
												}
											/>
										</InputGroup>
									</FormGroup>
								</Col>
								<Col md='6' sm='12'>
									<FormGroup className="mb-2">
										<Label
											className='form-label'
											for='lastname'>
											Last Name
										</Label>
										<InputGroup className='input-group-merge disabled'>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText>
													<User size={15} />
												</InputGroupText>
											</InputGroupAddon>

											<Input
												className='p-1'
												type='text'
												name='lastname'
												id='lastname'
												placeholder='Last Name'
												disabled={true}
												defaultValue={
													getVendorsRecords['data']
														.lastname
												}
											/>
										</InputGroup>
									</FormGroup>
								</Col>
								<Col md='6' sm='12'>
								<FormGroup className="mb-2">
									<Label
										className='form-label'
										for='mobile_no'>
										Mobile No
									</Label>
									<InputGroup className='input-group-merge disabled'>
									<InputGroupAddon addonType='prepend'>
										<InputGroupText>
											<Smartphone size={15} />
										</InputGroupText>
										</InputGroupAddon>
										<Input
											className='p-1'
											type='number'
											name='mobile_no'
											id='mobile_no'
											placeholder='Mobile no'
											disabled={true}
											defaultValue={
												getVendorsRecords['data']
													.mobile_no
											}
										/>
									</InputGroup>
									</FormGroup>
								</Col>
								<Col md='6' sm='12'>
								<FormGroup className="mb-2">
									<Label
										className='form-label'
										for='profession'>
										Profession
									</Label>
									<InputGroup className='input-group-merge disabled'>
									<InputGroupAddon addonType='prepend'>
										<InputGroupText>
											<Briefcase size={15} />
										</InputGroupText>
										</InputGroupAddon>
										<Input
											className='p-1'
											type='text'
											name='profession'
											id='profession'
											placeholder='Profession'
											disabled={true}
											defaultValue={
												getVendorsRecords['data']
													.profession
											}
										/>
									</InputGroup>
									</FormGroup>
								</Col>
								<Col md='6' sm='12' >
								<FormGroup className="mb-2">
									<Label className='form-label' for='service'>
										Type of Service
									</Label>
									<InputGroup className='input-group-merge disabled'>
									<InputGroupAddon addonType='prepend'>
										<InputGroupText>
											<Tool size={15} />
										</InputGroupText>
										</InputGroupAddon>
										<Input
											className='p-1'
											type='text'
											name='services'
											id='service'
											placeholder='Service'
											disabled={true}
											defaultValue={
												getVendorsRecords['data']
													.services
											}
										/>
									</InputGroup>
									</FormGroup>
								</Col>
								<Col md='6' sm='12'>
								<FormGroup className="mb-2">
									<Label className='form-label' for='address'>
										Address
									</Label>
									<InputGroup className='input-group-merge disabled'>
									<InputGroupAddon addonType='prepend'>
										<InputGroupText>
											<Home size={15} />
										</InputGroupText>
										</InputGroupAddon>
										<Input
											type='text'
											name='address'
											id='address'
											placeholder='Address'
											disabled={true}
											defaultValue={
												getVendorsRecords['data']
													.address
											}
										/>
									</InputGroup>
									</FormGroup>
								</Col>
								<Col sm='12'>
								<Button.Ripple
									color='danger'
									tag={Link}
									to='/vendor/list'
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
		</>
	);
}

export default ViewVendor;
