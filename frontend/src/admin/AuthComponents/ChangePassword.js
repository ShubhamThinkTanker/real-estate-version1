import { Fragment, useEffect, useState } from "react";
import { Trash2 } from "react-feather";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Lock, User, Share2 } from 'react-feather';
import {
    Button,
    Media,
    Label,
    Row,
    Col,
    Card,
    CardBody,
    Input,
    FormGroup,
    Alert,
    Form,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    CustomInput,
    CardText,
    Nav, NavItem, NavLink, TabContent, TabPane,
} from "reactstrap";

import { userdatas } from "../../localstorage/localdata";
import { EditRegisterAction } from "../../redux/actions/apislogic/userapis";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { UPDATE_PROFILE_RESET, USER_EDIT_RESET } from "../../redux/Constants/userConstants";
import BreadCrumbs from "../../@core/components/breadcrumbs";
import { Link } from "react-router-dom";
// import BreadCrumbs from '../../../@core/components/breadcrumbs';

const ChangePassword = () => {
    const [activeTab, setActiveTab] = useState('1')

    // ** Function to toggle tabs
    const toggle = tab => setActiveTab(tab)

    return (
        <>
            <div>

                <BreadCrumbs
                    breadCrumbTitle='Account Setting '
                    breadCrumbActive='Account Setting'
                />

                {/* <Nav pills>
                    <NavItem>
                        <NavLink active={activeTab === '1'} onClick={() => toggle('1')} tag={Link} to='/profile'>
                            <User size={14} />
                            <span className='align-middle d-none d-sm-block'>Account</span>
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink active={activeTab === '2'} onClick={() => toggle('2')} tag={Link} to='/changepassword'>
                            <Share2 size={14} />
                            <span className='align-middle d-none d-sm-block'>Security</span>
                        </NavLink>
                    </NavItem>
                </Nav> */}

                
            </div>

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




                            <p><b>Password requirements</b></p>

                            <ul>
                                <li>Minimum 8 characters long - the more, the better</li>
                                <li>At least one lowercase character</li>
                                <li> At least one number, symbol, or whitespace character</li>
                            </ul>

                            <Col className="mt-2" sm="12">
                                <Button.Ripple type="submit" className="mr-1" color="primary">
                                    Save changes
                                </Button.Ripple>
                            </Col>

                        </Row>
                    </Form>

                </CardBody>
            </Card>
        </>
    );
};
export default ChangePassword;
