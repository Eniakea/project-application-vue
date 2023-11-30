<template>
    <div class="col-12 pt-3 pb-3">
        <div class="m-1" align="end">
            <router-link class="btn btn-primary" to="/project/create">Добавить проект</router-link>
        </div>
        <div class="d-flex flex-wrap">
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12"
                v-for="p in projects" 
                :key="p.Id"
            >
                <div class="m-1">
                    <router-link class="text-decoration-none"
                        :to="{ path: '/project/' + p.Id }"
                    >
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{{ p.Name }}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{{ p.Description }}</h6>
                                <p>amount of employees</p>
                                <div class="d-flex justify-content-between">
                                    <span>manager</span>
                                    <span>{{ p.CreateDate.toLocaleString() }}</span>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            projects: []
        }
    },
    mounted() {
        this.get_projects();
    },
    methods: {
        get_projects() {
            axios.get("/Project/get")
            .then(response => {
                this.projects = response.data.projects;
                console.log(response.data.projects);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
        }
    }
}
</script>