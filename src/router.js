import { createWebHistory, createRouter } from 'vue-router';


import home from './components/home.vue'
import login from './components/login.vue'
//import register from './components/register.vue'
import Prof from './components/Prof.vue'
import Etudiant from './components/Etudiant.vue'
import Contact from './components/Contact.vue'


const routes = [
	{   path: '/', name: 'home', component: home },
	{   path: '/login', name: 'login', component: login },
	{   path: '/Prof', name: 'Prof', component: Prof },
	{   path: '/Etudiant', name: 'Etudiant', component: Etudiant },
	{   path: '/Contact', name: 'Contact', component: Contact },
	//{   path: '/register', name: 'register', component: register },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
