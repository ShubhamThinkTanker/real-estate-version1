// ** User List Component
import Table from './Table';
// ** Styles
import '@styles/react/apps/app-users.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

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
			minWidth: '200px',
			selector: 'realestate_name',
			cell: (row) => row.realestate_name,
			sortable: true,
		},
		// {
		//   name: "Address",
		//   minWidth: "240px",
		//   selector: "address",
		//   cell: (row) => row.address,
		//   sortable: true
		// },

		{
			name: 'Country',
			minWidth: '100px',
			selector: 'country',
			cell: (row) => row.country,
			sortable: false,
		},

		{
			name: 'State',
			minWidth: '100px',
			selector: 'state',
			cell: (row) => row.state,
			sortable: false,
		},

		{
			name: 'City',
			minWidth: '100px',
			selector: 'city',
			cell: (row) => row.city,
			sortable: false,
		},

		{
			name: 'Actions',
			cell: (row) => {
				return (
					<div className='d-flex '>
						<UncontrolledDropdown>
							<Link
								to={`/complex/view/${row._id}`}
								style={{ color: 'black' }}>
								<Eye size={18} />
							</Link>

							<Link
								to={`/complex/edit/${row._id}`}
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
				<Home style={{ marginRight: '20px' }} />
				Realestate List
			</h3>
			<Table columns={columns} />
		</div>
	);
};

export default UsersList;
