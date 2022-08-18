// ** React Imports
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ** Custom Components
import Avatar from "@components/avatar";

// ** Utils
import { isUserLoggedIn } from "@utils";

// ** Store & Actions
import { useDispatch } from "react-redux";
import { handleLogout } from "@store/actions/auth";

// ** Third Party Components
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap";
import {
  User,
  Mail,
  CheckSquare,
  MessageSquare,
  Settings,
  CreditCard,
  HelpCircle,
  Power
} from "react-feather";

// ** Default Avatar Image
import defaultAvatar from "@src/assets/images/portrait/small/avatar-s-11.jpg";
import { userdatas } from "../../../../localstorage/localdata";

const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch();

  const defaultAvatars =
    "https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default.png";
  const userAvatar = userdatas?.User_Details.profile_image
    ? userdatas.User_Details.profile_image
    : defaultAvatars;
  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name font-weight-bold">
            {(userdatas &&
              userdatas.User_Details.name.charAt(0).toUpperCase() +
                userdatas.User_Details.name.slice(1)) ||
              "Admin"}
          </span>
          <span className="user-status">
            {(userdatas &&
              userdatas.User_Details.name.charAt(0).toUpperCase() +
                userdatas.User_Details.name.slice(1)) ||
              "Admin"}
          </span>
        </div>
        <Avatar img={userAvatar} imgHeight="40" imgWidth="40" status="online" />
      </DropdownToggle>
      <DropdownMenu right>
        <Link to="/profile">
          <DropdownItem>
            <User size={14} className="mr-75" />
            <span className="align-middle">Profile</span>
          </DropdownItem>
        </Link>
        <DropdownItem
          tag={Link}
          to="/login"
          onClick={() => dispatch(handleLogout())}
        >
          <Power size={14} className="mr-75" />
          <span className="align-middle">Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;
