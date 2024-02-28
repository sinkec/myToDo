<script lang="ts">
	import ToDoForm from '$lib/components/ToDoForm.svelte';
	import ToDoList from '$lib/components/ToDoList.svelte';
</script>

<div class="flex items-center justify-center flex-col w-3/5 min-w-96 mx-8">
	<ToDoForm />

	<ToDoList />
</div>
