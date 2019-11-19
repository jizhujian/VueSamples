<template>
  <span>
    <div id="activeReportViewContainer" style="height: 700px"/>
  </span>
</template> 

<script>
import '@grapecity/activereports/styles/ar-js-viewer.css'
import * as arjs from '@grapecity/activereports'

export default {
  name: 'activereport',
  mounted() {
    this.$nextTick(() => setTimeout(this.loadReport, 0))
  },
  methods: {
    loadReport() {
      const viewer = new arjs.Viewer.Viewer('#activeReportViewContainer')
      viewer.open('/activereport/template/ProjectAndResourceAnalysis.rdlx-json')
      viewer.availableExports = ['pdf', 'xlsx']
    }
  }
}
</script>