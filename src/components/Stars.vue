<template>
  <div class="content">

    <div
      id="stars_top"
      class="pagelink"
    />
    <h1 class="title">Stars Visualization</h1>
    <p>See your stars from a new perspective.</p>
    <div class="columns is-mobile" id="before-after">
      <div class="column is-5">
        <img src="../assets/stars_before.png" width="250" height="250"/>
      </div>
      <div class="column is-2" id="arrow">
        <span class="icon">
          <font-awesome-icon
            :icon="['fas', 'angle-double-right']"
            size="3x"
          />
        </span>
      </div>
      <div class="column">
        <img src="../assets/stars_after.png" width="250" height="250"/>
      </div>
    </div>

    <h2 class="title">Demo</h2>
    <img src="../assets/stars_guide.gif" width="400"/>

    <h2 class="title">Usage</h2>
    <p>
      1. Go to <a href="https://takeout.google.com/" target="_blank">Google Takeout</a>,
      and export and download <b>Maps (your places)</b>.
      <br/>
      <br/>

      <img src="../assets/stars_takeout.png" width="400"/>
    </p>
    <p>
      2. Unzip and upload <b>Saved Places.json</b>.
      <br/>
      <br/>

      <img src="../assets/stars_json.png" width="400px"/>
    </p>

    <div class="file is-box is-info">
      <label class="file-label">
        <input class="file-input" type="file" name="resume" @change="onFileChange">
        <span class="file-cta">
          <span class="file-icon">
            <font-awesome-icon
              :icon="['fas', 'upload']"
            />
          </span>
          <span class="file-label">
            Choose a Saved Places.json…
          </span>
        </span>
      </label>
    </div>

    <hr>
    <div class="columns is-mobile">
      <div class="column is-11">
        <div id="map"></div>
      </div>
      <div class="column">
        <p>radius</p>
        <input class="slider is-fullwidth has-output" step="5" min="5" max="50" v-model="radius" type="range" orient="vertical">
        <output for="sliderWithValue">{{ radius }}</output>
      </div>
    </div>

    <h2 class="title">Notice & Disclaimer</h2>
    <article class="message is-danger">
      <div class="message-body">
        Don't worry, we will neither read nor record your data.
        It run by JavaScript on your browser with
        <a href="https://developers.google.com/maps/documentation/javascript/tutorial" target="_blank">Google Maps API</a>.
        <br>
        However, it is your responsibility for the use of this website.
        We are not responsible of any loss or other detriments as a result of contents in this website.
      </div>
    </article>

  </div>
</template>

<script>

export default {
  name: 'Stars',
  data() {
    return {
      jsonFile: null,
      geoJson: null,
      map: null,
      heatmap: null,
      radius: 5,
    };
  },
  mounted() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat:37.3708853, lng: -122.002572},
      zoom: 5,
      gestureHandling: 'greedy'
    });
  },
  methods: {
    onFileChange(e) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.geoJson = JSON.parse(e.target.result);
      }

      let files = e.target.files || e.dataTransfer.files;
      if (files) {
        this.jsonFile = files[0];
        reader.readAsText(this.jsonFile);
      }
    }
  },
  watch: {
    geoJson: function() {
      let mvc = [];

      this.geoJson.features.forEach(f => {
        let c = f.geometry.coordinates;
        mvc.push(new google.maps.LatLng(c[1], c[0]));
      })
      this.heatmap = new google.maps.visualization.HeatmapLayer({
        data: new google.maps.MVCArray(mvc),
        maxIntensity: 10,
        opacity: 0.9,
        radius: this.radius,
      });
      this.heatmap.setMap(this.map);
    },
    radius: function() {
      if (this.heatmap) {
        this.heatmap.set('radius', this.radius);
      }
    }
  }
};
</script>

<style scoped>
  /* Always set the map height explicitly to define the size of the div
   * element that contains the map. */
  #map {
    height: 70vh;
    margin: 30px;
    padding: 0px
  }
  #before-after {
    text-align: center;
    height: 260px;
    position: relative;
  }
  #arrow {
    margin: auto;
  }
  /* Optional: Makes the sample page fill the window. */
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>
