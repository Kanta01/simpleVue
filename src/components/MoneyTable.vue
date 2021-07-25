<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>วัน เดือน ปี</th>
          <th>รายการ</th>
          <th>รายรับ (บาท)</th>
          <th>รายจ่าย (บาท)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="money in moneys" :key="money.type">
          <td>{{ money.date }}</td>
          <td>{{ money.detail }}</td>
          <td v-if="money.type === 'income'">{{ money.amount }}</td>
          <td v-if="money.type === 'outcome'">0</td>
          <td v-if="money.type === 'income'">0</td>
          <td v-if="money.type === 'outcome'">{{ money.amount }}</td>
        </tr>
        <tr>
          <td>รวม</td>
          <td></td>
          <td>{{ totalIncome }}</td>
          <td>{{ totalOutcome }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import MoneyStore from '@/store/index'
export default {
  data() {
    return{
      moneys: [],
      totalIncome: [],
      totalOutcome: []
    }
  },
  created() {
    this.fetchMoney()
  },
  methods: {
    fetchMoney() {
      this.moneys = MoneyStore.getters.moneys
      this.totalIncome = MoneyStore.getters.totalIncome
      this.totalOutcome = MoneyStore.getters.totalOutcome
    }
  }
}
</script>

<style>

</style>