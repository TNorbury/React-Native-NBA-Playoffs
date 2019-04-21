/**
 * This class will display a certain series, and the standings in the series
 * e.g. Portland 2-1 OKC
 */

import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default class Series extends Component {
    /**
     * Props:
     * @param series The series that'll be displayed here
     */

    constructor(props) {
        super(props);

        this.state = {
            topTeam: 'Team 1',
            bottomTeam: 'Team 2',
            topLoaded: false,
            bottomLoaded: false,
        };
    }

    componentDidMount() {
        // Make two server calls, in order to get the team information for both teams
        this.getTeamName(this.props.series.topRow.teamId, true);
        this.getTeamName(this.props.series.bottomRow.teamId, false);
    }

    getTeamName(teamId, isTop) {
        var requestUrl =
            'https://stats.nba.com/stats/teamdetails?TeamID=' + teamId;
        //console.log(requestUrl);
        fetch(requestUrl, {
            method: 'GET',
            headers: {
                Host: 'stats.nba.com',
                'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0',
                Accept: 'application/json, */*',
                'Accept-Language': 'en-US,en;q=0.5',
                'Accept-Encoding': 'gzip, deflate, br',
                Connection: 'keep-alive',
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                // The team name will be the city followed by the nick name
                var teamName =
                    responseJson.resultSets[0].rowSet[0][4] +
                    ' ' +
                    responseJson.resultSets[0].rowSet[0][2];

                // Update the state with the name name
                this.setState({
                    topTeam: isTop ? teamName : this.state.topTeam,
                    bottomTeam: isTop ? this.state.bottomTeam : teamName,
                    topLoaded: isTop ? true : this.state.topLoaded,
                    bottomLoaded: isTop ? this.state.bottomLoaded : true,
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        if (!this.state.topLoaded && !this.state.bottomLoaded) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View>
                <Text>
                    {this.state.topTeam} vs {this.state.bottomTeam}
                </Text>
                <Text>
                    {this.props.series.topRow.wins}-
                    {this.props.series.bottomRow.wins}
                </Text>
            </View>
        );
    }
}
