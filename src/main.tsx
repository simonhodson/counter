import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { useFonts, UbuntuMono_400Regular} from '@expo-google-fonts/ubuntu-mono';
import Home from './home';

const Main: React.FC = () => {
    let [fontsLoaded] = useFonts({
        UbuntuMono_400Regular,
      });
    return(
        <View style={styles.main}>
            {!fontsLoaded ?
                <ActivityIndicator size={'large'} /> :
                <Home />    
            }
        </View>
    )
}

export default Main;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})