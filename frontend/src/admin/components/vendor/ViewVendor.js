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
} from 'reactstrap';

function ViewVendor() {
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(VendorGetAction(id));
	}, []);

	const VendorGetData = useSelector((state) => state.vendorRecords);
	const { getVendorsRecords } = VendorGetData;
	return (
		<Fragment>
			<h3>View Vendor</h3>
			{getVendorsRecords && (
				<Card>
					<CardBody>
						<Form onSubmit={(e) => onSubmit(e)}>
							<Row>
								<Col md='6' sm='12' className='mb-1'>
									<Label className='form-label' for='name'>
										First Name
									</Label>
									<Input
										type='text'
										name='name'
										id='name'
										placeholder='First Name'
										disabled={true}
										defaultValue={
											getVendorsRecords['data'].name
										}
									/>
								</Col>
								<Col md='6' sm='12' className='mb-1'>
									<Label
										className='form-label'
										for='lastname'>
										Last Name
									</Label>
									<Input
										type='text'
										name='lastname'
										id='lastname'
										placeholder='Last Name'
										disabled={true}
										defaultValue={
											getVendorsRecords['data'].lastname
										}
									/>
								</Col>
								<Col md='6' sm='12' className='mb-1'>
									<Label
										className='form-label'
										for='mobile_no'>
										Mobile No
									</Label>
									<Input
										type='number'
										name='mobile_no'
										id='mobile_no'
										placeholder='Mobile no'
										disabled={true}
										defaultValue={
											getVendorsRecords['data'].mobile_no
										}
									/>
								</Col>
								<Col md='6' sm='12' className='mb-1'>
									<Label
										className='form-label'
										for='profession'>
										Profession
									</Label>
									<Input
										type='text'
										name='profession'
										id='profession'
										placeholder='Profession'
										disabled={true}
										defaultValue={
											getVendorsRecords['data'].profession
										}
									/>
								</Col>
								<Col md='6' sm='12' className='mb-1'>
									<Label className='form-label' for='service'>
										Type of Service
									</Label>
									<Input
										type='text'
										name='services'
										id='service'
										placeholder='Service'
										disabled={true}
										defaultValue={
											getVendorsRecords['data'].services
										}
									/>
								</Col>
								<Col md='6' sm='12' className='mb-1'>
									<Label className='form-label' for='address'>
										Address
									</Label>
									<Input
										type='text'
										name='address'
										id='address'
										placeholder='Address'
										disabled={true}
										defaultValue={
											getVendorsRecords['data'].address
										}
									/>
								</Col>
								<Col sm='12'>
									<Button.Ripple
										outline
										color='secondary'
										type='cancel'
										tag={Link}
										to={'/vendor/list'}>
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
}

export default ViewVendor;
