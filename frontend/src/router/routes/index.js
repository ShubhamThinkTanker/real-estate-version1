import { lazy } from 'react';
import '@styles/react/libs/react-select/_react-select.scss';
import '@styles/react/libs/tables/react-dataTable-component.scss';

import '@styles/react/libs/flatpickr/flatpickr.scss';
// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template';

// ** Default Route

const DefaultRoute = '/dashboard';
// ** Merge Routes
const Routes = [
	{
		path: '/dashboard',
		component: lazy(() => import('../../admin/components/Dashboard')),
	},
	{
		path: '/chairman/list',
		component: lazy(() => import('../../admin/components/chairman/list')),
	},
	{
		path: '/chairman/add',
		component: lazy(() =>
			import('../../admin/components/chairman/AddChairman')
		),
	},
	{
		path: '/chairman/edit/:id',
		component: lazy(() =>
			import('../../admin/components/chairman/EditChairman')
		),
	},
	{
		path: '/chairman/view/:id',
		component: lazy(() =>
			import('../../admin/components/chairman/ViewChairman')
		),
	},

	{
		path: '/user/list',
		component: lazy(() => import('../../admin/components/user/list')),
	},
	{
		path: '/user/add',
		component: lazy(() => import('../../admin/components/user/AddUser')),
	},

	{
		path: '/user/edit/:id',
		component: lazy(() => import('../../admin/components/user/EditUser')),
	},
	{
		path: '/user/view/:id',
		component: lazy(() => import('../../admin/components/user/ViewUser')),
	},

	{
		path: '/vendor/list',
		component: lazy(() => import('../../admin/components/vendor/list')),
	},
	{
		path: '/vendor/add',
		component: lazy(() =>
			import('../../admin/components/vendor/AddVendor')
		),
	},
	{
		path: '/vendor/edit/:id',
		component: lazy(() =>
			import('../../admin/components/vendor/EditVendor')
		),
	},
	{
		path: '/vendor/view/:id',
		component: lazy(() =>
			import('../../admin/components/vendor/ViewVendor')
		),
	},

	{
		path: '/announcement/list',
		component: lazy(() =>
			import('../../admin/components/announcement/list')
		),
	},

	{
		path: '/announcement/add',
		component: lazy(() =>
			import('../../admin/components/announcement/AddAnnouncement')
		),
	},
	{
		path: '/announcement/edit/:id',
		component: lazy(() =>
			import('../../admin/components/announcement/EditAnnouncement')
		),
	},
	{
		path: '/announcement/view/:id',
		component: lazy(() =>
			import('../../admin/components/announcement/ViewAnnouncement')
		),
	},

	{
		path: '/estatestructures/list',
		component: lazy(() =>
			import('../../admin/components/estatestructures/list')
		),
	},

	{
		path: '/complex/add',
		component: lazy(() =>
			import('../../admin/components/complex/AddComplex')
		),
	},
	{
		path: '/complex/view/:id',
		component: lazy(() =>
			import('../../admin/components/complex/ViewComplex')
		),
	},
	{
		path: '/complex/edit/:id',
		component: lazy(() =>
			import('../../admin/components/complex/EditComplex')
		),
	},
	{
		path: '/vehicle/list',
		component: lazy(() =>
			import('../../admin/components/vehicle/list/Index')
		),
	},
	{
		path: '/vehicle/create',
		component: lazy(() =>
			import('../../admin/components/vehicle/AddVehicle')
		),
	},
	{
		path: '/vehicle/view/:id',
		component: lazy(() =>
			import('../../admin/components/vehicle/ViewVehicle')
		),
	},
	{
		path: '/vehicle/edit/:id',
		component: lazy(() =>
			import('../../admin/components/vehicle/EditVehile')
		),
	},

	{
		path: '/profile',
		component: lazy(() => import('../../admin/AuthComponents/Profile')),
	},
	{
		path: '/changepassword',
		component: lazy(() =>
			import('../../admin/AuthComponents/ChangePassword')
		),
	},

	{
		path: '/complex/list',
		component: lazy(() => import('../../admin/components/complex/list')),
	},

	{
		path: '/login',
		component: lazy(() => import('../../admin/AuthComponents/Login')),
		layout: 'BlankLayout',
		meta: {
			authRoute: true,
		},
	},

	{
		path: '/resetpassword/:link',
		component: lazy(() =>
			import('../../admin/AuthComponents/ResetPassword')
		),
		layout: 'BlankLayout',

		meta: {
			authRoute: true,
		},
	},

	{
		path: '/forgotpassword',
		component: lazy(() =>
			import('../../admin/AuthComponents/ForgotPassword')
		),
		layout: 'BlankLayout',

		meta: {
			authRoute: true,
		},
	},
	{
		path: '/error',
		component: lazy(() => import('../../views/Error')),
		layout: 'BlankLayout',
	},
];

export { DefaultRoute, TemplateTitle, Routes };
