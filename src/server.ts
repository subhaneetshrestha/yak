import App from './app';
import { createContainer } from './containers';

const container = await createContainer();
new App(container).init();
