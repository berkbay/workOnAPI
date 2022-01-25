import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const Product = ({navigation}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
                <Text>Product</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Product;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    }
})
