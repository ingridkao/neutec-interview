<script setup>
    import { reactive } from 'vue'
	const state = reactive({
		plusAction: false
	})
	const plus = () => {
		state.plusAction = !state.plusAction
	}
</script>

<template>
	<header>
		<button @click="plus">{{state.plusAction? '加分題': '一般移動'}}</button>
	</header>

	<main>
		<div class="row">
			<div class="col">
				<div class="ball move1" :class="{rightDown3: state.plusAction}"></div>
			</div>
			<div class="col"></div>
			<div class="col flashing">
				<div class="ball move2" :class="{down3: state.plusAction}"></div>
			</div>
		</div>
		<div class="row">
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
		</div>
	</main>
</template>
