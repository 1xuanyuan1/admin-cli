<template>
  <div class="card">
    <div class="card-header">
      <div class="icon-title"></div>
      <template v-if="title">
        <div class="card-title">
          <div class="title is-4">
            <strong v-html="title"></strong>
          </div>
        </div>
      </template>
      <div class="card-head-right">
          <slot name="right"></slot>
          <button v-if="hasBack" class="button is-primary" @click="back">Back</button>
      </div>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>  
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    hasBack: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
.card{
  margin-bottom: 10px;
}
.card-head-right{
  & > .button:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
