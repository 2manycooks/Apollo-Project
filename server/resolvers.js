module.exports = {
    Query : {
        quakes: (_, __, { dataSources }) => {
            return dataSources.quakeAPI.getAllQuakes()
        },
        quake: (_, { id }, { dataSources }) => {
            dataSources.quakeAPI.getQuakeById({ quakeId : id })
        },
        // QUERY USER me: (_, __, { dataSources }) => dataSources.userAPI.finderOrCreateUser()
    }
}