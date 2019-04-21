/**
 * This class will display a particular round in the NBA playoffs
 * e.g. Western Conference first round, or NBA finals
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import Series from './Series';

export default class Round extends Component {
    /**
     * Props for this class:
     * @param roundName The name of this round
     * @param series The series that will be played in this round
     */

    constructor(props) {
        super(props);
    }

    render() {
        return (
            // We'll iterate over the games of this round, displaying the current results
            <View>
                <Text h4 style={{ color: 'black', justifyContent: 'center' }}>
                    {this.props.roundName}
                </Text>
                {this.props.series.map(series => {
                    return (
                        // <Text style={{ color: 'black' }}>
                        //     {series.summaryStatusText}
                        // </Text>
                        <Series series={series} />
                    );
                })}
            </View>
        );
    }
}
