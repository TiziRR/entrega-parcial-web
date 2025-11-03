document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formUsuario");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      company: document.getElementById("company").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
      source: document.getElementById("source").value,
    };

    try {
      const res = await fetch("http://localhost:3000/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoUsuario),
      });

      if (!res.ok) throw new Error("Error al enviar usuario");

      console.log("✅ Usuario enviado con éxito");
      form.reset();

      alert("Usuario agregado correctamente!");
    } catch (error) {
      console.error("Error al enviar usuario:", error);
      alert("Hubo un error al enviar el formulario");
    }
  });
});
