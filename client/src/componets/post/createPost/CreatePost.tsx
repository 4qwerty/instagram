import * as React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    Text, TextInput, Alert,
} from 'react-native';
import storage from '@react-native-firebase/storage';
import * as ImagePicker from 'react-native-image-picker';
import {useCallback, useState} from 'react';
import {Post} from "../../../models/Post";
import users from "../../../store/users"
import { observer } from 'mobx-react-lite'

const CreatePost: React.FC = observer(() => {
    const [response, setResponse] = useState<any>(null);
    const [inputValue, setInputValue] = useState('');
    const userId = users.userId
    const includeExtra = true;

    const submitPost = async (data: Post) => {
        const uploadUir = response.assets[0].uri;
        const fileName = uploadUir.substring(uploadUir.lastIndexOf('/') + 1);
        const storageRef = storage().ref(`photos/${fileName}`);
        await storageRef.putFile(uploadUir);

        const url = await storageRef.getDownloadURL()
            .catch((error: any) => {
                console.log(error)
            });

        await fetch(`https://d11b-185-244-169-80.eu.ngrok.io/posts/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...data, imageUrl: url}),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setResponse('')
                setInputValue('')
                showAlert()
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const onButtonPress = useCallback(
        (
            type: string,
            options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions,
        ) => {
            if (type === 'capture') {
                ImagePicker.launchCamera(options, setResponse);
            } else {
                ImagePicker.launchImageLibrary(options, setResponse);
            }
        },
        [],
    );

    const showAlert = () => {
        Alert.alert(
            "Success",
            "Post created",
        );
    }

    return (
        <SafeAreaView style={{
            justifyContent: "center"
        }}>
            <View style={styles.imageContainer}>
                {response?.assets &&
                    response?.assets.map(({uri}: {uri: string}) => (
                        <View key={uri} >
                            <Image
                                resizeMode="cover"
                                resizeMethod="scale"
                                style={styles.image}
                                source={{uri: uri}}
                            />
                        </View>
                    ))
                }
            </View>

            <View style={styles.buttonSetImageContainer}>
                <TouchableOpacity
                    onPress={() =>
                        onButtonPress('library', {
                            selectionLimit: 0,
                            mediaType: 'photo',
                            includeBase64: false,
                            includeExtra,
                        })
                    }
                >
                    <Text style={styles.buttonSetImageText}>DOWNLOAD FROM GALLERY</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() =>
                        onButtonPress('capture', {
                            saveToPhotos: true,
                            mediaType: 'photo',
                            includeBase64: false,
                            includeExtra,
                        })
                    }
                >
                    <Text style={styles.buttonSetImageText}>MAKE PHOTO</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.textAreaContainer} >
                <TextInput
                    style={styles.textArea}
                    value={inputValue}
                    onChangeText={(value) => setInputValue(value)}
                    placeholder="Enter your post..."
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                />
            </View>

            <TouchableOpacity
                style={styles.buttonCreatePostContainer}
                onPress={async () => {
                    await submitPost ({
                        _id: "",
                        message: inputValue
                    })
                }}
            >
                <Text style={styles.buttonCreatePostText}>POST</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
})

const styles = StyleSheet.create({
    buttonSetImageContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },
    buttonSetImageText: {
        margin: 20,
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 16,
        color: "#000",
    },
    buttonCreatePostContainer: {
        margin: 20,
        elevation: 8,
        backgroundColor: "#ffffff",
        border: 10,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    buttonCreatePostText: {
        justifyContent: "center",
        fontSize: 17,
        color: "#000",
        alignSelf: "center",
    },
    imageContainer: {
        width: 415,
        height: 400,
        backgroundColor: '#d9d7d7',
    },
    image: {
        width: 415,
        height: 400,
    },

    textAreaContainer: {
        borderColor: "#595959",
        borderWidth: 1,
        padding: 5
    },
    textArea: {
        height: 125,
        width: 200,
    }
});

export default CreatePost