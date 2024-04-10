const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers')
const { createStore } = require("./utils")

const QuakeAPI = require('./datasources/quake');
const UserAPI = require('./datasources/user')

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        quakeAPI: new QuakeAPI()
    })
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
})