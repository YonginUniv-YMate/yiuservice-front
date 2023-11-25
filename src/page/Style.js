import { StyleSheet } from "react-native";
import { Color, Padding, FontSize, FontFamily, Border } from "../assets/GlobalStyles";

export const styles = StyleSheet.create({
    smallCardScroll: {
            paddingHorizontal: 5,
            paddingVertical: 10
    },
    bigCardScroll: {
        paddingHorizontal: 10,
        paddingBottom: 20
    },
    icon26: {
            width: 26,
            height: 26
    },
    smallCardContent: {
            marginTop: 4,
            paddingHorizontal: 5,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            alignSelf: "stretch"
    },
    bigTaxiCardNumber: {
        alignSelf:"stretch", 
        textAlignVertical:"bottom"
    },
    flexView: {
        flex:1,
        alignSelf: "stretch"
    },
    bigCardContent: {
            marginVertical: 4,
            paddingHorizontal: 5,
            paddingBottom: 5,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1,
            alignSelf: "stretch"
    },
    locationTag: {
            backgroundColor: "#86e08f",
            borderRadius: 6,
            height: 17,
            paddingHorizontal: 4,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden"
    },
    cardTitle: {
            flex: 1,
            color: "#000",
            fontFamily: "ABeeZee-Regular",
            fontSize: 14,
            alignItems: "center",
            overflow: "hidden"
    },
    centerText11: {
            color: "#fff",
            textAlign: "center",
            fontSize: 11,
            fontFamily: "ABeeZee-Regular"
    },
    centerText9: {
            fontSize: 9,
            textAlign: "center",
            color: "#000",
            fontFamily: "ABeeZee-Regular"
    },
    centerText10: {
        fontSize: 10,
        textAlign: "center",
        color: "#000",
        fontFamily: "ABeeZee-Regular"
    },
    centerText18: {
        fontSize: 18,
        textAlign: "center",
        color: "#000",
        fontFamily: "ABeeZee-Regular"
    },
    noticeTitle: {
        fontSize: 11,
        color: "#000",
        fontFamily: "ABeeZee-Regular",
        overflow: "hidden",
        flex: 1,
        marginRight: 10
    },
    smallNoticeCard: {
            borderWidth: 1,
            padding: 10,
            alignItems: "center",
            flexDirection: "row",
            overflow: "hidden",
            marginTop: 5,
            marginHorizontal: 5,
            justifyContent: "space-between",
            borderColor: "rgba(0, 0, 0, 0.1)",
            borderStyle: "solid",
            alignSelf: "stretch"
    },
    navigationButton: {
            marginHorizontal: 8,
            height: 47,
            width: 45,
            alignItems: "center",
            overflow: "hidden"
    },
    icon24: {
            width: 24,
            height: 24
    },
    locationText: {
            marginLeft: 3,
            textAlign: "center",
            fontFamily: "ABeeZee-RegularW",
            fontSize: 14,
            color: "#000"
    },
    locationButton: {
            flexDirection: "row",
            alignItems: "center"
    },
    rowView: {
            flexDirection: "row",
            alignItems: "center"
    },
    activeAlramIcon: {
            top: 1,
            left: 21,
            width: 6,
            height: 6,
            position: "absolute"
    },
    alrambutton: {
            overflow: "hidden"
    },
    uppermenu: {
            shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowOffset: {
                width: 0,
                height: 4
            },
            shadowRadius: 4,
            elevation: 4,
            shadowOpacity: 1,
            borderBottomWidth: 1,
            height: 51,
            paddingHorizontal: 14,
            justifyContent: "space-between",
            paddingVertical: 8,
            flexDirection: "row",
            alignItems: "center",
            borderColor: "rgba(0, 0, 0, 0.1)",
            borderStyle: "solid",
            overflow: "hidden",
            alignSelf: "stretch"
    },
    advertiseImage: {
            maxWidth: "100%",
            height: 75,
            overflow: "hidden",
            alignSelf: "stretch",
            width: "100%"
    },
    marginLeft3: {
            marginLeft: 3
    },
    clickText13: {
            fontSize: 13,
            color: "#22a2f2",
            textAlign: "center",
            fontFamily: "ABeeZee-Regular"
    },
    icon11: {
            width: 11,
            height: 11
    },
    tempViewToImage: {
            borderRadius: 11,
            backgroundColor: "#F9E583",
            width: 170,
            height: 96,
            alignSelf: "stretch"
    },
    smallCard: {
            marginLeft: 10,
            height: 150,
            width: 170,
            alignItems: "center"
    },
    bigCard: {
            marginTop: 10,
            flexDirection: "row",
            height: 96,
            alignSelf: "stretch",
            alignItems: "center"
    },
    mainSectionList: {
            height: 170,
            alignSelf: "stretch"
    },
    mainSectionTitle: {
            paddingHorizontal: 15,
            paddingBottom: 6,
            borderColor: "rgba(0, 0, 0, 0.3)",
            borderBottomWidth: 1,
            alignItems: "center",
            alignSelf: "stretch",
            justifyContent: "space-between",
            flexDirection: "row",
            overflow: "hidden"
    },
    mainSection: {
            marginTop: 7,
            paddingTop: 10,
            justifyContent: "center",
            overflow: "hidden",
            alignSelf: "stretch",
            backgroundColor: "#fff",
            flex: 1
    },
    icon17: {
            width: 17,
            height: 17
    },
    icon16: {
            width: 16,
            height: 16
    },
    mainBody: {
            backgroundColor: "#f2f2f2",
            width: "100%",
            alignSelf: "stretch",
            flexDirection: "row",
            flex: 1
    },
    icon30: {
            width: 30,
            height: 30
    },
    margintop3: {
            marginTop: 3
    },
    margintop6: {
        marginTop: 6
    },
    opacity70: {
            opacity: 0.7
    },
    navigationBar: {
            backgroundColor: "#22a2f2",
            paddingHorizontal: 10,
            paddingVertical: 10,
        //     paddingBottom: 23,
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "stretch"
    },
    mainBackground: {
            flex: 1
    },
    icon50: {
            width: 50,
            height: 50
    },
    writeButton: {
            right: 15,
            bottom: 90,
            position: "absolute"
    },
    backgroundWhite: {
            backgroundColor: "#fff",
            borderWidth: 0,
            borderRadius: 25
    },
    mainScreen: {
            flex: 1,
    },
    loginBody: {
        backgroundColor: "#f2f2f2",
        width: "100%",
        alignSelf: "stretch",
        flexDirection: "column",
        flex: 1
    },
    loginTitle: {
        fontSize: 30,
        width: 115,
        display: "flex",
        color: Color.colorBlack,
        justifyContent: "center",
        alignItems: "center",
    },
    loginImage: {
        width: '90%',
        height: 100,
    },
    loginTitleBar: {
        flex:1,
        alignItems: "center",
    },
    inputBar: {
        marginTop: 4,
        paddingHorizontal: 5,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        alignSelf: "stretch"
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height:40,
    },
    inputText:{
        fontSize: 15,
         width: 60,
        color: Color.colorBlack,
    },
    input: {
        width: 190,
        borderWidth: 1,
        borderColor: Color.colorGray,
        borderStyle: "solid",
        borderRadius: Border.br_7xs,
        justifyContent: "center",
        height: 33,
        alignItems: "center",
    },
    buttonBar:{

    },
    text3: {
        textAlign:"right",
        fontSize: 13,
        color: "#e14a4a",
        textDecoration: "underline",
   },

})