const { gql } = require('apollo-server');

const typeDefs = gql`

    type Query {
        quakes( # replace the current quakes query with this one.
        """
        The number of results to show. Must be >= 1. Default = 20
        """
        pageSize: Int
        """
        If you add a cursor here, it will only return results _after_ this cursor
        """
        after: String
    ): QuakeConnection!
        quake(id: ID!): Quake
        users: [User]
        me: User
    }

    """
    Simple wrapper around our list of quakes that contains a cursor to the
    last item in the list. Pass this cursor to the quakes query to fetch results
    after these.
    """

    type QuakeConnection {
        cursor: String!
        hasMore: Boolean!
        quakes: [Quake]!
    }

    type Quake {
        id: ID!
        location: String
        magnitude: Float
        when: String
        cursor: String
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