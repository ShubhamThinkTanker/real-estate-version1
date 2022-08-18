import {
	Mail,
	Home,
	FileText,
	Circle,
	User,
	Users,
	Tool,
	Speaker,
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
						id: 'userManage',
						title: 'Lists',
						icon: <Circle size={12} />,
						navLink: '/chairman/list',
					},
				],
		  }
		: {
				id: 'userApp',
				title: 'User',
				icon: <User size={20} />,
				children: [
					{
						id: 'userManage',
						title: 'Lists',
						icon: <Circle size={12} />,
						navLink: '/user/list',
					},
				],
		  },

	{
		id: 'realestateApp',
		title: 'Realestate',
		icon: <Home size={20} />,
		children: [
			{
				id: 'realestateManage',
				title: 'Lists',
				icon: <Circle size={12} />,
				navLink: '/complex/list',
			},
		],
	},

	{
		id: 'VendorApp',
		title: 'Vendor',
		icon: <Tool size={20} />,
		children: [
			{
				id: 'complexManage',
				title: 'Lists',
				icon: <Circle size={12} />,
				navLink: '/vendor/list',
			},
		],
	},

	{
		id: 'AnnouncementApp',
		title: 'Announcement',
		icon: <Speaker size={20} />,
		children: [
			{
				id: 'announcementManage',
				title: 'Lists',
				icon: <Circle size={12} />,
				navLink: '/announcement/list',
			},
		],
	},
];
