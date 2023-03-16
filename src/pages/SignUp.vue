<template>
  <nav-bar />

  <div class="bs_create_account_layout5 position-relative p-5">
    <div class="container-fluid px-0">
      <div class="col-lg-5 mx-auto">
        <div
          class="d-flex justify-center flex-column align-items-center bg-dark-subtle border-0 rounded p-5 bs_signup_content"
        >
          <p class="text-secondary h6 bs_fw-300 pb-3 text-white">
            Crea una Cuenta
          </p>
          <form class="py-3 pt-lg-3 w-100 md-mx-w-550" @submit.prevent="createAccount">
            <div class="mb-3">
              <input
                id="signup-5-name"
                v-model="name"
                type="text"
                class="form-control text-white"
                placeholder="Nombre"
                aria-describedby="infotext"
                required
              >
            </div>
            <div class="mb-3">
              <input
                id="signup-5-Email"
                v-model="email"
                type="email"
                class="form-control text-white"
                placeholder="Correo Electrónico"
                required
              >
            </div>
            <div class="mb-3">
              <input
                id="signup-5-Password"
                v-model="password"
                type="password"
                class="form-control text-white"
                placeholder="Contraseña"
                required
              >
            </div>
            <button type="submit" class="btn btn-primary w-100">
              Crea Cuenta
            </button>
            <p class="pt-3 small mb-0" style="color: lightgray;">
              Ya tienes una cuenta? <a href="#" class="text-decoration-none">Iniciar sesión</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
  <nav-footer />
</template>

<script>
export default {
  data() {
    return {
      name     : "",
      email    : "",
      password : ""
    };
  },
  methods: {
    createAccount() {
      console.log("name ->", this.name);
      console.log("email ->", this.email);
      console.log("password ->", this.password);

      alert("Account has been created!");
    }
  }
};
</script>