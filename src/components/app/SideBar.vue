<template>
  <ul class="sidenav app-sidenav" :class="{ open: value }">
    <li v-for="link in links" :key="link.url">
      <router-link custom v-slot="{ href, navigate }" :to="link.url">
        <a @click="navigate" :href="href">{{ link.title }}</a>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SideBar",
  props: ["value"],
  data() {
    return {
      links: [
        {
          title: "Счет",
          url: "/",
        },
        {
          title: "История",
          url: "/history",
        },
        {
          title: "Планирование",
          url: "/planning",
        },
        {
          title: "Новая запись",
          url: "/detail",
        },
        {
          title: "Категории",
          url: "/categories",
        },
      ],
    };
  },
};
</script>
