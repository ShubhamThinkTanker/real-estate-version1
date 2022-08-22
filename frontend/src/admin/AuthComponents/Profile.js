import { Fragment, useEffect, useState } from "react";
import { Trash2 } from "react-feather";
import { useForm, Controller } from "react-hook-form";
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
} from "reactstrap";
import { userdatas } from "../../localstorage/localdata";
import { EditRegisterAction } from "../../redux/actions/apislogic/userapis";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { UPDATE_PROFILE_RESET, USER_EDIT_RESET } from "../../redux/Constants/userConstants";

const Profile = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    mobile_no: "",
    profile_image: "",
    gender: "",
    _id: "",
  });
  const [sendimage, setimage] = useState();
  const { name, mobile_no, email, profile_image, gender, _id } = user;

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
    formData.append("gender", gender);
    sendimage != undefined ? formData.append("profile_image", sendimage) : null;
    dispatch(EditRegisterAction(_id, formData,userdatas.Token));
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
              <Label for="username">Name</Label>
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
              <Label for="name">Email</Label>
              <Input
                className="form-control"
                name="email"
                value={email}
                disabled={true}
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

          <Col sm="6"></Col>
          <Col className="mt-2" sm="12">
            <Button.Ripple type="submit" className="mr-1" color="primary">
              Save changes
            </Button.Ripple>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};
export default Profile;
