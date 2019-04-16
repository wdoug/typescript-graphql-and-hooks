import { prismaObjectType } from 'nexus-prisma';

export const Todo = prismaObjectType({
  name: 'Todo',
  definition(t) {
    t.prismaFields(['*']);
  },
});
