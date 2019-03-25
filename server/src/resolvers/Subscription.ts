import { subscriptionField } from 'nexus';

export const feedSubscription = subscriptionField('feedSubscription', {
  type: 'Post',
  subscribe: (parent, args, context) => {
    return context.prisma.$subscribe
      .post({
        mutation_in: ['CREATED', 'UPDATED'],
      })
      .node();
  },
  resolve: payload => {
    return payload;
  },
});
