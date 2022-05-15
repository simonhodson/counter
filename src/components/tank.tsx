import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


interface Props {
    value: number;
}

type CalculatedStyle = { height: number, borderTopRightRadius: number, borderTopLeftRadius: number };

const SHARED_WIDTH = 100;
const BORDER_WIDTH = 1;
const MAX_HEIGHT = 200;

const Tank: React.FC<Props> = ({ value }) => {

    const calculateStyle = (): Partial<CalculatedStyle> => {
        if (value < 10) {
            return { height: MAX_HEIGHT * (value / 10) };
        } else {
            return {
                height: MAX_HEIGHT * (value / 10),
                borderTopLeftRadius: 7,
                borderTopRightRadius: 7,
            }
        }

    }

    return (
        <View style={styles.main}>
            <LinearGradient
                style={[styles.liquid, calculateStyle()]}
                colors={['#536CDF', '#1732B5', '#112173']}
                locations={[0.2, 0.5, 0.99]}
            />
        </View>
    );
}

export default Tank;

const styles = StyleSheet.create({
    main: {
        height: MAX_HEIGHT,
        width: SHARED_WIDTH,
        borderColor: 'grey',
        borderWidth: BORDER_WIDTH,
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
        justifyContent: 'flex-end'
    },
    liquid: {
        backgroundImage: 'linear-gradient(to top, blue, white)',
        width: SHARED_WIDTH - (BORDER_WIDTH * 2)
    }
})