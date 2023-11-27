import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { FontFamily, Color, Border, FontSize, Padding } from "../../assets/GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import {styles} from "../Style"

const DeliveryRequest = () => {
  return (
    <SafeAreaView style={styles.mainScreen}>
      <View style={styles.mainBackground}>
          <View style={styles.uppermenu}>
            <Pressable style={styles.locationButton} onPress={() => {}}>
                <Image
                style={styles.icon20}
                resizeMode="cover"
                source={require("../../assets/images/left.png")}
                />
            </Pressable>
            <Text style={[styles.text20]}>
                배달 신청 작성
            </Text>
            <View style={[styles.icon20]} />
          </View>

          <View style={[styles.recruitSection]}>

            <View>
              <Text style={styles.text12}>제목</Text>
              <View style={[styles.recruitInput]} />
            </View>
            <View style={[styles.margintop9]}>
              <Text style={styles.text12}>내용</Text>
              <View style={[styles.recruitInput, styles.recruitContent]} />
            </View>
            <Text style={[styles.text11, styles.rightGrayText, styles.margintop9]}>
                {`신청 수락 전에는 제목만 노출됩니다.
                내용에는 연락수단을 입력하세요.`}
            </Text>
            <View style={[styles.flexView]} />
            <Text style={[styles.errorText]}>
              입력되지 않은 정보가 있습니다.
            </Text>
          </View>
          <View style={[styles.bottomContainer]}>
            <Pressable style={styles.bottomButton} onPress={() => {}}>
              <Text style={[styles.text16, styles.whiteText]}>신청 등록</Text>
            </Pressable>
          </View>
      </View>
    </SafeAreaView>
  );
};


export default DeliveryRequest;