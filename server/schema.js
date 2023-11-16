const { gql } = require('apollo-server');

const typeDefs = gql`

    type Query {
        quakes: [Quake]!
        quake(id: ID!): Quake

        me: User
    }

    type Quake {
        id: ID!
        location: String
        magnitude: Float
        when: String
        time: String
    }

    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
        records: [Quake]
    }

    type Mutation {
        # if false, saving record failled -- check errors
        saveRecord(recordId: ID!): RecordUpdateResponse!

        # if false, removing record failed -- check errors
        deleteRecord(recordId: ID!): RecordUpdateResponse!

        # login token
        login(email: String!, password: String!): String

    }

    type RecordUpdateResponse {
        success: Boolean!
        message: String
        records: [Quake]
    }
`;



module.exports = typeDefs;