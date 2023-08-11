import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
const tablet = true
if (Dimensions.get('window').width > 600) {
    const tablet = false
}
export default StyleSheet.create({


    group3: {
        width: 330,
        height: 170,
        marginTop: -5,
        marginLeft: 0,
        paddingTop: 30,
        paddingLeft: 15,
        backgroundColor: "#c8b5a6",
        marginBottom: 0
    },
    rect18: {
        backgroundColor: "#c8b5a6",
        borderRadius: 100,
        flex: 1,
        width: 70,
        height: 100,
        marginBottom: 4,
        marginTop: 10,
    },
    image: {
        width: 65,
        height: 65,
        marginLeft: 2,
        marginTop: 2,
        borderRadius: 1000
    },
    CustomNavLeft: {
        backgroundColor: '#ffffff',
        position: 'relative',
    },
    usernamedsColumnRow: {
        display: 'flex',
        flexDirection: "column",
        height: 130,
        // backgroundColor: 'red'
    },
    usernamedsColumn: {
        width: 176,
        marginTop: 0,
        marginBottom: 0
    },
    usernameds: {
        fontFamily: "roboto-regular",
        color: "#625347",
        fontWeight: 'bold',
        fontSize: 20
    },
    usernameds2: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 18,
        marginTop: 5
    },
    // <View style={styles.usernameDays}>
    //         <Text style={styles.userNameDays_text}>Период: 2 дня</Text>
    //       </View>
    userNameDays_text: {
        color: '#99816f',
    },
    RootNavLineRow: {
        display: 'flex',
        flexDirection: 'row',
        width: 330,
        backgroundColor: '#ffffff',
        height: 50,
        paddingLeft: 10
    },
    RootNavLineRowLast: {
        display: 'flex',
        flexDirection: 'row',
        width: 330,
        backgroundColor: '#ffffff',
        height: 50,
        paddingLeft: 10
    },
    RootNavLineText: {
        marginTop: 12,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.5)'
    },
    RootNavLineImg: {
        width: 25,
        height: 25,
        marginLeft: 20,
        marginTop: 10,
        marginRight: 35
    },

    RootNavLineLast: {
        marginTop: 20
    },
    RootNavLineTextLast: {
        // marginTop: 120,
        // marginLeft: 0,
        fontSize: 15,
        fontWeight: 'bold',
        position: 'absolute',
        top: Dimensions.get('window').height - 50,
        zIndex: 9
    },
    WhiteEmptyBox: {
        height: Dimensions.get('window').height - 425,
        backgroundColor: '#ffffff'
    },
    RootNavLineTextLastRed: {
        marginTop: 12,
        marginLeft: 20,
        fontSize: 16,
        color: "rgba(188,45,63,1)",
        fontWeight: 'bold'
    },

    RootNavLineTextLast_icon: {
        top: 9,
        position: "absolute",
        color: "rgba(110,110,110,1)",
        fontSize: 28,
        transform: [{
            rotate: "270.00deg"
        }],
        right: 15
    },
    pageService: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#f2f2f7',
    },
    centerCenter: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    topPanel: {
        flexDirection: 'row',
        height: 56,
        width: Dimensions.get('window').width,
        backgroundColor: '#bc2d3f',
        alignItems: 'center',
        position: 'relative',
        zIndex: 999,
        justifyContent: 'flex-start',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 22,
    },
    topPanelEdit: {
        flexDirection: 'row',
        height: 56,
        width: Dimensions.get('window').width,
        backgroundColor: '#bc2d3f',
        alignItems: 'center',
        position: 'relative',
        zIndex: 999,
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 22,
    },
    topPanelBar: {
        color: 'white',
        paddingRight: 30,
        paddingLeft: 19,

    },
    topPanelText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemServiceText: {
        marginTop: 30

    },
    wrapperService: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: Dimensions.get('window').width,
        height: tablet ? 180 : Dimensions.get('window').height / 4.5,
        paddingLeft: 5,
        paddingRight: 5,
    },
    itemService: {
        flexDirection: 'column',
        height: tablet ? 150 : Dimensions.get('window').height / 5,
        width: Dimensions.get('window').width / 2 - 40,
        backgroundColor: 'white',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        flexWrap: 'wrap',
        paddingLeft: 15,
        paddingRight: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.01,
        shadowRadius: 4.65,
        elevation: 0.8,
    },
    itemServiceImg: {
        resizeMode: 'stretch',
        width: tablet ? 56 : Dimensions.get('window').height / 10,
        height: tablet ? 56 : Dimensions.get('window').height / 10,
    },
    itemServiceText: {
        textAlign: 'center',
        marginTop: 13,
        lineHeight: 20,
        fontWeight: 'bold',
        fontSize: tablet ? 14 : Dimensions.get('window').width / 40,
        paddingTop: tablet ? 0 : 10
    },
    itemUserText: {
        textAlign: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    helpText: {
        opacity: 1,
        flexDirection: 'column',
        width: Dimensions.get('window').width - 40,
        height: 45,
        backgroundColor: '#bc2d3f',
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        textAlignVertical: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    itemPodmenuText: {
        textAlign: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    itemNews: {
        textAlign: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width - 40,
        //height: 80,
        margin: 0,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 8,
        marginRight: 7,
        backgroundColor: 'white',
    },
    newsPodrTitle: {
        textAlign: 'left',
        width: Dimensions.get('window').width - 40,
        lineHeight: 24,
        fontSize: tablet ? 20 : Dimensions.get('window').width / 35,
        fontWeight: 'bold',
        color: '#bc2d3f',
        marginTop: 16,
        marginBottom: 10
    },
    newsPodrDateWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: Dimensions.get('window').width - 40
    },
    veticalFlexNews: {
        display: "flex",
        flexDirection: "column",

        justifyContent: "space-between"
    },
    newsPodrDate: {
        color: "rgba(100,100,100,1)",
        fontSize: tablet ? 14 : Dimensions.get('window').width / 50,
        marginBottom: 15
    },
    itemNewsTitle: {
        fontSize: tablet ? 20 : Dimensions.get('window').width / 40,
        width: Dimensions.get('window').width - 120,
        marginTop: 4,
        fontWeight: 'bold'
    },
    itemNewsImage: {
        resizeMode: 'stretch',
        width: tablet ? 60 : 120,
        height: tablet ? 60 : 120,
        marginRight: 8
    },
    itemPublish: {
        display: "flex",
        width: tablet ? Dimensions.get('window').width - 130 : Dimensions.get('window').width - 190,
        flexDirection: "row",
        justifyContent: 'space-between',
        color: "rgba(0,0,0,0.5)",
        paddingRight: 5,
        marginBottom: 15
    },
    newsPodrText: {
        fontSize: tablet ? 16 : Dimensions.get('window').width / 40,
        lineHeight: 24,
        color: "rgba(0,0,0,1)",
        width: Dimensions.get('window').width - 40
    },
    widthSto: {
        width: Dimensions.get('window').width - 40,
    },

    hideItemMenu: {
        height: 0,
        margin: 0,
        padding: 0,
    },
    newsWrapper: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#f2f2f7',
    },
    textInput: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
    },
    textInput4: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
    },
    servicePafgeWrap: {
        width: Dimensions.get('window').width,
        paddingTop: 20,
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    serviceText: {
        marginBottom: 20,
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: 75,
        width: 150,
        height: 150,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});