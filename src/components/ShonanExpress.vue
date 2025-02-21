<template>
  <div class="content">

    <div
      id="shonanexpress_top"
      class="pagelink"
    />

    <div class="cell">
      <div class="box has-text-centered">
        <router-link to="/shonanexpress#shonanexpress_top">
        <tile-child
          title="湘南 - 時刻表"
          subtitle="Shonan Express Timeboard"
          :img="require('../assets/shonan.png')"
          ratio="is-96x96"
        />
        <p>
          特急「湘南」の往路と復路を簡単に確認できる時刻表です。(コンプリケーション対応)<br>

        </p>
        </router-link>
        <br> <!-- eslint-disable-line -->
        <a href="https://apps.apple.com/jp/app/%E6%B9%98%E5%8D%97-%E6%99%82%E5%88%BB%E8%A1%A8/id6741827272" style="display: inline-block;">
        <img
            src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1738454400"
            alt="Download on the App Store" style="width: 120px; vertical-align: middle; object-fit: contain;" />
        </a>

      </div>
    </div>

    <ul>
      <li><a href="mailto:support@mxxiv.net">お問い合わせ: support@mxxiv.net</a></li>
      <li><a href="https://github.com/eholic/privacy_policy/blob/main/shonanexpress.md">Privacy Policy</a></li>
      <li><a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">EULA</a></li>
    </ul>

  </div>
</template>

<script>
import TileChild from './TileChild.vue';
export default {
  name: 'ShonanExpress',
  components: { TileChild },
};
</script>

