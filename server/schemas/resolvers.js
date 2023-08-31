const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/user');
const Plant = require('../models/user-plants');
const UserEvent = require('../models/userEvents');
const { signToken } = require('../utils/auth');
const { GraphQLDateTime } = require('graphql-scalars');

const resolvers = {
  Date: GraphQLDateTime,
  Query: {
    me: async (_, __, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
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
    addUser: async (_, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);

      return { token, user };
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

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
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { userEvent: input } },
          { new: true }

        )
        return updatedUser
      }
      throw new AuthenticationError('You need to be logged in to create events.');

      // try {
      //   const event = await UserEvent.create({
      //     userId: context.user._id,
      //     ...input,
      //   });
      //   return event;
      // } catch (error) {
      //   console.error(error);
      //   throw new Error('Failed to create a user event.');
      // }
    },
    addPlant: async (_, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to add a plant.');
      }

      try {
        const newPlant = new Plant({
          commonName: args.commonName,
          scientificName: args.scientificName,
          nickname: args.nickname,
          watering: args.watering,
          userId: context.user._id, // Assuming you associate the plant with the user
        });

        await newPlant.save();
        return newPlant;
      } catch (error) {
        console.error('Error creating a new plant:', error);
        throw new Error('Failed to create a new plant.');
      }
    },


    deletePlant: async (_, { plantId }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to delete a plant.');
      }

      try {
        const plant = await Plant.findById(plantId);
        if (!plant) {
          throw new Error('Plant not found.');
        }
        if (plant.userId.toString() !== context.user._id.toString()) {
          throw new AuthenticationError('You are not authorized to delete this plant.');
        }
        await plant.delete();
        return plant;
      } catch (error) {
        throw new Error('Failed to delete a plant.');
      }
    },
    updatePlant: async (_, { plantId, nickname, lastWaterDate }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to update a plant.');
      }

      try {
        const plant = await Plant.findById(plantId);
        if (!plant) {
          throw new Error('Plant not found.');
        }
        if (nickname !== undefined) {
          plant.nickname = nickname;
        }

        if (lastWaterDate !== undefined) {
          plant.lastWaterDate = lastWaterDate;
        }
        await plant.save();
        return plant;
      } catch (error) {
        throw new Error('Failed to update plant!');
      }
    },
  },
};

module.exports = resolvers;