import { View, Text, StyleSheet } from 'react-native'


export default function RepositoryItem(props) {
    return (
        <View style={styles.container}>
        <Text style={styles.strong}>{props.name}</Text>
        <Text>{props.value}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    strong: {
        fontWeight: 'bold'
    }
})