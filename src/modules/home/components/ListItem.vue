<template>
  <li class="text-base font-medium mt-2 flex items-center">
    <img src="https://geeko.netlify.app/img/icons/check.png" class="mr-3" />
    {{text}}
  </li>
</template>

<script>
export default {
    name:"ListItem",
    props: {
        text: {
            type: String
        }
    }
};
</script>

<style></style>
