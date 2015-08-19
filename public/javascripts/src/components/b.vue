<style>
.t {
  color: red;
}

</style>

<template>
  <h2 class="t">{{msg}}</h2>
</template>

<script>
module.exports = {
  data: function () {
    return {
      msg: 'Hello from Component B!'
    }
  }
}
</script>

