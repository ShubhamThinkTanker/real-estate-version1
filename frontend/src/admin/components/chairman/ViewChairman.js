import { Fragment, useEffect } from "react";
import "@styles/react/libs/flatpickr/flatpickr.scss";
import { useDispatch, useSelector } from "react-redux";
import { UserGetAction } from "../../../redux/actions/apislogic/userapis";
import { Link, useParams } from "react-router-dom";

import {
  Col,
  CustomInput,
  Form,
  Input,
  Label,
  Media,
  Row,
  Button,
  FormGroup
} from "reactstrap";

const ViewChairman = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UserGetAction(id));
  }, []);

  const UserGetData = useSelector((state) => state.userRecords);
  const { getUsersRecords } = UserGetData;

  return (
    <Fragment>
      <h3>View Chairman</h3>
      {getUsersRecords && (
        <Row>
          <Col sm="12">
            <Form>
              <Row>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      disabled={true}
                      defaultValue={getUsersRecords["data"].name}
                    />
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
                      disabled={true}
                      defaultValue={getUsersRecords["data"].email}
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
                      disabled={true}
                      defaultValue={getUsersRecords["data"].mobile_no}
                    />
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
                    disabled={true}
                    defaultChecked={getUsersRecords["data"].gender === "male"}
                  />
                  <CustomInput
                    type="radio"
                    id="gender2"
                    name="gender"
                    inline
                    label="Female"
                    disabled={true}
                    defaultChecked={getUsersRecords["data"].gender === "female"}
                  />
                </Col>

                <Col sm="12">
                  <Label for="image">Profile Image</Label>
                  <Media className="mb-2">
                    <div className="d-flex flex-wrap mt-1 px-0">
                      <img
                        className="user-avatar rounded mr-2 my-25 cursor-pointer"
                        src={getUsersRecords["data"].profile_image}
                        height="90"
                        width="90"
                      />
                    </div>
                  </Media>
                </Col>
                <Col sm="12">
                  <Button.Ripple
                    color="secondary"
                    tag={Link}
                    to="/chairman/list"
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

export default ViewChairman;
