import { View, StyleSheet, Image, Text } from "react-native";

import { PostImage } from "../PostImage/PostImage";

export const PostsListItem = ({post, screen}) => <View style={styles.container}>
    <PostImage source={post.img} />
    <Text style={styles.title}>{post.title}</Text>
    <View style={styles.details}>
        <View style={styles.comment}>
            <Image source={require('../../assets/img/message.png')} style={styles.commentImg}/>
            <Text style={styles.commentCount}>{post.comments}</Text>
        </View>
        <View style={styles.comment}>
            <Image source={require('../../assets/img/mapPin.png')} style={styles.commentImg}/>
            <Text style={styles.location}>{post.location}</Text>
        </View>
    </View>
</View>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 32,
    },
    title: {
        marginBottom: 8,
        fontFamily: "Roboto-Medium",
        fontSize: 16,
        lineHeight: 19,
        color: "#212121",
    },
    details: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    comment: {
        flexDirection: "row",
    },
    commentImg: {
        height: 18,
        width: 18,
        marginRight: 9,
    },
    commentCount: {
        fontFamily: "Roboto-Regular",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
        color: "#BDBDBD",
    },
    location: {
        fontFamily: "Roboto-Regular",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
        textDecorationLine: "underline",
        color: "#212121",
    }
});