<template>
  <div class="content">

    <div
      id="apps"
      class="pagelink"
    />
    <h2>Apps</h2>
    <div class="grid is-col-min-12">

      <div class="cell">
        <div class="box has-text-centered">
          <tile-child
            title="tilt"
            subtitle="Just tilt!"
            :img="require('../assets/tilt.png')"
            ratio="is-96x96"
          />
          <p>
          <strong>tilt</strong> enables your phone to pull down the notification bar without a thumb. Just tilting up your phone, it shows up automatically!</p><br> <!-- eslint-disable-line -->
          <a href='http://play.google.com/store/apps/details?id=net.mxxiv.tilt&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' width='50%' height='50%'/></a>
        </div>
      </div>

      <div class="cell">
        <div class="box has-text-centered">
          <tile-child
            title="score"
            subtitle="Your scoreboard in android wear."
            :img="require('../assets/score.png')"
            ratio="is-96x96"
          />
          <p><strong>score</strong> is an extremely simple scoring app. Just tap left and right to count up points. You don't have to remember your game score anymore.</p><br> <!-- eslint-disable-line -->

          <div class="columns">

            <div class="column">
              <a
                href='http://play.google.com/store/apps/details?id=net.mxxiv.score&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img
                  alt='Get it on Google Play'
                  src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'
                  width='230px'
                  style="vertical-align: middle"
                /></a>
            </div>

            <div class="column">
              <a href="https://apps.apple.com/us/app/score-for-watchos/id6741359203?itscg=30200&itsct=apps_box_badge&mttnsubad=6741359203" style="display: inline-block;">
              <img
                  src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1738454400"
                  alt="Download on the App Store" style="width: 196px; vertical-align: middle; object-fit: contain;" />
              </a>
            </div>

          </div>

        </div>
      </div>

      <div class="cell">
        <div class="box has-text-centered">
          <tile-child
            title="湘南 - 時刻表"
            subtitle="Shonan Express Timeboard"
            :img="require('../assets/shonan.png')"
            ratio="is-96x96"
          />
          <p>
            特急「湘南」の往路と復路を簡単に確認できる時刻表です。(コンプリケーション対応)<br>
            <a href="mailto:support@mxxiv.net?subject=湘南 - 時刻表">お問い合わせ</a>

          </p><br> <!-- eslint-disable-line -->
          <a href="https://apps.apple.com/jp/app/%E6%B9%98%E5%8D%97-%E6%99%82%E5%88%BB%E8%A1%A8/id6741827272" style="display: inline-block;">
          <img
              src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1738454400"
              alt="Download on the App Store" style="width: 120px; vertical-align: middle; object-fit: contain;" />
          </a>

        </div>
      </div>

      <div class="cell">
        <div class="box has-text-centered">
          <router-link to="/pgo#pgo_top">
            <tile-child
              title="Pokémon GO Clipboard"
              subtitle="cheatsheet"
              :img="require('../assets/pokeball.png')"
              ratio="is-96x96"
            />
            <p>Copy to create the best party to raid.</p>
          </router-link>
        </div>
      </div>
    </div>


    <div
      id="labs"
      class="pagelink"
    />
    <h2>Labs</h2>
    <div class="grid is-col-min-12">
      <div class="cell">
        <div class="box has-text-centered">
          <tile-child
            title="Ofxer"
            subtitle="CSV to OFX converter"
            :img="require('../assets/ofxer.png')"
            ratio="is-128x128"
          />
          <a href='https://github.com/eholic/ofxer' target='_blank' style='text-decoration: none;'>
            <p>A script of converting CSV files exported from your credit and bank account</p>
          </a>
        </div>
      </div>

      <div class="cell">
        <div class="box has-text-centered">
          <router-link :to="{name: 'Stars', hash: '#stars_top'}">
            <tile-child
              title="Stars Visualization"
              subtitle="See your star heatmap."
              :img="require('../assets/map.png')"
              ratio="is-128x128"
            />
            <p>I'm usually marking stars at where I visted on Google Maps. My motivation is to visualize those stars as heatmap.</p>
          </router-link>
        </div>
      </div>

      <div class="cell">
        <div class="box has-text-centered">
          <tile-child
            title="pandaq"
            subtitle="An easy pandas query-string builder."
            :img="'https://pandas.pydata.org/static/img/pandas_secondary.svg'"
            ratio="is-128x128"
          />
          <a href='https://github.com/eholic/pandaq' target='_blank' style='text-decoration: none;'>
            <p>This library provides q method for easy querying of pandas.DataFrame.</p>
          </a>
        </div>
      </div>

    </div> <!-- grid -->

  </div> <!-- container-->

</template>

<script>
import TileChild from './TileChild.vue';

export default {
  name: 'TopPage',
  components: { TileChild },
};
</script>

<style scoped>
.pagelink {
  padding-top: 30px;
}
</style>
