// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/taxes',
      name: 'taxes',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Taxes/reducer'),
          import('containers/Taxes/sagas'),
          import('containers/Taxes'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('taxes', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/bylaws',
      name: 'bylaws',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          // import('containers/Bylaws/reducer'),
          import('containers/Bylaws/sagas'),
          import('containers/Bylaws'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([sagas, component]) => {
        // importModules.then(([reducer, sagas, component]) => {
          // injectReducer('bylaws', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/bclaws',
      name: 'bclaws',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          // import('containers/Bclaws/reducer'),
          import('containers/Bclaws/sagas'),
          import('containers/Bclaws'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([sagas, component]) => {
          // injectReducer('bclaws', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/strataMap',
      name: 'strataMap',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/StrataMap/reducer'),
          import('containers/StrataMap/sagas'),
          import('containers/StrataMap'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('strataMap', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
