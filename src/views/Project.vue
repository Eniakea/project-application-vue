<template>
    <div v-if="project">
        <h1>{{ project.Name }}</h1>
        <h3>{{ project.Description }}</h3>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            projectId: null,
            project: null,
        }
    },
    created() {
        this.projectId = this.$route.params.id;
    },
    mounted() {
        this.init_project();
    },
    methods: {
        init_project() {
            if (this.projectId) {
                axios.get("/Project/get/" + this.projectId)
                .then(response => {
                    this.project = response.data.project;
                    console.log(response.data.project);
                })
                .catch(error => {
                    console.error('Ошибка при получении данных:', error);
                });
            }
        }
    }
};
</script>