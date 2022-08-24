// ** React Imports
import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
// ** Redux Imports
import { Provider } from 'react-redux';
import { Toast, ToastBody, ToastHeader, Row, Col } from 'reactstrap';

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

// ** Core styles
import './@core/assets/fonts/feather/iconfont.css';
import './@core/scss/core.scss';
import './assets/scss/style.scss';
import './index.css';

// ** Service Worker
import * as serviceWorker from './serviceWorker';
import { store } from './redux/storeConfig/store';

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
