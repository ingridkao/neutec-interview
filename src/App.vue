<script setup>
    import { reactive } from 'vue'
	const state = reactive({
		plusAction: false,
		boxCount: 3,
		ballCount: 4,
		target: [],
		result: [11, 13, 31, 33],
		check: []
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
		for (let row = 1; row <= state.ballCount; row++) {
			const index = Math.floor(Math.random() * list.length)
			state.result.push(list[index])
		}

		// Check answer
		state.check = state.target.filter(item => state.result.includes(item))

	}
	const restart = () => {
		state.result = []
		state.target = []
		state.check = []
	}
	const pick = (pickTarget) => {
		const target = parseInt(pickTarget)
		const index = state.target.findIndex(item => item == target)
		if(index < 0){
			state.target.push(target)
		}else{
			state.target = state.target.filter(item => item != target)
		}
	}
	const existCheck = (array, ball) => array.includes(parseInt(ball))
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
		<button @click="restart">Restart</button>
	</header>

	<main>
		<div class="row" v-for="row in state.boxCount" :key="row">
			<div 
				v-for="col in state.boxCount" 
				:key="`${row}${col}`" 
				class="col"
				:class="{
					seleced: existCheck(state.target, `${row}${col}`),
					flashing: existCheck(state.check, `${row}${col}`)
				}"
				@click="pick(`${row}${col}`)"
			>
				<div 
					v-if="existCheck(state.result,`${row}${col}`)" 
					class="ball move1" 
					:class="{rightDown3: state.plusAction}"
				></div>
			</div>
			<!-- <div class="col"></div>
			<div class="col flashing">
				<div class="ball move2" :class="{down3: state.plusAction}"></div>
			</div> -->
		</div>
		<!-- 
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
