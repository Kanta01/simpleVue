<template>
  <div>
    <money-add class="add"></money-add>
    <money-table></money-table>
  </div>
</template>

<script>
import MoneyAdd from '@/components/MoneyAdd'
import MoneyTable from '@/components/MoneyTable'
export default {
  components: {
    MoneyAdd,
    MoneyTable
  }
}
</script>

<style lang="scss" scoped>
.add {
  width: 30%;
  float: left;
}
</style>
