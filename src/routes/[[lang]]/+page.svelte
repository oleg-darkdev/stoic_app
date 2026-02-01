<script lang="ts">
	import { page } from '$app/stores';

	import {
		Header,
		Footer,
		Hero,
		Featured,
		Philosophers,
		About,
		TagsCloud,
		Free_Block_1,
		Free_Block_2,
		Stats,
		Newsletter,
		PrintAndPlay,
		Team,
		Api,
		// Free_Block_3
		// CTA,
	} from '$widgetsLanding';
	import { Cookies, Faq, Citats } from '$widgets';

	// import { SEO } from '$sharedUtils';
</script>

<svelte:head>
	<title>Persona | {$page.data.locale}</title>
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

	<Header />

	<section data-w-id="cebaa910-8405-e00e-71d5-142581d24b61" class="section">
		<!-- <div data-poster-url="https://cdn.prod.website-files.com/65b22404f7d1427d1b8d612f/65cdbecc6149e6e6dd2764ed_0215_1-poster-00001.jpg" data-video-urls="https://cdn.prod.website-files.com/65b22404f7d1427d1b8d612f/65cdbecc6149e6e6dd2764ed_0215_1-transcode.mp4,https://cdn.prod.website-files.com/65b22404f7d1427d1b8d612f/65cdbecc6149e6e6dd2764ed_0215_1-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" class="hero-background-video is-2 w-background-video w-background-video-atom">
          <video id="3816eae3-7ad1-e071-e8f3-83ec366ce7bf-video" autoplay="" loop="" style="background-image:url(" https:="" cdn.prod.website-files.com="" 65b22404f7d1427d1b8d612f="" 65cdbecc6149e6e6dd2764ed_0215_1-poster-00001.jpg")"="" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">
            <source src="media/65cdbecc6149e6e6dd2764ed_0215_1-transcode.mp4" data-wf-ignore="true">
            <source src="media/65cdbecc6149e6e6dd2764ed_0215_1-transcode.webm" data-wf-ignore="true">
          </video>
        </div> -->
		<Hero />
	</section>

	<About />

	<Featured />

	<Stats />

	<Philosophers />

	<div class="background white-smoke">
		<TagsCloud />
		<div class="divider"></div>

		<!-- <Free_Block_1 /> -->

		<!-- <Free_Block_2 /> -->
		<Citats />

		<div class="divider"></div>
	</div>

	<PrintAndPlay />
	<!-- <Free_Block_3 /> -->

	<!-- <AppPreview /> -->

	<Api />

	<Team />

	<Faq />

	<Newsletter />

	<div class="background black">
		<Footer />
	</div>

	<Cookies />
</div>
