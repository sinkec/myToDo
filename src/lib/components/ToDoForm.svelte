<script lang="ts">
	import DatePicker from './UI/DatePicker.svelte';
	import { v4 as uuidv4 } from 'uuid';
	import type { Todo } from '$lib/types/todo';
	import { todoStore, addTodo } from '../../stores/todoStore';

	let newTodo: Todo = {
		id: '',
		title: '',
		description: '',
		createdAt: new Date(),
		completed: false,
		dueDate: new Date(),
		completedAt: null
	};

	//handle date change e.detail returns data taype of Date
	const handleMessage = (e: any) => {
		newTodo.dueDate = e.detail as Date;
	};
</script>

<div tabindex="-1" class="card card-normal bg-base-200 m-8 shadow-lg shadow-base-300 card-bordered border-base-300 collapse collapse-arrow">
	<input type="checkbox" />
	<div class="collapse-title font-medium text-base-content text-xl">Add your ToDo</div>
	<div class="collapse-content">
		<form
			class="space-y-4"
			on:submit|preventDefault={() => {
				addTodo(newTodo);
			}}
		>
			<p>Add your ToDo entry to your list, so you don't forget it.</p>
			<div class="card-body border-neutral card-bordered rounded-2xl">
				<div class="label">
					<span class="label-text">Title</span>
				</div>
				<input type="text" placeholder="What do you need ToDo" bind:value={newTodo.title} class="input input-bordered w-full max-w-md" />

				<div class="label">
					<span class="label-text">Description</span>
				</div>
				<textarea class="textarea textarea-bordered w-full h-24" placeholder="Go to shop, and buy..." bind:value={newTodo.description} />
				<div class="label">
					<span class="label-text">Due Date</span>
				</div>
				<DatePicker on:dateChanged={handleMessage} />
			</div>
			<div class="card-actions justify-end">
				<button type="submit" class="btn btn-primary">Add ToDo</button>
			</div>
		</form>
	</div>
</div>
