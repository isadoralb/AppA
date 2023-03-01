import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}