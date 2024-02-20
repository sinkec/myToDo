<script lang="ts">
	import { onMount } from 'svelte';

	let day = new Date().getDate();
	let month = new Date().getMonth();
	let year = new Date().getFullYear();

	let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	$: console.log(day, month, year);

	onMount(() => {
		console.log(day, month, year);
	});
</script>

<div class="flex space-x-2">
	<label class="form-control max-w-20">
		<div class="label">
			<span class="label-text-alt">Day</span>
		</div>
		<select bind:value={day} class="select select-bordered">
			<option disabled selected value={day}>{day}</option>
			{#each Array.from({ length: 31 }, (_, i) => i + 1) as day}
				<option value={day}>{day}</option>
			{/each}
		</select>
	</label>

	<label class="form-control max-w-24">
		<div class="label">
			<span class="label-text-alt">Month</span>
		</div>
		<select bind:value={month} class="select select-bordered">
			<option disabled selected value={month}>{months[month]}</option>
			{#each months as month, i}
				<option value={i}>{month}</option>
			{/each}
		</select>
	</label>

	<label class="form-control max-w-20">
		<div class="label">
			<span class="label-text-alt">Year</span>
		</div>
		<input bind:value={year} type="number" class="input input-bordered w-full max-w-xs" />
	</label>
</div>
