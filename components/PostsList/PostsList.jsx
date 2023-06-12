import { ScrollView } from 'react-native';

import { PostsListItem } from '../PostsListItem/PostsListItem';

export const PostsList = ({posts, screen}) => <ScrollView style={{margin: 0, padding: 0}}>
    {posts.map((post) => <PostsListItem key={post.title + new Date()} post={post} screen={screen}/>)}
</ScrollView>;