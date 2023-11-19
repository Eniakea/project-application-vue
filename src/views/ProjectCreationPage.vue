<template>
    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <form @submit="create_project" method="post">
            <div class="form-group">
                <label for="project_name">Name</label>
                <input type="text" class="form-control" id="project_name" placeholder="Name" v-model="projectRequest.Name">
                <small class="form-text text-muted">Use correct Name.</small>
            </div>
            <div class="form-group">
                <label for="project_desc">Description</label>
                <textarea class="form-control" id="project_desc" rows="3" placeholder="Description" v-model="projectRequest.Description"></textarea>
            </div>
            <button class="btn btn-primary mt-3" type="sumbit">Сохранить</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            projectRequest: {
                Name: null,
                Description: null
            }
        }
    },
    methods: {
        create_project(e) {
            e.preventDefault();
            axios.post("/Project/post/", this.projectRequest )
            .then(response => {
                console.log(response);
                //return to Home
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
        }
    }
}
</script>