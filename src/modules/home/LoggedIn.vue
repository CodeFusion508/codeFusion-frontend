<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-12" style="margin-top: 20px;">
          <div class="row col-sm-12">
            <div class="col-sm-12 mb-3">
              Weekly Exp
            </div>
            <div class="col-sm-12 col-12">
              <div class="row">
                <div class="col-sm col-6">
                  <div class="circle-wrap">
                    <div class="circle">
                      <div class="mask half">
                        <div class="fill" :style="{ ...getPercentProgress }" />
                      </div>
                      <div class="inside-circle" />
                    </div>
                  </div>
                </div>
                <div class="col-sm-8 col-6 d-flex align-items-center" style="height: 150px;">
                  <span class="h2"> {{ fullPercent.progress }} / {{ fullPercent.full }}</span>
                </div>
              </div>
            </div>

            <div class="col-sm-12 mt-3">
              Echale ganas, ya casi acompletas tu semana
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-12 row justify-content-center d-flex align-items-center content-progress-bar">
          <div class="col-sm-12 text-center">
            Total Exp
          </div>
          <div class="col-sm-12 d-flex justify-content-center">
            <div class="progress rotate-progress-bar">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 75%;"
                aria-valuenow="15"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
        </div>

        <div class="card" style="width: 100%; margin-top: 25px; margin-bottom: 75px;">
          <div class="image-presentation" />
          <div class="card-body">
            <h5 class="card-title">
              Card title
            </h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p>
            <div class="d-flex justify-content-center">
              <div class="col-sm-6 col-12">
                <button class="btn btn-primary form-control">
                  Leer la historia
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data: () => {
    return {
      fullPercent: {
        full     : 100,
        progress : 75
      }
    };
  },
  computed: {
    getPercentProgress() {
      const percentFull = (this.fullPercent.progress * 100) / this.fullPercent.full;
      const percentPixel = 150 * (percentFull / 100);
      return { clip: `rect(0px, ${percentPixel}px, 150px, 0px)` };
    }
  }
};
</script>

<style scoped>
.rotate-progress-bar {
  width: 150px;
  transform: rotate(-90deg) !important;
  margin-bottom: 75px;
}

.content-progress-bar {
  height: 250px;
}

.circle-wrap .circle .mask,
.circle-wrap .circle .fill {
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
}

.mask .fill {
  clip: rect(0px, 0px, 150px, 0px);
  background-color: var(--bs-success);
}

.circle-wrap .inside-circle {
  width: 122px;
  height: 122px;
  border-radius: 50%;
  background: var(--bs-body-bg);
  line-height: 120px;
  text-align: center;
  margin-top: 14px;
  margin-left: 14px;
  color: var(-bs-success);
  position: absolute;
  z-index: 100;
  font-weight: 700;
  font-size: 2em;
}

.image-presentation {
  background-image: url('../../pages/assets/background.jpg');
  width: 100%;
  height: 350px;
  background-position: 0px 350px;
}
</style>