import React from 'react';
import BreadCrumbs from '@components/breadcrumbs';
import Table from './Table';
import { Link } from 'react-router-dom';
import { Edit, Eye, Trash2 } from 'react-feather';
import { Badge } from 'reactstrap';
import { useDispatch } from 'react-redux';
import {
	VehicleDeleteRequest,
	VehicleGetAllRequest,
} from '../../../../redux/actions/vehicleActions/Index';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const VehicleList = () => {
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
				await dispatch(VehicleDeleteRequest(id));
				dispatch(VehicleGetAllRequest());
			}
		});
	};
	const columns = [
		{
			name: 'Vehicle No',
			// minWidth: '25%',
			selector: 'vehicle_no',
			sortable: true,
			cell: (row) => <b>{row.vehicle_no}</b>,
		},
		{
			name: 'Vehicle Type',
			// minWidth: '25%',
			selector: 'vehicle_type',
			sortable: true,
			// cell: (row) => <p>{row.vehicle_type.capitalize()}</p>,
		},

		{
			name: 'Sticker Status',
			// minWidth: '25%',
			selector: 'sticker_status',
			cell: (row) => {
				return (
					<Badge
						color={
							row.sticker_status === true
								? 'light-success'
								: 'light-danger'
						}
						pill>
						{row.sticker_status === true ? 'YES' : 'NO'}
					</Badge>
				);
			},
			sortable: true,
		},
		{
			name: 'Actions',
			// minWidth: '25%',
			cell: (row) => {
				return (
					<div className='d-inline '>
						<Link
							to={`/vehicle/view/${row._id}`}
							className='text-primary'>
							<Eye size={18} />
						</Link>

						<Link
							to={`/vehicle/edit/${row._id}`}
							className='text-warning mx-1'>
							<Edit size={18} />
						</Link>

						<Trash2
							className='text-danger'
							size={18}
							onClick={() => handleDeleteById(row._id)}
							style={{ cursor: 'pointer' }}
						/>
					</div>
				);
			},
		},
	];
	return (
		<div className='app-user-list'>
			<BreadCrumbs
				breadCrumbTitle='Vehicle'
				breadCrumbParent='Vehicle'
				breadCrumbActive='Vehicle List'
			/>
			<Table columns={columns} />
		</div>
	);
};

export default VehicleList;
