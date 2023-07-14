<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "Message",
  data() {
    return {
      store,
      name: "",
      surname: "",
      email: "",
      request: "",
      messageSend: false,
      loading: false,
    };
  },
  methods: {
    openModal() {
      const myModal = document.getElementById("myModal");
      const myInput = document.getElementById("myInput");

      myModal.addEventListener("shown.bs.modal", () => {
        myInput.focus();
      });
    },
    getMessage() {
      this.loading = true;
      const id = this.$route.params.id;
      const data = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        request: this.request,
        user_id: id,
      };
      axios
        .post(`${store.apiUrl}/api/messages`, data)
        .then((resp) => {
          console.log(resp);
          (this.name = ""),
            (this.surname = ""),
            (this.email = ""),
            (this.request = "");
        })
        .finally(() => {
          this.loading = false;
        });
      this.messageSend = true;
    },
  },
};
</script>

<template>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    data-bs-whatever="@mdo"
  >
    Contattaci
  </button>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Nuovo messaggio
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="getMessage()">
            <div class="mb-3">
              <label for="name" class="col-form-label">Nome</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="surname" class="col-form-label">Cognome</label>
              <input
                type="text"
                class="form-control"
                id="surname"
                v-model="surname"
                required
              />
            </div>
            <div class="mb-3">
              <label for="request" class="col-form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="request"
                v-model="email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="message" class="col-form-label"
                >Scrivi il tuo messaggio</label
              >
              <textarea
                class="form-control"
                id="message"
                required
                v-model="request"
              ></textarea>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Annulla
              </button>
              <button type="submit" class="btn btn-primary">
                Invia messaggio
              </button>
            </div>
          </form>
          <div v-if="loading">Sto inviando ...</div>
        </div>
        <div class="my-3" v-if="!loading && messageSend">
          Messaggio inviato correttamente
        </div>
      </div>
    </div>
  </div>
</template>
