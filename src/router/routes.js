
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', name: 'home', component: () => import('pages/HomePage/home') },
      { path: 'page1', name: "page1", component: () => import('pages/Page1/Page1') },
      { path: 'page2', name: "page2", component: () => import('pages/Page2/page2') },
      { path: 'settings', name: "settings", component: () => import('pages/SettingsPage/SettingsPage') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]


export default routes
