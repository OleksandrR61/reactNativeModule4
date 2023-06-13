import { useState } from "react";
import { View, TouchableOpacity, Keyboard, ImageBackground } from "react-native";
import { PostsContainer, PostImage, CommentsList, FormInput } from "../../../components/";

const exampleComments = [
    {
        author: require('../../../assets/img/exampleAvatar.jpg'),
        text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        date: "09 червня, 2020 | 08:40",
    },
    {
        author: require('../../../assets/img/userExample.jpg'),
        text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        date: "09 червня, 2020 | 09:14",
    },
    {
        author: require('../../../assets/img/exampleAvatar.jpg'),
        text: "Thank you! That was very helpful!",
        date: "09 червня, 2020 | 09:20",
    },
];

const months = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];

const CommentsScreen = () => {
    const [ comments, setComments ] = useState(exampleComments);
    const [ text, setText ] = useState("");
    
    const handlePress = () => {
        if (text){
            const dateNow = new Date();
            
            setComments(comments => [...comments, {
                author: require('../../../assets/img/userExample.jpg'),
                text,
                date: `${dateNow.getDate() + 1} ${months[dateNow.getMonth()]}, ${dateNow.getFullYear()} | ${dateNow.getHours()}:${dateNow.getMinutes() < 10 ? "0" + dateNow.getMinutes() : dateNow.getMinutes()}`
            }]);
            setText("");
            
            Keyboard.dismiss();
        };
    };

    return <PostsContainer>
        <PostImage
            source={require('../../../assets/img/postImgExample2.jpg')}
        />
        <CommentsList comments={comments} />
        <View style={{position: "relative"}}>
            <FormInput
                placeholder={"Коментувати..."}
                value={text}
                onChangeText={setText}
                style={{
                    borderRadius: 100,
                    fontFamily: "Inter-Medium",
                    fontWeight: "500",
                }}
            />
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={handlePress}
                style={{
                    flex:1,
                    justifyContent: "center",
                    alignItems: "center",
                    height: 34,
                    width: 34,
                    borderRadius: 17,
                    backgroundColor: "#FF6C00",
                    position: "absolute",
                    top: 8,
                    right: 8,
                }}
            >
                <ImageBackground
                    source={require('../../../assets/img/vector.png')}
                    style={{
                        width: 10,
                        height: 14,
                    }}
                />
            </TouchableOpacity>
        </View>
    </PostsContainer>;
};

export default CommentsScreen;