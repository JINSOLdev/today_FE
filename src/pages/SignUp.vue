<template>
    <div class="signup-container">
        <h2>회원가입</h2>
        <form @submit.prevent="handleSignUp">
            <input v-model="name" type="text" placeholder="이름" required />
            <input v-model="email" type="email" placeholder="이메일" required />
            <input v-model="password" type="password" placeholder="비밀번호" required />
            <button type="submit">회원가입</button>
        </form>
        <p>
            이미 계정이 있으신가요?
            <router-link to="/login">로그인</router-link>
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { signUp } from '@/api/auth.js';

const name = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();

const handleSignUp = async () => {
    // console.log('회원가입 시도:', email.value, password.value);
    try {
        await signUp({ name: name.value, email: email.value, password: password.value });
        alert('회원가입 성공🎉 로그인 페이지로 이동합니다.');
        router.push('/login');
    } catch (err) {
        alert('회원가입 실패:' + err.response?.data?.message || err.message);
    }
};
</script>

<style lang="scss" scoped>
.signup-container {
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
