<template>
  <nav-bar />
  <h1>About Us Page</h1>
  <div class="container mt-4">
    <div class="container-fluid">
      <div class="card mb-5">
        <div class="row no-gutters">
          <div class="col-auto m-2">
            <img
              src="../assets/self.jpg"
              alt="an image of a person"
              class="rounded"
              width="200"
              height="200"
            >
          </div>

          <div class="col">
            <div class="card-block px-2 mt-3 pb-3">
              <h5 class="card-title">
                Contributor 1
              </h5>
              <hr>
              <p class="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dolorum, deleniti nulla earum delectus
                eaque? Et, nam reprehenderit maiores quae numquam,
                ipsa ducimus debitis consectetur, similique eveniet officiis suscipit ad.o
              </p>
              <a href="#" class="btn me-4 gradient-purple text-white"> <i class="bi bi-github" style="color: white;" /> GitHub</a>
              <a href="#" class="btn gradient-purple text-white"> <i class="bi bi-linkedin" style="color: white;" /> LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-5">
        <div class="row no-gutters">
          <div class="col-auto m-2">
            <img
              src="../assets/self.jpg"
              alt="an image of a person"
              class="rounded"
              width="200"
              height="200"
            >
          </div>

          <div class="col">
            <div class="card-block px-2 mt-3 pb-3">
              <h5 class="card-title">
                Contributor 2
              </h5>
              <hr>
              <p class="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dolorum, deleniti nulla earum delectus
                eaque? Et, nam reprehenderit maiores quae numquam,
                ipsa ducimus debitis consectetur, similique eveniet officiis suscipit ad.o
              </p>
              <a href="#" class="btn me-4 gradient-purple text-white"> <i class="bi bi-github" style="color: white;" /> GitHub</a>
              <a href="#" class="btn gradient-purple text-white"> <i class="bi bi-linkedin" style="color: white;" /> LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav-footer />
</template>

<style>
.gradient-purple {
  /* fallback for old browsers */
  background: #667eea;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to bottom, rgba(102,126,234,1), rgba(118,75,162,1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to bottom, rgba(102,126,234,1), rgba(118,75,162,1))
}
</style>