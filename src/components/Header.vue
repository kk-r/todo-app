<template>
  <div class="mb-4 header">
    <div class="header-title">
      <h1 class="text-grey-darkest text-4xl text-cyan-700 font-bold">
        {{ title }}
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    title: String,
    subTitle: String,
  },
};
</script>
