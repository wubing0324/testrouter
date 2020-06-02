<template>
  <div class="Bread">
    <h1>{{ $route.meta.title }}</h1>
    <ul class="bread">
      <li v-for="route in routeList" :key="route.title" @click="clear"><router-link :to="route.path">{{route.title}}</router-link></li>
    </ul>
    <router-link v-for="p in last.childrenPath" :to="p"><div>{{p}}</div></router-link>
  </div>
</template>

<script>
import { routes } from '../router/index'
function getMap(routes) {
  let map = {}
  function getMapItem(routes) {
    if (!routes) return
    routes.forEach(item => {
      getMapItem(item.children)
      if (item.meta) {
        map[item.meta.id] = item
      }
    })
  }
  getMapItem(routes)
  return map
}
let map = getMap(routes)
const getBread = function(id, map, arr) {
  if(!id) return
  for (var i in map) {
    let childrenPath = []
    if (map[i].meta.id === id) {
      if (map[i].children) {
        map[i].children.forEach(route => {
          childrenPath.push(route.path)
        })
      }
      arr.unshift({
        path: map[i].path,
        title: map[i].meta.title,
        parentId: map[i].meta.parentId,
        childrenPath: childrenPath
      })
      getBread(map[i].meta.parentId, map, arr)
    }
  }
}


export default {
  name: 'Bread',
  data () {
    return {
      routeList: [],
      last: {},
      map: map
    }
  },
  watch: {
    '$route': {
      handler(val) {
        this.clear()
      },
      deep: true
    }
  },
  methods: {
    clear() {
      this.routeList = []
      getBread(this.$route.meta.id, map, this.routeList)
      this.last = this.routeList[this.routeList.length - 1]
      console.log(this.last)
    }
  },
  mounted() {
    getBread(this.$route.meta.id, map, this.routeList)
    this.last = this.routeList[this.routeList.length - 1]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bread li {
  float: left;
  width: 100px;
}



h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
