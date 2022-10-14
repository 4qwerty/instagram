import * as React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    PermissionsAndroid,
    TouchableOpacity,
    Text,
} from 'react-native';

import * as ImagePicker from 'react-native-image-picker';
import {useCallback, useState} from 'react';

export default function CreatePost() {
    const [response, setResponse] = React.useState<any>(null);
    const includeExtra = true;

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'App Camera Permission',
                    message: 'App needs access to your camera ',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Camera permission given');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    requestCameraPermission();

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

    return (
        <SafeAreaView>
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

            <TouchableOpacity
                style={styles.buttonCreatePostContainer}
                onPress={() =>
                    onButtonPress('capture', {
                        saveToPhotos: true,
                        mediaType: 'photo',
                        includeBase64: false,
                        includeExtra,
                    })
                }
            >
                <Text style={styles.buttonCreatePostText}>POST</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

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
        width: 400,
        height: 400,
        backgroundColor: '#d9d7d7',
    },
    image: {
        width: 370,
        height: 370,
    },
});
