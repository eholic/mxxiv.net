<template>
  <div class="content">

    <div
      id="pgo_top"
      class="pagelink"
    />
    <h1 class="title">Pok&eacute;mon GO Clipboard</h1>

    <p>Search the best counters.</p>
    <p>iOS - use with clipboard manager or try <a href="https://github.com/eholic/pgo_dict">pgo_dict here</a>.</p>
    <video muted controls>
      <source src="videos/usage.MP4">
    </video>


    <h2 class="title">Counters</h2>
    <div
      v-for="i in Math.floor(counters.length/2)"
      :key="counters[(i-1)*2].key"
      class="columns"
    >
      <div class="column">
        <copy-form :dict="counters[(i-1)*2]" />
      </div>
      <div class="column">
        <copy-form :dict="counters[(i-1)*2+1]" />
      </div>
    </div>

    <h2 class="title">Filters</h2>

    <div
      v-for="i in Math.floor(filters.length/2)"
      :key="filters[(i-1)*2].key"
      class="columns"
    >
      <div class="column">
        <copy-form :dict="filters[(i-1)*2]" />
      </div>
      <div class="column">
        <copy-form :dict="filters[(i-1)*2+1]" />
      </div>
    </div>
  </div>
</template>

<script>
import CopyForm from './CopyForm.vue';

export default {
  name: 'Pgo',
  components: { CopyForm },
  data() {
    return {
      counters: [
        { key: 'Cnormal', value: '@fighting' },
        { key: 'Cfighting', value: '@flying,@psychic,@fairy' },
        { key: 'Cflying', value: '@rock,@electric,@ice' },
        { key: 'Cpoison', value: '@ground,@psychic' },
        { key: 'Cground', value: '@water,@grass,@ice' },
        { key: 'Crock', value: '@fighting,@ground,@steel,@water,@grass' },
        { key: 'Cbug', value: '@flying,@rock,@fire' },
        { key: 'Cghost', value: '@ghost,@dark' },
        { key: 'Csteel', value: '@fighting,@ground,@fire' },
        { key: 'Cfire', value: '@ground,@rock,@water' },
        { key: 'Cwater', value: '@grass,@electric' },
        { key: 'Cgrass', value: '@flying,@poison,@bug,@fire,@ice' },
        { key: 'Celectric', value: '@ground' },
        { key: 'Cpsychic', value: '@bug,@ghost,@dark' },
        { key: 'Cice', value: '@fighting,@rock,@steel,@fire' },
        { key: 'Cdragon', value: '@ice,@dragon,@fairy' },
        { key: 'Cfairy', value: '@poison,@steel' },
        { key: 'Cdark', value: '@fighting,@bug,@fairy' },
        { key: 'Cmew', value: '127,130,149,150,212,248,319,373,384' },
        { key: 'Cdeoxys', value: '65,94,127,149,150,212,229,248,275,319,319,354,359,373,384' },
      ],
      filters: [
        { key: 'Fgen1', value: '1-151' },
        { key: 'Fgen2', value: '152-251' },
        { key: 'Fgen3', value: '252-386' },
        { key: 'Fgen4', value: '387-493' },
        { key: 'Fgen5', value: '494-649' },
        { key: 'FSinnohStone', value: '108,111,112,114,125,126,137,175,176,190,193,198,200,207,215,220,221,233,239,240,280,281,315,355,356,361,406,407,424,429,430,461,463,464,465,466,467,468,469,472,473,474,475,477,478' },
        { key: "FUnovaStone", value: "511-516,572,573,607-609" },
        { key: 'FLureModule', value: '81,82,133,299,462,470,471,476' },
      ],
    };
  },
  methods: {
  },
};
</script>

<style scoped>
video {
  height: 60vh;
}
</style>
