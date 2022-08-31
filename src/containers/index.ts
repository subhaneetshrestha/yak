import { AwilixContainer, createContainer as createAwilixContainer, InjectionMode } from 'awilix';

export const createContainer = async () => {
  const container: AwilixContainer = createAwilixContainer({ injectionMode: InjectionMode.CLASSIC });
  await Promise.all([]);
  return container;
};
