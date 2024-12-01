import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './routes/HomePage.jsx';
import PostListPage from './routes/PostListPage.jsx';
import SinglePostPage from './routes/SinglePostPage.jsx';
import Write from './routes/Write.jsx';
import RegisterPage from './routes/RegisterPage.jsx';
import LoginPage from './routes/LoginPage.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/posts',
		element: <PostListPage />,
	},
	{
		path: '/:slug',
		element: <SinglePostPage />,
	},
	{
		path: '/write',
		element: <Write />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
