<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import Icon from '@iconify/svelte';

	//initialize date
	let pickedDate: Date = new Date();

	//store todays date parts
	let [day, month, year] = [pickedDate.getDate(), pickedDate.getMonth() + 1, pickedDate.getFullYear()];

	//format date to day/month/year
	let formatedDate = formatDate();

	//months for select input
	const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	let yearMin = year;
	//get days in current month
	let daysInMonth = new Date(year, month, 0).getDate();

	//update date when day, month or year changes
	$: {
		pickedDate.setFullYear(year, month - 1, day);
		daysInMonth = new Date(year, month, 0).getDate();
		formatedDate = formatDate();
		sendPickedDate();
	}

	//dispatch event to parent component
	const dispatch = createEventDispatcher();

	//send picked date to parent component
	function sendPickedDate() {
		dispatch('dateChanged', pickedDate);
	}

	//format date to day/month/year
	function formatDate(): string {
		return `${day}/${month}/${year}`;
	}

	//on mount send picked date to parent component
	onMount(() => {
		sendPickedDate();
	});
</script>

<div class="dropdown">
	<div tabindex="-1" class="input input-bordered flex max-w-60 items-center gap-2">
		<input type="text" readonly class="grow" bind:value={formatedDate} />
		<Icon icon="mdi:calendar-month-outline" width="1.2em" height="1.2em" />
	</div>
	<div tabindex="-1" class="dropdown-content z-[1] card border-neutral card-compact mt-4 pt-3 px-4 w-80 shadow-lg bg-base-100 text-base-content">
		<div class="card-title justify-center">
			<select bind:value={month} class="select select-bordered select-xs w-full max-w-xs">
				{#each months as month, i}
					<option value={i + 1}>{month}</option>
				{/each}
			</select>

			<select bind:value={day} class="select select-bordered select-xs w-full max-w-xs">
				{#each Array.from({ length: daysInMonth }, (_, i) => i + 1) as day}
					<option value={day}>{day}</option>
				{/each}
			</select>

			<input type="number" min={yearMin} bind:value={year} class="input input-xs input-bordered w-20 max-w-20 text-center" />
		</div>
	</div>
</div>
