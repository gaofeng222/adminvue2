<script>
export default {
  created() {
    const { params, query } = this.$route
    console.log(params, 'parmas')
    const { path } = params
    this.$router.replace({ path: '/' + path, query })
  },
  render: function (h) {
    return h() // avoid warning message
  }
}
</script>
