import { useState } from 'react';
import Repeater from '@components/repeater';
import {
	Row,
	Col,
	Card,
	CardHeader,
	CardBody,
	Form,
	FormGroup,
	Label,
	Input,
	Button,
} from 'reactstrap';
import { X, Plus } from 'react-feather';

const RepeatingForm = () => {
	const [count, setCount] = useState(1);

	const increaseCount = () => {
		setCount(count + 1);
	};

	const deleteForm = (e) => {
		e.preventDefault();
		e.target.closest('form').remove();
	};

	return (
		<Card>
			<CardHeader>
				<h4 className='card-title'>Estate-Structures Forms</h4>
			</CardHeader>

			<CardBody>
				<Repeater count={count}>
					{(i) => (
						<Form key={i}>
							<Row className='justify-content-between align-items-center'>
								<Col md={4}>
									<FormGroup>
										<Label for={`item-name-${i}`}>
											Estate-Structures Name
										</Label>
										<Input
											type='text'
											id={`item-name-${i}`}
											placeholder='	Estate-Structures Name'
										/>
									</FormGroup>
								</Col>
								<Col md={2}>
									<FormGroup>
										<Label for={`cost-${i}`}>
											Floor No
										</Label>
										<Input
											type='number'
											id={`cost-${i}`}
											placeholder='No'
										/>
									</FormGroup>
								</Col>
								<Col md={2}>
									<FormGroup>
										<Label for={`quantity-${i}`}>
											Starting No
										</Label>
										<Input
											type='number'
											id={`quantity-${i}`}
											placeholder='No'
										/>
									</FormGroup>
								</Col>
								<Col md={2}>
									<FormGroup>
										<Label for={`quantity-${i}`}>
											Ending No
										</Label>
										<Input
											type='number'
											id={`quantity-${i}`}
											placeholder='No'
										/>
									</FormGroup>
								</Col>

								<Col md={2}>
									<Button.Ripple
										color='danger'
										className='text-nowrap px-1'
										onClick={deleteForm}
										outline>
										<X size={14} className='mr-50' />
										<span>Delete</span>
									</Button.Ripple>
								</Col>
								<Col sm={12}>
									<hr />
								</Col>
							</Row>
						</Form>
					)}
				</Repeater>
				<Button.Ripple
					className='btn-icon'
					color='primary'
					onClick={increaseCount}>
					<Plus size={14} />
					<span className='align-middle ml-25'>Add New</span>
				</Button.Ripple>
			</CardBody>
		</Card>
	);
};

export default RepeatingForm;
