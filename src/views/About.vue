<template>
  <div class="about">
    <h1>ระบบบันทึกรายรับรายจ่าย</h1>
    <money-add></money-add>
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

<style>

</style>