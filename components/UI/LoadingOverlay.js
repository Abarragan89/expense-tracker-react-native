import { View, ActivityIndicator, StyleSheet } from 'react-native'
import COLORS from '../../globalStyles/colors';

function LoadingOverLay() {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size="large"
                color="white"
            />
        </View>
    )
}

export default LoadingOverLay;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignContent: 'center',
        padding: 24,
        backgroundColor: COLORS.primary
    }
})