/*
Insituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul
Campus Bento Gonçalves
Programação de Dispositivos Móveis - 2021/01
Aluno: João Eduardo Costa Gomes
Matrícula: 20191130081
Data: 07/08/2021

Atividade Prática - Usando ScrollView e List Views - Arquivo SectionListExample.js
*/

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList } from 'react-native';
import Constants from "expo-constants";

const DATA = [
	{
		title: "Main dishes",
		data: ["Pizza", "Burger", "Risotto"]
	},
	{
		title: "Sides",
		data: ["French fries", "Onion Rings", "Fried Shrimps"]
	},
	{
		title: "Drinks",
		data: ["Water", "Coke", "Beer"]
	},
	{
		title: "Desserts",
		data: ["Cheese cake", "Ice cream"]
	}
];

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title}</Text>
	</View>
);

const SectionListExample = () => (
	<SafeAreaView style={styles.container}>
		<SectionList
			sections={DATA}
			keyExtractor={(item, index) => item+index}
			renderItem={({item}) => <Item title={item}/>}
			renderSectionHeader = {({ section: {title} }) => (
				<Text style={styles.header}>{title}</Text>
			)}
		/>
	</SafeAreaView>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
		marginHorizontal: 16
	},
	item: {
		backgroundColor: "#f9c2ff",
		padding: 20,
		marginVertical: 8
	},
	header: {
		fontSize: 32,
		backgroundColor: "#fff"
	},
	title: {
		fontSize: 24
	}
});

export default SectionListExample;
