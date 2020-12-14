<script>
import { Line } from 'vue-chartjs-typescript'
 
export default {
  extends: Line,
  props: ['labels', 'label', 'backgroundColor', 'data'],
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: this.label,
          backgroundColor: this.backgroundColor,
          data: this.data
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>

<style>
</style>