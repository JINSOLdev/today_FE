<template>
    <div class="login-container">
        <h2>로그인</h2>
        <form @submit.prevent="handleLogin">
            <input v-model="email" type="email" placeholder="이메일" required />
            <input v-model="password" type="password" placeholder="비밀번호" required />
            <button type="submit">로그인</button>
        </form>
        <p>
            아직 회원이 아니신가요?
            <router-link to="/Signup">회원가입</router-link>
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '@/api/auth.js';
import { useAuthStore } from '@/stores/auth.js';

const email = ref('');
const password = ref('');
const router = useRouter();
const authStore = useAuthStore();

const handleLogin = async () => {
    try {
        const data = await login({ email: email.value, password: password.value });
        // 토큰 저장 (백엔드에 요청 필요)
        localStorage.setItem('token', data.token);

        // pinia 스토어에 사용자 정보 저장
        authStore.setAuth({ token: data.token, user: data.user });

        alert('로그인 성공!');
        router.push('/mypage');
    } catch (err) {
        alert('로그인 실패:' + err.response?.data?.message || err.message);
    }
};
</script>

<style lang="scss" scoped>
.login-container {
    max-width: 400px;
    margin: 80px auto;
    padding: 24px;
    border: 1px solid #ccc;
    border-radius: 12px;
}

input {
    display: block;
    width: 95%;
    padding: 10px;
    margin-top: 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
}
button {
    margin-top: 20px;
    padding: 10px;
    width: 100%;
    background-color: #0ea5e9;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}
button:hover {
    background-color: #0284c7;
}
</style>
