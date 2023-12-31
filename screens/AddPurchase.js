import { View, StyleSheet  } from "react-native";
import PrimaryBtn from "../components/PrimaryBtn";

function AddPurchase() {
    return (
        <View style={styles.root}>
            <View style={styles.btnContainer}>
                <PrimaryBtn
                    text='Cancel'
                    onPress={() => console.log('hi')}
                />
                <PrimaryBtn
                    text='Add'
                    onPress={() => console.log('hi')}
                    bgColor={COLORS.secondary}
                />
            </View>
        </View>
    )
}

export default AddPurchase;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 24,
        backgroundColor: COLORS.primary
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 16,
        width: '90%'
    },
    trashIcon: {
        marginTop: 16,
        color: 'red',
        fontSize: 40,
        opacity: .7
    }
})