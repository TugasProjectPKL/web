<script setup lang="ts">
import logo from "@/assets/materio/images/logo.svg?raw";

const form = ref({
  username: '',
  email: '',
  password: '',
  ulangi_password: '',
  privacyPolicies: false,
});

const isPasswordVisible = ref(false)
</script>

<template>
    <v-container>    
        <v-row justify="center">
            <v-col cols="12" sm="1" md="2" lg="2">

            </v-col>
            <v-col cols="12" sm="6" md="6" lg="6">
                <VCard class="auth-card pa-4 pt-7" max-width="448">
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <div v-html="logo" />
          </div>
        </template>

        <VCardTitle class="font-weight-semibold text-2xl text-uppercase">
          FORGOT PASSWORD
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <p class="mb-0">
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="() => {}">
          <VRow>
            <!-- Username -->
            <VCol cols="12">
              <VTextField
                v-model="form.username"
                label="Username"
              />
            </VCol>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                label="Email"
                type="email"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <VTextField
                v-model="form.ulangi_password"
                label="Ulangi Password"
                :type="isPasswordVisible ? 'text' : 'ulangi password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />
              <div class="d-flex align-center mt-1 mb-4">
                <VCheckbox v-model="form.ulangi_password" label="Remember me" />
              </div>

              <VBtn
                block
                type="submit"
                to="/"
              >
                Submit
              </VBtn>
            </VCol>

            <VCol
              cols="12"
              class="d-flex align-center"
            >
              <VDivider />
              <span class="mx-4">or</span>
              <VDivider />
            </VCol>

            <!-- auth providers -->
            <VCol
              cols="12"
              class="text-center"
            >
              <AuthProvider />
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
    </v-col>
        <v-col cols="12" sm="1" md="2" lg="2">
                
        </v-col>
    </v-row>
</v-container>
</template>

<style lang="scss">
@use "@/assets/scss/pages/page-auth.scss";

.layout-wrapper.layout-blank{
    flex-direction: column;
}
</style>