/**
 * App for displaying the current standings of the NBA playoffs
 */

import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { Header } from 'react-native-elements';

import Round from './Round';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
    }

    componentDidMount() {
        // We want to start off by getting the current playoff situation from the NBA
        return fetch('https://data.nba.net/prod/v1/2018/playoffsBracket.json')
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    isLoading: false,
                    data: responseJson,
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View>
                <Header
                    centerComponent={{
                        text: 'NBA Playoffs',
                        style: {
                            color: 'white',
                            fontSize: 25,
                            marginBottom: 10,
                        },
                    }}
                    backgroundColor={'#1D428A'}
                    containerStyle={{
                        height: 50,
                    }}
                />

                <Round
                    roundName="Western Conference Round 1"
                    series={this.state.data.series.slice(0, 4)}
                />

                <Round
                    roundName="Eastern Conference Round 1"
                    series={this.state.data.series.slice(4, 8)}
                />

                {/* {this.state.data.series.map(series => {
                    return <Text>{series.summaryStatusText}</Text>;
                })} */}
            </View>
        );
    }
}
