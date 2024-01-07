import { View, Text, StyleSheet } from 'react-native'
import COLORS from '../../globalStyles/colors';
import PrimaryBtn from '../PrimaryBtn';

function ErrorOverLay({ message, onConfirm }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>An Error occurred</Text>
            <Text style={styles.text}>{message}</Text>
            <View style={styles.btnContainer}>
                <PrimaryBtn
                    text={'Okay'}
                    onPress={onConfirm}
                    bgColor={COLORS.secondary}
                />
            </View>
        </View>
    )
}

export default ErrorOverLay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 24,
        backgroundColor: COLORS.primary
    },
    text: {
        textAlign: 'center',
        marginBottom: 8,
        color: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    btnContainer: {
        flexDirection:'row',
        justifyContent: 'center',
    }
})