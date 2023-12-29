<script lang="ts">
	import { formatDate } from '$lib/utils';
	export let data;
</script>

<article class="not-prose mb-5">
	<ul class="flex flex-col gap-6">
		{#each data.posts as post}
			<li>
				<p class="text-neutral-600 dark:text-neutral-400">{formatDate(post.date,'medium')}</p>
				<a class="block my-[.2rem] text-[1.17em] text-neutral-800 dark:text-neutral-50 no-underline hover:underline" href={'blog/' + post.slug}>{post.title}</a>
				<p class="text-neutral-500 dark:text-neutral-300">{post.description}</p>
			</li>
		{/each}
	</ul>
</article>
