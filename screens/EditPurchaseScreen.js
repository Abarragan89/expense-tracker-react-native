
import { View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import PrimaryBtn from "../components/PrimaryBtn";
import COLORS from "../globalStyles/colors";
import ExpenseCard from "../components/ExpenseCard";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removePurchase, updatePurchase } from "../redux/purchases";


function EditPurchaseScreen({ route, navigation }) {
    const { purchaseId } = route.params

    // const singlePurchase = useSelector((state) => state.purchases.purchases
    //     .find(purchase => purchase.id === purchaseId))

    const dispatch = useDispatch();


    function cancelHandler() {
        navigation.goBack();
    }

    function updateExpenseHandler() {
        dispatch(updatePurchase({ id: purchaseId, purchaseName : 'updated!!'} ))
        navigation.goBack();
    }

    function deleteHandler() {
        navigation.goBack();
        dispatch(removePurchase({ id: purchaseId }))
    }

    return (
        <View style={styles.root}>
            <View style={styles.purchaseInfoContainer}>
                    {/* <ExpenseCard
                        purchaseDate={singlePurchase.purchaseDate.toLocaleString()}
                        purchaseName={singlePurchase.purchaseName}
                        purchasePrice={singlePurchase.purchasePrice}
                        onPress={null}
                    /> */}
            </View>
            <View style={styles.btnContainer}>
                <PrimaryBtn
                    text='Cancel'
                    onPress={cancelHandler}
                />
                <PrimaryBtn
                    text='Update'
                    onPress={updateExpenseHandler}
                    bgColor={COLORS.secondary}
                />
            </View>
            <Ionicons onPress={deleteHandler} name='trash' style={styles.trashIcon} />
        </View>
    )
}

export default EditPurchaseScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 24,
        backgroundColor: COLORS.primary
    },
    purchaseInfoContainer: {
        width: '100%'
    },

    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderColor: COLORS.dimWhite,
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