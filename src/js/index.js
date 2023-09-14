import 'regenerator-runtime';

// Import our custom CSS
import '../sass/main.scss';

// Import components
import './components/index';

// Import javascript file as needed
import Dashboard from './pages/dashboard';
import Add from './pages/actions/add';
import Profile from './pages/profile';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

const routes = {
  '/': Dashboard,
  '/actions/add.html': Add,
  '/profile.html': Profile,
};

const detectRoute = () => routes[window.location.pathname];

window.addEventListener('DOMContentLoaded', async () => {
  const route = detectRoute();
  route.init();
});