<script lang="ts">
	import DatePicker from './UI/DatePicker.svelte';

	let title = '';
	let description = '';

	const handleSubmit = () => {
		console.log({ title, description });
	};
</script>

<div
	tabindex="-1"
	class="card card-normal px-4 bg-base-200 mt-8 m-auto max-w-3xl shadow-lg shadow-base-300 card-bordered border-base-300 collapse collapse-arrow"
>
	<input type="checkbox" />
	<div class="collapse-title font-medium text-xl">ToDo Form</div>
	<div class="collapse-content">
		<form class="space-y-4" on:submit|preventDefault={handleSubmit}>
			<p>Add your ToDo entry to your list, so you don't forget it.</p>
			<div class="card-body card-bordered border-base-300 rounded-2xl">
				<div class="label">
					<span class="label-text">Title</span>
				</div>
				<input
					type="text"
					placeholder="What do you need ToDo"
					bind:value={title}
					class="input input-bordered w-full max-w-md"
				/>

				<div class="label">
					<span class="label-text">Description</span>
				</div>
				<textarea
					class="textarea textarea-bordered w-full h-24"
					placeholder="Go to shop, and buy..."
					bind:value={description}
				/>
				<div class="label">
					<span class="label-text">Dedline</span>
				</div>
				<DatePicker />
			</div>
			<div class="card-actions justify-end">
				<button type="submit" class="btn btn-primary">Add ToDo</button>
			</div>
		</form>
	</div>
</div>
