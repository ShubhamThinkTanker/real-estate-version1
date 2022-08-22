import React, { Fragment, useState, useEffect, forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { ChevronDown, ChevronsDown, Plus, Trash } from 'react-feather';
import DataTable from 'react-data-table-component';
import swal from 'sweetalert';
import { selectThemeColors } from '@utils';
import {
	Card,
	Input,
	Row,
	Col,
	Label,
	Button,
	CardHeader,
	CardTitle,
	CardBody,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { MultiDeleteAction } from '../../../../redux/actions/apislogic/userapis';
import { ChairmanListAction } from '../../../../redux/actions/apislogic/chairmanapis';
import {
	datatable_per_page,
	datatable_per_raw,
} from '../../../../configs/constant_array';

// ** Table Header

const Table = ({ columns }) => {
	const dispatch = useDispatch();
	const {
		loading: getAllChairmanLoading,
		error: getAllChairmanError,
		getAllChairmanData,
	} = useSelector((state) => state.getAllChairman);

	// ** Chairman filter options

	const statusOptions = [
		{ value: 'active', label: 'Active' },
		{ value: 'inactive', label: 'Inactive' },
	];

	const [deletedRow, setDeletedRow] = useState([]);

	const [limit, setPerPage] = useState(datatable_per_page);
	const [sort_order, setSort_order] = useState('desc');

	const handelDelete = (selectedRow) => {
		setDeletedRow(selectedRow);
	};

	const DeleteAll = (e) => {
		deletedRow.length != 0
			? swal({
					title: 'Are you sure?',
					text: 'Once deleted, you will not be able to recover this data!',
					icon: 'warning',
					buttons: true,
					dangerMode: true,
			  }).then((willDelete) => {
					if (willDelete) {
						let multiRecordDelete = deletedRow.map(
							(ele) => ele._id
						);
						let deleteObj = {
							id: multiRecordDelete,
						};
						dispatch(MultiDeleteAction(deleteObj));
					} else {
						swal('Your data  is safe!');
					}
			  })
			: swal('Please Select One Data');
	};

	const [filter_value, setFilter_value] = useState('');
	const table_data = {
		page: 1,
		limit: limit,
		filter_value: filter_value,
		sort_order: sort_order,
		order_column: 'updated_at',
	};

	const [queryString, setQueryString] = useState(
		`page=${table_data.page}&limit=${table_data.per_page}&filter_value=${table_data.filter_value}&sort_order=${table_data.sort_order}&order_column=${table_data.order_column}`
	);

	useEffect(() => {
		dispatch(ChairmanListAction(queryString));
	}, [dispatch, queryString]);

	const handleSort = (column, sortDirection) => {
		setSort_order(sortDirection);
		tableChangeHandler({
			...table_data,
			sort_order: sortDirection,
			order_column: column.selector,
		});
	};

	const handlePageChange = (page) => {
		tableChangeHandler({ ...table_data, page: page });
	};

	const handlePerRowsChange = (newPerPage, page) => {
		setPerPage(newPerPage);
		tableChangeHandler({ ...table_data, page: page, limit: newPerPage });
	};

	const tableChangeHandler = (data) => {
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

	const handleFilter = (e) => {
		let value = e.target.value;
		tableChangeHandler({ ...table_data, filter_value: value });
		setFilter_value(value);
	};

	useEffect(() => {
		dispatch(ChairmanListAction());
	}, []);

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

	const CustomHeader = (props) => {
		const onSearch = (e) => {
			e.preventDefault();
			props.handleFilter(e);
		};

		return (
			<div className='invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75'>
				<Row>
					<Col xl='6' className='d-flex align-items-center p-0'>
						<div className='ml-1'>
							{deletedRow.length !== 0 && (
								<Button.Ripple
									color='danger'
									onClick={(e) => DeleteAll(e)}>
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
						<div className='d-flex align-items-center mb-sm-0 mb-1 mr-1 search-chairman-btn'>
							<Label className='mb-0' for='search-invoice'>
								Search:
							</Label>
							<Input
								id='search-invoice'
								className='ml-50 w-100'
								type='text'
								value={props.value}
								onChange={onSearch}
								placeholder='Search'
							/>
						</div>
						<div>
							<Button.Ripple
								color='primary'
								tag={Link}
								to={'/chairman/add'}>
								<Plus size={16} />
								<span className='align-middle ml-1'>
									Create
								</span>
							</Button.Ripple>
						</div>
					</Col>
				</Row>
			</div>
		);
	};

	return (
		<Fragment>
			<Card>
				<CardHeader>
					<CardTitle tag='h4'>Search Filter</CardTitle>
				</CardHeader>
				<CardBody>
					<Row>
						<Col md='4'>
							<Select
								theme={selectThemeColors}
								isClearable={false}
								className='react-select'
								classNamePrefix='select'
								options={statusOptions}
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
						onSelectedRowsChange={(e) =>
							handelDelete(e.selectedRows)
						}
						columns={columns}
						data={getAllChairmanData?.data.Chairman_Details}
						paginationServer
						paginationRowsPerPageOptions={datatable_per_raw}
						paginationPerPage={table_data.limit}
						paginationTotalRows={
							getAllChairmanData?.data.TotalCount
						}
						sortIcon={<ChevronDown size={5} />}
						selectableRowsComponent={BootstrapCheckbox}
						onChangeRowsPerPage={handlePerRowsChange}
						onChangePage={handlePageChange}
						onSort={handleSort}
						fixedHeader
						// fixedHeaderScrollHeight='400px'
						sortServer={true}
						striped={true}
						progressPending={getAllChairmanLoading}
						subHeaderComponent={
							<CustomHeader
								value={filter_value}
								handleFilter={handleFilter}
							/>
						}
						subHeader
						// paginationComponent={CustomPagination}
					/>
				</div>
			</Card>
		</Fragment>
	);
};

export default Table;
