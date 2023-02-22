const API_URL = "http://localhost:8081";

const state = {};

const mutations = {
  async getPlayerData(_, { id }) {
    return await fetch(API_URL + "/player/" + id, {
      method: "GET",
    }).then((r) => r.json());
  },
  async updatePlayerData(_, { id, ...data }) {
    return await fetch(API_URL + "/player/" + id, {
      method: "PATCH",
      body: data,
    }).then((r) => r.json());
  },
  async deletePlayer(_, { id }) {
    return await fetch(API_URL + "/player/" + id, {
      method: "DELETE",
    }).then((r) => r.json());
  },
};

const computed = {
  increment(current, newValue = current) {
    typeof current.value === "string" &&
      (newValue = String(parseInt(current.value) + 1));
    typeof current.value === "number" &&
      (newValue = parseInt(current.value) + 1);
    current.value = newValue;
  },
};

export { state, computed, mutations };
