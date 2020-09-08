const createNavigation = require('../createNavigation');

const pages = [
  {
    title: 'Développement de Web',
    _slug: 'developpement-de-web',
    label: 'Web',
    body: {type: 'root', children: []},
    dir: '/pages/services',
    path: '/pages/services/web',
    extension: '.md',
    slug: 'developpement-web',
    createdAt: '2020-09-03T16:35:50.930Z',
    updatedAt: '2020-09-08T08:17:57.726Z',
    readingTime: 107400,
  },
  {
    title: 'Home page',
    description: '',
    _slug: '/',
    order: 0,
    toc: [],
    body: {type: 'root', children: []},
    dir: '/pages',
    path: '/pages/index',
    extension: '.md',
    slug: '/',
    createdAt: '2020-09-01T12:05:47.520Z',
    updatedAt: '2020-09-03T17:17:05.588Z',
    readingTime: 51900,
  },
  {
    title: "Développement de sites web et d'applications web",
    _slug: 'sites-web-vitrine-pour-les-commercants-et-les-pme',
    label: 'Site web vitrine',
    body: {type: 'root', children: []},
    dir: '/pages/services',
    path: '/pages/services/sites-vitrines',
    extension: '.md',
    slug: 'sites-web-vitrine-pour-les-commercants-et-les-pme',
    createdAt: '2020-09-03T11:43:03.212Z',
    updatedAt: '2020-09-03T12:38:14.916Z',
    readingTime: 197700,
  },
  {
    title: 'Développement de Web Applications',
    _slug: 'developpement-de-web-application',
    label: 'Web Application',
    nav: false,
    order: 1,
    body: {type: 'root', children: []},
    dir: '/pages/services',
    path: '/pages/services/web-application',
    extension: '.md',
    slug: 'developpement-de-web-application',
    createdAt: '2020-09-03T16:35:50.930Z',
    updatedAt: '2020-09-08T08:17:57.726Z',
    readingTime: 107400,
  },
  {
    title: "Développement de sites web et d'applications web",
    _slug: 'service-de-developpement-de-sites-web-et-applications-web',
    label: 'Services',
    body: {type: 'root', children: []},
    dir: '/pages/services',
    path: '/pages/services/index',
    extension: '.md',
    slug: 'service-de-developpement-de-sites-web-et-applications-web',
    createdAt: '2020-09-03T09:41:10.808Z',
    updatedAt: '2020-09-03T17:16:59.308Z',
    readingTime: 105600,
  },
];

describe('Create navigation', () => {
  test('create 4 pages', () => {
    expect(createNavigation(pages)).toMatchSnapshot();
  });
});
