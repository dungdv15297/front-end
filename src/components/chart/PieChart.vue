<script>
// CommitChart.js
import { Pie } from 'vue-chartjs-typescript'
 
export default {
  extends: Pie,
  props: ['labels', 'label', 'backgroundColor', 'data'],
  mounted () {
    // Overwriting base render method with actual data.
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