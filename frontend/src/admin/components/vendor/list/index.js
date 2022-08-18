// ** Vendor List Component
import Table from './Table';
// ** Styles
import '@styles/react/apps/app-users.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import '../../../../components-css/userandchairman.css';

import { UncontrolledDropdown } from 'reactstrap';
import { Edit, Eye, Trash2, Tool } from 'react-feather';

import {
	VendorListAction,
	VendorDeleteAction,
} from '../../../../redux/actions/apislogic/vendorapis';
import swal from 'sweetalert';

const VendorsList = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(VendorListAction());
	}, []);

	const OneDeleteRecord = (id) => {
		swal({
			title: 'Are you sure?',
			text: 'Once deleted, you will not be able to recover this data!',
			icon: 'warning',
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				dispatch(VendorDeleteAction(id));
			} else {
				swal('Your data  is safe!');
			}
		});
	};

	const columns = [
		// {
		// 	name: 'No',
		// 	selector: (row, index) => index + 1,
		// },
		{
			id: 'name',
			name: 'First Name',
			selector: (row) => row.name,
			sortable: true,
		},
		{
			id: 'lastname',
			name: 'LastName',
			selector: (row) => row.lastname,
			sortable: true,
		},

		{
			id: 'mobile_no',
			name: 'Mobile No',
			selector: (row) => row.mobile_no,
			sortable: false,
		},
		{
			id: 'profession',
			name: 'profession',
			selector: (row) => row.profession,
			sortable: true,
		},

		{
			id: 'services',
			name: 'services',
			selector: (row) => row.services,
			sortable: true,
		},

		// {
		// 	id: 'address',
		// 	name: 'address',
		// 	selector: (row) => row.address,
		// 	sortable: false,
		// },

		{
			name: 'Actions',
			cell: (row) => {
				return (
					<div className='d-flex '>
						<UncontrolledDropdown>
							<Link
								to={`/vendor/view/${row._id}`}
								style={{ color: 'black' }}>
								<Eye size={18} />
							</Link>

							<Link to={`/vendor/edit/${row._id}`}>
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
				<Tool style={{ marginRight: '20px' }} />
				Vendor List
			</h3>

			<Table columns={columns} />
		</div>
	);
};

export default VendorsList;