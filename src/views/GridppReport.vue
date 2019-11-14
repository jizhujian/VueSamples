<template>
  <span>
    <button @click="printReport()">打印</button>
    <div id="gridppReportViewContainer"/>
  </span>
</template>

<script>
import printJS from 'print-js'

export default {
  name: 'gridppreport',
  mounted() {
    this.$nextTick(() => setTimeout(this.loadReport, 0))
  },
  methods: {
    loadReport() {
      const reportViewer = window.rubylong.grhtml5.insertReportViewer('gridppReportViewContainer', '/gridppreport/template/3a.CrosstabBasic.grf', '/gridppreport/data/xmlCrossTab.txt')
      reportViewer.start()
    },
    printReport() {
      printJS('gridppReportViewContainer', 'html')
    }
  }
}
</script>