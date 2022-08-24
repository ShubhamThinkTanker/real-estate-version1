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
import { Edit, Eye, Trash2 } from 'react-feather';

import {
	VendorListAction,
	VendorDeleteAction,
} from '../../../../redux/actions/apislogic/vendorapis';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const VendorsList = () => {
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
				await dispatch(VendorDeleteAction(id));
				dispatch(VendorListAction());
			}
		});
	};

	const columns = [
		{
			id: 'name',
			name: 'First Name',
			minWidth: '15%',
			selector: (row) => row.name,
			sortable: true,
		},
		{
			id: 'lastname',
			name: 'Last Name',
			minWidth: '15%',
			selector: (row) => row.lastname,
			sortable: true,
		},

		{
			id: 'mobile_no',
			name: 'Mobile No',
			minWidth: '10%',
			selector: (row) => row.mobile_no,
			sortable: false,
		},
		{
			id: 'profession',
			name: 'profession',
			minWidth: '10%',
			selector: (row) => row.profession,
			sortable: true,
		},

		{
			id: 'services',
			name: 'services',
			minWidth: '20%',
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
								className='text-primary'>
								<Eye size={18} />
							</Link>

							<Link
								to={`/vendor/edit/${row._id}`}
								className='text-warning mx-1'>
								<Edit size={18} />
							</Link>
							<Trash2
								size={18}
								className='text-danger'
								style={{ cursor: 'pointer' }}
								onClick={() => handleDeleteById(row._id)}
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
				breadCrumbTitle='Vendor'
				breadCrumbParent='Vendor'
				breadCrumbActive='Vendor List'
			/>
			<Table columns={columns} />
		</div>
	);
};

export default VendorsList;
