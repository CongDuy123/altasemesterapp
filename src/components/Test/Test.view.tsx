import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import { styles } from "./Test.style";

const Test = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Text>7</Text>
            </TouchableOpacity>
        </View>

    )
}

export default Test;