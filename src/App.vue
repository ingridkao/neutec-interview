<script setup>
    import { reactive } from 'vue'
	const state = reactive({
		plusAction: false,
		boxCount: 3,
		ballCount: 4,
		result: [11, 13, 31, 33]
	})
	const start = () => {
		const list = []
		state.result = []
		for (let row = 1; row <= state.boxCount; row++) {
			for (let col = 1; col <= state.boxCount; col++) {
				list.push(parseInt(`${row}${col}`))
			}
		}
		// random answer
		for (let row = 0; row <= state.ballCount; row++) {
			const index = Math.floor(Math.random() * list.length)
			state.result.push(list[index])
		}
	}
	const plus = () => {
		state.plusAction = !state.plusAction
	}
</script>

<template>
	<header>
		<label for="boxCount">盒子數量</label>
		<input type="number" id="boxCount" v-model="state.boxCount">
		<label for="ballCount">球的數量</label>
		<input type="number" id="ballCount" v-model="state.ballCount" min="1" :max="state.boxCount*state.boxCount">
		<button @click="start">Game Start</button>
	</header>

	<main>
		<div class="row" v-for="row in state.boxCount" :key="row">
			<div class="col" v-for="col in state.boxCount" :key="`${row}${col}`">
				<div v-if="state.result.includes(parseInt(`${row}${col}`))" class="ball move1" :class="{rightDown3: state.plusAction}"></div>
			</div>
			<!-- <div class="col"></div>
			<div class="col flashing">
				<div class="ball move2" :class="{down3: state.plusAction}"></div>
			</div> -->
		</div>
		<!-- <div class="row">
			<div class="col"></div>
			<div class="col flashing"></div>
			<div class="col"></div>
		</div>
		<div class="row">
			<div class="col">
				<div class="ball move1" :class="{right3: state.plusAction}"></div>
			</div>
			<div class="col"></div>
			<div class="col flashing">
				<div class="ball move2" :class="{down1: state.plusAction}"></div>
			</div>
		</div> -->
	</main>
</template>
