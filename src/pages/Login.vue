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
// 로그인 API 함수 나중에 연결 예정
const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = async () => {
    console.log('로그인 시도:', email.value, password.value);
    // 여기에 로그인 API 연결 예정
    alert('로그인 요청 완료(연결 예정)');
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
