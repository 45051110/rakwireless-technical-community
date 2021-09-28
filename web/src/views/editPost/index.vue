<template>
    <div class="container">
        hkhlhlhlh
    </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
export default {
    name: "EditPost",
    components: { Tinymce },
    data() {
        return { activeName: "first" };
    },
    handleClick(tab, event) {
        console.log(tab, event);
    }
};
</script>

<style scoped>
.container {
    width: calc(100vw - 100% + 1220px) !important;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 80px;
}
</style>
