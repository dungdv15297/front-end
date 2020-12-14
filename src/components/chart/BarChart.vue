<script>
import { Bar } from 'vue-chartjs-typescript'
 
export default {
  extends: Bar,
  props: ['labels', 'label', 'datasets'],

  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: this.datasets
    }, {responsive: true, maintainAspectRatio: false})
  },

  methods: {
    reRender() {
      this.renderChart({
        labels: this.labels,
        datasets: this.datasets
      }, {responsive: true, maintainAspectRatio: false})
    }
  }
}
</script>

<style>
</style>