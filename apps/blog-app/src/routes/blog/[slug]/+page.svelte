<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title} | Consterion blog</title>
</svelte:head>

<article>
	<hgroup>
		<p class="-mt-3 text-neutral-700 md:-mt-5 dark:text-neutral-100">
			<span class="text-neutral-500 dark:text-neutral-400">Published at</span>
			{formatDate(data.meta.date)}
		</p>
		<h1>{data.meta.title}</h1>
	</hgroup>
	<svelte:component this={data.content} />
	<div class="mt-12 flex gap-2">
		{#each data.meta.categories as category}
			<span
				class="rounded-full border-[1.3px] border-neutral-200 bg-neutral-100 px-[9px] py-[3px] text-sm dark:border-neutral-800 dark:bg-neutral-800"
				>{category}</span
			>
		{/each}
	</div>
</article>
