import React from 'react';
import BreadCrumbs from '@components/breadcrumbs';
import Table from './Table';
import { Link } from 'react-router-dom';
import { Edit, Eye, Trash2 } from 'react-feather';
import { Badge } from 'reactstrap';

const EstatestructuresList = () => {
	const columns = [
		{
			name: ' REal-Estate Name',
			// minWidth: '25%',
			selector: 'realestate_name',
			sortable: true,
			// cell: (row) => <b>{row.vehicle_no}</b>,
		},
		{
			name: 'Floor No',
			// minWidth: '25%',
			selector: 'floor_no',
			sortable: true,
			// cell: (row) => <p>{row.vehicle_type.capitalize()}</p>,
		},
		{
			name: ' Starting No',
			// minWidth: '25%',
			selector: 'start_no',
			sortable: true,
			// cell: (row) => <b>{row.vehicle_no}</b>,
		},
		{
			name: ' Ending No',
			// minWidth: '25%',
			selector: 'end_no',
			sortable: true,
			// cell: (row) => <b>{row.vehicle_no}</b>,
		},

		{
			name: 'Actions',
			// minWidth: '25%',
			cell: (row) => {
				return (
					<div className='d-inline '>
						<Link
							to={`/estatestructures/view/${row._id}`}
							className='text-primary'>
							<Eye size={18} />
						</Link>

						<Link
							to={`/estatestructures/edit/${row._id}`}
							className='text-warning mx-1'>
							<Edit size={18} />
						</Link>

						<Trash2
							className='text-danger'
							size={18}
							// onClick={() => OneDeleteRecord(row._id)}
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
				breadCrumbTitle='Estate-Structures'
				breadCrumbParent='Estate-Structures'
				breadCrumbActive='Estate-Structures List'
			/>
			<Table columns={columns} />
		</div>
	);
};

export default EstatestructuresList;
