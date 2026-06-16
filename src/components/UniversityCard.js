import React from "react";
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native";

const UniversityCard = ({ university, onPress }) => {
	const { width } = useWindowDimensions();
	const compact = width < 380;

	return (
		<Pressable
			onPress={onPress}
			style={[styles.card, compact ? styles.cardCompact : null]}
		>
			<Text style={[styles.name, compact ? styles.nameCompact : null]}>
				{university.university}
			</Text>
			<Text style={styles.country}>{university.country}</Text>
			<View style={styles.descriptionWrap}>
				<Text numberOfLines={2} ellipsizeMode="tail" style={styles.description}>
					{university.description}
				</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	card: {
		width: "100%",
		alignSelf: "stretch",
		backgroundColor: "#ffffff",
		borderWidth: 1,
		borderColor: "#e5e7eb",
		borderRadius: 16,
		paddingHorizontal: 16,
		paddingVertical: 14,
		shadowColor: "#0f172a",
		shadowOpacity: 0.12,
		shadowRadius: 14,
		shadowOffset: {
			width: 0,
			height: 6,
		},
		elevation: 4,
	},
	cardCompact: {
		paddingHorizontal: 12,
		paddingVertical: 12,
	},
	name: {
		fontSize: 16,
		fontWeight: "700",
		lineHeight: 21,
		marginBottom: 4,
		color: "#111827",
	},
	nameCompact: {
		fontSize: 15,
	},
	country: {
		fontSize: 14,
		color: "#4b5563",
		marginBottom: 8,
	},
	descriptionWrap: {
		minHeight: 38,
	},
	description: {
		fontSize: 13,
		lineHeight: 19,
		color: "#6b7280",
	},
});

export default UniversityCard;