const { AuthenticationError } = require('apollo-server-express');
const user = require('./models/user'); 
const UserEvent = require('./models/userEvent');

const resolvers = {
  Query: {
    me: async (_, __, context) => {
      if (context.user) {
        return user.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    userEvents: async (_, __, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in to access events.');
      }

      try {
        const events = await UserEvent.find({ userId: context.user._id });
        return events;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch user events.');
      }
    },
  },

  Mutation: {
    adduser: async (_, { name, email, password }) => {
      const user = await user.create({ name, email, password });
      const token = signToken(user);

      return { token, user };
    },

    login: async (_, { email, password }) => {
      const user = await user.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    createUserEvent: async (_, { input }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in to create events.');
      }

      try {
        const event = await UserEvent.create({
          userId: context.user._id,
          ...input,
        });
        return event;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to create a user event.');
      }
    },
  },
};

module.exports = resolvers;
