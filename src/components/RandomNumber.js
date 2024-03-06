import React from 'react';
import PropTypes from 'prop-types';

import { Text, TouchableOpacity, StyleSheet } from 'react-native';

class RandomNumber extends React.Component {
    static propTypes = {
        number: PropTypes.number.isRequired,
        isDisabled: PropTypes.bool.isRequired,
        onPress: PropTypes.func.isRequired,
        id: PropTypes.number.isRequired,
    };
    handlePress = () => {
        if (!this.props.isDisabled) { this.props.onPress(this.props.id); }
    }

    render() {
        return (
            <TouchableOpacity onPress={this.handlePress}>
                <Text style={[styles.random, this.props.isDisabled && styles.disabled]}>
                    [{this.props.number}]
                </Text>
            </TouchableOpacity>
        );
    };
}

const styles = StyleSheet.create({
    random: {
        backgroundColor: '#999',
        width: 120,
        marginHorizontal: 15,
        marginVertical: 25,
        fontSize: 35,
        textAlign: 'center',
    },

    disabled: {
        opacity: 0.3
    }
});

export default RandomNumber;