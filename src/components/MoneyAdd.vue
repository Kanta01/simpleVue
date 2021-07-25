<template>
  <div>
    <div>
      <label for="date">วันที่</label>
      <input type="date" v-model="form.date">
    </div>
    <div>
      <label for="detail">รายละเอียด</label>
      <input type="text" v-model="form.detail">
    </div>
    <div>
      <label for="amount">จำนวนเงิน (บาท)</label>
      <input type="text" v-model="form.amount">
    </div>
    <button @click="addMoney('income')">เพิ่มรายรับ</button>
    <button @click="addMoney('outcome')">เพิ่มรายจ่าย</button>
  </div>
</template>

<script>
import MoneyStore from '@/store/index'
export default {
  data() {
    return {
      form: {
        date: '',
        detail: '',
        amount: ''
      }
    }
  },
  methods: {
    clearForm() {
      this.form = {
        date: '',
        detail: '',
        amount: ''
      }
    },
    addMoney(typeMoney) {
      let payload = {
        date: this.form.date,
        detail: this.form.detail,
        type: typeMoney,
        amount: parseInt(this.form.amount, 10)
      }
      MoneyStore.dispatch('addMoney', payload)
      this.clearForm()
    }
  }
}
</script>

<style>

</style>