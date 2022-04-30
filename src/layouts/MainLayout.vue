<template>
  <div class="app-main-layout">
    <NavBar @click="isOpen = !isOpen"></NavBar>
    <SideBar v-model="isOpen"></SideBar>
    <main class="app-content" :class="{ full: !isOpen }">
      <div class="app-page">
        <router-view></router-view>
      </div>
    </main>
    <div class="fixed-action-btn">
      <router-link to="/record" class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/app/SideBar";
import NavBar from "@/components/app/NavBar";

export default {
  name: "MainLayout",
  components: { NavBar, SideBar },
  data() {
    return {
      isOpen: true,
    };
  },
};
</script>
