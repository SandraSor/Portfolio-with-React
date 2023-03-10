import project01 from './../img/projects/counter.jpg';
import project01Big from './../img/projects/counter-big.jpg';

import project02 from './../img/projects/quiz.jpg';
import project02Big from './../img/projects/quiz-big.jpg';

import project03 from './../img/projects/ul.jpg';
import project03Big from './../img/projects/ul-big.jpg';

import project04 from './../img/projects/xo.jpg';
import project04Big from './../img/projects/xo-big.jpg';

import project05 from './../img/projects/sneakers1.jpg';
import project05Big from './../img/projects/sneakers-big.jpg';

const projects = [
	{
		id: 1,
		title: 'Pizzas',
		skills:
			'React, Redux Toolkit, React Router v6, Axios, TypeScript, SCSS, React Content Loader, React Pagination, Lodash.Debounce, JSON-server',
		img: project01,
		imgBig: project01Big,
		gitHubLink: 'https://github.com/SandraSor/pizza-react',
	},
	{
		id: 2,
		skills: 'ReactJS, React Router, Axios, SCSS, JSON-server',
		title: 'Sneakers',
		img: project05,
		imgBig: project05Big,
		gitHubLink: 'https://github.com/SandraSor/sneakers-react',
	},
	{
		id: 3,
		skills: 'HTML, CSS, React',
		title: 'Tic-Tac-Toe',
		img: project04,
		imgBig: project04Big,
		gitHubLink: 'https://github.com/SandraSor/XO-my-app',
	},
	{
		id: 4,
		title: 'User List',
		skills: 'HTML, CSS, React, React Content Loader, fetch',

		img: project03,
		imgBig: project03Big,
		gitHubLink: 'https://github.com/SandraSor/UserList_react',
	},
	{
		id: 5,
		title: 'Quiz',
		skills: 'HTML, CSS, React',
		img: project02,
		imgBig: project02Big,
		gitHubLink: 'https://github.com/SandraSor/Quiz_react',
	},
];

export { projects };
