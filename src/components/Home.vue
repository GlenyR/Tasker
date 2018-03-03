<template>
<div>
  <div class="waiting">
    Task List
  </div>
  <div>      
      <ul class="demo-list-two mdl-list">
        <li v-for="t in this.tasks" :key="t.id" class="mdl-list__item mdl-list__item--two-line">
         
            <span class="mdl-list__item-secondary-content status-indicator">
              <i class="material-icons">check_circle</i>
            </span>

            <span class="mdl-list__item-primary-content">
              <div class="mdl-layout__task">
                <div class="mdl-grid task-row">
                  <div class="mdl-cell--6-col mdl-cell--8-tablet mdl-cell--4-phone">
                        <span class="mdl-list__item-title">{{t.tl}}</span>
                        <!-- add content here -->
                  </div>
                </div>
                <div class="mdl-grid task-row">
                    <div class="mdl-cell--6-col mdl-cell--8-tablet mdl-cell--4-phone">
                      <p class="mdl-list__item-ds">{{t.ds}}</p>
                      <!-- also here -->
                      </div>
                </div>
               </div>
            </span>

            <span class="mdl-list__item-secondary-content">
              <span class="mdl-list__item-secondary-info">{{t.tm}}</span>
              <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
            </span>
         
        </li>
      </ul>
  </div>
    <router-link class="add-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored" to="/post">
      <i class="material-icons">add</i>
    </router-link>
</div>

</template>

<script>
import data from '../fake_data/data'
export default {
  methods: {
    displayDetails (id) {
      this.$router.push({name: 'detail', params: { id: id }})
    }
  },
  data () {
    return {
      'tasks': data.tasks
    }
  }
}
</script>

<style scoped>

.md-10 {
  font-size: 10px;
}
.status-indicator {
  width: 30px;
}

.task-row {
  height:13px ;
  padding: 1px; 
}

.mdl-layout__task {
  width: 100%;
  height: 100%;
}

.mdl-list__item-title {
    font-size: 12px; 
}

.mdl-list__item-ds {
    font-size: 10px;
    color: #999; 
}
.mdl-list__item--two-line {
   height: 50px;
   padding: 1px;
}
.mdl-chip {
  height: 12px;
  padding: 0px;
  margin: 0px;
  line-height:12px;
}
  .mdl-chip__text {
    color: #fff;
    font-size: 8px;
    font-weight: bold;
    padding: 0px;
    margin: 0px;
  }
</style>