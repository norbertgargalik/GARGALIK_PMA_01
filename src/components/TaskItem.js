import{Text, StyleSheet, Pressable} from 'react-native';

export default function TaskItem() {
    return (
        <Pressable style={styles.taskContainer}>
            <Text>Udalosti</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: "red",
        margin: 4,
        padding: 10,
        borderRadius: 8,
    },
});