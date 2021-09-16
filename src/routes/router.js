import VueRouter from 'vue-router';
import i18n from '../i18n';

const routes = [
	{
		path: '/',
		redirect: `/${i18n.locale}`
	},
	{
		path: '/:lang',
		component: {
			render (c) { return c('router-view') }
		},
		children: [
			{
				path: '/',
				name: 'Landing',
				component: () => import('../views/Landing.vue')
			},
			{
				path: 'menu',
				name: 'Menu',
				component: () => import('../views/Menu.vue')
			},
			{
				path: 'gallery',
				name: 'Gallery',
				component: () => import('../views/Gallery.vue')
			},
			{
				path: 'about',
				name: 'About',
				component: () => import('../views/About.vue')
			},
			{
				path: 'contact',
				name: 'Contact',
				component: () => import('../views/Contact.vue')
			},
			{
				path: 'order',
				name: 'Order',
				component: () => import('../views/Order.vue')
			}
		]
	}
];

const router = new VueRouter({
	mode: 'history',
	scrollBehavior: (to, from, savedPosition) => {
		if (to.hash) {
			return {
				selector: to.hash,
				behavior: 'smooth',
			};
		} else if (savedPosition) {
			return savedPosition;
		}
		return { x: 0, y: 0 };
	},
	routes: routes,
});

export default router;
