<template>
  <div class="about">
    <h1>Get data from Pinia</h1>
    <p>The count = {{ store.counter }}</p>
    <el-button @click="store.increment">Ajouter au compteur</el-button>
    <el-button @click="openModal">Open The Modal</el-button>
    <Modal v-model="isModalOpen" title="My J" :beforeClose="handleClose">
      <AboutSteps @closeModal="closeModal" />
    </Modal>
  </div>
</template>

<script setup>
  import Modal from "@/components/Common/Modal.vue"; // Components
  import AboutSteps from "@/components/About/AboutSteps.vue"; // Components
  import { useModal } from "@/components/Common/modal.js";
  import { useCounterStore } from "@/stores/counter"; //Store Data

  const { isModalOpen, openModal, closeModal } = useModal();

  const handleClose = () => {
    ElMessageBox({
      title: "Voulez-vous ignorer les modification ?",
      message: "Vos données ne seront pas enregistrés.",
      confirmButtonText: "Ignorer",
      showCancelButton: true,
      cancelButtonText: "Annuler",
      type: "warning",
      "confirm-button-class": "red",
    })
      .then(() => {
        closeModal();
        ElMessage.error("Configuration non sauvegardé");
      })
      .catch(() => {
        ElMessage({
          type: "info",
          message: "Fermeture annulé",
        });
      });
  };

  // Store
  const store = useCounterStore();
  store.counter = 50;
</script>
