import React, { forwardRef, Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Input,
	Label,
	Row,
} from 'reactstrap';
import {
	VehicleGetAllRequest,
	VehicleMultipleDeleteRequest,
} from '../../../../redux/actions/vehicleActions/Index';
import Select from 'react-select';
import DataTable from 'react-data-table-component';
import { selectThemeColors } from '@utils';
import {
	datatable_per_page,
	datatable_per_raw,
} from '../../../../configs/constant_array';
import { ChevronDown, Plus, Trash } from 'react-feather';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const CustomHeader = ({
	setTableData,
	tableData,
	checkedData,
	handleAllDeleteButton,
}) => {
	const handleSearchInputChange = (e) => {
		setTableData({ ...tableData, filter_value: e.target.value });
	};

	return (
		<div className='invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75'>
			<Row>
				<Col xl='6' className='d-flex align-items-center p-0'>
					<div className='ml-1'>
						{checkedData.length !== 0 && (
							<Button.Ripple
								color='danger'
								onClick={handleAllDeleteButton}>
								<Trash size={16} />
								<span className='align-middle ml-1'>
									Delete
								</span>
							</Button.Ripple>
						)}
					</div>
				</Col>
				<Col
					xl='6'
					className='d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1'>
					<div className='d-flex align-items-center mb-sm-0 mb-1 mr-1'>
						<Label className='mb-0' for='search-invoice'>
							Search:
						</Label>
						<Input
							id='search-invoice'
							className='ml-50 w-100'
							type='text'
							value={tableData.filter_value}
							onChange={handleSearchInputChange}
							placeholder='Search'
						/>
					</div>
					<div>
						<Button.Ripple
							color='primary'
							tag={Link}
							to={'/vehicle/create'}>
							<Plus size={16} />
							<span className='align-middle ml-1'>Create</span>
						</Button.Ripple>
					</div>
				</Col>
			</Row>
		</div>
	);
};

const Table = ({ columns }) => {
	const dispatch = useDispatch();
	const { data, loading, error } = useSelector((state) => state?.vehicle);
	const [checkedData, setCheckedData] = useState([]);
	const [tableData, setTableData] = useState({
		page: 1,
		limit: datatable_per_page,
		filter_value: '',
		sort_order: 'desc',
		order_column: '',
	});

	const [queryString, setQueryString] = useState(
		`page=${tableData.page}&limit=${tableData.per_page}&filter_value=${tableData.filter_value}&sort_order=${tableData.sort_order}&order_column=${tableData.order_column}`
	);
	const stickerOptions = [
		{ value: 'true', label: 'YES' },
		{ value: 'false', label: 'NO' },
	];
	const vehicleTypesOptions = [
		{ value: 'car', label: 'CAR' },
		{ value: 'bike', label: 'BIKE' },
		{ value: 'scooty', label: 'SCOOTY' },
		{ value: 'truck', label: 'TRUCK' },
		{ value: 'bus', label: 'BUS' },
	];
	const handleMultipleDetele = (e) => {
		setCheckedData(e.selectedRows);
	};

	const handleSort = (column, sortDirection) => {
		setTableData({
			...tableData,
			sort_order: sortDirection,
			order_column: column.selector,
		});
	};

	const handlePageChange = (page) => {
		setTableData({
			...tableData,
			page: page,
		});
	};

	const handlePerRowsChange = (newPerPage, page) => {
		setTableData({
			...tableData,
			page: page,
			limit: newPerPage,
		});
	};

	const handleQueryChange = (data) => {
		let queryStr = Object.keys(data)
			.map((key) => {
				return (
					encodeURIComponent(key) +
					'=' +
					encodeURIComponent(data[key])
				);
			})
			.join('&');
		setQueryString(queryStr);
	};

	const handleAllDeleteButton = (e) => {
		e.preventDefault();
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
				await dispatch(VehicleMultipleDeleteRequest(checkedData));
				dispatch(VehicleGetAllRequest());
			}
		});
	};

	const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
		<div className='custom-control custom-checkbox'>
			<input
				type='checkbox'
				className='custom-control-input'
				ref={ref}
				{...rest}
			/>
			<label className='custom-control-label' onClick={onClick} />
		</div>
	));

	useEffect(() => {
		handleQueryChange(tableData);
	}, [tableData]);

	useEffect(() => {
		dispatch(VehicleGetAllRequest(queryString));
	}, [dispatch, queryString]);

	return (
		<Fragment>
			<Card>
				<CardHeader>
					<CardTitle tag='h4'>Search Filter</CardTitle>
				</CardHeader>
				<CardBody>
					<Row>
						<Col md='3'>
							<Select
								theme={selectThemeColors}
								isClearable={true}
								className='react-select'
								classNamePrefix='select'
								options={stickerOptions}
							/>
						</Col>
						<Col md='3'>
							<Select
								theme={selectThemeColors}
								isClearable={true}
								className='react-select'
								classNamePrefix='select'
								options={vehicleTypesOptions}
							/>
						</Col>
					</Row>
				</CardBody>
			</Card>

			<Card>
				<div className='app-user-list list'>
					<DataTable
						className='react-dataTable'
						noHeader
						pagination
						selectableRows
						onSelectedRowsChange={handleMultipleDetele}
						columns={columns}
						data={data?.data?.Vehicle_Details}
						paginationServer
						paginationRowsPerPageOptions={datatable_per_raw}
						paginationPerPage={tableData.limit}
						paginationTotalRows={data?.data?.TotalCount}
						sortIcon={<ChevronDown size={5} />}
						selectableRowsComponent={BootstrapCheckbox}
						onChangeRowsPerPage={handlePerRowsChange}
						onChangePage={handlePageChange}
						onSort={handleSort}
						fixedHeader
						sortServer={true}
						striped={true}
						subHeaderComponent={
							<CustomHeader
								tableData={tableData}
								setTableData={setTableData}
								checkedData={checkedData}
								handleAllDeleteButton={handleAllDeleteButton}
							/>
						}
						loading={loading}
						subHeader
					/>
				</div>
			</Card>
		</Fragment>
	);
};

export default Table;
