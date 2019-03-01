<template>
    <div class="ztinfo">
        我是想去也
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.params.id);
  }
};
</script>