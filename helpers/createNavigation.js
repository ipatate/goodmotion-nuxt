// comparator
const compare = (a, b) => {
  const aOrder = a.order === null || a.order === undefined ? 1000 : a.order;
  const bOrder = b.order === null || b.order === undefined ? 1000 : b.order;
  if (aOrder > bOrder) {
    return 1;
  } else if (aOrder < bOrder) {
    return -1;
  }
  return 0;
};

module.exports = pages => {
  const _navigation = {};
  // fetch navigation
  pages.forEach(p => {
    // not in nav
    if (p.nav === false) return;
    // remove pages path
    const _path = p.path.match(/\/pages(\/.+)+/);
    const _pathWithoutPage = _path[1];
    // extract end of path for verify of index
    const lastPart = _pathWithoutPage.substring(_path[1].lastIndexOf('/') + 1);
    // extract dir name
    const root = _pathWithoutPage.match(/\/(.+)(\/.+)+/);
    // home or not ?
    const key = root ? root[1] : '/';
    // create empty object for nav element
    if (_navigation[key] === undefined) {
      _navigation[key] = {};
    }
    // if parent nav
    if (lastPart === 'index') {
      _navigation[key] = {..._navigation[key], ...p};
    } else {
      // if children nav
      // create array of children if not exist
      if (_navigation[key].childrens === undefined) {
        _navigation[key].childrens = [];
      }
      _navigation[key].childrens.push(p);
    }
  });

  const finalNavigation = [];
  // order children
  for (const key in _navigation) {
    const nav = _navigation[key];
    if (nav !== undefined && nav.childrens !== undefined) {
      nav.childrens = nav.childrens.sort(compare);
    }
    // set to navigation
    finalNavigation.push(nav);
  }

  // sort parent element
  return finalNavigation.sort(compare);
};
