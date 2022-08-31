import { asClass, asFunction, AwilixContainer, Lifetime } from 'awilix';
export const registerTransporters = (container: AwilixContainer) => {
  // Register routes
  container.loadModules(['../app/http/router/*-router.(ts|js)'], {
    cwd: __dirname,
    formatName: 'camelCase',
    resolverOptions: { lifetime: Lifetime.SINGLETON, register: asFunction },
  });

  //Register Controllers
  container.loadModules(['../app/http/controllers/*-controller.(js|ts)'], {
    cwd: __dirname,
    formatName: 'camelCase',
    resolverOptions: { lifetime: Lifetime.SINGLETON, register: asClass },
  });
  return container;
};
