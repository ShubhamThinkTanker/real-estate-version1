import {
	Mail,
	Home,
	FileText,
	Circle,
	User,
	Users,
	Tool,
	Speaker,
	Truck,
} from 'react-feather';
import { userdatas } from '../../localstorage/localdata';

var rolecheck = userdatas?.User_Details?.role;

export default [
	{
		id: 'Dashboard',
		title: 'Dashboard',
		icon: <Home size={20} />,
		navLink: '/dashboard',
	},

	rolecheck == 'admin'
		? {
				id: 'chairmanApp',
				title: 'Chairman',
				icon: <Users size={20} />,
				children: [
					{
						id: 'chairManList',
						title: 'Lists',
						icon: <Circle size={12} />,
						navLink: '/chairman/list',
					},
					{
						id: 'chairManAdd',
						title: 'Add',
						icon: <Circle size={12} />,
						navLink: '/chairman/add',
					},
				],
		  }
		: {
				id: 'userApp',
				title: 'User',
				icon: <User size={20} />,
				children: [
					{
						id: 'userList',
						title: 'Lists',
						icon: <Circle size={12} />,
						navLink: '/user/list',
					},
					{
						id: 'userAdd',
						title: 'Add',
						icon: <Circle size={12} />,
						navLink: '/user/add',
					},
				],
		  },

	{
		id: 'realestateApp',
		title: 'Realestate',
		icon: <Home size={20} />,
		children: [
			{
				id: 'realestateList',
				title: 'Lists',
				icon: <Circle size={12} />,
				navLink: '/complex/list',
			},
			{
				id: 'realestateAdd',
				title: 'Add',
				icon: <Circle size={12} />,
				navLink: '/complex/add',
			},
		],
	},

	{
		id: 'VendorApp',
		title: 'Vendor',
		icon: <User size={20} />,
		children: [
			{
				id: 'complexList',
				title: 'Lists',
				icon: <Circle size={12} />,
				navLink: '/vendor/list',
			},
			{
				id: 'complexAdd',
				title: 'Add',
				icon: <Circle size={12} />,
				navLink: '/vendor/add',
			},
		],
	},

	{
		id: 'AnnouncementApp',
		title: 'Announcement',
		icon: <Speaker size={20} />,
		children: [
			{
				id: 'announcementList',
				title: 'Lists',
				icon: <Circle size={12} />,
				navLink: '/announcement/list',
			},
			{
				id: 'announcementAdd',
				title: 'Add',
				icon: <Circle size={12} />,
				navLink: '/announcement/add',
			},
		],
	},

	{
		id: 'vehicleApp',
		title: 'Vehicle',
		icon: <Truck size={20} />,
		children: [
			{
				id: 'vehicleList',
				title: 'Lists',
				icon: <Circle size={12} />,
				navLink: '/vehicle/list',
			},
			{
				id: 'vehicleCreate',
				title: 'Add',
				icon: <Circle size={12} />,
				navLink: '/vehicle/create',
			},
		],
	},
	{
		id: 'Estate-structures',
		title: 'Estate-Structures',
		// icon: <Speaker size={20} />,
		children: [
			{
				id: 'estatestructuresList',
				title: 'Lists',
				icon: <Circle size={12} />,
				navLink: '/estatestructures/list',
			},
			// {
			// 	id: 'estatestructuresManage',
			// 	title: 'Add',
			// 	icon: <Circle size={12} />,
			// 	navLink: '/announcement/add',
			// },
		],
	},
];
