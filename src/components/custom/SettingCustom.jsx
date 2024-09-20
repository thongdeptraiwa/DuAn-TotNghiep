import React, { useEffect, useState } from 'react';
import MenuSettingS from '../styles/custom/items/MenuSetting';
import { logout, setTheme, setLanguage } from '../../rtk/Reducer';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Pressable, ToastAndroid, Switch, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';


export const CustomAccountCentre = () => {
    const theme = useSelector(state => state.app.theme);
    const language = useSelector(state => state.app.language);
    //save-outline
    return (
        <Pressable>
            <View style={MenuSettingS.section}>
                <Icon name="people-circle-outline" size={30} color={theme ? "black" : "white"} style={MenuSettingS.icon} />
                <Text style={[MenuSettingS.textSection, { color: theme ? "black" : "white" }]}>{language ? "Account Centre" : "Trung tâm tài khoản"}</Text>
            </View>
        </Pressable>
    )
};

export const CustomSaved = () => {
    const theme = useSelector(state => state.app.theme);
    const language = useSelector(state => state.app.language);
    //save-outline
    return (
        <Pressable>
            <View style={MenuSettingS.section}>
                <Icon name="bookmark-outline" size={30} color={theme ? "black" : "white"} style={MenuSettingS.icon} />
                <Text style={[MenuSettingS.textSection, { color: theme ? "black" : "white" }]}>{language ? "Saved" : "Lưu"}</Text>
            </View>
        </Pressable>
    )
};

export const CustomComments = () => {
    const theme = useSelector(state => state.app.theme);
    const language = useSelector(state => state.app.language);
    //save-outline
    return (
        <Pressable>
            <View style={MenuSettingS.section}>
                <Icon name="chatbubble-outline" size={30} color={theme ? "black" : "white"} style={MenuSettingS.icon} />
                <Text style={[MenuSettingS.textSection, { color: theme ? "black" : "white" }]}>{language ? "Comments" : "Bình luận"}</Text>
            </View>
        </Pressable>
    )
};

export const CustomTab = () => {
    const theme = useSelector(state => state.app.theme);
    const language = useSelector(state => state.app.language);
    return (
        <Pressable>
            <View style={MenuSettingS.section}>
                <Icon name="pricetag-outline" size={30} color={theme ? "black" : "white"} style={MenuSettingS.icon} />
                <Text style={[MenuSettingS.textSection, { color: theme ? "black" : "white" }]}>{language ? "Tabs and mentions" : "Tab và đề cập"}</Text>
            </View>
        </Pressable>
    )
};
export const CustomLanguage = () => {
    const [switchValue, setSwitchValue] = useState(false);
    const dispatch = useDispatch();
    const theme = useSelector(state => state.app.theme);
    const language = useSelector(state => state.app.language);

    // Shared value để lưu trữ vị trí của icon trong thanh Switch
    const translateX = useSharedValue(0);

    const onLanguage = () => {
        dispatch(setLanguage());
        setSwitchValue(!switchValue);

        // Thay đổi giá trị translateX dựa trên switchValue
        translateX.value = switchValue ? withTiming(0) : withTiming(35); // Chuyển đổi vị trí
    };

    // Sử dụng Animated Style cho icon
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }]
        };
    });

    return (
        <Pressable>
            <View style={MenuSettingS.section}>
                <Icon name="globe-outline" size={30} color={theme ? "black" : "white"} style={MenuSettingS.icon} />
                <Text style={[MenuSettingS.textSection, { color: theme ? "black" : "white" }]}>
                    {language ? "Language:  " : "Ngôn ngữ:  "}
                </Text>
                <Pressable onPress={onLanguage}>
                    <View style={{
                        width: 60,  // Chiều rộng của thanh Switch
                        height: 25, // Chiều cao của thanh Switch
                        borderRadius: 30,
                        backgroundColor: switchValue ? "#92b7f5" : "#eee", // Thay đổi màu nền dựa trên switchValue
                        justifyContent: 'center',
                    }}>
                        <Animated.View style={[{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: switchValue ? "#fff" : "#000", // Thay đổi màu nền
                        }, animatedStyle]}>
                            <Text style={{
                                color: switchValue ? "#000" : "#fff" // Thay đổi màu chữ
                            }}>
                                {switchValue ? "VN" : "EN"}
                            </Text>
                        </Animated.View>
                    </View>
                </Pressable>
            </View>
        </Pressable>
    );
};
export const CustomTheme = () => {
    const [switchValue, setSwitchValue] = useState(false);
    const dispatch = useDispatch();
    const theme = useSelector(state => state.app.theme); // true = dark, false = light
    const language = useSelector(state => state.app.language);

    // Shared value để lưu trữ vị trí của icon trong thanh Switch
    const translateX = useSharedValue(0);

    // Khi component render, đồng bộ giá trị switchValue và translateX với theme
    useEffect(() => {
        setSwitchValue(theme); // Đồng bộ switch với theme
        translateX.value = theme ? withTiming(35) : withTiming(0); // Đồng bộ vị trí icon
    }, [theme]);

    const onThemeChange = () => {
        dispatch(setTheme()); // Thay đổi theme trong Redux
        setSwitchValue(prevValue => !prevValue); // Cập nhật giá trị switch

        // Cập nhật vị trí translateX dựa trên switchValue hiện tại
        translateX.value = switchValue ? withTiming(0) : withTiming(35); // Chuyển đổi vị trí
    };

    // Sử dụng Animated Style cho icon
    const animatedStyle = useAnimatedStyle(() => {
        'worklet';
        return {
            transform: [{ translateX: translateX.value }]
        };
    });

    return (
        <Pressable >
            <View style={MenuSettingS.section}>
                <Icon name={switchValue ? "moon" : "sunny-outline"} size={30} color={theme ? "black" : "white"} style={MenuSettingS.icon} />
                <Text style={[MenuSettingS.textSection, { color: theme ? "black" : "white" }]}>
                    {language ? (switchValue ? "Theme: " : "Theme: ") : (switchValue ? "Chế độ tối: " : "Chế độ sáng: ")}
                </Text>
                <Pressable onPress={onThemeChange}>
                    <View style={{
                        width: 60,  // Chiều rộng của thanh Switch
                        height: 25, // Chiều cao của thanh Switch
                        borderRadius: 30,
                        backgroundColor: switchValue ? "#333" : "#eee", // Thay đổi màu nền dựa trên switchValue
                        justifyContent: 'center',
                    }}>
                        <Animated.View style={[{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: switchValue ? "#fff" : "#000", // Thay đổi màu nền
                        }, animatedStyle]}>
                            <Icon name={switchValue ? "moon" : "sunny-outline"} size={18} color={switchValue ? "#000" : "#fff"} />
                        </Animated.View>
                    </View>
                </Pressable>
            </View>
        </Pressable>
    );
};



export const CustomBin = () => {
    const theme = useSelector(state => state.app.theme);
    const language = useSelector(state => state.app.language);
    return (
        <Pressable>
            <View style={MenuSettingS.section}>
                <Icon name="trash-bin-outline" size={30} color={theme ? "black" : "white"} style={MenuSettingS.icon} />
                <Text style={[MenuSettingS.textSection, { color: theme ? "black" : "white" }]}>{language ? "Bin" : "Thùng rác"}</Text>
            </View>
        </Pressable>
    )
};
export const CustomMoreSetting = () => {
    const theme = useSelector(state => state.app.theme);
    const language = useSelector(state => state.app.language);
    return (
        <Pressable>
            <View style={MenuSettingS.section}>
                <Icon name="settings-outline" size={30} color={theme ? "black" : "white"} style={MenuSettingS.icon} />
                <Text style={[MenuSettingS.textSection, { color: theme ? "black" : "white" }]}>{language ? "More Setting" : "Cài đặt thêm"}</Text>
            </View>
        </Pressable>
    )
};


export const CustomLogout = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.app.theme);
    const language = useSelector(state => state.app.language);

    const onLogout = () => {
        Alert.alert(
            "Xác nhận đăng xuất",
            "Bạn có chắc chắn muốn đăng xuất?",
            [
                {
                    text: "Hủy",
                    onPress: () => console.log("Đã hủy"),
                    style: "cancel"
                },
                {
                    text: "Đăng xuất",
                    onPress: () => {
                        dispatch(logout());
                        ToastAndroid.show('Đã đăng xuất', ToastAndroid.SHORT);
                    },
                    style: "destructive"
                }
            ]
        );
    };

    return (
        <Pressable onPress={onLogout}>
            <View style={MenuSettingS.section}>
                <Icon name="log-out-outline" size={30} style={MenuSettingS.icon} color="#FF0000" />
                <Text style={[MenuSettingS.textSection, { color: theme ? "black" : "white" }]}>{language ? "Logout" : "Đăng xuất"}</Text>
            </View>
        </Pressable>
    );

};

