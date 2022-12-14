import { Link, useHistory } from 'react-router-dom';
import {
	Card,
	CardBody,
	CardTitle,
	FormGroup,
	Label,
	Input,
	Button,
	Form,
	InputGroup,
	InputGroupText,
	InputGroupAddon,
	CustomInput,
	CardText,
} from 'reactstrap';
import '@styles/base/pages/page-auth.scss';
import { Mail, Lock, Eye, EyeOff } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../redux/actions/apislogic/authapi';
import { selectThemeColors } from '@utils';
import { useState } from 'react';
// import { toast } from 'react-toastify';
import { useEffect } from 'react';
import Select from 'react-select';
import toast from 'react-hot-toast';
import Avatar from '@components/avatar';
import { LOGIN_USER_RESET } from '../../redux/Constants/userConstants';

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { loading, loginUserData, error } = useSelector(
		(state) => state?.LoginUser
	);
	const [inputVisibility, setInputVisibility] = useState(false);

	// useEffect(() => {
	// 	if (error === 'Email Or Mobile Number Does not exists') {
	// 		toast.error(error);
	// 		dispatch({ type: LOGIN_USER_RESET });
	// 	} else if (error && error.role == 'Role Does Not valid') {
	// 		toast.error(error && error.role);
	// 		dispatch({ type: LOGIN_USER_RESET });
	// 	}
	// }, [error && error]);
	const [values, setValues] = useState({
		username: '',
		password: '',
		role: '',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { username, password, role } = values;
		const user = { username, password, role };
		dispatch(loginAction(user));
	};

	const handleChange = (name) => (e) => {
		setValues({ ...values, [name]: e.target.value });
	};

	const statusOptions = [
		{ value: 'admin', label: 'Admin' },
		{ value: 'chairman', label: 'Chairman' },
		{ value: 'user', label: 'User' },
	];

	useEffect(() => {
		if (loginUserData) {
			setTimeout(() => {
				dispatch({ type: LOGIN_USER_RESET });
				history.push('/dashboard');
			}, 1000);

			toast.custom(
				<div className='p-2 bg-white shadow d-flex justify-content-between align-items-center rounded'>
					<Avatar
						img={loginUserData?.data?.User_Details?.profile_image}
					/>
					<div className='d-flex flex-column align-items-start ml-2'>
						<b className=''>
							Hello ????????
							<span className='text-primary'>
								{loginUserData?.data?.User_Details?.name}
							</span>{' '}
						</b>
						<small>Welcome to RealEstate</small>
					</div>
				</div>
			);
		}
	}, [loginUserData]);

	return (
		<div className='auth-wrapper auth-v1 px-2'>
			<div className='auth-inner py-2'>
				<Card className='mb-0'>
					<CardBody>
						<Link
							className='brand-logo'
							to='/'
							onClick={(e) => e.preventDefault()}>
							<svg viewBox='0 0 139 95' version='1.1' height='28'>
								<defs>
									<linearGradient
										x1='100%'
										y1='10.5120544%'
										x2='50%'
										y2='89.4879456%'
										id='linearGradient-1'>
										<stop
											stopColor='#000000'
											offset='0%'></stop>
										<stop
											stopColor='#FFFFFF'
											offset='100%'></stop>
									</linearGradient>
									<linearGradient
										x1='64.0437835%'
										y1='46.3276743%'
										x2='37.373316%'
										y2='100%'
										id='linearGradient-2'>
										<stop
											stopColor='#EEEEEE'
											stopOpacity='0'
											offset='0%'></stop>
										<stop
											stopColor='#FFFFFF'
											offset='100%'></stop>
									</linearGradient>
								</defs>
								<g
									id='Page-1'
									stroke='none'
									strokeWidth='1'
									fill='none'
									fillRule='evenodd'>
									<g
										id='Artboard'
										transform='translate(-400.000000, -178.000000)'>
										<g
											id='Group'
											transform='translate(400.000000, 178.000000)'>
											<path
												d='M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z'
												id='Path'
												className='text-primary'
												style={{
													fill: 'currentColor',
												}}></path>
											<path
												d='M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z'
												id='Path'
												fill='url(#linearGradient-1)'
												opacity='0.2'></path>
											<polygon
												id='Path-2'
												fill='#000000'
												opacity='0.049999997'
												points='69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325'></polygon>
											<polygon
												id='Path-2'
												fill='#000000'
												opacity='0.099999994'
												points='69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338'></polygon>
											<polygon
												id='Path-3'
												fill='url(#linearGradient-2)'
												opacity='0.099999994'
												points='101.428699 0 83.0667527 94.1480575 130.378721 47.0740288'></polygon>
										</g>
									</g>
								</g>
							</svg>
							<h2 className='brand-text text-primary ml-2'>
								REAL ESTATE
							</h2>
						</Link>

						<CardTitle className='mb-1'>Welcome ????</CardTitle>
						<CardText className='mb-2'>
							Please sign-in to your account
						</CardText>
						<FormGroup>
							<Label
								className='form-label mr-2 font-weight-bold'
								for='role-select'>
								Role
							</Label>
							{/* <InputGroup
								className='input-group-merge'
								>
								<InputGroupAddon addonType='prepend'>
									<InputGroupText>
										<User size={15} />
									</InputGroupText>
								</InputGroupAddon> */}
							<Select
								id='role-select'
								name='role'
								theme={selectThemeColors}
								isClearable={false}
								className='react-select flex-fill'
								classNamePrefix='select'
								options={statusOptions}
								onChange={(e) => {
									setValues({
										...values,
										role: e.value,
									});
								}}
								style={{ borderLeft: 'none' }}
							/>

							{error && error?.role ? (
								<div className='error'>{error?.role}</div>
							) : null}
						</FormGroup>

						<Form onSubmit={handleSubmit}>
							<FormGroup>
								<Label className='form-label' for='login-email'>
									Email / Mobile No
								</Label>
								<InputGroup className='input-group-merge'>
									<InputGroupAddon addonType='prepend'>
										<InputGroupText>
											<Mail size={15} />
										</InputGroupText>
									</InputGroupAddon>
									<Input
										value={values.username}
										onChange={handleChange('username')}
										type='text'
										id='login-email'
										className='form-control'
										placeholder='Enter Your Email / Mobile No'
									/>
								</InputGroup>
								{error && error?.username ? (
									<div className='error'>
										{error?.username}
									</div>
								) : null}
							</FormGroup>
							<FormGroup>
								<Label
									className='form-label'
									for='login-password'>
									Password
								</Label>
								<InputGroup className='input-group-merge'>
									<InputGroupAddon addonType='prepend'>
										<InputGroupText>
											<Lock size={15} />
										</InputGroupText>
									</InputGroupAddon>
									<Input
										value={values.password}
										onChange={handleChange('password')}
										type={
											!inputVisibility
												? 'password'
												: 'text'
										}
										className='input-group-merge form-control'
										id='login-password'
										placeholder='Enter Your Password'
									/>
									<InputGroupAddon
										addonType='append'
										onClick={() =>
											setInputVisibility(!inputVisibility)
										}>
										<InputGroupText className='cursor-pointer'>
											{inputVisibility ? (
												<EyeOff size={15} />
											) : (
												<Eye size={15} />
											)}
										</InputGroupText>
									</InputGroupAddon>
								</InputGroup>
								{error && error?.password ? (
									<div className='error'>
										{error?.password}
									</div>
								) : null}
							</FormGroup>
							<FormGroup>
								<CustomInput
									type='checkbox'
									className='custom-control-Primary'
									id='remember-me'
									label='Remember Me'
								/>
							</FormGroup>
							<Button.Ripple type='submit' color='primary' block>
								Sign in
							</Button.Ripple>
						</Form>

						<Link to='/forgotpassword' className='forgot-btn'>
							<small>Forgot Password?</small>
						</Link>
					</CardBody>
				</Card>
			</div>
		</div>
	);
};

export default Login;
