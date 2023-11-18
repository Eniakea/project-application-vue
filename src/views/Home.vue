<template>
    <div class="container">
        <div>
            <li v-for="phone in phones">
                {{phone.Name}}
            </li>
        </div>
        <button 
            class="btn btn-primary"
            @click="click"

        >Click</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            phones: []
        }
    },
    methods: {
        click() {
            console.log(axios)
            const apiUrl = 'https://localhost:7046/Phone/get';

            axios.get(apiUrl)
            .then(response => {
                console.log(response);
                this.phones = response.data;
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
        }
    }
}
</script>