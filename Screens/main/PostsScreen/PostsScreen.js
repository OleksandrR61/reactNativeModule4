import { PostsContainer, PostsUser, PostsList } from "../../../components";

const examplePosts = [
    {
        img: require('../../../assets/img/postImgExample1.jpg'),
        title: "Ліс",
        comments: 0,
        location: "Ivano-Frankivs'k Region, Ukraine",
    },
    {
        img: require('../../../assets/img/postImgExample2.jpg'),
        title: "Захід на Чорному морі",
        comments: 3,
        location: "Ukraine",
    },
    {
        img: require('../../../assets/img/postImgExample3.jpg'),
        title: "Старий будиночок у Венеції",
        comments: 50,
        location: "Italy",
    },
]

const PostsScreen = () => <PostsContainer>
        <PostsUser />
        <PostsList posts={examplePosts} screen={"posts"}/>
    </PostsContainer>;

export default PostsScreen;