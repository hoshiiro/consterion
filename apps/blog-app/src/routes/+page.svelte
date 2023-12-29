<script lang="ts">
	import { formatDate } from '$lib/utils';
	export let data;
</script>

<svelte:head>
	<title>Consterion blog</title>
</svelte:head>

<article class="not-prose mb-5">
	<ul class="flex flex-col gap-6">
		{#each data.posts as post}
			<li>
				<p class="text-neutral-600 dark:text-neutral-400">{formatDate(post.date, 'medium')}</p>
				<a
					class="my-[.2rem] block text-[1.17em] text-neutral-800 no-underline hover:underline dark:text-neutral-50"
					href={'blog/' + post.slug}>{post.title}</a
				>
				<p class="text-neutral-500 dark:text-neutral-300">{post.description}</p>
			</li>
		{/each}
	</ul>
</article>
