import React, { useRef } from  'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Animated } from 'react-native';
import { useAppSelector, useAppDispatch } from './app/hooks';
import  { increment, decrement } from './features/counter-slice';
import Button from './components/button';
import Tank from './components/tank'

export default function Home    () {
    const dispatch = useAppDispatch();
    const count = useAppSelector(state => state.counter.value);
    
    const onPressIncrease = () => dispatch(increment());

    const onPressDecrese = () => dispatch(decrement());


    return (
        <SafeAreaView style={styles.main}>
            <Tank value={count}/>
            <View style={styles.textWrap}>
                <Text style={styles.text}>{`COUNTER VAULE = ${count}`}</Text>
            </View>
            <Button title='Increase' onPress={onPressIncrease} type='increment' isDisabled={count === 10} />
            <Button title='Decrease' onPress={onPressDecrese} type='decrement' isDisabled={count === 0} />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 100,
    },
    textWrap: {
        margin: 20
    },
    text: {
        fontFamily: 'UbuntuMono_400Regular'
    }
});
