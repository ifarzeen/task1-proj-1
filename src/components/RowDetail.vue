<template>
    <div>
        <div class="card">
           <b> Author:</b> {{" "+author}}
            <hr>
            <b>Title: </b>{{" "+title}}
        </div>
    </div>
</template>

<script>
export default {
    name:'Row-Detail',
    props:['author','title']
}
</script>

<style scoped>

</style>