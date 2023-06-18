import { ScrollView } from 'react-native';

import { PostsListItem } from '../PostsListItem/PostsListItem';

export const PostsList = ({posts, screen}) => <ScrollView style={{
    paddingHorizontal: 16,
    paddingBottom: 43,
}}>
    {posts.map((post) => <PostsListItem key={post.id} post={post} screen={screen}/>)}
</ScrollView>;