import React, { Fragment, useState, useEffect, forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronDown ,Trash ,Plus} from 'react-feather';
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
import {
	AnnouncementListAction,
	AnnouncementMultiAction,
} from '../../../../redux/actions/apislogic/announcementapis';
import {
	datatable_per_page,
	datatable_per_raw,
} from '../../../../configs/constant_array';


const Table = ({ columns }) => {
	const dispatch = useDispatch();
		const { loading: loadinggetAllAnnouncementData, getAllAnnouncementData } = useSelector(
			(state) => state.getAllAnnouncement
		);
	
		useEffect(() => {
			dispatch(AnnouncementListAction());
		}, []);

	

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
						dispatch(AnnouncementMultiAction(deleteObj));
					} else {
						swal('Your data is safe!');
					}
			  })
			: swal('Please Select One Data');
	};

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
		dispatch(AnnouncementListAction(queryString));
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
						<div className='d-flex align-items-center mb-sm-0 mb-1 mr-1 '>
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
								to={'/announcement/add'}>
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
			<div className='app-user-list list'>
					<DataTable
						className='react-dataTable'
						columns={columns}
						data={getAllAnnouncementData?.data}
						progressPending={loadinggetAllAnnouncementData}
						noHeader
						pagination
						paginationServer
						paginationTotalRows={3}
						paginationRowsPerPageOptions={datatable_per_raw}
						onChangeRowsPerPage={handlePerRowsChange}
						onChangePage={handlePageChange}
						onSort={handleSort}
						paginationPerPage={table_data.limit}
						sortIcon={<ChevronDown size={5} />}
						selectableRowsComponent={BootstrapCheckbox}
						fixedHeader
						fixedHeaderScrollHeight='400px'
						sortServer={true}
						striped={true}
						highlightOnHover={true}
						selectableRows
						onSelectedRowsChange={(e) =>
							handelDelete(e.selectedRows)
						}
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
