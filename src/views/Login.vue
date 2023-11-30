<template>
    <div class="container pt-3" align="center">
        <form @submit="login" method="post">
            <h2>Sign in</h2>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div class="form-group pt-2 pb-2">
                    <input type="text" class="form-control" id="login" placeholder="Login" v-model="request.login">
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div class="form-group pt-2 pb-2">
                    <input type="password" class="form-control" id="password" placeholder="Password" v-model="request.password">
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <button class="btn btn-primary mt-3 w-100" type="sumbit">Сохранить</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            request: {
                login: null,
                password: null
            }
        }
    },
    methods: {
        login(e) {
            e.preventDefault();
            console.log("dd");
            if (!this.request.login) {
                return;
            }
            if (!this.request.password) {
                return;
            }

            axios.post("/Auth/Login", {
                login: this.request.login,
                password: this.request.password
            })
            .then(response => {
                if (response.data && response.data.token) {
                    localStorage.setItem('jwtToken', response.data.token);
                    this.$router.push('/');
                }
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
        }
    }
}
</script>