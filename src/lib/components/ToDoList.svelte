<script lang="ts">
	import ToDoItem from './UI/ToDoItem.svelte';

	import { todoStore } from '../../stores/todoStore';
</script>

<div class="w-full space-y-4">
	{#each $todoStore as todo}
		<ToDoItem {todo} />
	{/each}
</div>
