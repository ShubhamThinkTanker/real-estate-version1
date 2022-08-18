import React, { Fragment, useState, useEffect, forwardRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { ChevronDown } from "react-feather";
import DataTable from "react-data-table-component";
import swal from "sweetalert";
import { selectThemeColors } from "@utils";
// CALL IT ONCE IN YOUR APP
import {
  Card,
  Input,
  Row,
  Col,
  Label,
  Button,
  CardHeader,
  CardTitle,
  CardBody
} from "reactstrap";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";

import { Link } from "react-router-dom";
import {
  MultiDeleteAction,
  UserListAction
} from "../../../../redux/actions/apislogic/userapis";

import { User_Data_Message } from "../../../../configs/Toast_Message";
import {
  datatable_per_raw,
  datatable_per_page
} from "../../../../configs/constant_array";

// ** Table Header

const CustomHeader = (props) => {
  const onSearch = (e) => {
    e.preventDefault();
    props.handleFilter(e);
  };

  return (
    <div className="invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75">
      <Row>
        <Col xl="6" className="d-flex align-items-center p-0"></Col>
        <Col
          xl="6"
          className="d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1"
        >
          <div className="d-flex align-items-center mb-sm-0 mb-1 mr-1 search-chairman-btn">
            <Label className="mb-0" for="search-invoice">
              Search:
            </Label>
            <Input
              id="search-invoice"
              className="ml-50 w-100"
              type="text"
              value={props.value}
              onChange={onSearch}
            />
          </div>
          <div>
            <Button.Ripple color="primary" tag={Link} to={"/user/add"}>
              Create User
            </Button.Ripple>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const Table = ({ columns }) => {
  const dispatch = useDispatch();
  const {
    loading: getAllUserLoading,
    error: getAllUsermanError,
    getAllUserData
  } = useSelector((state) => state.getAllUser);

  useEffect(() => {
    dispatch(UserListAction());
  }, []);

  // ** Chairman filter options

  const statusOptions = [
    { value: "", label: "Select Status", number: 0 },
    { value: "pending", label: "Pending", number: 1 },
    { value: "active", label: "Active", number: 2 },
    { value: "inactive", label: "Inactive", number: 3 }
  ];

  const [deletedRow, setDeletedRow] = useState([]);

  const handelDelete = (selectedRow) => {
    setDeletedRow(selectedRow);
  };

  {
    User_Data_Message(setDeletedRow);
  }

  const DeleteAll = (e) => {
    deletedRow.length != 0
      ? swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this data!",
          icon: "warning",
          buttons: true,
          dangerMode: true
        }).then((willDelete) => {
          if (willDelete) {
            let multiRecordDelete = deletedRow.map((ele) => ele._id);
            let deleteObj = {
              id: multiRecordDelete
            };
            dispatch(MultiDeleteAction(deleteObj));
          } else {
            swal("Your data  is safe!");
          }
        })
      : swal("Please Select One Data");
  };

  const [perPage, setPerPage] = useState(datatable_per_page);

  const [sort_order, setSort_order] = useState("desc");
  const [filter_value, setFilter_value] = useState("");

  const table_data = {
    page: 1,
    limit: perPage,
    filter_value: filter_value,
    sort_order: sort_order,
    order_column: "updated_at"
  };

  const [queryString, setQueryString] = useState(
    `page=${table_data.page}&limit=${table_data.limit}&filter_value=${table_data.filter_value}&sort_order=${table_data.sort_order}&order_column=${table_data.order_column}`
  );

  useEffect(() => {
    dispatch(UserListAction(queryString));
  }, [dispatch, queryString]);

  const tableChangeHandler = (data) => {
    let queryStr = Object.keys(data)
      .map((key) => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
      })
      .join("&");
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
      order_column: column.selector
    });
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
    tableChangeHandler({ ...table_data, page, limit: newPerPage });
  };

  const handlePageChange = (page) => {
    tableChangeHandler({ ...table_data, page });
  };

  const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        ref={ref}
        {...rest}
      />
      <label className="custom-control-label" onClick={onClick} />
    </div>
  ));

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Search Filter</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="4">
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className="react-select"
                classNamePrefix="select"
                options={statusOptions}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>
        <div className="app-user-list list">
          <div className="btn-delete">
            {deletedRow.length != 0 ? (
              <Button.Ripple color="danger" onClick={(e) => DeleteAll(e)}>
                Delete
              </Button.Ripple>
            ) : null}
          </div>
          <DataTable
            columns={columns}
            data={getAllUserData?.data.User_Details}
            progressPending={getAllUserLoading}
            noHeader
            pagination
            paginationServer
            paginationTotalRows={getAllUserData?.data.TotalCount}
            paginationRowsPerPageOptions={datatable_per_raw}
            onChangeRowsPerPage={handlePerRowsChange}
            onChangePage={handlePageChange}
            onSort={handleSort}
            paginationPerPage={table_data.limit}
            sortIcon={<ChevronDown size={5} />}
            selectableRowsComponent={BootstrapCheckbox}
            fixedHeader
            fixedHeaderScrollHeight="400px"
            sortServer={true}
            striped={true}
            highlightOnHover={true}
            selectableRows
            onSelectedRowsChange={(e) => handelDelete(e.selectedRows)}
            subHeaderComponent={
              <CustomHeader value={filter_value} handleFilter={handleFilter} />
            }
            subHeader
          />
        </div>
      </Card>
    </Fragment>
  );
};

export default Table;
