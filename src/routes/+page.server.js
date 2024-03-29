import axios from "axios";

const url = "http://localhost:3000/clients"

export async function load() {
  const cli = await axios.get(url).then(resp => resp.data)
  return {
    clientes: cli
  }
}