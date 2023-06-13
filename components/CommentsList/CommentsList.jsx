import { ScrollView, StyleSheet } from "react-native";

import { CommentsListItem } from "../CommentsListItem/CommentsListItem";

export const CommentsList = ({comments}) => <ScrollView style={styles.container}>
    {comments.map((comment, index) => <CommentsListItem
        key={comment.text.slice(0, 16) + new Date()}
        comment={comment}
        isOdd={index % 2 === 0}
    />)}
    
</ScrollView>;

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        marginBottom: 8,
    },
});