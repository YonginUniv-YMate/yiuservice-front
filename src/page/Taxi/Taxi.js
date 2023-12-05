import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView, Alert, RefreshControl, FlatList} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";
import {styles} from "../Style"
import {WriteButton, TaxiCard, TopMenu} from '../../components'


const Taxi = ({navigation}) => {
	const [refreshing, setRefreshing] = React.useState(false)

	
	const TaxiData = [
		{
			tId: 123123123,
			title: "집 가고싶다",
			due: new Date('2023-12-05T17:19:00'),
			startCode: 10000001,
			endCode: 10000003,
			current: 3,
			max: 4,
			createAt: 3322111,
		},
		{
			tId: 123123124,
			title: "집 가고싶다집 가고싶다집 가고싶다",
			due: new Date('2023-12-04T17:55:00'),
			startCode: 10000002,
			endCode: 10000003,
			current: 3,
			max: 4,
			createAt: 3322111,
		},
		{
			tId: 123123125,
			title: "집 가고싶다",
			due: new Date('2023-12-04T17:55:00'),
			startCode: 10000003,
			endCode: 10000003,
			current: 3,
			max: 4,
			createAt: 3322111,
		},
		{
			tId: 123123126,
			title: "집 가고싶다",
			due: new Date('2023-12-05T11:55:00'),
			startCode: 10000004,
			endCode: 10000003,
			current: 3,
			max: 4,
			createAt: 3322111,
		},
		{
			tId: 123123127,
			title: "집 가고싶다",
			due: new Date('2023-12-04T15:55:00'),
			startCode: 10000005,
			endCode: 10000003,
			current: 2,
			max: 7,
			createAt: 3322111,
		},
		{
			tId: 123123128,
			title: "집 가고싶다",
			due: new Date('2023-12-04T15:55:00'),
			startCode: 10000005,
			endCode: 10000003,
			current: 2,
			max: 7,
			createAt: 3322111,
		},
		{
			tId: 123123129,
			title: "집 가고싶다",
			due: new Date('2023-12-04T15:55:00'),
			startCode: 10000005,
			endCode: 10000003,
			current: 2,
			max: 7,
			createAt: 3322111,
		},
		{
			tId: 123123130,
			title: "집 가고싶다",
			due: new Date('2023-12-04T15:55:00'),
			startCode: 10000005,
			endCode: 10000003,
			current: 2,
			max: 7,
			createAt: 3322111,
		},
		{
			tId: 123123131,
			title: "집 가고싶다",
			due: new Date('2023-12-04T15:55:00'),
			startCode: 10000005,
			endCode: 10000003,
			current: 2,
			max: 7,
			createAt: 3322111,
		}
	]

  	return (
		<>
    		<SafeAreaView style={styles.mainScreen}>
      			<View style={styles.mainBackground}>
					<TopMenu/>
					<View style={styles.mainBody}>
						<View name="taxiSection" style={styles.mainSection}>
							<View style={styles.mainSectionTitle}>
								<View style={styles.rowView}>
										<Image style={styles.icon24} resizeMode="cover" source={require("../../assets/images/taxi.png")}/>
										<Text style={[styles.centerText18, styles.marginLeft3]}>같이 택시</Text>
									</View>
								<Pressable style={styles.rowView} onPress={()=>Alert.alert("배달더보기")}>
									<Text style={styles.clickText13}>마감 가가운 순</Text>
									<Image style={styles.icon11} resizeMode="cover" source={require("../../assets/images/down_blue.png")}/>
								</Pressable>
							</View>
								<FlatList
									contentContainerStyle={styles.bigCardScroll}
									showsHorizontalScrollIndicator={false}
									data={TaxiData}
									renderItem={({item}) => <TaxiCard size={1} tId={item.tId} title={item.title} due={item.due} startCode={item.startCode} endCode={item.endCode} current={item.current} max={item.max}/>}
									keyExtractor={item => item.tId}
									refreshControl={<RefreshControl refreshing={refreshing} onRefresh={()=>Alert.alert("새로고침")}/>}
								/>
						</View>
					</View>
      			</View>
    		</SafeAreaView>
			<WriteButton onPress={() => navigation.navigate('TaxiRecruit')}/>
		</>);
};



export default Taxi;
