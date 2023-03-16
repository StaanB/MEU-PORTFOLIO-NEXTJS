import emailjs from "@emailjs/browser";

export function verifyInputs() {
  const nome = document.getElementById("name") as HTMLInputElement;
  const spanNome = document.getElementById("span-nome") as HTMLInputElement;

  const email = document.getElementById("email") as HTMLInputElement;
  const spanEmail = document.getElementById("span-email") as HTMLInputElement;
  const spanEmail2 = document.getElementById("span-email2") as HTMLInputElement;

  const message = document.getElementById("message") as HTMLInputElement;
  const spanMessage = document.getElementById(
    "span-message"
  ) as HTMLInputElement;
  const spanMessage2 = document.getElementById(
    "span-message2"
  ) as HTMLInputElement;

  let nameCheck = false;
  let emailCheck = false;
  let messageCheck = false;

  // Verificando o campo nome
  if (nome.value === "") {
    nome.classList.add("vazio");
    spanNome.classList.remove("hidden");
    nameCheck = false;
  } else {
    nome.classList.remove("vazio");
    spanNome.classList.add("hidden");
    nameCheck = true;
  }

  //   Verficando o campo email
  if (email.value === "") {
    email.classList.add("vazio");
    spanEmail.classList.remove("hidden");
    emailCheck = false;
  } else if (!email.value.includes("@") && !email.value.includes(".")) {
    email.classList.add("vazio");
    spanEmail.classList.add("hidden");
    spanEmail2.classList.remove("hidden");
    emailCheck = false;
  } else if (email.value.includes("@") && !email.value.includes(".")) {
    email.classList.add("vazio");
    spanEmail.classList.add("hidden");
    spanEmail2.classList.remove("hidden");
    emailCheck = false;
  } else if (!email.value.includes("@") && email.value.includes(".")) {
    email.classList.add("vazio");
    spanEmail.classList.add("hidden");
    spanEmail2.classList.remove("hidden");
    emailCheck = false;
  } else {
    email.classList.remove("vazio");
    spanEmail.classList.add("hidden");
    spanEmail2.classList.add("hidden");
    emailCheck = true;
  }

  //   Verficando o campo mensagem
  if (message.value === "") {
    message.classList.add("vazio");
    spanMessage.classList.remove("hidden");
    messageCheck = false;
  } else if (message.value.length < 15) {
    message.classList.add("vazio");
    spanMessage.classList.add("hidden");
    spanMessage2.classList.remove("hidden");
    messageCheck = false;
  } else {
    message.classList.remove("vazio");
    spanMessage.classList.add("hidden");
    spanMessage2.classList.add("hidden");
    messageCheck = true;
  }

  if (nameCheck && emailCheck && messageCheck) {
    const templateParams = {
      from_name: nome.value,
      email: email.value,
      message: message.value,
    };

    emailjs
      .send(
        "service_tgik2sj",
        "template_3q4r0m2",
        templateParams,
        "VemyZsOKi3sIef0NR"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO ", response.status, response.text);
          nome.value = "";
          email.value = "";
          message.value = "";
          alert("Seu email foi enviado com sucesso.");
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  }
}
