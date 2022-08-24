// ** User List Component
import Table from './Table';
// ** Styles
import '@styles/react/apps/app-users.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Badge, UncontrolledDropdown } from 'reactstrap';
import { Edit, Eye, Trash2, User, Users } from 'react-feather';
import '../../../../components-css/userandchairman.css';
import { UserDeleteAction } from '../../../../redux/actions/apislogic/userapis';
import { ChairmanListAction } from '../../../../redux/actions/apislogic/chairmanapis';
import Avatar from '@components/avatar';
import BreadCrumbs from '@components/breadcrumbs';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const ChairmanList = () => {
	const dispatch = useDispatch();
	const handleDeleteById = (id) => {
		return MySwal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, delete it!',
			customClass: {
				confirmButton: 'btn btn-primary',
				cancelButton: 'btn btn-outline-danger ml-1',
			},
			buttonsStyling: false,
		}).then(async function (result) {
			if (result.value) {
				MySwal.fire({
					icon: 'success',
					title: 'Deleted!',
					text: 'Your Record has been deleted.',
					customClass: {
						confirmButton: 'btn btn-success',
					},
				});
				await dispatch(UserDeleteAction(id));
				dispatch(ChairmanListAction());
			}
		});
	};

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
			name: 'Full Name',
			minWidth: '18%',
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
			name: 'Email',
			minWidth: '25%',
			selector: 'email',
			cell: (row) => row.email,
			sortable: true,
		},

		{
			name: 'Mobile No',
			minWidth: '10%',
			selector: 'mobile_no',
			cell: (row) => row.mobile_no,
			sortable: false,
		},

		{
			name: 'Role',
			minWidth: '5%',
			selector: 'role',
			cell: (row) => renderRole(row),
			sortable: false,
		},

		{
			name: 'Status',
			minWidth: '5%',
			selector: 'status',
			cell: (row) => {
				return (
					<Badge
						color={
							row.status === 'active'
								? 'light-success'
								: 'light-danger'
						}
						pill>
						{row.status.toUpperCase()}
					</Badge>
				);
			},
			sortable: true,
		},

		{
			name: 'Actions',
			cell: (row) => {
				return (
					<div className='d-inline '>
						{/* <UncontrolledDropdown> */}
						<Link
							to={`/chairman/view/${row._id}`}
							className='text-primary'>
							<Eye size={18} />
						</Link>

						<Link
							to={`/chairman/edit/${row._id}`}
							className='text-warning mx-1'>
							<Edit size={18} />
						</Link>

						<Trash2
							className='text-danger'
							size={18}
							onClick={() => handleDeleteById(row._id)}
							style={{ cursor: 'pointer' }}
						/>
						{/* </UncontrolledDropdown> */}
					</div>
				);
			},
		},
	];

	return (
		<div className='app-user-list'>
			<BreadCrumbs
				breadCrumbTitle='Chairman'
				breadCrumbParent='Chairman'
				breadCrumbActive='Chairman List'
			/>
			<Table columns={columns} />
		</div>
	);
};

export default ChairmanList;
