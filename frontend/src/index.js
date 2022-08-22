// ** React Imports
import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
// ** Redux Imports
import { Provider } from 'react-redux';

// ** Toast & ThemeColors Context
import { ThemeContext } from './utility/context/ThemeColors';

// ** Spinner (Splash Screen)
import Spinner from './@core/components/spinner/Fallback-spinner';

// ** Ripple Button
import './@core/components/ripple-button';

// ** PrismJS
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-jsx.min';

// ** React Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';

// ** React Toastify
import '@styles/react/libs/toastify/toastify.scss';
import './index.css';
// ** Core styles
import './@core/assets/fonts/feather/iconfont.css';
import './@core/scss/core.scss';
import './assets/scss/style.scss';

// ** Service Worker
import * as serviceWorker from './serviceWorker';
import { store } from './redux/storeConfig/store';

const contextClass = {
	success: 'bg-blue-600',
	error: 'bg-red-600',
	info: 'bg-gray-600',
	warning: 'bg-orange-400',
	default: 'bg-indigo-600',
	dark: 'bg-white-600 font-gray-300',
};

// ** Lazy load app
const LazyApp = lazy(() => import('./App'));

ReactDOM.render(
	<Provider store={store}>
		<Suspense fallback={<Spinner />}>
			<ThemeContext>
				<LazyApp />
			</ThemeContext>
		</Suspense>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
