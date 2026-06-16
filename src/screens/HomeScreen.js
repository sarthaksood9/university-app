import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { universities } from "../data/universities";
import UniversityCard from "../components/UniversityCard";

const HomeScreen = ({ navigation }) => {
	const renderItem = ({ item }) => (
		<View style={styles.cardWrapper}>
			<UniversityCard
				university={item}
				onPress={() => navigation.navigate("Details", { university: item })}
			/>
		</View>
	);

	return (
		<>
			<View style={styles.headerContainer}>
				<Text style={styles.title}>University List</Text>
			</View>
			<FlatList
				data={universities}
				keyExtractor={(item) => item.id.toString()}
				renderItem={renderItem}
				contentContainerStyle={{
					paddingHorizontal: "5%",
					paddingBottom: 24,
					alignItems: "center",
				}}
				ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		paddingVertical: 16,
		paddingHorizontal: "5%",
	},
	cardWrapper: {
		alignSelf: "center",
	},
	itemSeparator: {
		height: 14,
	},
	title: {
		fontSize: 28,
		fontWeight: "700",
		color: "#111827",
		marginTop: 0,
		marginBottom: 0,
	},
});

export default HomeScreen;