import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const Welcome = ({navigation}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                <Text>Welcome</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    }
})
