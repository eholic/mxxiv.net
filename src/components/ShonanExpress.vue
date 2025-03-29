<template>
  <div class="content">

    <div
      id="shonanexpress_top"
      class="pagelink"
    />

    <div class="cell">
      <div class="box has-text-centered">
        <a
          href="https://apps.apple.com/jp/app/%E6%B9%98%E5%8D%97-%E6%99%82%E5%88%BB%E8%A1%A8/id6741827272"
        target="_blank">
        <tile-child
          title="湘南 - 時刻表"
          subtitle="Shonan Express Timeboard"
          :img="require('../assets/ShonanExpressBanner.png')"
        />
        </a>
        <p>
          特急「湘南」の往路と復路を簡単に確認できる時刻表です。(コンプリケーション対応)<br>

        </p>
        <br> <!-- eslint-disable-line -->
        <a href="https://apps.apple.com/jp/app/%E6%B9%98%E5%8D%97-%E6%99%82%E5%88%BB%E8%A1%A8/id6741827272" style="display: inline-block;" target="_blank">
        <img
            src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1738454400"
            alt="Download on the App Store" style="width: 120px; vertical-align: middle; object-fit: contain;" />
        </a>

      </div>
    </div>

    <ul>
      <li><a href="https://github.com/eholic/privacy_policy/blob/main/shonanexpress.md">Privacy Policy</a></li>
      <li><a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">EULA</a></li>
    </ul>

    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSesaV8LTOD7_4Mexy4roifgGaU8TFVEwuJJgl9Mp7inWOqkCA/viewform?embedded=true" width="640" height="613" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

  </div>
</template>

<script>
import TileChild from './TileChild.vue';
export default {
  name: 'ShonanExpress',
  components: { TileChild },
};
</script>

