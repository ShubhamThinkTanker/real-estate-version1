import React, { Fragment, useState, useEffect, forwardRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronDown } from 'react-feather';
import DataTable from 'react-data-table-component';
import swal from 'sweetalert';
import { Card, Input, Row, Col, Label, Button } from 'reactstrap';

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss';
import '@styles/react/libs/tables/react-dataTable-component.scss';

import { Link } from 'react-router-dom';
import { ComplexMultiAction } from '../../../../redux/actions/apislogic/complexapi';
import {
	datatable_per_page,
	datatable_per_raw,
} from '../../../../configs/constant_array';
import { Complex_Data_Message } from '../../../../configs/Toast_Message';
import { ComplexListAction } from '../../../../redux/actions/apislogic/complexapi';

// ** Table Header

const CustomHeader = (props) => {
	const onSearch = (e) => {
		e.preventDefault();
		props.handleFilter(e);
	};

	return (
		<div className='invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75'>
			<Row>
				<Col xl='6' className='d-flex align-items-center p-0'></Col>
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
						/>
					</div>
					<div>
						<Button.Ripple
							color='primary'
							tag={Link}
							to={'/complex/add'}>
							Create
						</Button.Ripple>
					</div>
				</Col>
			</Row>
		</div>
	);
};

const Table = ({ columns }) => {
	const dispatch = useDispatch();

	const { loading: getAllComplexLoading, getAllComplexData } = useSelector(
		(state) => state.getAllComplexRecord
	);
	useEffect(() => {
		dispatch(ComplexListAction());
	}, []);

	// Chairman Filter

	const [deletedRow, setDeletedRow] = useState([]);
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
						dispatch(ComplexMultiAction(deleteObj));
					} else {
						swal('Your data  is safe!');
					}
			  })
			: swal('Please Select One Data');
	};
	{
		Complex_Data_Message(setDeletedRow);
	}
	const [perPage, setPerPage] = useState(datatable_per_page);

	const [sort_order, setSort_order] = useState('desc');
	const [filter_value, setFilter_value] = useState('');

	const table_data = {
		page: 1,
		limit: perPage,
		filter_value: filter_value,
		sort_order: sort_order,
		order_column: 'updated_at',
	};

	const [queryString, setQueryString] = useState(
		`page=${table_data.page}&limit=${table_data.per_page}&filter_value=${table_data.filter_value}&sort_order=${table_data.sort_order}&order_column=${table_data.order_column}`
	);

	useEffect(() => {
		dispatch(ComplexListAction(queryString));
	}, [dispatch, queryString]);

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

	const handleSort = (column, sortDirection) => {
		setSort_order(sortDirection);
		tableChangeHandler({
			...table_data,
			sort_order: sortDirection,
		});
	};

	const handlePerRowsChange = async (newPerPage, page) => {
		setPerPage(newPerPage);
		tableChangeHandler({ ...table_data, page, perPage: newPerPage });
	};

	const handlePageChange = (page) => {
		tableChangeHandler({ ...table_data, page });
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

	return (
		<Fragment>
			<Card>
				<div className='app-user-list list'>
					<div className='btn-delete'>
						{deletedRow.length != 0 ? (
							<Button.Ripple
								color='danger'
								onClick={(e) => DeleteAll(e)}>
								Delete
							</Button.Ripple>
						) : null}
					</div>
					<DataTable
						noHeader
						pagination
						selectableRows
						onSelectedRowsChange={(e) =>
							handelDelete(e.selectedRows)
						}
						columns={columns}
						data={getAllComplexData?.data}
						paginationServer
						paginationRowsPerPageOptions={datatable_per_raw}
						paginationPerPage={table_data.limit}
						paginationTotalRows={3}
						sortIcon={<ChevronDown size={5} />}
						selectableRowsComponent={BootstrapCheckbox}
						onChangeRowsPerPage={handlePerRowsChange}
						onChangePage={handlePageChange}
						onSort={handleSort}
						highlightOnHover={true}
						fixedHeader
						fixedHeaderScrollHeight='400px'
						sortServer={true}
						striped={true}
						progressPending={getAllComplexLoading}
						subHeaderComponent={
							<CustomHeader
								value={filter_value}
								handleFilter={handleFilter}
							/>
						}
						subHeader
					/>
				</div>
			</Card>
		</Fragment>
	);
};

export default Table;
