<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
	import links from '../data/links';
</script>


<section id="Top" class="navbar dark">
        <div class="navbar-container">
          <div class="logo-intro-wrapper">
            <a href="/" aria-current="page" class="logo-link-block w-inline-block w--current">
              <div class="h-20 w-40 ">
                <!-- <p class=''/> -->
                 <img src="/images/logo_black.svg" class='' alt="">
              </div>
            </a>
          </div>
          <div class="nav-menu">
            <div class="nav-link-wrapper is-mobile">
              <!-- w--current -->
               <!-- hide-desktop -->
                {#each links as link}
              <a href="{link.link}" aria-current="page" class="nav-link  ">{link.title}</a>
              <div class="divider nav-bar"></div>
              {/each}
            </div>
            <div class="nav-lan-wrap">
              <a href="/app" target="_blank" class="button is-home-nav w-button">App</a>
              <div class="footer-language-wrap is-nav">
                <img src="images/67a03af36f4a48dde3b788a9_icon-globe.svg" loading="lazy" alt="">
                <div class="locales-wrapper w-locales-list">
                  <div role="list" class="locales-list w-locales-items">
                    <!-- <div role="listitem" class="locale w-locales-item">
                      <a hreflang="en" href="/" aria-current="page" class="local-link w--current" style="display: none;">English</a>
                    </div> -->
                    <!-- <div role="listitem" class="locale w-locales-item">
                      <a hreflang="zh-TW" href="/zh-tw" class="local-link" style="display: block;">繁體中文</a>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-w-id="e21a45cb-ef85-2484-9ecc-a68c84d2e57a" class="clickable-mobile-area">
            <div class="mobile-menu-button">
              <div class="button-text-wrapper">
                <div class="standard-text white">Menu</div>
                <div class="standard-text white">Close</div>
              </div>
            </div>
          </div>
        </div>
      </section>

<style lang="postcss">
</style>
