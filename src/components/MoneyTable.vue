<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>วันที่</th>
          <th class="detail">รายการ</th>
          <th>รายรับ (บาท)</th>
          <th>รายจ่าย (บาท)</th>
          <th>คงเหลือ (บาท)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="money in moneys" :key="money.type">
          <td>{{ money.date }}</td>
          <td class="detail">{{ money.detail }}</td>
          <td v-if="money.type === 'income'">{{ money.amount }}</td>
          <td v-if="money.type === 'outcome'">0</td>
          <td v-if="money.type === 'income'">0</td>
          <td v-if="money.type === 'outcome'">{{ money.amount }}</td>
        </tr>
        <tr>
          <td>รวม</td>
          <td class="detail">{{ fetchMoney() }}</td>
          <td>{{ totalIncome }}</td>
          <td>{{ totalOutcome }}</td>
          <td>{{ totalIncome-totalOutcome }}</td>
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

<style lang="scss" scoped>
table {
  border: 1px solid #42b983;
  border-collapse: collapse;
  width: 65%;
}
th {
  background-color: #42b983;
  border-bottom: 1px solid #42b983;
  color: whitesmoke;
  font-weight: normal;
  font-size: 1.1em;
}
td {
  border-top: 1px solid #42b983;
}
.detail {
  width: 50%;
}
</style>