import AsyncStorage from '@react-native-community/async-storage';

export default class Storage {
    constructor() {
        // For whatever reason, this team never gets retrieved from the server right away, 
        // so I'm just setting it manually here for now
        this.saveTeam('1610612753', 'Orlando Magic');
    }

    /**
     *
     * @param {string} teamId The id of the team we're storing
     * @param {string} teamName the name that we'll be storing
     */
    async saveTeam(teamId, teamName) {
        // Store the team name associated with given ID
        try {
            await AsyncStorage.setItem(teamId, teamName);
            // console.log(teamName + ' saved!');
        } catch (e) {
            console.log('Error trying to save team: ' + e);
        }
    }

    /**
     *
     * @param {string} teamId get the id of the team we're looking for
     * @returns {promise} A promise for the team name associated with the given key
     */
    async getTeam(teamId) {
        var teamName;
        try {
            teamName = (await AsyncStorage.getItem(teamId)) || 'none';
        } catch (e) {
            console.log('Error trying to read team: ' + e);
        }

        // console.log(teamName + ' retrieved!');

        return teamName;
    }
}
