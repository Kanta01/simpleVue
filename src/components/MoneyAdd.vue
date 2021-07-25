<template>
  <div>
    <label for="date">วันที่</label><br>
    <input type="date" v-model="form.date"><br>
    <label for="detail">รายละเอียด</label><br>
    <input type="text" v-model="form.detail"><br>
    <label for="amount">จำนวนเงิน (บาท)</label><br>
    <input type="text" v-model="form.amount"><br>
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

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
label, input, button {
    margin-bottom: 10px;
}
button {
    margin: 5px;
    font-family: 'Itim', cursive;
    background-color: #42b983;
    font-size: 1em;
    border: none;
    color: whitesmoke;
    padding: 5px 10px;
    border-radius: 6px;
}
</style>