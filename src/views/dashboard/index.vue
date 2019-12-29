<template>
  <div class="dashboard-container">
    <div class="dashboard-text">{{ resList }}</div>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import {
  getPageList
} from '../../request/api'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data: function() {
    return {
      resList: []
    }
  },

  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      getPageList({
        time: 1111
      })
        .then(res => {
          console.log(res.data)
          this.resList = res.data
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
    &-container {
        margin: 30px;
    }

    &-text {
        font-size: 30px;
        line-height: 46px;
    }
}
</style>
