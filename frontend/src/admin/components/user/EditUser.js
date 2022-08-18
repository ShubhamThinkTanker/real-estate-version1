import { Fragment, useEffect, useState } from "react";
import "@styles/react/libs/flatpickr/flatpickr.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  EditRegisterAction,
  UserGetAction
} from "../../../redux/actions/apislogic/userapis";
import { useHistory, useParams } from "react-router-dom";
import { Lock, Edit, Trash2 } from "react-feather";
import { Link } from "react-router-dom";
import {
  Col,
  CustomInput,
  Form,
  Input,
  Label,
  Media,
  Row,
  Table,
  Button,
  FormGroup,
  Card
} from "reactstrap";
import { USER_EDIT_RESET } from "../../../redux/Constants/userConstants";

const EditUser = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [filesend, setFileSend] = useState();

  const UserGetData = useSelector((state) => state.userRecords);
  var { error:errorgetUsersRecords, getUsersRecords } = UserGetData;
  
  const EditDatMessage = useSelector((state) => state.EditUSerData);
  const {error:errorUserEditData, UserEditData } = EditDatMessage;

  useEffect(() => {
    if (UserEditData) {
      history.push("/user/list");
    }
  }, [UserEditData]);

  const [user, setUser] = useState({
    name: "",
    mobile_no: "",
    email: "",
    gender: "",
    profile_image: ""
  });
  const [img, setImg] = useState();
  const renderimagefun = () => {
    if (img != null) {
      return (
        <img
          className="user-avatar rounded mr-2 my-25 cursor-pointer"
          src={img}
          height="90"
          width="90"
        />
      );
    } else {
      return (
        <img
          className="user-avatar rounded mr-2 my-25 cursor-pointer"
          src={
            user.profile_image === "Testing"
              ? "https://bootdey.com/img/Content/avatar/avatar7.png"
              : user.profile_image
          }
          height="90"
          width="90"
        />
      );
    }
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onChange = (e) => {
    setFileSend(e.target.files[0]);
    const reader = new FileReader(),
      files = e.target.files;
    reader.onload = function () {
      setImg(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  useEffect(() => {
    dispatch(UserGetAction(id));
    dispatch({type:USER_EDIT_RESET})
  }, []);

  useEffect(() => {
    setUser({
      name: getUsersRecords && getUsersRecords["data"]["name"],
      mobile_no: getUsersRecords && getUsersRecords["data"]["mobile_no"],
      email: getUsersRecords && getUsersRecords["data"]["email"],
      gender: getUsersRecords && getUsersRecords["data"]["gender"],
      profile_image: getUsersRecords && getUsersRecords["data"]["profile_image"]
    });
  }, [getUsersRecords]);

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, mobile_no, gender, profile_image } = user;
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile_no", mobile_no);
    formData.append("gender", gender);
    filesend!=undefined ?  formData.append("profile_image",filesend) : null
    dispatch(EditRegisterAction(id, formData));
  };

  return (
    <Fragment>
      <h3>Edit User</h3>
      {user && (
        <Row>
          <Col sm="12">
            <Form onSubmit={(e) => onSubmit(e)}>
              <Row>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={user.name}
                      onChange={(e) => onInputChange(e)}
                    />
                        {errorUserEditData && errorUserEditData.name ? (
                    <div className="error">{errorUserEditData.name}</div>
                  ) : null}
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={user.email}
                      onChange={(e) => onInputChange(e)}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="mobile_no">Mobile No</Label>
                    <Input
                      type="text"
                      id="mobile_no"
                      name="mobile_no"
                      placeholder="Mobile No"
                      value={user.mobile_no}
                      onChange={(e) => onInputChange(e)}
                    />
                       {errorUserEditData && errorUserEditData.mobile_no ? (
                    <div className="error">{errorUserEditData.mobile_no}</div>
                  ) : null}
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <Label for="gender">Gender</Label>
                  <br></br>
                  <CustomInput
                    type="radio"
                    id="gender1"
                    name="gender"
                    inline
                    label="Male"
                    value="male"
                    checked={user.gender === "male"}
                    onChange={(e) => onInputChange(e)}
                  />
                  <CustomInput
                    type="radio"
                    id="gender2"
                    name="gender"
                    inline
                    label="Female"
                    value="female"
                    checked={user.gender === "female"}
                    onChange={(e) => onInputChange(e)}
                  />
                    {errorUserEditData && errorUserEditData.gender ? (
                    <div className="error">{errorUserEditData.gender}</div>
                  ) : null}
                </Col>

                <Col sm="12">
                  <Label for="image">Profile Image</Label>
                  <Media className="mb-2">
                    {renderimagefun()}
                    {/* <img
                      className="user-avatar rounded mr-2 my-25 cursor-pointer"
                      src={img}
                      height="90"
                      width="90"
                    /> */}
                    <Media className="mt-50" body>
                      <div className="d-flex flex-wrap mt-1 px-0">
                        <Button.Ripple
                          id="change-img"
                          tag={Label}
                          className="mr-75 mb-0"
                          color="primary"
                        >
                          <span className="d-none d-sm-block">Upload</span>
                          <span className="d-block d-sm-none">
                            <Edit size={14} />
                          </span>
                          <Input
                            type="file"
                            hidden
                            id="change-img"
                            accept="image/*"
                            onChange={(e) => onChange(e)}
                          />
                        </Button.Ripple>
                        <Button.Ripple
                          color="secondary"
                          outline
                          onClick={() => setFileSend()}
                        >
                          <span className="d-none d-sm-block">Remove</span>
                          <span className="d-block d-sm-none">
                            <Trash2 size={14} />
                          </span>
                        </Button.Ripple>
                      </div>
                    </Media>
                  </Media>
                </Col>

                <Col sm="12">
                  <div className="permissions border mt-1">
                    <h6 className="py-1 mx-1 mb-0 font-medium-2">
                      <Lock size={18} className="mr-25" />
                      <span className="align-middle">Permissions</span>
                    </h6>
                    <Table borderless striped responsive>
                      <thead className="thead-light">
                        <tr>
                          <th>Module</th>
                          <th>Read</th>
                          <th>Write</th>
                          <th>Create</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Admin</td>
                          <td>
                            <CustomInput
                              type="checkbox"
                              id="admin-1"
                              label=""
                              defaultChecked
                            />
                          </td>
                          <td>
                            <CustomInput
                              type="checkbox"
                              id="admin-2"
                              label=""
                            />
                          </td>
                          <td>
                            <CustomInput
                              type="checkbox"
                              id="admin-3"
                              label=""
                            />
                          </td>
                          <td>
                            <CustomInput
                              type="checkbox"
                              id="admin-4"
                              label=""
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>User</td>
                          <td>
                            <CustomInput type="checkbox" id="user-1" label="" />
                          </td>
                          <td>
                            <CustomInput type="checkbox" id="user-2" label="" />
                          </td>
                          <td>
                            <CustomInput type="checkbox" id="user-3" label="" />
                          </td>
                          <td>
                            <CustomInput type="checkbox" id="user-4" label="" />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Col>
                <Col className="d-flex flex-sm-row flex-column mt-2" sm="12">
                  <Button.Ripple
                    className="mb-1 mb-sm-0 mr-0 mr-sm-1"
                    type="submit"
                    color="primary"
                  >
                    Save Changes
                  </Button.Ripple>
                  <Button.Ripple
                    color="secondary"
                    tag={Link}
                    to="/user/list"
                    outline
                  >
                    Cancel
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default EditUser;
