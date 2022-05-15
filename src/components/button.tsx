import React from 'react';
import { StyleSheet, TouchableOpacity, Text, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export type IButtonType = 'increment' | 'decrement';

interface Props {
    title: string;
    onPress: () => void;
    type: IButtonType;
    isDisabled: boolean;
};

const GREEN_SHADES = ['#119822', '#2A7221', '#1E441E'];
const RED_SHADES = ['#FA022C', '#A30B25', '#721121'];

const Button: React.FC<Props> = ({ title, onPress, type, isDisabled }) => {
    const width = useWindowDimensions().width;
    return (
            <TouchableOpacity
                onPress={onPress}
                disabled={isDisabled}
            >
                <LinearGradient
                    colors={type === 'increment' ? GREEN_SHADES : RED_SHADES}
                    style={[styles.main, { width: width * 0.75 }]}
                >
                    <Text style={styles.buttonText}>{title}</Text>
                </LinearGradient>
            </TouchableOpacity>
    
    )
};

export default Button;

const styles = StyleSheet.create({
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 30,
        borderColor: 'grey',
        borderWidth: 1,
        marginTop: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontFamily: 'UbuntuMono_400Regular'
    }
});
