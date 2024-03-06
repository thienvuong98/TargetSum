import React from 'react';
import PropType from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';
import RandomNumber from './RandomNumber'

class Game extends React.Component {
    static propTypes = {
        randomNumberCount: PropType.number.isRequired,
    }
    state = {
        selectedIds: [],
    }
    target = 10 + Math.floor(40 * Math.random());
    randomNumbers = Array
        .from({ length: this.props.randomNumberCount })
        .map(() => 1 + Math.floor(20 * Math.random()));
    target = this.randomNumbers
        .slice(0, this.props.randomNumberCount - 2)
        .reduce((acc, curr) => acc + curr, 0)
    // TODO: Shuffle button

    isNumberSelected = (numberIndex) => {
        return this.state.selectedIds.indexOf(numberIndex) >= 0;
    }
    selectNumber = (numberIndex) => {
        this.setState((prevState) => ({
            selectedIds: [...prevState.selectedIds, numberIndex]
        }))
    }

    // gameStatus: PLAYING, WON, LOST
    gameStatus = () => {
        const sumSelected = this.state.selectedIds
            .reduce((acc, curr) => acc + this.randomNumbers[curr], 0)
        console.warn(sumSelected)
    }
    render() {
        this.gameStatus();
        return (
            <View style={styles.container}>
                <Text style={styles.target}>{this.target}</Text>
                <View style={styles.randomContainer}>
                    {this.randomNumbers.map((randomNumber, index) =>
                        <RandomNumber key={index} id={index} number={randomNumber}
                            isDisabled={this.isNumberSelected(index)}
                            onPress={this.selectNumber}
                        />
                    )}
                </View>

            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        flex: 1,
    },
    target: {
        fontSize: 40,
        backgroundColor: '#ffa',
        marginHorizontal: 50,
        textAlign: 'center',
    },
    randomContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
});

export default Game;