<template>
  <div id="app">
    <h1 v-text="msg"></h1>
    <input type="text" v-model="inputBuff" @keyup.enter="addItem"/>
    <ul>
    	<li v-for="item in items" :class="{redColor:item.isClick}" @click="turnRed(item)">
    		{{item.name}}
    	</li>
    </ul>
  </div>
</template>

<script>
import Storage from './localstorage'

export default {
  data () {
  	return {
  		msg:'input name and mark who is student',
  		items:Storage.fetch(),//获取存在 storage 里面的键值对
  		inputBuff:''
  	}
  },
  components:{

  },
  methods:{
  	turnRed: function (item) {
  		//逆反布尔值
  		item.isClick = !item.isClick;
  	},
  	addItem:function () {
  		this.items.push({
  			name : this.inputBuff,
  			isClick : false
  		});
  		//清空文本栏
  		this.inputBuff = null;
  	}
  },
  watch:{
  	items:{
	  	 handler: function (items) {
	      Storage.save(items);//监控li变化，将新增的值存入 sessionStorage 里
	    },
	  	deep:true				
  	}
  }
}
</script>

<style>
.redColor {
	color: red;
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
