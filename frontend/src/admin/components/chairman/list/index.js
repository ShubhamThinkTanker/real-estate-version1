// ** User List Component
import Table from './Table';
// ** Styles
import '@styles/react/apps/app-users.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { UncontrolledDropdown } from 'reactstrap';
import { Edit, Eye, Trash2, User, Users } from 'react-feather';
import '../../../../components-css/userandchairman.css';
import { UserDeleteAction } from '../../../../redux/actions/apislogic/userapis';
import { ChairmanListAction } from '../../../../redux/actions/apislogic/chairmanapis';
import Avatar from '@components/avatar';

const ChairmanList = () => {
	const dispatch = useDispatch();

	const OneDeleteRecord = (id) => {
		swal({
			title: 'Are you sure?',
			text: 'Once deleted, you will not be able to recover this data!',
			icon: 'warning',
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				dispatch(UserDeleteAction(id));
			} else {
				swal('Your data  is safe!');
			}
		});
	};

	useEffect(() => {
		dispatch(ChairmanListAction());
	}, []);

	// ** Renders Chairman Columns
	const renderChairman = (row) => {
		const stateNum = Math.floor(Math.random() * 6),
			states = [
				'light-success',
				'light-danger',
				'light-warning',
				'light-info',
				'light-primary',
				'light-secondary',
			],
			color = states[stateNum];
		if (row.profile_image.length) {
			return (
				<Avatar
					className='mr-1'
					width='32'
					height='32'
					img={row.profile_image}
				/>
			);
		} else {
			return (
				<Avatar
					width='32'
					height='32'
					color={color || 'primary'}
					className='mr-1'
					content={row.name || ''}
					initials
				/>
			);
		}
	};

	// ** Renders Role Columns
	const renderRole = (row) => {
		const roleObj = {
			user: {
				class: 'text-primary',
				icon: User,
			},
			chairman: {
				class: 'text-success',
				icon: Users,
			},
		};

		const Icon = roleObj[row.role] ? roleObj[row.role].icon : null;

		return (
			<span className='text-truncate text-capitalize align-middle'>
				<Icon
					size={18}
					className={`${
						roleObj[row.role] ? roleObj[row.role].class : ''
					} mr-50`}
				/>
				{row.role}
			</span>
		);
	};

	const columns = [
		{
			name: 'Name',
			minWidth: '230px',
			selector: 'name',
			sortable: true,
			cell: (row) => (
				<div className='d-flex justify-content-left align-items-center'>
					{renderChairman(row)}
					<div className='d-flex flex-column'>{row.name}</div>
				</div>
			),
		},
		{
			name: 'Chairman Email',
			minWidth: '280px',
			selector: 'email',
			cell: (row) => row.email,
			sortable: true,
		},

		{
			name: 'Mobile No',
			minWidth: '170px',
			selector: 'mobile_no',
			cell: (row) => row.mobile_no,
			sortable: false,
		},

		{
			name: 'Role',
			minWidth: '120px',
			selector: 'role',
			cell: (row) => renderRole(row),
			sortable: false,
		},

		{
			name: 'Actions',
			cell: (row) => {
				return (
					<div className='d-flex '>
						<UncontrolledDropdown>
							<Link
								to={`/chairman/view/${row._id}`}
								style={{ color: 'black' }}>
								<Eye size={18} />
							</Link>

							<Link
								to={`/chairman/edit/${row._id}`}
								style={{ color: 'black' }}>
								<Edit size={18} className='edit-btn' />
							</Link>

							<Trash2
								size={18}
								className='delete-btn'
								style={{ cursor: 'pointer' }}
								onClick={() => OneDeleteRecord(row._id)}
							/>
						</UncontrolledDropdown>
					</div>
				);
			},
		},
	];

	return (
		<div className='app-user-list'>
			<h3>
				<Users style={{ marginRight: '20px' }} />
				Chairman List
			</h3>
			<Table columns={columns} />
		</div>
	);
};

export default ChairmanList;
