import loginPage from '../pages/login';
import { signIn } from '../utils/auth';
import domBuilder from '../utils/domBuilder';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  domBuilder();
  loginPage();
};

export default loginButton;
