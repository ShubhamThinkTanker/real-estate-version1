import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Media,
  Label,
  Row,
  Col,
  Input,
  FormGroup,
  Alert,
  Form,
  Card,
  CardBody,
  Nav, NavItem, NavLink, TabContent, TabPane, InputGroup, InputGroupText, InputGroupAddon
} from "reactstrap";
import { userdatas } from "../../localstorage/localdata";
import { EditRegisterAction } from "../../redux/actions/apislogic/userapis";
import { toast } from "react-toastify";
import { UPDATE_PROFILE_RESET, USER_EDIT_RESET } from "../../redux/Constants/userConstants";
import BreadCrumbs from "../../@core/components/breadcrumbs";
import { User, Lock } from 'react-feather'
// import BreadCrumbs from '../../../@core/components/breadcrumbs';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('1')

  // ** Function to toggle tabs
  const toggle = tab => setActiveTab(tab)

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    mobile_no: "",
    profile_image: "",
    gender: "",
    _id: "",
  });
  const [sendimage, setimage] = useState();
  const { name, mobile_no, email, profile_image, address, country, state, city, zipcode, _id } = user;

  const [profileimage, setprofileimg] = useState();

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onChange = (e) => {
    setimage(e.target.files[0]);
    const reader = new FileReader(),
      files = e.target.files;
    reader.onload = function () {
      setprofileimg(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile_no", mobile_no);
    formData.append("address", address);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("zipcode", zipcode)
    sendimage != undefined ? formData.append("profile_image", sendimage) : null;
    dispatch(EditRegisterAction(_id, formData, userdatas.Token));
  };

  const EditDatMessage = useSelector((state) => state.EditUSerData);
  const { error: errorUserEditData, UserEditData } = EditDatMessage;
  // console.log(UserEditData, "SET NEW");
  useEffect(() => {
    setUser(userdatas.User_Details);
    if (UserEditData) {
      toast.error("Profile updated successfully!", {
        className: "toast-success-btn",
      });
      dispatch({ type: UPDATE_PROFILE_RESET });
      dispatch({ type: USER_EDIT_RESET });
      // localStorage.setItem("userData")
    }
  }, [UserEditData]);

  const renderimagefun = () => {
    if (profileimage != null) {
      return (
        <img
          className="user-avatar rounded mr-2 my-25 cursor-pointer"
          src={profileimage}
          height="90"
          width="90"
        />
      );
    } else {
      return (
        <img
          className="user-avatar rounded mr-2 my-25 cursor-pointer"
          src={
            user.profile_image === undefined
              ? "https://bootdey.com/img/Content/avatar/avatar7.png"
              : user.profile_image
          }
          height="90"
          width="90"
        />
      );
    }
  };

  return (
    <>
      <div>

        <BreadCrumbs
          breadCrumbTitle='Account Setting '
          breadCrumbActive='Account Setting'
        />


        <Nav pills>
          <NavItem>
            <NavLink active={activeTab === '1'} onClick={() => toggle('1')}>
              <User size={14} />
              <span className='align-middle d-none d-sm-block'>Account</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={activeTab === '2'} onClick={() => toggle('2')}>
              {/* <LockIcon size={14} /> */}
              <span className='align-middle d-none d-sm-block'>Security</span>
            </NavLink>
          </NavItem>
        </Nav>
        <Card>
          <CardBody className='pt-2'>
            <TabContent activeTab={activeTab}>
              {/* Profile Details */}
              <TabPane tabId='1'>
                <Card>
                  <CardBody>
                    <h3>Profile Details</h3>
                    <hr />
                    <Fragment>

                      <Form className="mt-2" onSubmit={(e) => onSubmit(e)}>
                        <Label for="username">Profile Image</Label>
                        <Media>
                          <Media className="mr-25" left>
                            {renderimagefun()}
                          </Media>

                          <Media className="mt-75 ml-1" body>
                            <Button.Ripple
                              tag={Label}
                              className="mr-75"
                              size="sm"
                              color="primary"
                            >
                              Upload
                              <Input type="file" onChange={onChange} hidden accept="image/*" />
                            </Button.Ripple>
                            <Button.Ripple
                              tag={Label}
                              className="mr-75"
                              size="sm"
                              color="secondary"
                              outline
                              onClick={() => setprofileimg(null)}
                            >
                              Remove
                            </Button.Ripple>
                          </Media>
                        </Media>

                        <Row>
                          <Col sm="6">
                            <FormGroup>
                              <Label for="name">Name</Label>
                              <Input
                                className="form-control"
                                name="name"
                                value={name}
                                onChange={(e) => onInputChange(e)}
                              />
                            </FormGroup>
                          </Col>

                          <Col sm="6">
                            <FormGroup>
                              <Label for="email">Email</Label>
                              <Input
                                className="form-control"
                                name="email"
                                value={email}

                              />
                            </FormGroup>
                          </Col>

                          <Col sm="6">
                            <FormGroup>
                              <Label for="mobile_no">Mobile No</Label>
                              <Input
                                className="form-control"
                                name="mobile_no"
                                value={mobile_no}
                                onChange={(e) => onInputChange(e)}
                              />
                            </FormGroup>
                          </Col>

                          <Col sm="6">
                            <FormGroup>
                              <Label for="address">Address</Label>
                              <Input
                                className="form-control"
                                name="address"
                                value={address}
                                onChange={(e) => onInputChange(e)}
                              />
                            </FormGroup>
                          </Col>

                          <Col sm="6">
                            <FormGroup>
                              <Label for="country">Country</Label>
                              <Input
                                className="form-control"
                                name="country"
                                value={country}
                                onChange={(e) => onInputChange(e)}
                              />
                            </FormGroup>
                          </Col>

                          <Col sm="6">
                            <FormGroup>
                              <Label for="state">State</Label>
                              <Input
                                className="form-control"
                                name="state"
                                value={state}
                                onChange={(e) => onInputChange(e)}
                              />
                            </FormGroup>
                          </Col>

                          <Col sm="6">
                            <FormGroup>
                              <Label for="city">City</Label>
                              <Input
                                className="form-control"
                                name="city"
                                value={city}
                                onChange={(e) => onInputChange(e)}
                              />
                            </FormGroup>
                          </Col>

                          <Col sm="6">
                            <FormGroup>
                              <Label for="zipcode">Zip Code</Label>
                              <Input
                                className="form-control"
                                name="zipcode"
                                value={zipcode}
                                onChange={(e) => onInputChange(e)}
                              />
                            </FormGroup>
                          </Col>

                          <Col className="mt-2" sm="12">
                            <Button.Ripple type="submit" className="mr-1" color="primary">
                              Save changes
                            </Button.Ripple>
                          </Col>
                        </Row>
                      </Form>
                    </Fragment>
                  </CardBody>
                </Card>
              </TabPane>
              <TabPane tabId='2'>

                <Card>

                  <CardBody>

                    <h3>Change Password</h3>
                    <hr />

                    <Form>
                      <Row>
                        <Col sm="6">
                          <FormGroup>
                            <Label
                              className='form-label'
                              for='login-password'>
                              Current Password
                            </Label>
                            <InputGroup
                              className='input-group-merge'
                            >
                              <InputGroupAddon addonType='prepend'>
                                <InputGroupText>
                                  <Lock size={15} />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input

                                className='input-group-merge form-control'
                                id='login-password'
                                placeholder='Enter Current Password'
                              />
                              <InputGroupAddon
                                addonType='append'
                              >
                                <InputGroupText className='cursor-pointer'>

                                </InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>

                          </FormGroup>
                        </Col >

                        <Col sm="6">
                          <FormGroup>
                            <Label
                              className='form-label'
                              for='login-password'>
                              New  Password
                            </Label>
                            <InputGroup
                              className='input-group-merge'
                            >
                              <InputGroupAddon addonType='prepend'>
                                <InputGroupText>
                                  <Lock size={15} />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input

                                className='input-group-merge form-control'
                                id='login-password'
                                placeholder='Enter New Password'
                              />
                              <InputGroupAddon
                                addonType='append'
                              >
                                <InputGroupText className='cursor-pointer'>

                                </InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>

                          </FormGroup>
                        </Col >

                        <Col sm="6">
                          <FormGroup>
                            <Label
                              className='form-label'
                              for='login-password'>
                              Retype New Password
                            </Label>
                            <InputGroup
                              className='input-group-merge'
                            >
                              <InputGroupAddon addonType='prepend'>
                                <InputGroupText>
                                  <Lock size={15} />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input

                                className='input-group-merge form-control'
                                id='login-password'
                                placeholder='Enter Retype New Password'
                              />
                              <InputGroupAddon
                                addonType='append'
                              >
                                <InputGroupText className='cursor-pointer'>

                                </InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>

                          </FormGroup>
                        </Col >
                        {/* <Row>
                          <p><b>Password requirements</b></p>
                          <p>
                            <ul>
                              <li>Minimum 8 characters long - the more, the better</li>
                              <li>At least one lowercase character</li>
                              <li> At least one number, symbol, or whitespace character</li>
                            </ul>
                          </p>
                        </Row> */}
                        <Col className="mt-2" sm="12">
                          <Button.Ripple type="submit" className="mr-1" color="primary">
                            Save changes
                          </Button.Ripple>
                        </Col>

                      </Row>
                    </Form>

                  </CardBody>
                </Card>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </div>


    </>
  );
};
export default Profile;
