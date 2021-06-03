<template>
  <span>
    <div id="gridppReportViewContainer"/>
  </span>
</template>

<script>
export default {
  name: 'gridppreport',
  mounted() {
    this.$nextTick(() => setTimeout(this.loadReport, 0))
  },
  methods: {
    loadReport() {
      const reportViewer = window.rubylong.grhtml5.insertReportViewer('gridppReportViewContainer', '/gridppreport/template/3a.CrosstabBasic.grf', '/gridppreport/data/xmlCrossTab.txt')
      reportViewer.start()
    }
  }
}
</script>