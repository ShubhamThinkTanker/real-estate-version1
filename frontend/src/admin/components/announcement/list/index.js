// ** Announcement List Component
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
	AnnouncementListAction,		// <div className='d-flex justify-content-left align-items-center'>
	// 	{renderAnnouncement(row)}
	// 	<div className='d-flex flex-column'>{row.title}</div>
	// </div>
// ),
	AnnouncementDeleteAction,
} from '../../../../redux/actions/apislogic/announcementapis';
import swal from 'sweetalert';

const AnnouncementList = () => {
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
				dispatch(AnnouncementDeleteAction(id));
			} else {
				swal('Your data  is safe!');
			}
		});
	};

	useEffect(() => {
		dispatch(AnnouncementListAction());
	}, []);

	// const renderAnnouncement = (row) => {
	// 	const stateNum = Math.floor(Math.random() * 6),
	// 		states = [
	// 			'light-success',
	// 			'light-danger',
	// 			'light-warning',
	// 			'light-info',
	// 			'light-primary',
	// 			'light-secondary',
	// 		],
	// 		color = states[stateNum];
	// 	if (row.image.length) {
	// 		return (
	// 			<Avatar
	// 				className='mr-1'
	// 				width='32'
	// 				height='32'
	// 				img={row.image}
	// 			/>
	// 		);
	// 	} else {
	// 		return (
	// 			<Avatar
	// 				width='32'
	// 				height='32'
	// 				color={color || 'primary'}
	// 				className='mr-1'
	// 				content={row.title || ''}
	// 				initials
	// 			/>
	// 		);
	// 	}
	// };

	const columns = [
		{
			name: 'Title',
			minWidth: '15%',
			selector: 'title',
			cell: (row) => row.title,
	     	sortable: true,
			// <div className='d-flex justify-content-left align-items-center'>
			// 	{renderAnnouncement(row)}
			// 	<div className='d-flex flex-column'>{row.title}</div>
			// </div>
			// ),
			sortable: true,
		},

		{
			name: 'Description',
			minWidth: '15%',
			selector: 'description',
			cell: (row) => row.description,
			sortable: true,
		},
		{
			name: 'start date',
			minWidth: '15%',
			selector: 'start_date',
			cell: (row) => row.start_date,
			sortable: true,
		},
		{
			name: 'end date',
			minWidth: '15%',
			selector: 'end_date',
			cell: (row) => row.end_date,
			sortable: true,
		},
		{
			name: 'location',
			minWidth: '15%',
			selector: 'location',
			cell: (row) => row.location,
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

							<Link
								to={`/announcement/edit/${row._id}`}
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
