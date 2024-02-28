<script lang="ts">
	import type { Todo } from '$lib/types/todo';
	export let todo: Todo;
	import Icon from '@iconify/svelte';
	import { changeTodoStatus, deleteTodo } from '../../../stores/todoStore';
</script>

<div class="card card-side border-neutral card-bordered">
	<div class="flex pl-8">
		<div class="my-auto"><Icon icon="mdi:format-list-checks" width="3em" height="3em" /></div>
	</div>
	<div class="absolute flex text-xs space-x-1 top-[-1px] right-10">
		<label class="flex select-none space-x-1 items-center text-center text-xs px-4 bg-success rounded-b-2xl shadow-md">
			<span class="text-base-200">{todo.completed ? 'done' : 'pending'}</span>
			<div class="flex items-center bg-base-200 h-5 rounded-full border-base-200 border-2"><input on:change={() => changeTodoStatus(todo)} class="checkbox checkbox-success checkbox-xs" bind:checked={todo.completed} type="checkbox" /></div>
		</label>

		<div class="flex items-center px-4 bg-info text-base-200 rounded-b-2xl shadow-md {todo.completed ? 'line-through' : ''}">Due date: {todo.dueDate.getDate() + '.' + (todo.dueDate.getMonth() + 1) + '.' + todo.dueDate.getFullYear()}</div>

		<button on:click={() => deleteTodo(todo)} class=" btn btn-error text-base-200 btn-sm btn-circle rounded-t-none shadow-md">
			<Icon icon="mdi:delete" width="1.5em" height="1.5em" />
		</button>
	</div>

	<div class="card-body w-full">
		<div class="card-title justify-between align-middle {todo.completed ? 'line-through' : ''}">{todo.title}</div>
		<div class="whitespace-normal break-all w-full {todo.completed ? 'line-through' : ''}">{todo.description}</div>
		<div class="card-actions justify-end">
			<div class="text-xs font-light">Date created: {todo.createdAt.getDate() + '.' + (todo.createdAt.getMonth() + 1) + '.' + todo.createdAt.getFullYear()}</div>
		</div>
	</div>
</div>
