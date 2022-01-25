import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";

const Product = ({navigation}) => {
    const [product, setProduct] = useState([])

    const getData = () => {
        axios.get('http://localhost:3000/products')
            .then((response) => {
                setProduct(response.data)
            })
    }

    useEffect(() => {
        getData();
    },[]);

    const arr = product.map((data, index) => {
        return (
            <Text key={data.name}>{data.name}</Text>
        );
    })

    return(
        <View style={styles.container}>
            {arr}
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
