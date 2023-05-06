<template>
  <div
    id="carouselExampleInterval"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img
          src="../assets/banner1.jpg"
          class="d-block w-100 grayscale-image"
          alt="..."
        />
        <div
          class="carousel-overlay d-flex flex-column justify-content-center align-items-center"
        >
          <div
            class="banner1-text1 text-white fw-bolder animate__animated animate__fadeInUp animate__delay-1s"
          >
            專享訂製、極致體驗
          </div>
          <h1
            class="banner1-text2 text-white fw-bolder animate__animated animate__fadeInUp animate__delay-2s"
          >
            酷碼團隊不斷創新研發
          </h1>
          <h2
            class="banner1-text3 text-white fw-bolder animate__animated animate__fadeInUp animate__delay-2s"
          >
            打造你無可取代的專屬網頁平台
          </h2>
          <div
            class="banner1-text4 text-white fw-bolder animate__animated animate__fadeInUp animate__delay-2s"
          >
            全方位的视觉层次 多样化的素材展现 触发视觉最深层的享受
          </div>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="10000">
        <img
          src="../assets/banner2.jpg"
          class="d-block w-100 grayscale-image"
          alt="..."
        />
        <div
          class="carousel-overlay d-flex flex-column justify-content-center align-items-center"
        >
          <h1
            class="banner2-text1 text-white fw-bolder animate__animated animate__fadeInUp animate__delay-1s"
          >
            卓越品質、歷久不衰
          </h1>
          <h1
            class="banner2-text2 text-white fw-bolder animate__animated animate__fadeInUp animate__delay-1s"
          >
            讓經營成為享受
          </h1>
          <h6
            class="banner2-text3 text-white fw-bolder animate__animated animate__fadeInUp animate__delay-1s"
          >
            酷碼期待與您合作
          </h6>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "HomeCarousel",
};
</script>
<style lang="scss" scoped>
.carousel-item {
  position: relative;
  .carousel-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .banner1-text1 {
      width: 300px;
      background: rgba(147, 112, 219, 30%);
      padding: 10px 25px;
      border-radius: 100px 100px 100px 20px;
      font-style: italic;
      letter-spacing: 10px;
      white-space: nowrap;
      margin-bottom: 25px;
    }
    .banner1-text2 {
      white-space: nowrap;
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .banner1-text3 {
      white-space: nowrap;
      margin-bottom: 50px;
    }
    .banner1-text4 {
      white-space: nowrap;
    }
    .banner2-text1 {
      white-space: nowrap;
    }
    .banner2-text2 {
      white-space: nowrap;
      margin-bottom: 30px;
    }
    .banner2-text3 {
      white-space: nowrap;
    }
  }

  .grayscale-image {
    filter: grayscale(100%);
  }
}
</style>
