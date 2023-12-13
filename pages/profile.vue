<template>
    <div>
      <h1>Halaman Profil</h1>
      <div v-if="user">
        <img :src="user.profilePic || '@/assets/default-profile-pic.jpg'" alt="Profile Picture" />
        <input type="file" @change="onFileChange" accept="image/*" />
        <form @submit.prevent="updateProfile">
          <label for="name">Nama:</label>
          <input type="text" id="name" v-model="userData.name" />
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="userData.email" />
          <button type="submit">Simpan</button>
        </form>
      </div>
      <div v-else>
        <p>Silakan masuk untuk melihat profil.</p>
        <NuxtLink to="/auth/login">Masuk</NuxtLink>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: null,
        userData: {
          name: '',
          email: '',
          profilePic: null
        }
      };
    },
    async fetch() {
      // Ambil data profil pengguna dari API atau database
      // Ganti dengan cara mengambil data profil pengguna dari Supabase
      // Contoh penggunaan: this.user = await supabaseClient.auth.user()
      this.user = {
        name: 'John Doe',
        email: 'john@example.com',
        profilePic: 'URL_profil_gambar'
        // Informasi profil lainnya
      };
      // Menyalin data profil ke userData untuk mengedit
      this.userData = { ...this.user };
    },
    methods: {
      async updateProfile() {
        // Implementasi untuk menyimpan perubahan data profil ke database
        // Contoh penggunaan: await supabaseClient
        //   .from('users')
        //   .update(this.userData)
        //   .match({ id: this.user.id })
      },
      onFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.uploadProfilePic(file);
        }
      },
      async uploadProfilePic(file) {
        // Implementasi untuk mengunggah foto profil ke penyimpanan file (Supabase Storage)
        // Contoh penggunaan: const { data, error } = await supabaseClient
        //   .storage
        //   .from('profile-pictures')
        //   .upload(`profile_pictures/${this.user.id}`, file);
        // Jika berhasil, dapatkan URL gambar dari response data dan simpan ke this.userData.profilePic
        // this.userData.profilePic = data.url;
      }
    }
  };
  </script>
  