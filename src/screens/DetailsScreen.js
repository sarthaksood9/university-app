import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const DetailsScreen = ({ route }) => {
	const { university } = route.params;

	return (
		<View style={styles.safeArea}>
			<ScrollView contentContainerStyle={styles.container}>
				<View style={styles.content}>
					<Image source={{ uri: university.imageUrl }} style={styles.image} />
					<Text style={styles.title}>{university.university}</Text>
					<Text style={styles.country}>{university.country}</Text>

					<View style={styles.infoRow}>
						<Text style={styles.infoLabel}>Ranking</Text>
						<Text style={styles.infoValue}>{university.ranking}</Text>
					</View>
					<View style={styles.infoRow}>
						<Text style={styles.infoLabel}>Tuition Fee</Text>
						<Text style={styles.infoValue}>{university.tuitionFee}</Text>
					</View>

					<Text style={styles.sectionTitle}>Program Overview</Text>
					<Text style={styles.description}>{university.description}</Text>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#f3f4f6",
	},
	container: {
		paddingHorizontal: "5%",
		paddingVertical: 16,
		paddingBottom: 24,
	},
	content: {
		width: "100%",
		maxWidth: 720,
		alignSelf: "center",
	},
	image: {
		width: "100%",
		aspectRatio: 16 / 9,
		borderRadius: 14,
		marginBottom: 14,
	},
	title: {
		fontSize: 24,
		fontWeight: "700",
		marginBottom: 4,
		color: "#0f172a",
	},
	country: {
		fontSize: 16,
		color: "#475569",
		marginBottom: 16,
	},
	infoRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 10,
		borderTopWidth: 1,
		borderTopColor: "#e5e7eb",
	},
	infoLabel: {
		fontSize: 14,
		fontWeight: "600",
		color: "#374151",
	},
	infoValue: {
		fontSize: 14,
		fontWeight: "500",
		color: "#111827",
	},
	sectionTitle: {
		fontSize: 16,
		fontWeight: "700",
		color: "#0f172a",
		marginTop: 16,
		marginBottom: 8,
	},
	description: {
		fontSize: 15,
		lineHeight: 22,
		color: "#374151",
	},
});

export default DetailsScreen;