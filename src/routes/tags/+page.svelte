<script lang="ts">
	import { page } from '$app/stores';

	import {
		Header,
		Footer,
		// Hero,
		// Featured,
		// Philosophers,
		// About,
		TagsCloud,
		// Free_Block_1,
		// Free_Block_2,
		// Stats,
		// Newsletter

		// CTA,
	} from '$widgetsLanding';
	// import { Cookies, Faq, Citats } from '$widgets';

	// import { SEO } from '$sharedUtils';
</script>

<svelte:head>
	<title>Template | {$page.data.locale}</title>
	<meta name="description" content="" />
</svelte:head>

<!-- <SEO title="Home" /> -->

<div class="page-wrapper">
	<!-- <div class="preloader">
        <div class="preloader-text-mask">
          <div class="preloader-text-wrapper">
            <div class="medium-text">[ Build Brands ]</div>
            <div class="medium-text">[ Turn Heads ]</div>
            <div class="medium-text">[ Level Interactive™ ]</div>
          </div>
        </div>
      </div> -->

	<!-- <Header /> -->

	

	<!-- <About /> -->

	<!-- <Featured /> -->

	<!-- <Stats /> -->

	<!-- <Philosophers /> -->

	<div class="background white-smoke">
		<TagsCloud />
		<div class="divider"></div>

		<!-- <Free_Block_1 /> -->

		<!-- <Free_Block_2 /> -->
		<!-- <Citats /> -->

		<div class="divider"></div>
	</div>

	<!-- <Faq /> -->

	<!-- <Newsletter /> -->

	<div class="background black">
		<Footer />
	</div>

	<!-- <Cookies /> -->
</div>
