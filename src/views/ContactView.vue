<template>
  <div class="contact p-4">
    <div class="hint-box bg-secondary bg-opacity-10 px-5 pt-2 pb-4 mb-3">
      <div class="fw-bolder text-secondary text-center">
        专业是我们的基础、质感是我们的坚持、聆听您的需求是我们的荣幸，酷码在此期待与您共同发
      </div>
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label fw-bolder"
        >姓名(必填)</label
      >
      <input type="text" class="form-control" id="formGroupExampleInput" />
    </div>
    <div class="mb-3">
      <label for="inputState" class="form-label fw-bolder">稱謂</label>
      <select id="inputState" class="form-select">
        <option selected>先生</option>
        <option>小姐</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label fw-bolder"
        >電子郵件(必填)</label
      >
      <input type="text" class="form-control" id="formGroupExampleInput2" />
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput3" class="form-label fw-bolder"
        >主旨</label
      >
      <input type="text" class="form-control" id="formGroupExampleInput3" />
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput4" class="form-label fw-bolder"
        >留言</label
      >
      <textarea
        cols="40"
        rows="10"
        class="form-control"
        id="formGroupExampleInput4"
      ></textarea>
    </div>
    <button type="button" class="btn text-white btn-purple w-100">傳送</button>
  </div>
</template>
<script>
export default {
  name: "ContactView",
};
</script>
<style lang="scss" scoped>
.form-control,
.form-select {
  height: 50px;
}
.btn-purple {
  color: #fff;
  background: #8751a0;
  border-radius: 100px;
  height: 50px;
}
</style>
