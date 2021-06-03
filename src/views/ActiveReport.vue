<template>
  <div id="viewer-host">
    <JSViewer :report="{ Uri: '/activereport/template/ProjectAndResourceAnalysis.rdlx-json' }"></JSViewer>
  </div>
</template>

<script>
import { Viewer } from "@grapecity/activereports-vue";
import '@grapecity/activereports/styles/ar-js-ui.css';
import '@grapecity/activereports/styles/ar-js-viewer.css'

export default {
  name: "App",
  components: {
    JSViewer: Viewer,
  },
};
</script>

<style>
#viewer-host {
  width: 100%;
  height: 100vh;
}
</style>
