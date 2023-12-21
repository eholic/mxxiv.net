<template>
  <div class="content">

    <div
      id="apps"
      class="pagelink"
    />
    <h2>Apps</h2>
    <div class="tile is-ancestor">

      <div class="tile is-parent is-6">
        <div class="tile is-child box has-text-centered">
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

      <div class="tile is-parent">
        <div class="tile is-child box has-text-centered">
          <tile-child
            title="score"
            subtitle="Your scoreboard in android wear."
            :img="require('../assets/score.png')"
            ratio="is-96x96"
          />
          <p><strong>score</strong> is an extremely simple scoring app. Just tap left and right to count up points. You don't have to remember your game score anymore.</p><br> <!-- eslint-disable-line -->
          <a href='http://play.google.com/store/apps/details?id=net.mxxiv.score&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' width='50%' height='50%'/></a>
        </div>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-6">
        <div class="tile is-child box has-text-centered">
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
    <div class="tile is-ancestor">
      <div class="tile is-parent is-6">
        <div class="tile is-child box has-text-centered">
          <tile-child
            title="Ofxer"
            subtitle="CSV to OFX converter"
            :img="require('../assets/ofxer.png')"
            ratio="is-5by2"
          />
          <a href='https://github.com/eholic/ofxer' target='_blank' style='text-decoration: none;'><p>A script of converting CSV files exported from your credit and bank account</p></a><br>
          <iframe src="https://ghbtns.com/github-btn.html?user=eholic&repo=ofxer&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
        </div>
      </div>

      <div class="tile is-parent">
        <div class="tile is-child box has-text-centered">
          <router-link to="/stars#stars_top">
            <tile-child
              title="Stars Visualization"
              subtitle="See your stars from a new perspective."
              :img="require('../assets/map.png')"
              ratio="is-192x192"
            />
            <p>I'm usually marking stars at where I visted on Google Maps. My motivation is to visualize those stars as heatmap.</p><br> <!-- eslint-disable-line -->
          </router-link>
        </div>
      </div>

    </div> <!-- tile is-ancestor -->

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
