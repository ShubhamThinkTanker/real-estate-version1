// ** Vendor List Component
import Table from './Table';
// ** Styles
import '@styles/react/apps/app-users.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import '../../../../components-css/userandchairman.css';
import BreadCrumbs from '@components/breadcrumbs';
import { UncontrolledDropdown } from 'reactstrap';
import { Edit, Eye, Trash2, Speaker } from 'react-feather';

import {
	VendorListAction,
	VendorDeleteAction,
} from '../../../../redux/actions/apislogic/vendorapis';
import swal from 'sweetalert';

const AnnouncementList = () => {
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(VendorListAction());
	// }, []);

	// const OneDeleteRecord = (id) => {
	// 	swal({
	// 		title: 'Are you sure?',
	// 		text: 'Once deleted, you will not be able to recover this data!',
	// 		icon: 'warning',
	// 		buttons: true,
	// 		dangerMode: true,
	// 	}).then((willDelete) => {
	// 		if (willDelete) {
	// 			dispatch(VendorDeleteAction(id));
	// 		} else {
	// 			swal('Your data  is safe!');
	// 		}
	// 	});
	// };

	const columns = [
		// {
		// 	name: 'No',
		// 	selector: (row, index) => index + 1,
		// },
		{
			id: 'image',
			name: 'Image',
			selector: (row) => row.image,
			sortable: false,
		},
		{
			id: 'title',
			name: 'Title',
			selector: (row) => row.title,
			sortable: true,
		},
		{
			id: ' society',
			name: ' Society Name',
			selector: (row) => row.society,
			sortable: true,
		},
		{
			id: 'description',
			name: 'Description',
			selector: (row) => row.description,
			sortable: true,
		},

		{
			id: ' from_date',
			name: 'Starting Date',
			selector: (row) => row.from_date,
			sortable: true,
		},

		{
			id: 'to_date',
			name: 'Ending Date',
			selector: (row) => row.to_date,
			sortable: true,
		},

		{
			name: 'Actions',
			cell: (row) => {
				return (
					<div className='d-flex '>
						<UncontrolledDropdown>
							<Link
								to={`/announcement/view/${row._id}`}
								className='text-primary'>
								<Eye size={18} />
							</Link>

							<Link to={`/announcement/edit/${row._id}`}
							className='text-warning mx-1'>
							<Edit size={18} />
							</Link>
							<Trash2
								size={18}
								className='text-danger'
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
			<BreadCrumbs
				breadCrumbTitle='Announcement'
				breadCrumbParent='Announcement'
				breadCrumbActive='Announcement List'
			/>
			<Table columns={columns} />
		</div>
		// <div className='app-user-list'>
		// 	<h2>
		// 		{/* <Speaker style={{ marginRight: '20px' }} /> */}
		// 		Announcement List
		// 	</h2>

		// 	<Table columns={columns} />
		// </div>
	);
};

export default AnnouncementList;
