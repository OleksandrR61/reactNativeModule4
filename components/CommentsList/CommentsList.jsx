import { ScrollView, StyleSheet } from "react-native";

import { CommentsListItem } from "../CommentsListItem/CommentsListItem";

export const CommentsList = ({comments}) => <ScrollView style={styles.container}>
    {comments.map(comment => <CommentsListItem
        key={comment.comment.slice(0, 16) + new Date()}
        comment={comment}
    />)}
    
</ScrollView>;

const styles = StyleSheet.create({
    container: {
        marginVertical: 24,
    },
});