<template>
    <div class="p-4">
        <h2 class="text-xl font-bold mb-4">마이페이지</h2>

        <section class="mb-6">
            <h3 class="text-lg font-semibold">내가 만든 약속</h3>
            <ul>
                <li v-for="event in myEvents" :key="event._id">
                    <p class="font-semibold text-lg">{{ event.title }}</p>
                    <p>🗓 {{ formatDate(event.datetime) }}</p>
                    <p>📍 {{ event.location }}</p>
                    <p>👥 {{ formatParticipants(event.participants) }}</p>
                </li>
            </ul>
        </section>

        <section class="mb-6">
            <h3 class="text-lg font-semibold">초대받은 약속</h3>
            <ul>
                <li v-for="event in invitedEvents" :key="event._id">
                    <p class="font-semibold text-lg">{{ event.title }}</p>
                    <p>🗓 {{ formatDate(event.datetime) }}</p>
                    <p>📍 {{ event.location }}</p>
                    <p>👥 참여자 {{ formatParticipants(event.participants) }}</p>
                </li>
            </ul>
        </section>

        <section class="mb-6">
            <h3 class="text-lg font-semibold">수락한 약속</h3>
            <ul>
                <li v-for="event in acceptedEvents" :key="event._id">
                    <p class="font-semibold text-lg">{{ event.title }}</p>
                    <p>🗓 {{ formatDate(event.datetime) }}</p>
                    <p>📍 {{ event.location }}</p>
                    <p>👥 {{ formatParticipants(event.participants) }}</p>
                </li>
            </ul>
        </section>

        <button @click="goToCreateEvent">➕ 약속 생성</button>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getMyEvents, getInvitedEvents, getAcceptedEvents } from '@/api/event.js';

const router = useRouter();

const myEvents = ref([]);
const invitedEvents = ref([]);
const acceptedEvents = ref([]);

const goToCreateEvent = () => {
    router.push('/create-event');
};

onMounted(async () => {
    try {
        myEvents.value = await getMyEvents();
        invitedEvents.value = await getInvitedEvents();
        acceptedEvents.value = await getAcceptedEvents();
    } catch (err) {
        console.log('마이페이지 데이터 로드 실패', err);
    }
});

const formatDate = (isoString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(isoString).toLocaleString('ko-RK', options);
};

const formatParticipants = (participants) => {
    if (!participants) {
        return '';
    } else {
        return participants.map((p) => `${p.user} (${translateStatus(p.status)})`).join(', ');
    }
};

const translateStatus = (status) => {
    switch (status) {
        case 'accepted':
            return '수락';
        case 'declined':
            return '거절';
        case 'pending':
            return '대기';

        default:
            return status;
    }
};
</script>

<style lang="scss" scoped></style>
