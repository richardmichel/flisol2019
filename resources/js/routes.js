
// Panel
import Panel	from './components/views/panel/Home';
import DashBoard	from './components/views/panel/DashBoard';
import  NotFound from './components/views/panel/NotFound';

export const routes = [
	{
		path: '/',
		component: Panel,
		children: [
			{
				path: '',
				component: DashBoard
			},
			{
				path: '*',
				component:NotFound
			},
		]
	}

];
