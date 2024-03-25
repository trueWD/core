<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h6 class="card-title mb-0" v-if="$can(['create user'])">Vue 3 Chat Uygulaması Yunus</h6>
          </div>
          <div class="card-body">
           
            <div>
              <h1>Vue 3 Chat Uygulaması</h1>
              <div class="chat-container">
                <div class="chat-messages" ref="chatMessages">
                  <div v-for="(message, index) in messages" :key="index" class="message">
                    <span class="user">{{ message.user }}:</span>
                    <span class="text">{{ message.text }}</span>
                  </div>
                </div>
                <div class="chat-input">
                  <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Mesajınızı yazın..." />
                  <button @click="sendMessage">Gönder</button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header.vue";
import { ref, onMounted, watch } from 'vue';
import Service from '@/Utils/Service.js';
import { toast } from 'vue3-toastify';
import { appStore } from "@/stores/App";

import router from '@/routes/index.js';


export default {
  name: "usersList",
  components: {
    Layout,
    PageHeader,
  },
  setup() {
    const {newAxios} =  Service()
    const title = ref("Kullanıcı Yönetimi");
    const items = ref([
      {
          text: "Pages",
          href: "/",
      },
      {
          text: "Starter",
          active: true,
      },
    ]);
    const store = appStore();


    const messages = ref([]);
    const newMessage = ref('');
    const chatMessages = ref(null);

    const scrollToBottom = () => {
      chatMessages.value.scrollTop = chatMessages.value.scrollHeight;
    };

    onMounted(() => {
      scrollToBottom();
    });

    watch(messages, () => {
      scrollToBottom();
    });

    const sendMessage = () => {
      if (newMessage.value.trim() === '') return;

      messages.value.push({ user: 'Ben', text: newMessage.value });
      newMessage.value = '';
    };
    


    return {
      title,
      items,
      store,  
      messages,
      newMessage,
      sendMessage,
      chatMessages,
    };
  },
};
</script>

  
<style scoped>
.chat-container {
width: 300px;
margin: 0 auto;
border: 1px solid #ccc;
padding: 10px;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.chat-messages {
max-height: 200px;
overflow-y: auto;
}

.message {
margin-bottom: 10px;
}

.user {
font-weight: bold;
margin-right: 5px;
}

.chat-input {
display: flex;
margin-top: 10px;
}

input[type="text"] {
flex: 1;
padding: 5px;
border: 1px solid #ccc;
border-radius: 3px;
outline: none;
}

button {
padding: 5px 10px;
background-color: #007bff;
color: #fff;
border: none;
border-radius: 3px;
cursor: pointer;
margin-left: 5px;
}

button:hover {
background-color: #0056b3;
}
</style>
