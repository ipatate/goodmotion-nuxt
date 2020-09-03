// comparator
const compare = (a, b) => {
  const aOrder = a.order || 1000;
  const bOrder = b.order || 1000;
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
    // remove pages path
    const _path = p.path.match(/\/pages(\/.+)+/);
    const _pathWithoutPage = _path[1];
    // extract end of path for verify of index
    const lastPart = _pathWithoutPage.substring(_path[1].lastIndexOf('/') + 1);
    // extract dir name
    const root = _pathWithoutPage.match(/\/(.+)(\/.+)+/);
    // home or not ?
    const key = root ? root[1] : '/';
    // if index file, set to root object
    if (lastPart === 'index') {
      _navigation[key] = p;
      // else set to chidrens
    } else {
      // create array of children if not exist
      if (
        _navigation[key] === undefined ||
        _navigation[key].childrens === undefined
      ) {
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

  // sort root element
  return finalNavigation.sort(compare);
};
