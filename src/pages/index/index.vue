<template>
	<view>
		<nut-button @click="clickItem">打开</nut-button>
		<nut-popup
			position="right"
			v-model:visible="show1"
			:style="{ width, height }"
		>
			<nut-tabs v-model="tab1value" title-scroll title-gutter="10">
				<nut-tabpane
					v-for="(item, index) in list4"
					:key="index"
					:title="'Tab ' + item"
				>
				</nut-tabpane>
			</nut-tabs>
		</nut-popup>
	</view>
</template>
<script lang="ts">
import { reactive, toRefs } from "vue";
export default {
	setup() {
		const state = reactive({
			show1: false,
			width: "90%",
			height: "100%",
			tab1value: "0",
			list4: Array.from(new Array(10).keys()),
			acceptKey: "num",
		});
		const clickItem = (key: string, item: any) => {
			console.log(key, JSON.stringify(item));
			handleClick1();
		};

		const clickIndex = (key: string) => {
			console.log(key);
		};

		const handleClick1 = () => {
			state.show1 = true;
		};

		return { ...toRefs(state), clickItem, clickIndex, handleClick1 };
	},
};
</script>
