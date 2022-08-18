import { Fragment, useEffect } from 'react';
import '@styles/react/libs/flatpickr/flatpickr.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Home } from "react-feather";
import {
	Col,
	Form,
	Input,
	Label,
	Row,
	Button,
	Card,
	CardBody,
	FormGroup,
	InputGroup,
  InputGroupText,
  InputGroupAddon
} from 'reactstrap';
import { ComplexGetAction } from '../../../redux/actions/apislogic/complexapi';

const ViewComplex = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(ComplexGetAction(id));
	}, []);

	const getComplexRecordList = useSelector(
		(state) => state.getidComplexRecord
	);
	const { getComplexRecord } = getComplexRecordList;

	return (
		<Fragment>
			<h3>View Complex</h3>
			{getComplexRecord && (
				<Card>
					<CardBody>
						<Form>
							<Row>
								<Col md='6' sm='12'>
								<FormGroup className="mb-2">
									<Label className='form-label' for='name'>
										Realestate Name
									</Label>
									<Input
										type='text'
										name='realestate_name'
										id='realestate_name'
										placeholder='Realestate Name'
										disabled={true}
										defaultValue={
											getComplexRecord.data
												.realestate_name
										}
									/>
									</FormGroup>
								</Col>

								<Col md='6' sm='12'>
								<FormGroup className="mb-2">
									<Label
										className='form-label'
										for='mobileno'>
										Country
									</Label>
									<Input
										type='select'
										name='country'
										disabled={true}
										defaultValue={
											getComplexRecord.data.country
										}>
										<option value=''>Select Country</option>
										<option value='india'>India</option>
									</Input>
									</FormGroup>
								</Col>

								<Col md='6' sm='12'>
								<FormGroup className="mb-2">
									<Label
										className='form-label'
										for='profession'>
										State
									</Label>
									<Input
										type='select'
										name='state'
										disabled={true}
										defaultValue={
											getComplexRecord.data.state
										}>
										<option value=''>Select State</option>
										<option value='gujarat'>Gujarat</option>
									</Input>
									</FormGroup>
								</Col>

								<Col md='6' sm='12'>
								<FormGroup className="mb-2">
									<Label className='form-label' for='service'>
										City
									</Label>
									<Input
										type='select'
										name='city'
										disabled={true}
										defaultValue={
											getComplexRecord.data.city
										}>
										<option value=''>Select City</option>
										<option value='ahmedabad'>
											Ahmedabad
										</option>
										<option value='surat'>Surat</option>
										<option value='rajkot'>Rajkot</option>
									</Input>
									</FormGroup>
								</Col>

								<Col md='6' sm='12'>
								<FormGroup className="mb-2">
									<Label
										className='form-label'
										for='lastname'>
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
										rows='2'
										placeholder='Address'
										disabled={true}
										defaultValue={
											getComplexRecord.data.address
										}
									/>
									</InputGroup>
									</FormGroup>
								</Col>

								<Col sm='12'>
									<Button.Ripple
										color='secondary'
										tag={Link}
										to='/complex/list'
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

export default ViewComplex;
