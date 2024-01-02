import { View, StyleSheet  } from "react-native";
import PrimaryBtn from "../components/PrimaryBtn";
import { useDispatch } from 'react-redux';
import { addPurchase } from "../redux/purchases";

function AddPurchase({ navigation }) {

    const dispatch = useDispatch();

    function cancelHandler() {
        navigation.goBack();
    }

    function addPurchaseHandler() {
        dispatch(addPurchase({
            id: Math.random(),
            purchasePrice: 39.23,
            purchaseName: 'test3',
            purchaseDate: new Date().toString()
        }))
        navigation.goBack();
    }

    return (
        <View style={styles.root}>
            <View style={styles.btnContainer}>
                <PrimaryBtn
                    text='Cancel'
                    onPress={cancelHandler}
                />
                <PrimaryBtn
                    text='Add'
                    onPress={addPurchaseHandler}
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