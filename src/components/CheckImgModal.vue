<!-- Modal.vue -->

<template>
  <div class="modal fade" :class="{ show: showModal }" @click="closeModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <img :src="currentObj?.url" class="modal-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CheckImgModal",
  computed: {
    ...mapState(["showModal", "currentObj"]),
  },
  methods: {
    closeModal() {
      this.$store.dispatch("setModal", { show: false });
    },
  },
};
</script>
<style lang="scss" scoped>
.modal {
  display: none;
  background: rgba(0, 0, 0, 0.6);
  &.show {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-img {
    width: 100%;
    height: 100%;
  }
}
</style>
