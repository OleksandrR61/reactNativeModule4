import { PostsContainer, PostImage, CommentsList } from "../../../components/";
import { View, StyleSheet } from "react-native";

const exampleComments = [
    {
        author: require('../../../assets/img/exampleAvatar.jpg'),
        comment: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        date: "09 червня, 2020 | 08:40",
    },
    {
        author: require('../../../assets/img/userExample.jpg'),
        comment: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        date: "09 червня, 2020 | 09:14",
    },
    {
        author: require('../../../assets/img/exampleAvatar.jpg'),
        comment: "Thank you! That was very helpful!",
        date: "09 червня, 2020 | 09:20",
    },
]

const CommentsScreen = () => {
    return <View style={{flex:1}}><PostsContainer>
        <PostImage
            source={require('../../../assets/img/postImgExample2.jpg')}
        />
        <CommentsList comments={exampleComments} />
    </PostsContainer><View style={styles.wtf}/></View>;
};

export default CommentsScreen;

const styles = StyleSheet.create({
    wtf: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: "red",
        position: "absolute",
        bottom: 0,
    }
});