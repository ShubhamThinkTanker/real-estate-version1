import { useEffect, useState } from "react";
import "@styles/react/libs/flatpickr/flatpickr.scss";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// ** Third Party Components
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
  FormGroup
} from "reactstrap";
import { UserRegisterAction } from "../../../redux/actions/apislogic/userapis";
import { USER_REGISTER_RESET } from "../../../redux/Constants/userConstants";

const AddUser = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [filesend, setFileSend] = useState();

  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile_no: "",
    gender: "",
    role: "user"
  });

  const registerRecords = useSelector((state) => state.registerUserData);
  const { error, UserRegisterData } = registerRecords;

  useEffect(() => {
    if (UserRegisterData) {
      history.push("/user/list");
    }
  }, [UserRegisterData && UserRegisterData]);

  useEffect(() => {
    dispatch({ type: USER_REGISTER_RESET });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, mobile_no, gender, role } = values;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile_no", mobile_no);
    formData.append("gender", gender);
    formData.append("role", role);
    formData.append("profile_image", filesend);
    dispatch(UserRegisterAction(formData));
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

  const [img, setImg] = useState(
    "https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default.png"
  );

  return (
    <>
      <h3>Create User</h3>
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
                    defaultValue={values.name}
                    onChange={(e) => (values["name"] = e.target.value)}
                  />
                  {error && error.name ? (
                    <div className="error">{error.name}</div>
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
                    defaultValue={values.email}
                    onChange={(e) => (values["email"] = e.target.value)}
                  />
                  {error && error.email ? (
                    <div className="error">{error.email}</div>
                  ) : null}
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
                    defaultValue={values.mobile_no}
                    onChange={(e) => (values["mobile_no"] = e.target.value)}
                  />
                  {error && error.mobile_no ? (
                    <div className="error">{error.mobile_no}</div>
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
                  defaultValue="male"
                  onChange={(e) => (values["gender"] = e.target.value)}
                  defaultChecked={values["gender"] == "male"}
                />
                <CustomInput
                  type="radio"
                  id="gender2"
                  name="gender"
                  inline
                  label="Female"
                  defaultValue="female"
                  onChange={(e) => (values["gender"] = e.target.value)}
                  defaultChecked={values["gender"] == "female"}
                />
                {error && error.gender ? (
                  <div className="error">{error.gender}</div>
                ) : null}
              </Col>

              <Col sm="12">
                <Label for="image">Profile Image</Label>
                <Media className="mb-2">
                  <img
                    className="user-avatar rounded mr-2 my-25 cursor-pointer"
                    src={img}
                    height="90"
                    width="90"
                  />
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
                          onChange={onChange}
                          accept="image/*"
                        />
                      </Button.Ripple>
                      <Button.Ripple color="secondary" outline>
                        <span
                          className="d-none d-sm-block"
                          onClick={() =>
                            setImg(
                              "https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default.png"
                            )
                          }
                        >
                          Remove
                        </span>
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
                          <CustomInput type="checkbox" id="admin-2" label="" />
                        </td>
                        <td>
                          <CustomInput type="checkbox" id="admin-3" label="" />
                        </td>
                        <td>
                          <CustomInput type="checkbox" id="admin-4" label="" />
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
    </>
  );
};

export default AddUser;
