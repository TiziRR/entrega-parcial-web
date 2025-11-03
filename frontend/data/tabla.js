document.addEventListener("DOMContentLoaded", async () => {
  const tabla = document.getElementById("userTableBody");

  if (!tabla) return;

  async function cargarUsuarios() {
    try {
      const res = await fetch("http://localhost:3000/api/usuarios");
      if (!res.ok) throw new Error("Error al obtener usuarios");

      const data = await res.json();

      tabla.innerHTML = data
        .map(
          (u) => `
          <tr>
            <td>${u.name}</td>
            <td>${u.email}</td>
            <td>${u.company}</td>
            <td>${u.phone}</td>
            <td>${u.message}</td>
            <td>${u.source}</td>
          </tr>`
        )
        .join("");
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
      tabla.innerHTML = `<tr><td colspan="6">Error al cargar usuarios</td></tr>`;
    }
  }

  await cargarUsuarios();
});
