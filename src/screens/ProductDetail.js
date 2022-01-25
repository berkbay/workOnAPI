import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const ProductDetail = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Text>Product Detail</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ProductDetail;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    }
})
