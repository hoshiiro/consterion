<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	import PageTransition from './transition.svelte';

	import '../app.css';

	export let data;
</script>

<main>
	<Header />
	<PageTransition url={data.url}>
		<slot />
	</PageTransition>
	<Footer />
</main>
