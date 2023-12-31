
import { View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import PrimaryBtn from "../components/PrimaryBtn";
import COLORS from "../globalStyles/colors";
import data from "../data/purchases";
import ExpenseCard from "../components/ExpenseCard";

function SinglePurchaseScreen({ route }) {
    const { purchaseId } = route.params

    const [singlePurchase, setSinglePurchase] = useState(null)
    useEffect(() => {
        setSinglePurchase(data.filter((purchase) => purchase.id === purchaseId)[0])
    }, [purchaseId, data])

    console.log('single purchase', singlePurchase)


    return (
        <View style={styles.root}>
            <View style={styles.purchaseInfoContainer}>
                {singlePurchase &&
                    <ExpenseCard
                        purchaseDate={singlePurchase.purchaseDate.toLocaleString()}
                        purchaseName={singlePurchase.purchaseName}
                        purchasePrice={singlePurchase.purchasePrice}
                        onPress={null}
                    />
                }
            </View>
            <View style={styles.btnContainer}>
                <PrimaryBtn
                    text='Cancel'
                    onPress={() => console.log('hi')}
                />
                <PrimaryBtn
                    text='Update'
                    onPress={() => console.log('hi')}
                    bgColor={COLORS.secondary}
                />
            </View>
            <Ionicons name='trash' style={styles.trashIcon} />
        </View>
    )
}

export default SinglePurchaseScreen;

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