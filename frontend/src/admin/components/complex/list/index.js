// ** User List Component
import Table from './Table';
// ** Styles
import '@styles/react/apps/app-users.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BreadCrumbs from '@components/breadcrumbs';
import { UncontrolledDropdown } from 'reactstrap';
import { Edit, Eye, Home, Trash2 } from 'react-feather';
import '../../../../components-css/userandchairman.css';

import {
	ComplexListAction,
	ComplexDeleteAction,
} from '../../../../redux/actions/apislogic/complexapi';

const UsersList = () => {
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
				dispatch(ComplexDeleteAction(id));
			} else {
				swal('Your data  is safe!');
			}
		});
	};

	useEffect(() => {
		dispatch(ComplexListAction());
	}, []);

	const columns = [
		{
			name: 'Realestate Name',
			minWidth: '20%',
			selector: 'realestate_name',
			cell: (row) => row.realestate_name,
			sortable: true,
		},

		{
			name: 'Address',
			minWidth: '20%',
			selector: 'address',
			cell: (row) => row.address,
			sortable: true,
		},
		{
			name: 'City',
			minWidth: '10%',
			selector: 'city',
			cell: (row) => row.city,
			sortable: false,
		},
		{
			name: 'State',
			minWidth: '10%',
			selector: 'state',
			cell: (row) => row.state,
			sortable: false,
		},

		{
			name: 'Country',
			minWidth: '10%',
			selector: 'country',
			cell: (row) => row.country,
			sortable: false,
		},

		{
			name: 'Actions',
			cell: (row) => {
				return (
					<div className='d-flex '>
						{/* <UncontrolledDropdown> */}
						<Link
							to={`/complex/view/${row._id}`}
							className='text-primary'>
							<Eye size={18} />
						</Link>

						<Link
							to={`/complex/edit/${row._id}`}
							className='text-warning mx-1'>
							<Edit size={18} />
						</Link>

						<Trash2
							size={18}
							className='text-danger'
							style={{ cursor: 'pointer' }}
							onClick={() => OneDeleteRecord(row._id)}
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
				breadCrumbTitle='Real Estate'
				breadCrumbParent='Real Estate'
				breadCrumbActive='Real Estate List'
			/>
			<Table columns={columns} />
		</div>
	);
};

export default UsersList;
