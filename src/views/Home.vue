<template>
  <span>
    <button @click="downloadPdf()">下载 WebApi PDF文件</button>
    <button @click="printPdf()">插件打印 WebApi PDF文件</button>
  </span>
</template>

<script>
import axios from 'axios'
import printJS from 'print-js'
import FileSaver from 'file-saver'

export default {
  name: 'home',
  methods: {
    downloadPdf() {
      axios({
        method: 'get',
        url: 'http://localhost:29527/api/test/downloadpdffile',
        responseType: 'blob'
      })
        .then(response => {
          const pdfFile = new Blob([response.data], { type: "application/pdf" })
          FileSaver.saveAs(pdfFile, 'test.pdf')
        })
    },
    printPdf() {
      axios({
        method: 'get',
        url: 'http://localhost:29527/api/test/downloadpdffile',
        responseType: 'blob'
      })
        .then(response => {
          const pdfFile = new Blob([response.data], { type: "application/pdf" })
          const pdfUrl = URL.createObjectURL(pdfFile)
          printJS(pdfUrl)
          URL.revokeObjectURL(pdfUrl)
        })
    }
  }
}
</script>
