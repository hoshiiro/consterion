<script lang="ts">
	import * as config from '$lib/config';
</script>

<header class="flex gap-6">
	<div class="my-auto flex-none">
		<a href="/">
			<img
				style="height:64px;width:64px;"
				class="my-auto rounded-full"
				src="/pfp.webp"
				alt="profile"
			/>
		</a>
	</div>
	<div class="flex-1">
		<h2 class="text-lg font-bold">{config.title}</h2>
		<p class="mb-2 mt-[.2em] text-sm text-neutral-600 dark:text-neutral-400">
			{config.description}
		</p>
		<nav class="flex flex-row gap-3 text-sm">
			<a href="/blog/about">about</a>
			<a href="/rss.xml">rss</a>
		</nav>
	</div>
</header>
