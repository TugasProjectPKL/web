<script setup lang="ts">
import logo from "@/assets/materio/images/logo.svg?raw";

const form = ref({
  email: "",
  password: "",
  remember: false,
});

const isPasswordVisible = ref(false);
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
            Materio
          </VCardTitle>
        </VCardItem>

        <VCardText class="pt-2">
          <h5 class="text-h5 font-weight-semibold mb-1">
            Welcome to Materio! 👋🏻
          </h5>
          <p class="mb-0">
            Please sign-in to your account and start the adventure
          </p>
        </VCardText>

        <VCardText>
          <VForm @submit.prevent="() => {}">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <VTextField v-model="form.email" label="Email" type="email" />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <VTextField
                  v-model="form.password"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isPasswordVisible
                      ? 'mdi-eye-off-outline'
                      : 'mdi-eye-outline'
                  "
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <!-- remember me checkbox -->
                <div
                  class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4"
                >
                  <VCheckbox v-model="form.remember" label="Remember me" />

                  <a class="ms-2 mb-1" href="javascript:void(0)">
                    Forgot Password?
                  </a>
                </div>

                <!-- login button -->
                <VBtn block type="submit" to="/"> Login </VBtn>
              </VCol>

              <!-- create account -->
              <VCol cols="12" class="text-center text-base">
                <span>New on our platform?</span>
                <RouterLink class="text-primary ms-2" to="/register">
                  Create an account
                </RouterLink>
              </VCol>

              <VCol cols="12" class="d-flex align-center">
                <VDivider />
                <span class="mx-4">or</span>
                <VDivider />
              </VCol>

              <!-- auth providers -->
              <VCol cols="12" class="text-center">

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