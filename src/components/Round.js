/**
 * This class will display a particular round in the NBA playoffs
 * e.g. Western Conference first round, or NBA finals
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import Series from './Series';
import { styles } from '../style/styles';

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
        var activeSeries = false;

        // First determine if this round has started yet by seeing if any of the series
        // have been scheduled
        this.props.series.forEach(series => {
            if (series.isScheduleAvailable) {
                activeSeries = true;
                return;
            }
        });

        return (
            activeSeries && (
                // We'll iterate over the games of this round, displaying the current results
                <View style={styles.roundContainer}>
                    <Text h4 style={{ color: 'black', textAlign: 'center' }}>
                        {this.props.roundName}
                    </Text>
                    {this.props.series.map(series => {
                        return <Series series={series} />;
                    })}
                </View>
            )
        );
    }
}
